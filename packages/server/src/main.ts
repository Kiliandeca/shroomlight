import { Client, createServer, PacketMeta } from 'minecraft-protocol'
import { Vec3 } from 'vec3'
import prismarine_chunk, { PCChunk } from 'prismarine-chunk'
import minecraft_data from 'minecraft-data'
import { ServerSideClientWrapper } from '@shroomlight/minecraft-protocol-wrapper'


const Chunk = (prismarine_chunk('1.16.5')) as typeof PCChunk


const version = '1.16.5'

const server = createServer({
  'online-mode': true,
  host: '0.0.0.0',
  port: 25565,
  version,
  validateChannelProtocol: false
})

const mcData = minecraft_data(version)
const loginPacket = (mcData as any).loginPacket
const chunk = new Chunk({})

for (let x = 0; x < 16; x++) {
  for (let z = 0; z < 16; z++) {
    for (let y = 80; y < 90; y++) {
        chunk.setBlockType(new Vec3(x, y, z), mcData.blocksByName.grass_block.id)
        chunk.setBlockData(new Vec3(x, y, z), 1 as any)
    }
    for (let y = 0; y < 256; y++) {
      chunk.setSkyLight(new Vec3(x, y, z), 15)
    }
  }
}

server.on('login', function (client: Client) {

  client.on("packet", (data: any, meta: PacketMeta) => {
    console.log(meta.name, data);
    
  })

  const wrappedClient = new ServerSideClientWrapper(client)

  wrappedClient.on("chat", (data) => {
    console.log(data.message);
    wrappedClient.chat({
      message: JSON.stringify({text: `${client.username}: ${data.message}`}),
      sender: client.uuid,
      position: 1
    })
  })

  client.write('login', {
    entityId: client.uuid,
    isHardcore: false,
    gameMode: 0,
    previousGameMode: 1,
    worldNames: loginPacket.worldNames,
    dimensionCodec: loginPacket.dimensionCodec,
    dimension: loginPacket.dimension,
    worldName: 'minecraft:overworld',
    hashedSeed: [0, 0],
    maxPlayers: server.maxPlayers,
    viewDistance: 10,
    reducedDebugInfo: false,
    enableRespawnScreen: true,
    isDebug: false,
    isFlat: false
  })
  client.write('map_chunk', {
    x: 0,
    z: 0,
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
  client.write('position', {
    x: 15,
    y: 101,
    z: 15,
    yaw: 137,
    pitch: 0,
    flags: 0x00
  })

})

server.on('listening', () => {
    console.log("Server listening");
})
