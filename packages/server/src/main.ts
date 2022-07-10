/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MinecraftProtocolServer } from './app/mcProtocolTransporter/McProtocolServer';
import otelSDK from './app/tracing';

async function bootstrap() {
  const port = Number(process.env.PORT) || 25565;
  const version = process.env.VERSION || '1.16.5';

  await otelSDK.start()

  const app = await NestFactory.createMicroservice(
    AppModule,
    {
      strategy: new MinecraftProtocolServer({port, version})
    }
  )

  await app.listen();
  Logger.log(
    `🚀 Application is running on: localhost:${port}`
  );
}

bootstrap();
