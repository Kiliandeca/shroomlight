import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload } from '@nestjs/microservices';
import { toServer } from '@shroomlight/minecraft-protocol-wrapper';
import { Client } from './players/Client';
import { PlayersService } from './players/players.service';

@Controller('chat')
export class ChatController {

  constructor(private playersService: PlayersService) {}

  @EventPattern('chat')
  position(@Payload() packet: toServer.ChatParams, @Ctx() player: Client) {
    this.playersService.broadcastMessage({
      message: `${player.username}: ${packet.message}`,
      position: 0,
      sender: player.playerEntity.uuid,
    })
  }
}
