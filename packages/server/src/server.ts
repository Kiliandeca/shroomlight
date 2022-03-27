import { ServerSideClientWrapper, toClient } from "@shroomlight/minecraft-protocol-wrapper";
import { createServer, PacketMeta, Server, ServerClient } from "minecraft-protocol"
import { World } from "./world";
import { Client } from "./client";
import { Vec3 } from "vec3";
import { Entity } from "./entities/Entity";
import { setTimeout } from "timers/promises";
import { PlayerEntity } from "./entities/PlayerEntity";
import { data, version } from "./data";

export class GameServer {

  world: World;
  protocolServer: Server;

  nextId = 1
  entities = new Map<number, Entity>()
  players = new Set<PlayerEntity>()

  constructor(){
    this.world = new World()
    this.protocolServer = createServer({
      'online-mode': true,
      host: '0.0.0.0',
      port: 25565,
      version,
      validateChannelProtocol: false,
    })

    this.protocolServer.on("connection", (client) => {
      console.log("connection");     
    })


    this.protocolServer.on('login', client => this.playerLogin(client))

    this.protocolServer.once('listening', () => {
      console.log("Server listening");
    })

    const sheep = new Entity({
      id: this.nextId++,
      type: data.entitiesByName.sheep.id,
      position: new Vec3(2, 65, 2),
      yaw: 0,
      pitch: 0,
    })
    this.entities.set(sheep.id, sheep)

    this.gameLoop()
  }

  async gameLoop() {
    let tickCount = 0
    while (true) {
      tickCount++
      const start = Date.now()

      this.sendEntitiesPosition()

      const took = Date.now() - start
      if (took > 5) {
        console.log(`Tick ${tickCount} took ${took}`);

      }

      await setTimeout(Math.max(0, 50 - took))
    }
  }

  sendEntitiesPosition(){
    this.players.forEach(player => {
      this.entities.forEach(entity => {

        if (entity.id == player.id) {
          return;
        }

        player.client.protocolClientWrapper.entityTeleport({
          entityId: entity.id,
          ...entity.location.position,
          yaw: entity.location.yaw,
          pitch: entity.location.pitch,
          onGround: true
        })

        player.client.protocolClientWrapper.entityHeadRotation({
          entityId: entity.id,
          headYaw: entity.location.yaw
        })

      })
    })
  }

  playerLogin(rawClient: ServerClient) {
    console.log("PlayerLogin");
    
    rawClient.on("packet", (data: any, meta: PacketMeta) => {
      if (!["keep_alive", "position", "position_look", "look"].includes(meta.name)) {
        console.log(meta.name, data);
      }
    })

    const wrappedClient = new ServerSideClientWrapper(rawClient)
    const client = new Client(wrappedClient);
    const spawnpoint = new Vec3(0, 65, 0)
    const player = new PlayerEntity({
      client,
      id: this.nextId++,
      type: data.entitiesByName.player.id,
      position: spawnpoint,
      yaw: 0,
      pitch: 0
    })


    this.players.add(player)
    this.entities.set(player.id, player)
    wrappedClient.client.socket.on('end', () => {
      this.entities.delete(player.id)
      this.players.delete(player)
    })

    // Send entities to player
    this.entities.forEach(e => {
      if (e.id == player.id) return
      client.spawnEntity(e)
    })

    // Send new player to others players
    this.players.forEach(p => {
      if (p.id == player.id) return
      p.client.spawnEntity(player)
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

    player.client.sendChunk({
      x: 0,
      z: 0,
      chunk
    })
    player.client.sendChunk({
      x: -1,
      z: 0,
      chunk
    })
    player.client.sendChunk({
      x: 0,
      z: -1,
      chunk
    })
    player.client.sendChunk({
      x: -1,
      z: -1,
      chunk
    })
  }
}
