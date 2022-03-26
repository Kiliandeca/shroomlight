import { toServer } from "@shroomlight/minecraft-protocol-wrapper";
import { Vec3 } from "vec3";
import * as uuid from "uuid"
import { Location } from "../Location";

export class Entity {

  uuid: string;
  id: number;
  location: Location
  type: number

  constructor({id, position, yaw, pitch}) {
    this.uuid = uuid.v4()
    this.id = id
    this.location = new Location({position, yaw, pitch})
  }

  updateLocation(newLocation: Partial<Location>) {
    this.location.update(newLocation)
  }

  createSpawnMessage(){
    return {
      type: this.type,
      entityId: this.id,
      ...this.location.getRaw(),
      velocityX: 0,
      velocityY: 0,
      velocityZ: 10000,
      entityUUID: "uuid",
      headPitch: 0,
    }
  }

}
