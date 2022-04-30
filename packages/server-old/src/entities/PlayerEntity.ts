import { toClient } from '@shroomlight/minecraft-protocol-wrapper';
import { Client } from '../client';
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
    world,
  }: PlayerEntityOptions) {
    const uuid = client.socket.client.uuid;
    super({ id, uuid, position, yaw, pitch, type, world });
    this.client = client;
    this.client.playerEntity = this;
    this.client.finalizeLogin();
  }

  getSpawnMessage(): toClient.NamedEntitySpawnParams {
    return {
      playerUUID: this.client.socket.client.uuid,
      entityId: this.id,
      ...this.location.getRaw(),
    };
  }
}
