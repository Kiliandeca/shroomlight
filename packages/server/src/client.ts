import { ServerSideClientWrapper } from "@shroomlight/minecraft-protocol-wrapper";
import { PCChunk } from "prismarine-chunk";
import minecraft_data from 'minecraft-data'
import { Vec3 } from "vec3";

const spawnpoint = new Vec3(0, 90, 0)

export class Client{

  version: string;
  protocolClientWrapper: ServerSideClientWrapper
  position: Vec3
  yaw: number
  pitch: number

  constructor(version: string, protocolClientWrapper: ServerSideClientWrapper) {
    this.version = version  
    this.protocolClientWrapper = protocolClientWrapper

    // Todo save and extract player data
    this.position = spawnpoint
    this.yaw = 0
    this.pitch = 0

    this.sendLogin()
    this.sendPosition(this.position)
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

  sendPosition(vec3: Vec3){
    this.protocolClientWrapper.position({
      x: vec3.x,
      y: vec3.y,
      z: vec3.z,
      yaw: 0,
      pitch: 0,
      flags: 0x00,
    } as any)
  }

}
