import { ServerSideClientWrapper, toClient } from "@shroomlight/minecraft-protocol-wrapper";
import { PCChunk } from "prismarine-chunk";
import { Vec3 } from "vec3";
import { PlayerEntity } from "./entities/PlayerEntity";
import { angleToDegree, ChunkKey } from "./utils";
import { data } from "./data";
import { Entity } from "./entities/Entity";
import { World } from "./world";


export class Client{

  socket: ServerSideClientWrapper
  world: World
  playerEntity: PlayerEntity;

  previousChunk = {x: null, z: null}
  knownChunks = new Set<ChunkKey>()

  constructor(protocolClientWrapper: ServerSideClientWrapper, world: World) {
    this.socket = protocolClientWrapper
    this.world = world
  }

  finalizeLogin(){
    this.sendLogin()
    this.sendPosition()
    this.listenPositionUpdate()
  }

  listenPositionUpdate(){
    this.socket.on('look', (look) => this.playerEntity.updateLocation({pitch: angleToDegree(look.pitch), yaw: angleToDegree(look.yaw)}))
    this.socket.on('position', (positionMessage) => {
      const position = new Vec3(positionMessage.x, positionMessage.y, positionMessage.z)
      this.playerEntity.updateLocation({position})
    })
    this.socket.on('position_look', (positionLook) => {
      const position = new Vec3(positionLook.x, positionLook.y, positionLook.z)
      this.playerEntity.updateLocation({position, pitch: angleToDegree(positionLook.pitch), yaw: angleToDegree(positionLook.yaw)})
    })
  }

  sendLogin() {
    this.socket.login({
      entityId: this.socket.client.uuid,
      isHardcore: false,
      gameMode: 1,
      previousGameMode: 2,
      worldNames: data.loginPacket.worldNames,
      dimensionCodec: data.loginPacket.dimensionCodec,
      dimension: data.loginPacket.dimension,
      worldName: 'minecraft:overworld',
      hashedSeed: [0, 0],
      maxPlayers: 20,
      viewDistance: 1,
      reducedDebugInfo: false,
      enableRespawnScreen: true,
      isDebug: false,
      isFlat: false,
    })
  }

  sendChunk({x, z, chunk}: {x: number, z: number, chunk: PCChunk}) {
    this.socket.mapChunk({
      x,
      z,
      groundUp: true,
      biomes: chunk.dumpBiomes !== undefined ? chunk.dumpBiomes() : undefined,
      heightmaps: {
        type: 'compound',
        name: '',
        value: {} // Client will accept fake heightmap
      },
      bitMap: chunk.getMask(),
      chunkData: chunk.dump(),
      blockEntities: []
    })
  }

  sendPosition(){
    this.socket.position({
      ...this.playerEntity.location.position,
      yaw: this.playerEntity.location.yaw,
      pitch: this.playerEntity.location.pitch,
      flags: 0x00,
    } as any)
  }

  spawnEntity(entity: Entity){
    const spawnMessage = entity.getSpawnMessage()
    if (isSpawnEntityLivingParams(spawnMessage)) {
      this.socket.spawnEntityLiving(spawnMessage)
    } else if(isNamedEntitySpawnParams(spawnMessage)) {
      // Entity is a player
      this.socket.playerInfo({
        action: 0,
        data: [{
          UUID: entity.uuid,
          name: (entity as PlayerEntity).client.socket.client.username,
          properties:[],
          gamemode: 1,
          ping: 1,
        }]
      })
      this.socket.namedEntitySpawn(spawnMessage)
    }
  }

  pulse(){
    this.streamChunks()
  }


  streamChunks(){
    const currentChunk = this.playerEntity.location.getChunkCoordinates()

    if (currentChunk.x == this.previousChunk.x && currentChunk.z == this.previousChunk.z) {
      return;
    }

    const {x: chunkX, z: chunkZ} = currentChunk
    const radius = 1
    const previousChunks = new Set(this.knownChunks)
    const newChunks = new Set<ChunkKey>()

    this.socket.updateViewPosition({
      chunkX,
      chunkZ
    })

    for(let x = chunkX - radius; x <= chunkX + radius; x++){
      for(let z = chunkZ - radius; z <= chunkZ + radius; z++){
        const chunkKey: ChunkKey = `${x},${z}`
        if(this.knownChunks.has(chunkKey)){
          previousChunks.delete(chunkKey)
        } else {
          newChunks.add(chunkKey)
        }
      }
    }

    newChunks.forEach(chunkKey => {
      console.log('Load chunk', chunkKey);

      const [x, z] = chunkKey.split(',').map(Number)
      const chunk = this.world.getPlaceHolderChunk()
      this.sendChunk({x, z, chunk})
      this.knownChunks.add(chunkKey)
    })

    // Todo: fix dark chunks when sending a previously deleted chunk
/*  previousChunks.forEach(chunkKey => {
      const [chunkX, chunkZ] = chunkKey.split(',').map(Number)
      console.log('Unload chunk', chunkKey);
      
      this.socket.unloadChunk({
        chunkX,
        chunkZ,
      })
      this.knownChunks.delete(chunkKey)
    }) */
  }
}

type SpawnEntityGenericParams = toClient.SpawnEntityLivingParams | toClient.NamedEntitySpawnParams | toClient.SpawnEntityParams

function isSpawnEntityLivingParams(params: SpawnEntityGenericParams): params is toClient.SpawnEntityLivingParams {
  return (params as toClient.SpawnEntityLivingParams).headPitch !== undefined
}

function isNamedEntitySpawnParams(params: SpawnEntityGenericParams): params is toClient.NamedEntitySpawnParams {
  return (params as toClient.NamedEntitySpawnParams).playerUUID !== undefined
}
