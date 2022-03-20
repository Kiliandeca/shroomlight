import { toServer } from "@shroomlight/minecraft-protocol-wrapper";
import { Vec3 } from "vec3";
import * as uuid from "uuid"

export class Entity {

  uuid: string;
  id: number;
  position: Vec3;
  yaw: number;
  pitch: number;

  constructor({id, position, yaw, pitch}) {
    this.uuid = uuid.v4()
    this.id = id
    this.position = position.clone()
    this.yaw = yaw
    this.pitch = pitch
  }

  updatePosition(position: toServer.PositionParams | toServer.PositionLookParams) {
    this.position.x = position.x
    this.position.y = position.y
    this.position.z = position.z
  }

  updateLook(look: toServer.LookParams | toServer.PositionLookParams) {
    console.log(look);
    
    this.pitch = conv(look.pitch)
    this.yaw = conv(look.yaw)
  }
}

function conv (f) {
  let b = Math.floor((f % 360) * 256 / 360)
  if (b < -128) b += 256
  else if (b > 127) b -= 256
  return b
}
