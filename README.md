# shroomlight

This is my pet project where I try to reimplement a Minecraft server. It relies heavily on [Prismarine](https://github.com/PrismarineJS) and [Glowstone](https://github.com/GlowstoneMC/Glowstone), you should check them out to contribute to more useful projects!

## Structure

### packages/server

A Nest.js app with the game logic. It uses a custom transporter strategy to interface the framework with the `node-minecraft-protocol` lib.

### packages/minecraft-protocol-wrapper

I had a hard time using the minecraft-protocol lib without typing so I used the [same source](https://github.com/PrismarineJS/minecraft-data/blob/master/data/pc/1.16/protocol.json) they use to dynamically generate the protocol to generate the typings. Also added a wrapper for my need.

### packages/dev-proxy

A `docker-compose` with Bungeecord and a plugin to automaticly reconnect. This is usefull to improve developer experience when the dev server restart.

- `nx run dev-proxy:download`: Download the AutoReconnect plugin
- `nx run dev-proxy:serve`: Launch Bungeecord. (localhost:25577)

### screenshots

The place where I share some progress.
