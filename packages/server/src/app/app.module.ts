import { Module } from '@nestjs/common';

import { KeepAliveController } from './connexion/keep-alive.controller';
import { LoginController } from './connexion/login.controller';
import { WorldService } from './world.service';
import { PlayersService } from './players/players.service';
import { EntitiesService } from './entities/entities.service';
import { MovementController } from './players/movement.controller';
import { GameService } from './game.service';
import { PhysicsService } from './physics.service';
import { ChatController } from './chat.controller';
import { OpenTelemetryModule } from 'nestjs-otel';
import { PlayerStorageService } from './storage/player-storage.service';

@Module({
  imports: [OpenTelemetryModule.forRoot()],
  controllers: [
    KeepAliveController,
    LoginController,
    MovementController,
    ChatController,
  ],
  providers: [
    WorldService,
    PlayersService,
    EntitiesService,
    GameService,
    PhysicsService,
    PlayerStorageService,
  ],
})
export class AppModule {}
