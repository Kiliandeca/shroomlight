import {
  ServerSideClientWrapper,
  toClient,
} from '@shroomlight/minecraft-protocol-wrapper';
import { PCChunk } from 'prismarine-chunk';
import { PlayerEntity } from '../entities/PlayerEntity';
import { ChunkKey } from '../utils/utils';
import { Entity } from '../entities/Entity';
import { WorldService } from '../world.service';

export class Client {
  socket: ServerSideClientWrapper;
  world: WorldService;
  playerEntity: PlayerEntity;

  previousChunk = { x: null, z: null };
  knownChunks = new Set<ChunkKey>();

  constructor(protocolClientWrapper: ServerSideClientWrapper, world: WorldService) {
    this.socket = protocolClientWrapper;
    (this.socket as ServerSideClientWrapper & {ctx: Client}).ctx = this; // Hacky thing to pass the Client as context in transporter
    this.world = world;
  }

  sendPosition() {
    this.socket.position({
      ...this.playerEntity.location.position,
      yaw: this.playerEntity.location.yaw,
      pitch: this.playerEntity.location.pitch,
      flags: 0x00,
    } as any);
  }

  sendChunk({ x, z, chunk }: { x: number; z: number; chunk: PCChunk }) {
    this.socket.mapChunk({
      x,
      z,
      groundUp: true,
      biomes: chunk.dumpBiomes !== undefined ? chunk.dumpBiomes() : undefined,
      heightmaps: {
        type: 'compound',
        name: '',
        value: {
          MOTION_BLOCKING: { type: 'longArray', value: new Array(36).fill([0, 0]) }
        }
      },
      bitMap: chunk.getMask(),
      chunkData: chunk.dump(),
      blockEntities: [],
    });
    
    this.socket.updateLight({
      chunkX: x,
      chunkZ: z,
      trustEdges: true,
      skyLightMask: (chunk as any).skyLightMask,
      blockLightMask: (chunk as any).blockLightMask,
      emptySkyLightMask: 0,
      emptyBlockLightMask: 0,
      data: chunk.dumpLight()
    })
  }

  spawnEntity(entity: Entity) {
    const spawnMessage = entity.getSpawnMessage();
    if (isSpawnEntityLivingParams(spawnMessage)) {
      this.socket.spawnEntityLiving(spawnMessage);
    } else if (isNamedEntitySpawnParams(spawnMessage)) {
      // Entity is a player
      this.socket.playerInfo({
        action: 0,
        data: [
          {
            UUID: entity.uuid,
            name: (entity as PlayerEntity).client.socket.client.username,
            properties: [],
            gamemode: 1,
            ping: 1,
          },
        ],
      });
      this.socket.namedEntitySpawn(spawnMessage);
    }
  }

  pulse() {
    this.streamChunks();
  }

  streamChunks() {
    
    const currentChunk = this.playerEntity.location.getChunkCoordinates();

    if (
      currentChunk.x == this.previousChunk.x &&
      currentChunk.z == this.previousChunk.z
    ) {
      return;
    }

    const { x: chunkX, z: chunkZ } = currentChunk;
    const radius = 1;
    const previousChunks = new Set(this.knownChunks);
    const newChunks = new Set<ChunkKey>();

    this.socket.updateViewPosition({
      chunkX,
      chunkZ,
    });

    for (let x = chunkX - radius; x <= chunkX + radius; x++) {
      for (let z = chunkZ - radius; z <= chunkZ + radius; z++) {
        const chunkKey: ChunkKey = `${x},${z}`;
        if (this.knownChunks.has(chunkKey)) {
          previousChunks.delete(chunkKey);
        } else {
          newChunks.add(chunkKey);
        }
      }
    }

    newChunks.forEach((chunkKey) => {
      const [x, z] = chunkKey.split(',').map(Number);
      const chunk = this.world.getPlaceHolderChunk();
      this.sendChunk({ x, z, chunk });
      this.knownChunks.add(chunkKey);
    });

    // Todo: fix dark chunks when sending a previously deleted chunk
    previousChunks.forEach(chunkKey => {
      const [chunkX, chunkZ] = chunkKey.split(',').map(Number)
      this.socket.unloadChunk({
        chunkX,
        chunkZ,
      })
      this.knownChunks.delete(chunkKey)
    })
  }
}

type SpawnEntityGenericParams =
  | toClient.SpawnEntityLivingParams
  | toClient.NamedEntitySpawnParams
  | toClient.SpawnEntityParams;

function isSpawnEntityLivingParams(
  params: SpawnEntityGenericParams
): params is toClient.SpawnEntityLivingParams {
  return (params as toClient.SpawnEntityLivingParams).headPitch !== undefined;
}

function isNamedEntitySpawnParams(
  params: SpawnEntityGenericParams
): params is toClient.NamedEntitySpawnParams {
  return (params as toClient.NamedEntitySpawnParams).playerUUID !== undefined;
}
