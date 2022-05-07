import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload } from '@nestjs/microservices';
import { ServerSideClientWrapper, toServer } from '@shroomlight/minecraft-protocol-wrapper';
import { Vec3 } from 'vec3';
import { Location } from '../utils/Location';
import { angleToDegree } from '../utils/utils';
import { Client } from './Client';
import { PlayersService } from './players.service';

@Controller()
export class MovementController {
  constructor(private playersService: PlayersService) {}

  @EventPattern('position')
  position(@Payload() packet: toServer.PositionParams, @Ctx() player: Client) {
    const position = new Vec3(packet.x, packet.y, packet.z)
    player.playerEntity.updateLocation({ position })
  }

  @EventPattern('look')
  look(@Payload() packet: toServer.LookParams, @Ctx() player: Client) {
    player.playerEntity.updateLocation({
      pitch: angleToDegree(packet.pitch),
      yaw: angleToDegree(packet.yaw),
    })
  }

  @EventPattern('position_look')
  position_look(@Payload() packet: toServer.PositionLookParams, @Ctx() player: Client) {
    const position = new Vec3(packet.x, packet.y, packet.z)
    player.playerEntity.updateLocation({
      position,
      pitch: angleToDegree(packet.pitch),
      yaw: angleToDegree(packet.yaw),
    })
  }

}
