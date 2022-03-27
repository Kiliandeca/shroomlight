import { ServerSideClientWrapper, toClient } from "@shroomlight/minecraft-protocol-wrapper";
import { PCChunk } from "prismarine-chunk";
import { Vec3 } from "vec3";
import { PlayerEntity } from "./entities/PlayerEntity";
import { angleToDegree } from "./utils";
import { data } from "./data";
import { Entity } from "./entities/Entity";


export class Client{

  protocolClientWrapper: ServerSideClientWrapper

  playerEntity: PlayerEntity;

  constructor(protocolClientWrapper: ServerSideClientWrapper) {
    this.protocolClientWrapper = protocolClientWrapper
  }

  finalizeLogin(){
    this.sendLogin()
    this.sendPosition()
    this.listenPositionUpdate()
  }

  listenPositionUpdate(){
    this.protocolClientWrapper.on('look', (look) => this.playerEntity.updateLocation({pitch: angleToDegree(look.pitch), yaw: angleToDegree(look.yaw)}))
    this.protocolClientWrapper.on('position', (positionMessage) => {
      const position = new Vec3(positionMessage.x, positionMessage.y, positionMessage.z)
      this.playerEntity.updateLocation({position})
    })
    this.protocolClientWrapper.on('position_look', (positionLook) => {
      const position = new Vec3(positionLook.x, positionLook.y, positionLook.z)
      this.playerEntity.updateLocation({position, pitch: angleToDegree(positionLook.pitch), yaw: angleToDegree(positionLook.yaw)})
    })
  }

  sendLogin() {
    this.protocolClientWrapper.login({
      entityId: this.protocolClientWrapper.client.uuid,
      isHardcore: false,
      gameMode: 0,
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
      isFlat: false
    })
  }

  sendChunk({x, z, chunk}: {x: number, z: number, chunk: PCChunk}) {
    this.protocolClientWrapper.mapChunk({
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
    this.protocolClientWrapper.position({
      ...this.playerEntity.location.position,
      yaw: this.playerEntity.location.yaw,
      pitch: this.playerEntity.location.pitch,
      flags: 0x00,
    } as any)
  }

  spawnEntity(entity: Entity){
    const spawnMessage = entity.getSpawnMessage()
    if (isSpawnEntityLivingParams(spawnMessage)) {
      this.protocolClientWrapper.spawnEntityLiving(spawnMessage)
    } else if(isNamedEntitySpawnParams(spawnMessage)) {
      // Entity is a player
      this.protocolClientWrapper.playerInfo({
        action: 0,
        data: [{
          UUID: entity.uuid,
          name: 'test',
          properties:[],
          gamemode: 1,
          ping: 1,
        }]
      })
      this.protocolClientWrapper.namedEntitySpawn(spawnMessage)
    }
  }
}

type SpawnEntityGenericParams = toClient.SpawnEntityLivingParams | toClient.NamedEntitySpawnParams | toClient.SpawnEntityParams

function isSpawnEntityLivingParams(params: SpawnEntityGenericParams): params is toClient.SpawnEntityLivingParams {
  return (params as toClient.SpawnEntityLivingParams).headPitch !== undefined
}

function isNamedEntitySpawnParams(params: SpawnEntityGenericParams): params is toClient.NamedEntitySpawnParams {
  return (params as toClient.NamedEntitySpawnParams).playerUUID !== undefined
}
