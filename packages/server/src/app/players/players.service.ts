import { Injectable } from '@nestjs/common';
import { Vec3 } from 'vec3';
import { data } from '../utils/data';
import { EntitiesService } from '../entities/entities.service';
import { PlayerEntity } from '../entities/PlayerEntity';
import { WorldService } from '../world.service';
import { Client } from './Client';

@Injectable()
export class PlayersService {

  spawnPoint = new Vec3(0, 65, 0);
  players = new Map<string, PlayerEntity>();

  constructor(private worlService: WorldService, private entitiesService: EntitiesService) {}

  login(socket){
    const client = new Client(socket, this.worlService);
    const player = this.entitiesService.createPlayer(client, this.spawnPoint);

    this.players.set(player.uuid, player);
    socket.on('end', () => {
      this.entitiesService.delete(player);
      this.players.delete(player.uuid);
    });

    client.sendPosition()
    client.streamChunks()

    return player
  }

  getPlayerByUuid(uuid: string) {
    if (this.players.has(uuid)) {
      return this.players.get(uuid);
    }
    return false
  }

}
