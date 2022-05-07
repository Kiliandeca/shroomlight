import { Injectable } from '@nestjs/common';
import { Vec3 } from 'vec3';
import { data } from '../utils/data';
import { Entity } from './Entity';
import { PlayerEntity } from './PlayerEntity';

@Injectable()
export class EntitiesService {

  nextId = 1;
  entities = new Map<number, Entity>();

  delete(entity: Entity) {
    this.entities.delete(entity.id);
  }

  createPlayer(client, position: Vec3) {
    const player = new PlayerEntity({
      client,
      id: this.nextId++,
      type: data.entitiesByName.player.id,
      position,
      yaw: 0,
      pitch: 0,
    });

    this.entities.set(player.id, player);
    return player;
  }

}
