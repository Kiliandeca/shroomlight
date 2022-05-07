import { CustomTransportStrategy, Server } from '@nestjs/microservices';
import { Server as mcProtoServer, createServer, ServerOptions, ServerClient, PacketMeta } from 'minecraft-protocol';
import { ServerSideClientWrapper, toServer } from '@shroomlight/minecraft-protocol-wrapper';

export class MinecraftProtocolServer extends Server implements CustomTransportStrategy {
  serverOptions: ServerOptions
  protocolServer: mcProtoServer

  constructor(serverOptions: Partial<ServerOptions>){
    super()
    this.serverOptions = {
      validateChannelProtocol: false,
      'online-mode': false,
      keepAlive: true,
      ...serverOptions
    }
  }

  listen(callback: () => void) {

    this.protocolServer = createServer(this.serverOptions);

    this.protocolServer.on('connection', (client) => {
      const wrappedClient = new ServerSideClientWrapper(client);
      this.bindHandler(wrappedClient)
    });

    this.protocolServer.on('login', () => this.logger.log('login'));
    this.protocolServer.once('listening', () => this.logger.log('listening'));

    callback();
  }

  close() {
    this.protocolServer.close()
  }

  bindHandler(wrappedClient: ServerSideClientWrapper) {
    wrappedClient.client.on('packet', (packet, meta) => {
      this.handlePacket(wrappedClient, packet, meta)
    })
  }

  async handlePacket(wrappedClient: ServerSideClientWrapper & {ctx?: unknown}, packet, meta: PacketMeta) {
    const handler = this.getHandlerByPattern(meta.name)
    if (!handler) {
      this.logger.warn(`No handler found for packet ${meta.name}`)
      console.log(meta.name, packet);
    return
    }

    const context = wrappedClient.ctx ? wrappedClient.ctx : wrappedClient

    await handler(packet, context)
  }
}