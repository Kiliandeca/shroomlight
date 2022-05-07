import { toClient } from '@shroomlight/minecraft-protocol-wrapper';
import { v4 } from 'uuid';
import { Vec3 } from 'vec3';
import { Location } from '../Location';
import { World } from '../world';

export interface EntityOptions {
  id: number;
  uuid?: string;
  type: number;
  position: Vec3;
  yaw: number;
  pitch: number;
  world: World;
}

export class Entity {
  uuid: string;
  id: number;
  type: number;
  location: Location;
  velocity: Vec3;
  gravity = new Vec3(0, -0.08, 0);
  world: World;

  constructor({ id, uuid, type, position, yaw, pitch, world }: EntityOptions) {
    this.uuid = uuid ? uuid : v4();
    this.id = id;
    this.type = type;
    this.location = new Location({ position, yaw, pitch });
    this.velocity = new Vec3(0, 0, 0);
    this.world = world;
  }

  updateLocation(newLocation: Partial<Location>) {
    this.location.update(newLocation);
  }

  pulsePhysic() {
    this.velocity.add(this.gravity);

    if (this.velocity.y < -1) {
      this.velocity.y = -1;
    }

    // This only works if the terminal velocity is 1 block per tick as it doesn't prevent tunneling
    // And only for y axis..
    // Todo: make this work for all axes and use aabb collision detection
    const pendingPosition = this.location.position.clone().add(this.velocity);
    const pendingBlock = this.world
      .getPlaceHolderChunk()
      .getBlock(pendingPosition);
    if (pendingBlock.type !== 0) {
      const pendingPositionY = this.location.position
        .clone()
        .add(new Vec3(0, this.velocity.y, 0));
      const pendingBlockY = this.world
        .getPlaceHolderChunk()
        .getBlock(pendingPositionY);
      if (pendingBlockY.type !== 0) {
        this.velocity.y =
          Math.ceil(pendingPositionY.y) - this.location.position.y;
      }
    }

    this.location.position.add(this.velocity);
  }

  getSpawnMessage():
    | toClient.SpawnEntityLivingParams
    | toClient.NamedEntitySpawnParams {
    return {
      entityUUID: this.uuid,
      entityId: this.id,
      type: this.type,
      ...this.location.getRaw(),
      velocityX: this.velocity.x,
      velocityY: this.velocity.y,
      velocityZ: this.velocity.z,
      headPitch: 0,
    };
  }
}
