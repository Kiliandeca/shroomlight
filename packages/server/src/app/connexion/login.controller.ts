import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, Payload } from '@nestjs/microservices';
import { ServerSideClientWrapper, toServer } from '@shroomlight/minecraft-protocol-wrapper';
import { data } from '../utils/data';
import { PlayersService } from '../players/players.service';
import { EntitiesService } from '../entities/entities.service';

@Controller()
export class LoginController {

  constructor(private entitiesService: EntitiesService, private playersService: PlayersService) {}

  @EventPattern('login_start')
  echo(@Payload() packet: toServer.LoginStartParams, @Ctx() socket: ServerSideClientWrapper) {
    console.log(packet);
    socket.login({
      entityId: socket.client.uuid,
      isHardcore: false,
      gameMode: 1,
      previousGameMode: 2,
      worldNames: data.loginPacket.worldNames,
      dimensionCodec: data.loginPacket.dimensionCodec,
      dimension: data.loginPacket.dimension,
      worldName: 'minecraft:overworld',
      hashedSeed: [0, 0],
      maxPlayers: 20,
      viewDistance: 1,
      reducedDebugInfo: false,
      enableRespawnScreen: true,
      isDebug: false,
      isFlat: false,
    })

    const player = this.playersService.login(socket, packet.username)

    this.entitiesService.entities.forEach((e) => {
      if (e.id == player.id) return;
      player.client.spawnEntity(e);
    });

    this.playersService.players.forEach(p => {
      if (p.id == player.id) return;
      p.client.spawnEntity(player)
    })
    
  }

}
