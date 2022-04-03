import { ServerSideClientWrapper, toClient } from "@shroomlight/minecraft-protocol-wrapper";
import { createServer, PacketMeta, Server, ServerClient } from "minecraft-protocol"
import { World } from "./world";
import { Client } from "./client";
import { Vec3 } from "vec3";
import { Entity } from "./entities/Entity";
import { setTimeout } from "timers/promises";
import { PlayerEntity } from "./entities/PlayerEntity";
import { data, version } from "./data";
import { PCChunk } from "prismarine-chunk";

export class GameServer {

  world: World;
  protocolServer: Server;

  nextId = 1
  entities = new Map<number, Entity>()
  players = new Set<PlayerEntity>()

  placeHolderChunk: PCChunk

  constructor(){
    this.world = new World()
    this.placeHolderChunk = this.world.getPlaceHolderChunk()

    this.protocolServer = createServer({
      'online-mode': false,
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
      position: new Vec3(0, 65, 10),
      yaw: 100,
      pitch: 0,
      world: this.world,
    })
    this.entities.set(sheep.id, sheep)

    this.gameLoop()
  }

  async gameLoop() {
    let tickCount = 0
    while (true) {
      const start = Date.now()

      this.sendEntitiesPosition()

      this.entities.forEach(e => {
        e.pulsePhysic()
      })

      if (tickCount%50 == 0) {
        this.entities.forEach(e => {
          e.velocity.y = 0
          e.location.position.y = 90
        })
      }



      const took = Date.now() - start
      if (took > 5) {
        console.log(`Tick ${tickCount} took ${took}`);
      }


      tickCount++

      await setTimeout(Math.max(0, 50 - took))
    }
  }

  sendEntitiesPosition(){
    this.players.forEach(player => {
      this.entities.forEach(entity => {

        if (entity.id == player.id) {
          return;
        }

        player.client.socket.entityTeleport({
          entityId: entity.id,
          ...entity.location.position,
          yaw: entity.location.yaw,
          pitch: entity.location.pitch,
          onGround: true
        })

        player.client.socket.entityHeadRotation({
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
      pitch: 0,
      world: this.world,
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
      this.players.forEach(p => {
        p.client.socket.chat({
          message: JSON.stringify({text: `${rawClient.username}: ${data.message}`}),
          sender: rawClient.uuid,
          position: 0
        })
      })
    })

    console.log("get chunk");

    player.client.sendChunk({
      x: 0,
      z: 0,
      chunk: this.placeHolderChunk
    })
    player.client.sendChunk({
      x: -1,
      z: 0,
      chunk: this.placeHolderChunk
    })
    player.client.sendChunk({
      x: 0,
      z: -1,
      chunk: this.placeHolderChunk
    })
    player.client.sendChunk({
      x: -1,
      z: -1,
      chunk: this.placeHolderChunk
    })
  }
}
