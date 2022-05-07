import { toClient } from '@shroomlight/minecraft-protocol-wrapper';
import { v4 } from 'uuid';
import { Vec3 } from 'vec3';
import { Location } from '../utils/Location';

export interface EntityOptions {
  id: number;
  uuid?: string;
  type: number;
  position: Vec3;
  yaw: number;
  pitch: number;
}

export class Entity {
  uuid: string;
  id: number;
  type: number;
  location: Location;
  velocity: Vec3;
  gravity = new Vec3(0, -0.08, 0);

  physicsEnabled = true;

  constructor({ id, uuid, type, position, yaw, pitch }: EntityOptions) {
    this.uuid = uuid ? uuid : v4();
    this.id = id;
    this.type = type;
    this.location = new Location({ position, yaw, pitch });
    this.velocity = new Vec3(0, 0, 0);
  }

  updateLocation(newLocation: Partial<Location>) {
    this.location.update(newLocation);
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
