import { ServerSideClientWrapper } from "@shroomlight/minecraft-protocol-wrapper";
import { createServer, PacketMeta, Server, ServerClient } from "minecraft-protocol"
import { World } from "./world";
import { Client } from "./client";
import { Vec3 } from "vec3";
import { Entity } from "./entity";
import { setTimeout } from "timers/promises";

export class GameServer {

  world: World;
  protocolServer: Server;
  version: string;

  nextId = 0
  entities = new Set<Entity>()
  clients = new Set<Client>()
  
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

    this.protocolServer.on("connection", (client) => {
      console.log("connection");     
    })


    this.protocolServer.on('login', client => this.playerLogin(client))

    this.protocolServer.once('listening', () => {
      console.log("Server listening");
    })

    this.gameLoop()
  }

  async gameLoop() {
    let tickCount = 0
    while (true) {
      tickCount++
      const start = Date.now()

      this.sendEntitiesPosition()

      const took = Date.now() - start
      if (took > 0) {
        console.log(`Tick ${tickCount} took ${took}`);

      }
      
      await setTimeout(Math.max(0, 50 - took))
    }
  }

  sendEntitiesPosition(){
    this.clients.forEach(client => {
      this.entities.forEach(entity => {

        if (entity.uuid == client.entity.uuid) {
          return;
        }
        console.log(entity);
        

        client.protocolClientWrapper.entityTeleport({
          entityId: entity.id,
          ...entity.position,
          yaw: entity.yaw,
          pitch: entity.pitch,
          onGround: true
        })

      })
    })
  }

  playerLogin(rawClient: ServerClient) {
    console.log("PlayerLogin");
    
    rawClient.on("packet", (data: any, meta: PacketMeta) => {
      if (!["keep_alive", "position", "position_look"].includes(meta.name)) {
        console.log(meta.name, data);
      }
    })

    const spawnpoint = new Vec3(0, 90, 0)
    const playerEntity = new Entity({
      id: this.nextId++,
      position: spawnpoint,
      yaw: 0,
      pitch: 0
    })

    const wrappedClient = new ServerSideClientWrapper(rawClient)
    const client = new Client(this.version, wrappedClient, playerEntity);

    this.clients.add(client)
    this.entities.add(playerEntity)
    wrappedClient.client.socket.on('end', () => {
      this.entities.delete(playerEntity)
      this.clients.delete(client)
    })

    this.entities.forEach(e => {
      if (e.uuid == client.entity.uuid) {
        return;
      }
      wrappedClient.playerInfo({
        action: 0,
        data: [{
          UUID: e.uuid,
          name: "test",
          properties: '',
          gamemode: 1,
          ping: 1,
        }]
      })
  
      wrappedClient.namedEntitySpawn({
        entityId: e.id,
        x: 2,
        y: 90,
        z: 2,
        playerUUID: e.uuid,
        pitch: 0,
        yaw: 0
      })
    })



    wrappedClient.on("chat", (data) => {
      console.log(data.message);
      wrappedClient.chat({
        message: JSON.stringify({text: `${rawClient.username}: ${data.message}`}),
        sender: rawClient.uuid,
        position: 0
      })
    })

    console.log("get chunk");

    const chunk = this.world.getPlaceHolderChunk()

    client.sendChunk({
      x: 0,
      z: 0,
      chunk
    })
  }
}
