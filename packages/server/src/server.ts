import { ServerSideClientWrapper } from "@shroomlight/minecraft-protocol-wrapper";
import { createServer, PacketMeta, Server, ServerClient } from "minecraft-protocol"
import { World } from "./world";
import { Client } from "./client";

export class GameServer {

  world: World;
  protocolServer: Server;
  version: string;

  constructor(version: string){
    this.version = version
    this.world = new World(version)
    this.protocolServer = createServer({
      'online-mode': true,
      host: '0.0.0.0',
      port: 25565,
      version,
      validateChannelProtocol: false
    })

    this.protocolServer.on('login', client => this.playerLogin(client))

    this.protocolServer.once('listening', () => {
      console.log("Server listening");
    })
  }

  playerLogin(rawClient: ServerClient) {
    rawClient.on("packet", (data: any, meta: PacketMeta) => {
      if (meta.name != "position" && meta.name != "keep_alive") {
        console.log(meta.name, data);
      }
    })
  
    const wrappedClient = new ServerSideClientWrapper(rawClient)
    const client = new Client(this.version, wrappedClient);

    wrappedClient.on("chat", (data) => {
      console.log(data.message);
      wrappedClient.chat({
        message: JSON.stringify({text: `${rawClient.username}: ${data.message}`}),
        sender: rawClient.uuid,
        position: 0
      })
    })

    const chunk = this.world.getPlaceHolderChunk()

    client.sendChunk({
      x: 0,
      z: 0,
      chunk
    })
  }
}
