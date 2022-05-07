import { toClient } from '@shroomlight/minecraft-protocol-wrapper';
import { Client } from '../players/Client';
import { Entity, EntityOptions } from './Entity';

export interface PlayerEntityOptions extends EntityOptions {
  client: Client;
}

export class PlayerEntity extends Entity {
  client: Client;

  constructor({
    client,
    id,
    position,
    yaw,
    pitch,
    type,
  }: PlayerEntityOptions) {
    const uuid = client.socket.client.uuid;
    super({ id, uuid, position, yaw, pitch, type });
    this.client = client;
    this.client.playerEntity = this;
    this.physicsEnabled = false;

  }

  getSpawnMessage(): toClient.NamedEntitySpawnParams {
    return {
      playerUUID: this.client.socket.client.uuid,
      entityId: this.id,
      ...this.location.getRaw(),
    };
  }
}
