import { ServerSideClientWrapper, toServer } from "@shroomlight/minecraft-protocol-wrapper";
import { PCChunk } from "prismarine-chunk";
import minecraft_data from 'minecraft-data'
import { Vec3 } from "vec3";
import { Entity } from "./entities/Entity";
import { angleToDegree } from "./utils";


export class Client{

  version: string;
  protocolClientWrapper: ServerSideClientWrapper

  entity: Entity;

  constructor(version: string, protocolClientWrapper: ServerSideClientWrapper, entity: Entity) {
    this.version = version  
    this.protocolClientWrapper = protocolClientWrapper

    // Todo save and extract player data
    this.entity = entity

    this.sendLogin()
    this.sendPosition()

    this.protocolClientWrapper.on('look', (look) => this.entity.updateLocation({pitch: angleToDegree(look.pitch), yaw: angleToDegree(look.yaw)}))
    this.protocolClientWrapper.on('position', (positionMessage) => {
      const position = new Vec3(positionMessage.x, positionMessage.y, positionMessage.z)
      this.entity.updateLocation({position})
    })
    this.protocolClientWrapper.on('position_look', (positionLook) => {
      const position = new Vec3(positionLook.x, positionLook.y, positionLook.z)
      this.entity.updateLocation({position, pitch: angleToDegree(positionLook.pitch), yaw: angleToDegree(positionLook.yaw)})
    })
  }

  sendLogin() {
    const mcData = minecraft_data(this.version)
    const loginPacket = (mcData as any).loginPacket
    this.protocolClientWrapper.login({
      entityId: this.protocolClientWrapper.client.uuid,
      isHardcore: false,
      gameMode: 0,
      previousGameMode: 2,
      worldNames: loginPacket.worldNames,
      dimensionCodec: loginPacket.dimensionCodec,
      dimension: loginPacket.dimension,
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
      ...this.entity.location.position,
      yaw: this.entity.location.yaw,
      pitch: this.entity.location.pitch,
      flags: 0x00,
    } as any)
  }
}
