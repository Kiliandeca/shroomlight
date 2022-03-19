import { Vec3 } from 'vec3'
import prismarine_chunk, { PCChunk } from 'prismarine-chunk'
import minecraft_data from 'minecraft-data'

export class World {
  version: string;

  constructor(version: string) {
    this.version = version    
  }
  getPlaceHolderChunk() {
    const Chunk = (prismarine_chunk(this.version)) as typeof PCChunk
    const mcData = minecraft_data(this.version)
  
    const chunk = new Chunk({})
  
    for (let x = 0; x < 16; x++) {
      for (let z = 0; z < 16; z++) {
        for (let y = 80; y < 90; y++) {
            chunk.setBlockType(new Vec3(x, y, z), mcData.blocksByName.dirt.id)
            //chunk.setBlockData(new Vec3(x, y, z), 1 as any)
        }
        for (let y = 0; y < 256; y++) {
          chunk.setSkyLight(new Vec3(x, y, z), 15)
        }
      }
    }
    return chunk
  }
}