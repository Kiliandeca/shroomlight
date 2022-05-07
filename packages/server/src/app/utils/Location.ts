import { Vec3 } from 'vec3';

export class Location {
  position: Vec3;
  yaw: number;
  pitch: number;

  constructor({ position, yaw, pitch }: LocationOptions) {
    this.update({
      position: position.clone(),
      yaw,
      pitch,
    });
  }

  update(location: Partial<Location>) {
    if (location.position) {
      this.position = location.position;
    }
    if (location.pitch !== undefined) {
      this.pitch = location.pitch;
    }
    if (location.yaw !== undefined) {
      this.yaw = location.yaw;
    }
  }

  getRaw() {
    return {
      ...this.position,
      pitch: this.pitch,
      yaw: this.yaw,
    };
  }

  clone() {
    return new Location({
      position: this.position.clone(),
      yaw: this.yaw,
      pitch: this.pitch,
    });
  }

  getChunkCoordinates() {
    return {
      x: Math.floor(this.position.x / 16),
      z: Math.floor(this.position.z / 16),
    };
  }
}

export interface LocationOptions {
  position: Vec3;
  yaw?: number;
  pitch?: number;
}
