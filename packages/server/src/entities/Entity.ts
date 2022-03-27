import { toClient } from "@shroomlight/minecraft-protocol-wrapper";
import { v4 } from "uuid"
import { Vec3 } from "vec3";
import { Location } from "../Location";

export interface EntityOptions {
  id: number
  uuid?: string
  type: number
  position: Vec3
  yaw: number
  pitch: number
}

export class Entity {

  uuid: string;
  id: number;
  location: Location
  type: number

  constructor({id, uuid, type, position, yaw, pitch}: EntityOptions) {
    this.uuid = uuid ? uuid : v4()
    this.id = id
    this.type = type
    this.location = new Location({position, yaw, pitch})
  }

  updateLocation(newLocation: Partial<Location>) {
    this.location.update(newLocation)
  }

  getSpawnMessage(): toClient.SpawnEntityLivingParams | toClient.NamedEntitySpawnParams {
    return {
      type: this.type,
      entityId: this.id,
      ...this.location.getRaw(),
      velocityX: 0,
      velocityY: 0,
      velocityZ: 10000,
      entityUUID: this.uuid,
      headPitch: 0,
    }
  }

}
