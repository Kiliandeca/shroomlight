import { Injectable } from '@nestjs/common';
import { Vec3 } from 'vec3';
import { Entity } from './entities/Entity';
import { WorldService } from './world.service';

@Injectable()
export class PhysicsService {

  gravity = new Vec3(0, -0.08, 0);

  constructor(private worldService: WorldService) {
  }

  pulsePhysics(entity: Entity) {

    entity.velocity.add(this.gravity);

    if (entity.velocity.y < -1) {
      entity.velocity.y = -1;
    }

    // This only works if the terminal velocity is 1 block per tick as it doesn't prevent tunneling
    // And only for y axis..
    // Todo: make this work for all axes and use aabb collision detection
    const pendingPosition = entity.location.position.clone().add(entity.velocity);
    const pendingBlock = this.worldService
      .getPlaceHolderChunk()
      .getBlock(pendingPosition);
    if (pendingBlock.type !== 0) {
      const pendingPositionY = entity.location.position
        .clone()
        .add(new Vec3(0, entity.velocity.y, 0));
      const pendingBlockY = this.worldService
        .getPlaceHolderChunk()
        .getBlock(pendingPositionY);
      if (pendingBlockY.type !== 0) {
        entity.velocity.y =
          Math.ceil(pendingPositionY.y) - entity.location.position.y;
      }
    }

    entity.location.position.add(entity.velocity);
  }
}
