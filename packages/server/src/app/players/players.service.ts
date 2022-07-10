import { Injectable } from '@nestjs/common';
import { Vec3 } from 'vec3';
import { EntitiesService } from '../entities/entities.service';
import { PlayerEntity } from '../entities/PlayerEntity';
import { WorldService } from '../world.service';
import { Client } from './Client';
import { PLAYER_INFO_ACTION } from '@shroomlight/minecraft-protocol-wrapper';
import { UpDownCounter } from '@opentelemetry/api-metrics';
import { MetricService } from 'nestjs-otel';
import { PlayerStorageService } from '../storage/player-storage.service';

@Injectable()
export class PlayersService {

  spawnPoint = new Vec3(0, 65, 0);
  players = new Map<string, PlayerEntity>();

  playersMetricGauge: UpDownCounter;

  constructor(private worlService: WorldService, private entitiesService: EntitiesService, private metricsService: MetricService, private playerStorageService: PlayerStorageService) {
    this.playersMetricGauge = this.metricsService.getUpDownCounter('online_players')
  }

  async login(socket, username){
    const client = new Client(socket, username, this.worlService);

    const playerData = await this.playerStorageService.read(socket.client.uuid)
    const spawnPosition = playerData ? playerData.location.position : this.spawnPoint

    const player = this.entitiesService.createPlayer(client, spawnPosition);

    if(playerData){
      player.location.pitch = playerData.location.pitch;
      player.location.yaw = playerData.location.yaw;
      player.velocity = playerData.velocity;
    }    

    this.players.set(player.uuid, player);
    socket.client.on('end', () => {
      this.logout(client)
    });
    this.playersMetricGauge.add(1)

    this.players.forEach(p => {
      // Send every players infos to the new players
      client.socket.playerInfo({
        action: PLAYER_INFO_ACTION.ADD_PLAYER,
        data: [{
          UUID: p.uuid,
          name: p.client.username,
          properties: [],
          gamemode: 1,
          ping: 1,
        }]
      })

      // Send the new player info to every players exept itself
      if (p === player) return;
      p.client.socket.playerInfo({
        action: PLAYER_INFO_ACTION.ADD_PLAYER,
        data: [{
          UUID: player.uuid,
          name: player.client.username,
          properties: [],
          gamemode: 1,
          ping: 1,
        }]
      })
    })

    this.broadcastMessage({
      message: `§e${client.username} joined the game`
    })

    client.sendPosition()
    client.streamChunks()

    return player
  }

  logout(client: Client){
    this.entitiesService.delete(client.playerEntity);
    this.players.delete(client.playerEntity.uuid);

    this.players.forEach(p => {
      p.client.socket.playerInfo({
        action: PLAYER_INFO_ACTION.REMOVE_PLAYER,
        data: [{
          UUID: client.playerEntity.uuid
        }]
      })
    })

    this.broadcastMessage({
      message: `§e${client.username} left the game`
    })
    this.playerStorageService.save(client.playerEntity)
    this.playersMetricGauge.add(-1)
  }

  getPlayerByUuid(uuid: string) {
    if (this.players.has(uuid)) {
      return this.players.get(uuid);
    }
    return false
  }

  saveAllPlayers(){
    return Array.from(this.players).map(([, player]) => this.playerStorageService.save(player))
  }

  broadcastMessage({message, position=0, sender='0'}: {message: any, position?: 0 | 1 | 2, sender?: string }) {
    this.players.forEach(p => p.client.socket.chat({
      sender,
      message: JSON.stringify(message),
      position,
    }))
  }

}
