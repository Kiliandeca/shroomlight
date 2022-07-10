import { Injectable } from '@nestjs/common';
import { Vec3 } from 'vec3';
import { PlayerEntity } from '../entities/PlayerEntity';
import { Location } from '../utils/Location';

@Injectable()
export class PlayerStorageService {

  memory = new Map<string, StoredPlayerDTO>();

  async save(player: PlayerEntity){
    const data = {
      uuid: player.uuid,
      location: player.location,
      velocity: player.velocity,
    }
    this.memory.set(player.uuid, data);
  }

  async read(playerUUID: string): Promise<StoredPlayerDTO | false> {
    if (!this.memory.has(playerUUID)) {
      return false;
    }
    return this.memory.get(playerUUID);
  }
}

export interface StoredPlayerDTO {
  uuid: string;
  location: Location;
  velocity: Vec3;
}
