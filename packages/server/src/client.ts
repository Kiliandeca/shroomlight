import { ServerSideClientWrapper, toServer } from "@shroomlight/minecraft-protocol-wrapper";
import { PCChunk } from "prismarine-chunk";
import minecraft_data from 'minecraft-data'
import { Vec3 } from "vec3";
import { Entity } from "./entity";


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

    this.protocolClientWrapper.on('position', (position) => this.entity.updatePosition(position))
    this.protocolClientWrapper.on('look', (look) => this.entity.updateLook(look))
    this.protocolClientWrapper.on('position_look', (positionLook) => {
      this.entity.updatePosition(positionLook)
      this.entity.updateLook(positionLook)
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
      ...this.entity.position,
      yaw: this.entity.yaw,
      pitch: this.entity.pitch,
      flags: 0x00,
    } as any)
  }
}
