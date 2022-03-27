import { Vec3 } from 'vec3'
import prismarine_chunk, { PCChunk } from 'prismarine-chunk'
import { data, version } from './data';

export class World {

  getPlaceHolderChunk() {
    const Chunk = (prismarine_chunk(version)) as typeof PCChunk
  
    const chunk = new Chunk({})
    for (let x = 0; x < 16; x++) {
      for (let z = 0; z < 16; z++) {
        chunk.setBlockType(new Vec3(x, 1, z), data.blocksByName.bedrock.id)

        for (let y = 2; y < 64; y++) {
            chunk.setBlockType(new Vec3(x, y, z), data.blocksByName.dirt.id)
        }

        chunk.setBlockType(new Vec3(x, 64, z), data.blocksByName.grass_block.id)
        chunk.setBlockData(new Vec3(x, 64, z), 1 as any)

        for (let y = 255; y < 256; y++) {
          chunk.setSkyLight(new Vec3(x, y, z), 15)
        }
      }
    }
    return chunk
  }
}
