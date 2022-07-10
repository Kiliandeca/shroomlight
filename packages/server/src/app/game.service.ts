import { Injectable } from '@nestjs/common';
import { Histogram } from '@opentelemetry/api-metrics';
import { MetricService } from 'nestjs-otel';
import { setTimeout } from 'timers/promises';
import { Vec3 } from 'vec3';
import { EntitiesService } from './entities/entities.service';
import { Entity } from './entities/Entity';
import { PhysicsService } from './physics.service';
import { PlayersService } from './players/players.service';
import { data } from './utils/data';

@Injectable()
export class GameService {

  tickMetricHistogram: Histogram

  constructor(private entitiesService: EntitiesService, private playersServices: PlayersService, private physicsService: PhysicsService, private metricsService: MetricService) {
    this.tickMetricHistogram = this.metricsService.getHistogram('tick_time', { boundaries: [0, 5, 10 , 15, 20, 25, 30, 35, 40, 50, Infinity] }) // Todo: find out why boundaries doesn't work and otel use default bucket
  }

  tickCount = 0;

  onApplicationBootstrap() {

    //TMP
    const sheep = new Entity({
      id: this.entitiesService.nextId++,
      type: data.entitiesByName.sheep.id,
      position: new Vec3(0, 65, 10),
      yaw: 100,
      pitch: 0,
    });
    this.entitiesService.entities.set(sheep.id, sheep);

    this.gameLoop()
  }

  async gameLoop() {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      const start = Date.now();

      this.tick()
      this.sendEntitiesPosition()

      const took = Date.now() - start;
      this.tickMetricHistogram.record(took)
      if (took > 5) {
        console.log(`Tick ${this.tickCount} took ${took}`);
      }

      this.tickCount++;
      await setTimeout(Math.max(0, 50 - took));
    }

  }

  tick() {

    this.playersServices.players.forEach((player) => {
      player.client.pulse()
    })

    this.entitiesService.entities.forEach(e => {
      if (!e.physicsEnabled) {
        return
      }
      this.physicsService.pulsePhysics(e)
    })

    if (this.tickCount % 50 == 0) {
      this.playersServices.saveAllPlayers()
      /* this.entitiesService.entities.forEach((e) => {
        e.velocity.y = 0;
        e.location.position.y = 90;
      });*/
    } 
  }

  sendEntitiesPosition() {
    this.playersServices.players.forEach((player) => {
      this.entitiesService.entities.forEach((entity) => {
        if (entity.id == player.id) {
          return;
        }

        player.client.socket.entityTeleport({
          entityId: entity.id,
          ...entity.location.position,
          yaw: entity.location.yaw,
          pitch: entity.location.pitch,
          onGround: true,
        });

        player.client.socket.entityHeadRotation({
          entityId: entity.id,
          headYaw: entity.location.yaw,
        });
      });
    });
  }
}
