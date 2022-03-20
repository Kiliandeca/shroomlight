/// <reference types="node" />

import { EventEmitter } from 'events';
import { Socket } from 'net'
import * as Stream from 'stream'
import { Agent } from 'http'
import * as toClient from './toClientPacketsParams'
import * as toServer from './toServerPacketsParams'

type PromiseLike = Promise<void> | void

declare module 'minecraft-protocol' {
	export class Client extends EventEmitter {
		constructor(isServer: boolean, version: string, customPackets?: any)
		state: States
		isServer: boolean
		socket: Socket
		uuid: string
		username: string
		session?: SessionOption
		profile?: any
		latency: number
		customPackets: any
		protocolVersion: number
		version: string
		write(name: string, params: any): void
		// TODO refact using generic and keyof
		write(name: "set_protocol", params: toServer.SetProtocolParams): void
		write(name: "legacy_server_list_ping", params: toServer.LegacyServerListPingParams): void
		write(name: "ping_start", params: toServer.PingStartParams): void
		write(name: "ping", params: toServer.PingParams): void
		write(name: "login_start", params: toServer.LoginStartParams): void
		write(name: "encryption_begin", params: toServer.EncryptionBeginParams): void
		write(name: "login_plugin_response", params: toServer.LoginPluginResponseParams): void
		write(name: "teleport_confirm", params: toServer.TeleportConfirmParams): void
		write(name: "query_block_nbt", params: toServer.QueryBlockNbtParams): void
		write(name: "set_difficulty", params: toServer.SetDifficultyParams): void
		write(name: "chat", params: toServer.ChatParams): void
		write(name: "client_command", params: toServer.ClientCommandParams): void
		write(name: "settings", params: toServer.SettingsParams): void
		write(name: "tab_complete", params: toServer.TabCompleteParams): void
		write(name: "transaction", params: toServer.TransactionParams): void
		write(name: "enchant_item", params: toServer.EnchantItemParams): void
		write(name: "window_click", params: toServer.WindowClickParams): void
		write(name: "close_window", params: toServer.CloseWindowParams): void
		write(name: "custom_payload", params: toServer.CustomPayloadParams): void
		write(name: "edit_book", params: toServer.EditBookParams): void
		write(name: "query_entity_nbt", params: toServer.QueryEntityNbtParams): void
		write(name: "use_entity", params: toServer.UseEntityParams): void
		write(name: "generate_structure", params: toServer.GenerateStructureParams): void
		write(name: "keep_alive", params: toServer.KeepAliveParams): void
		write(name: "lock_difficulty", params: toServer.LockDifficultyParams): void
		write(name: "position", params: toServer.PositionParams): void
		write(name: "position_look", params: toServer.PositionLookParams): void
		write(name: "look", params: toServer.LookParams): void
		write(name: "flying", params: toServer.FlyingParams): void
		write(name: "vehicle_move", params: toServer.VehicleMoveParams): void
		write(name: "steer_boat", params: toServer.SteerBoatParams): void
		write(name: "pick_item", params: toServer.PickItemParams): void
		write(name: "craft_recipe_request", params: toServer.CraftRecipeRequestParams): void
		write(name: "abilities", params: toServer.AbilitiesParams): void
		write(name: "block_dig", params: toServer.BlockDigParams): void
		write(name: "entity_action", params: toServer.EntityActionParams): void
		write(name: "steer_vehicle", params: toServer.SteerVehicleParams): void
		write(name: "recipe_book", params: toServer.RecipeBookParams): void
		write(name: "displayed_recipe", params: toServer.DisplayedRecipeParams): void
		write(name: "name_item", params: toServer.NameItemParams): void
		write(name: "resource_pack_receive", params: toServer.ResourcePackReceiveParams): void
		write(name: "advancement_tab", params: toServer.AdvancementTabParams): void
		write(name: "select_trade", params: toServer.SelectTradeParams): void
		write(name: "set_beacon_effect", params: toServer.SetBeaconEffectParams): void
		write(name: "held_item_slot", params: toServer.HeldItemSlotParams): void
		write(name: "update_command_block", params: toServer.UpdateCommandBlockParams): void
		write(name: "update_command_block_minecart", params: toServer.UpdateCommandBlockMinecartParams): void
		write(name: "set_creative_slot", params: toServer.SetCreativeSlotParams): void
		write(name: "update_jigsaw_block", params: toServer.UpdateJigsawBlockParams): void
		write(name: "update_structure_block", params: toServer.UpdateStructureBlockParams): void
		write(name: "update_sign", params: toServer.UpdateSignParams): void
		write(name: "arm_animation", params: toServer.ArmAnimationParams): void
		write(name: "spectate", params: toServer.SpectateParams): void
		write(name: "block_place", params: toServer.BlockPlaceParams): void
		write(name: "use_item", params: toServer.UseItemParams): void
		write(name: "server_info", params: toClient.ServerInfoParams): void
		write(name: "ping", params: toClient.PingParams): void
		write(name: "disconnect", params: toClient.DisconnectParams): void
		write(name: "encryption_begin", params: toClient.EncryptionBeginParams): void
		write(name: "success", params: toClient.SuccessParams): void
		write(name: "compress", params: toClient.CompressParams): void
		write(name: "login_plugin_request", params: toClient.LoginPluginRequestParams): void
		write(name: "spawn_entity", params: toClient.SpawnEntityParams): void
		write(name: "spawn_entity_experience_orb", params: toClient.SpawnEntityExperienceOrbParams): void
		write(name: "spawn_entity_living", params: toClient.SpawnEntityLivingParams): void
		write(name: "spawn_entity_painting", params: toClient.SpawnEntityPaintingParams): void
		write(name: "named_entity_spawn", params: toClient.NamedEntitySpawnParams): void
		write(name: "animation", params: toClient.AnimationParams): void
		write(name: "statistics", params: toClient.StatisticsParams): void
		write(name: "acknowledge_player_digging", params: toClient.AcknowledgePlayerDiggingParams): void
		write(name: "block_break_animation", params: toClient.BlockBreakAnimationParams): void
		write(name: "tile_entity_data", params: toClient.TileEntityDataParams): void
		write(name: "block_action", params: toClient.BlockActionParams): void
		write(name: "block_change", params: toClient.BlockChangeParams): void
		write(name: "boss_bar", params: toClient.BossBarParams): void
		write(name: "difficulty", params: toClient.DifficultyParams): void
		write(name: "chat", params: toClient.ChatParams): void
		write(name: "tab_complete", params: toClient.TabCompleteParams): void
		write(name: "declare_commands", params: toClient.DeclareCommandsParams): void
		write(name: "transaction", params: toClient.TransactionParams): void
		write(name: "close_window", params: toClient.CloseWindowParams): void
		write(name: "window_items", params: toClient.WindowItemsParams): void
		write(name: "craft_progress_bar", params: toClient.CraftProgressBarParams): void
		write(name: "set_slot", params: toClient.SetSlotParams): void
		write(name: "set_cooldown", params: toClient.SetCooldownParams): void
		write(name: "custom_payload", params: toClient.CustomPayloadParams): void
		write(name: "named_sound_effect", params: toClient.NamedSoundEffectParams): void
		write(name: "kick_disconnect", params: toClient.KickDisconnectParams): void
		write(name: "entity_status", params: toClient.EntityStatusParams): void
		write(name: "explosion", params: toClient.ExplosionParams): void
		write(name: "unload_chunk", params: toClient.UnloadChunkParams): void
		write(name: "game_state_change", params: toClient.GameStateChangeParams): void
		write(name: "open_horse_window", params: toClient.OpenHorseWindowParams): void
		write(name: "keep_alive", params: toClient.KeepAliveParams): void
		write(name: "map_chunk", params: toClient.MapChunkParams): void
		write(name: "world_event", params: toClient.WorldEventParams): void
		write(name: "world_particles", params: toClient.WorldParticlesParams): void
		write(name: "update_light", params: toClient.UpdateLightParams): void
		write(name: "login", params: toClient.LoginParams): void
		write(name: "map", params: toClient.MapParams): void
		write(name: "trade_list", params: toClient.TradeListParams): void
		write(name: "rel_entity_move", params: toClient.RelEntityMoveParams): void
		write(name: "entity_move_look", params: toClient.EntityMoveLookParams): void
		write(name: "entity_look", params: toClient.EntityLookParams): void
		write(name: "entity", params: toClient.EntityParams): void
		write(name: "vehicle_move", params: toClient.VehicleMoveParams): void
		write(name: "open_book", params: toClient.OpenBookParams): void
		write(name: "open_window", params: toClient.OpenWindowParams): void
		write(name: "open_sign_entity", params: toClient.OpenSignEntityParams): void
		write(name: "craft_recipe_response", params: toClient.CraftRecipeResponseParams): void
		write(name: "abilities", params: toClient.AbilitiesParams): void
		write(name: "combat_event", params: toClient.CombatEventParams): void
		write(name: "player_info", params: toClient.PlayerInfoParams): void
		write(name: "face_player", params: toClient.FacePlayerParams): void
		write(name: "position", params: toClient.PositionParams): void
		write(name: "unlock_recipes", params: toClient.UnlockRecipesParams): void
		write(name: "entity_destroy", params: toClient.EntityDestroyParams): void
		write(name: "remove_entity_effect", params: toClient.RemoveEntityEffectParams): void
		write(name: "resource_pack_send", params: toClient.ResourcePackSendParams): void
		write(name: "respawn", params: toClient.RespawnParams): void
		write(name: "entity_head_rotation", params: toClient.EntityHeadRotationParams): void
		write(name: "multi_block_change", params: toClient.MultiBlockChangeParams): void
		write(name: "select_advancement_tab", params: toClient.SelectAdvancementTabParams): void
		write(name: "world_border", params: toClient.WorldBorderParams): void
		write(name: "camera", params: toClient.CameraParams): void
		write(name: "held_item_slot", params: toClient.HeldItemSlotParams): void
		write(name: "update_view_position", params: toClient.UpdateViewPositionParams): void
		write(name: "update_view_distance", params: toClient.UpdateViewDistanceParams): void
		write(name: "spawn_position", params: toClient.SpawnPositionParams): void
		write(name: "scoreboard_display_objective", params: toClient.ScoreboardDisplayObjectiveParams): void
		write(name: "entity_metadata", params: toClient.EntityMetadataParams): void
		write(name: "attach_entity", params: toClient.AttachEntityParams): void
		write(name: "entity_velocity", params: toClient.EntityVelocityParams): void
		write(name: "entity_equipment", params: toClient.EntityEquipmentParams): void
		write(name: "experience", params: toClient.ExperienceParams): void
		write(name: "update_health", params: toClient.UpdateHealthParams): void
		write(name: "scoreboard_objective", params: toClient.ScoreboardObjectiveParams): void
		write(name: "set_passengers", params: toClient.SetPassengersParams): void
		write(name: "teams", params: toClient.TeamsParams): void
		write(name: "scoreboard_score", params: toClient.ScoreboardScoreParams): void
		write(name: "update_time", params: toClient.UpdateTimeParams): void
		write(name: "title", params: toClient.TitleParams): void
		write(name: "entity_sound_effect", params: toClient.EntitySoundEffectParams): void
		write(name: "sound_effect", params: toClient.SoundEffectParams): void
		write(name: "stop_sound", params: toClient.StopSoundParams): void
		write(name: "playerlist_header", params: toClient.PlayerlistHeaderParams): void
		write(name: "nbt_query_response", params: toClient.NbtQueryResponseParams): void
		write(name: "collect", params: toClient.CollectParams): void
		write(name: "entity_teleport", params: toClient.EntityTeleportParams): void
		write(name: "advancements", params: toClient.AdvancementsParams): void
		write(name: "entity_update_attributes", params: toClient.EntityUpdateAttributesParams): void
		write(name: "entity_effect", params: toClient.EntityEffectParams): void
		write(name: "declare_recipes", params: toClient.DeclareRecipesParams): void
		write(name: "tags", params: toClient.TagsParams): void
		writeRaw(buffer: any): void
		compressionThreshold: string
		ended: boolean
		connect(port: number, host: string): void
		setSocket(socket: Socket): void
		end(reason?: string): void
		registerChannel(name: string, typeDefinition: any, custom?: boolean): void
		unregisterChannel(name: string): void
		writeChannel(channel: any, params: any): void
		on(event: 'error', listener: (error: Error) => PromiseLike): this
		on(event: 'packet', handler: (data: any, packetMeta: PacketMeta, buffer: Buffer, fullBuffer: Buffer) => PromiseLike): this
		on(event: 'raw', handler: (buffer: Buffer, packetMeta: PacketMeta) => PromiseLike): this
		on(event: 'session', handler: (session: SessionObject) => PromiseLike): this
		on(event: 'state', handler: (newState: States, oldState: States) => PromiseLike): this
		on(event: 'end', handler: (reason: string) => PromiseLike): this
		on(event: 'connect', handler: () => PromiseLike): this
		on(event: string, handler: (data: any, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "server_info", handler: (data: toClient.ServerInfoParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "ping", handler: (data: toClient.PingParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "disconnect", handler: (data: toClient.DisconnectParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "encryption_begin", handler: (data: toClient.EncryptionBeginParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "success", handler: (data: toClient.SuccessParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "compress", handler: (data: toClient.CompressParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "login_plugin_request", handler: (data: toClient.LoginPluginRequestParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "spawn_entity", handler: (data: toClient.SpawnEntityParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "spawn_entity_experience_orb", handler: (data: toClient.SpawnEntityExperienceOrbParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "spawn_entity_living", handler: (data: toClient.SpawnEntityLivingParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "spawn_entity_painting", handler: (data: toClient.SpawnEntityPaintingParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "named_entity_spawn", handler: (data: toClient.NamedEntitySpawnParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "animation", handler: (data: toClient.AnimationParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "statistics", handler: (data: toClient.StatisticsParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "acknowledge_player_digging", handler: (data: toClient.AcknowledgePlayerDiggingParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "block_break_animation", handler: (data: toClient.BlockBreakAnimationParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "tile_entity_data", handler: (data: toClient.TileEntityDataParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "block_action", handler: (data: toClient.BlockActionParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "block_change", handler: (data: toClient.BlockChangeParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "boss_bar", handler: (data: toClient.BossBarParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "difficulty", handler: (data: toClient.DifficultyParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "chat", handler: (data: toClient.ChatParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "tab_complete", handler: (data: toClient.TabCompleteParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "declare_commands", handler: (data: toClient.DeclareCommandsParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "transaction", handler: (data: toClient.TransactionParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "close_window", handler: (data: toClient.CloseWindowParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "window_items", handler: (data: toClient.WindowItemsParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "craft_progress_bar", handler: (data: toClient.CraftProgressBarParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "set_slot", handler: (data: toClient.SetSlotParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "set_cooldown", handler: (data: toClient.SetCooldownParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "custom_payload", handler: (data: toClient.CustomPayloadParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "named_sound_effect", handler: (data: toClient.NamedSoundEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "kick_disconnect", handler: (data: toClient.KickDisconnectParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_status", handler: (data: toClient.EntityStatusParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "explosion", handler: (data: toClient.ExplosionParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "unload_chunk", handler: (data: toClient.UnloadChunkParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "game_state_change", handler: (data: toClient.GameStateChangeParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "open_horse_window", handler: (data: toClient.OpenHorseWindowParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "keep_alive", handler: (data: toClient.KeepAliveParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "map_chunk", handler: (data: toClient.MapChunkParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "world_event", handler: (data: toClient.WorldEventParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "world_particles", handler: (data: toClient.WorldParticlesParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "update_light", handler: (data: toClient.UpdateLightParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "login", handler: (data: toClient.LoginParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "map", handler: (data: toClient.MapParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "trade_list", handler: (data: toClient.TradeListParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "rel_entity_move", handler: (data: toClient.RelEntityMoveParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_move_look", handler: (data: toClient.EntityMoveLookParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_look", handler: (data: toClient.EntityLookParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity", handler: (data: toClient.EntityParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "vehicle_move", handler: (data: toClient.VehicleMoveParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "open_book", handler: (data: toClient.OpenBookParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "open_window", handler: (data: toClient.OpenWindowParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "open_sign_entity", handler: (data: toClient.OpenSignEntityParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "craft_recipe_response", handler: (data: toClient.CraftRecipeResponseParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "abilities", handler: (data: toClient.AbilitiesParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "combat_event", handler: (data: toClient.CombatEventParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "player_info", handler: (data: toClient.PlayerInfoParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "face_player", handler: (data: toClient.FacePlayerParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "position", handler: (data: toClient.PositionParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "unlock_recipes", handler: (data: toClient.UnlockRecipesParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_destroy", handler: (data: toClient.EntityDestroyParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "remove_entity_effect", handler: (data: toClient.RemoveEntityEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "resource_pack_send", handler: (data: toClient.ResourcePackSendParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "respawn", handler: (data: toClient.RespawnParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_head_rotation", handler: (data: toClient.EntityHeadRotationParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "multi_block_change", handler: (data: toClient.MultiBlockChangeParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "select_advancement_tab", handler: (data: toClient.SelectAdvancementTabParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "world_border", handler: (data: toClient.WorldBorderParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "camera", handler: (data: toClient.CameraParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "held_item_slot", handler: (data: toClient.HeldItemSlotParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "update_view_position", handler: (data: toClient.UpdateViewPositionParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "update_view_distance", handler: (data: toClient.UpdateViewDistanceParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "spawn_position", handler: (data: toClient.SpawnPositionParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "scoreboard_display_objective", handler: (data: toClient.ScoreboardDisplayObjectiveParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_metadata", handler: (data: toClient.EntityMetadataParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "attach_entity", handler: (data: toClient.AttachEntityParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_velocity", handler: (data: toClient.EntityVelocityParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_equipment", handler: (data: toClient.EntityEquipmentParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "experience", handler: (data: toClient.ExperienceParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "update_health", handler: (data: toClient.UpdateHealthParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "scoreboard_objective", handler: (data: toClient.ScoreboardObjectiveParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "set_passengers", handler: (data: toClient.SetPassengersParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "teams", handler: (data: toClient.TeamsParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "scoreboard_score", handler: (data: toClient.ScoreboardScoreParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "update_time", handler: (data: toClient.UpdateTimeParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "title", handler: (data: toClient.TitleParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_sound_effect", handler: (data: toClient.EntitySoundEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "sound_effect", handler: (data: toClient.SoundEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "stop_sound", handler: (data: toClient.StopSoundParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "playerlist_header", handler: (data: toClient.PlayerlistHeaderParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "nbt_query_response", handler: (data: toClient.NbtQueryResponseParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "collect", handler: (data: toClient.CollectParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_teleport", handler: (data: toClient.EntityTeleportParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "advancements", handler: (data: toClient.AdvancementsParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_update_attributes", handler: (data: toClient.EntityUpdateAttributesParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_effect", handler: (data: toClient.EntityEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "declare_recipes", handler: (data: toClient.DeclareRecipesParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "tags", handler: (data: toClient.TagsParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "set_protocol", handler: (data: toServer.SetProtocolParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "legacy_server_list_ping", handler: (data: toServer.LegacyServerListPingParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "ping_start", handler: (data: toServer.PingStartParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "ping", handler: (data: toServer.PingParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "login_start", handler: (data: toServer.LoginStartParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "encryption_begin", handler: (data: toServer.EncryptionBeginParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "login_plugin_response", handler: (data: toServer.LoginPluginResponseParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "teleport_confirm", handler: (data: toServer.TeleportConfirmParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "query_block_nbt", handler: (data: toServer.QueryBlockNbtParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "set_difficulty", handler: (data: toServer.SetDifficultyParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "chat", handler: (data: toServer.ChatParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "client_command", handler: (data: toServer.ClientCommandParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "settings", handler: (data: toServer.SettingsParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "tab_complete", handler: (data: toServer.TabCompleteParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "transaction", handler: (data: toServer.TransactionParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "enchant_item", handler: (data: toServer.EnchantItemParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "window_click", handler: (data: toServer.WindowClickParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "close_window", handler: (data: toServer.CloseWindowParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "custom_payload", handler: (data: toServer.CustomPayloadParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "edit_book", handler: (data: toServer.EditBookParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "query_entity_nbt", handler: (data: toServer.QueryEntityNbtParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "use_entity", handler: (data: toServer.UseEntityParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "generate_structure", handler: (data: toServer.GenerateStructureParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "keep_alive", handler: (data: toServer.KeepAliveParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "lock_difficulty", handler: (data: toServer.LockDifficultyParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "position", handler: (data: toServer.PositionParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "position_look", handler: (data: toServer.PositionLookParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "look", handler: (data: toServer.LookParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "flying", handler: (data: toServer.FlyingParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "vehicle_move", handler: (data: toServer.VehicleMoveParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "steer_boat", handler: (data: toServer.SteerBoatParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "pick_item", handler: (data: toServer.PickItemParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "craft_recipe_request", handler: (data: toServer.CraftRecipeRequestParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "abilities", handler: (data: toServer.AbilitiesParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "block_dig", handler: (data: toServer.BlockDigParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "entity_action", handler: (data: toServer.EntityActionParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "steer_vehicle", handler: (data: toServer.SteerVehicleParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "recipe_book", handler: (data: toServer.RecipeBookParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "displayed_recipe", handler: (data: toServer.DisplayedRecipeParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "name_item", handler: (data: toServer.NameItemParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "resource_pack_receive", handler: (data: toServer.ResourcePackReceiveParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "advancement_tab", handler: (data: toServer.AdvancementTabParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "select_trade", handler: (data: toServer.SelectTradeParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "set_beacon_effect", handler: (data: toServer.SetBeaconEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "held_item_slot", handler: (data: toServer.HeldItemSlotParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "update_command_block", handler: (data: toServer.UpdateCommandBlockParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "update_command_block_minecart", handler: (data: toServer.UpdateCommandBlockMinecartParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "set_creative_slot", handler: (data: toServer.SetCreativeSlotParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "update_jigsaw_block", handler: (data: toServer.UpdateJigsawBlockParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "update_structure_block", handler: (data: toServer.UpdateStructureBlockParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "update_sign", handler: (data: toServer.UpdateSignParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "arm_animation", handler: (data: toServer.ArmAnimationParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "spectate", handler: (data: toServer.SpectateParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "block_place", handler: (data: toServer.BlockPlaceParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: "use_item", handler: (data: toServer.UseItemParams, packetMeta: PacketMeta) => PromiseLike): this
		on(event: `raw.${string}`, handler: (buffer: Buffer, packetMeta: PacketMeta) => PromiseLike): this
		once(event: 'error', listener: (error: Error) => PromiseLike): this
		once(event: 'packet', handler: (data: any, packetMeta: PacketMeta, buffer: Buffer, fullBuffer: Buffer) => PromiseLike): this
		once(event: 'raw', handler: (buffer: Buffer, packetMeta: PacketMeta) => PromiseLike): this
		once(event: 'sessionce', handler: (sessionce: any) => PromiseLike): this
		once(event: 'state', handler: (newState: States, oldState: States) => PromiseLike): this
		once(event: 'end', handler: (reasonce: string) => PromiseLike): this
		once(event: 'concenect', handler: () => PromiseLike): this
		once(event: string, handler: (data: any, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "server_info", handler: (data: toClient.ServerInfoParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "ping", handler: (data: toClient.PingParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "disconnect", handler: (data: toClient.DisconnectParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "encryption_begin", handler: (data: toClient.EncryptionBeginParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "success", handler: (data: toClient.SuccessParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "compress", handler: (data: toClient.CompressParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "login_plugin_request", handler: (data: toClient.LoginPluginRequestParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "spawn_entity", handler: (data: toClient.SpawnEntityParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "spawn_entity_experience_orb", handler: (data: toClient.SpawnEntityExperienceOrbParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "spawn_entity_living", handler: (data: toClient.SpawnEntityLivingParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "spawn_entity_painting", handler: (data: toClient.SpawnEntityPaintingParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "named_entity_spawn", handler: (data: toClient.NamedEntitySpawnParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "animation", handler: (data: toClient.AnimationParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "statistics", handler: (data: toClient.StatisticsParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "acknowledge_player_digging", handler: (data: toClient.AcknowledgePlayerDiggingParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "block_break_animation", handler: (data: toClient.BlockBreakAnimationParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "tile_entity_data", handler: (data: toClient.TileEntityDataParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "block_action", handler: (data: toClient.BlockActionParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "block_change", handler: (data: toClient.BlockChangeParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "boss_bar", handler: (data: toClient.BossBarParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "difficulty", handler: (data: toClient.DifficultyParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "chat", handler: (data: toClient.ChatParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "tab_complete", handler: (data: toClient.TabCompleteParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "declare_commands", handler: (data: toClient.DeclareCommandsParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "transaction", handler: (data: toClient.TransactionParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "close_window", handler: (data: toClient.CloseWindowParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "window_items", handler: (data: toClient.WindowItemsParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "craft_progress_bar", handler: (data: toClient.CraftProgressBarParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "set_slot", handler: (data: toClient.SetSlotParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "set_cooldown", handler: (data: toClient.SetCooldownParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "custom_payload", handler: (data: toClient.CustomPayloadParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "named_sound_effect", handler: (data: toClient.NamedSoundEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "kick_disconnect", handler: (data: toClient.KickDisconnectParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_status", handler: (data: toClient.EntityStatusParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "explosion", handler: (data: toClient.ExplosionParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "unload_chunk", handler: (data: toClient.UnloadChunkParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "game_state_change", handler: (data: toClient.GameStateChangeParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "open_horse_window", handler: (data: toClient.OpenHorseWindowParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "keep_alive", handler: (data: toClient.KeepAliveParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "map_chunk", handler: (data: toClient.MapChunkParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "world_event", handler: (data: toClient.WorldEventParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "world_particles", handler: (data: toClient.WorldParticlesParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "update_light", handler: (data: toClient.UpdateLightParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "login", handler: (data: toClient.LoginParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "map", handler: (data: toClient.MapParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "trade_list", handler: (data: toClient.TradeListParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "rel_entity_move", handler: (data: toClient.RelEntityMoveParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_move_look", handler: (data: toClient.EntityMoveLookParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_look", handler: (data: toClient.EntityLookParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity", handler: (data: toClient.EntityParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "vehicle_move", handler: (data: toClient.VehicleMoveParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "open_book", handler: (data: toClient.OpenBookParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "open_window", handler: (data: toClient.OpenWindowParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "open_sign_entity", handler: (data: toClient.OpenSignEntityParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "craft_recipe_response", handler: (data: toClient.CraftRecipeResponseParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "abilities", handler: (data: toClient.AbilitiesParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "combat_event", handler: (data: toClient.CombatEventParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "player_info", handler: (data: toClient.PlayerInfoParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "face_player", handler: (data: toClient.FacePlayerParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "position", handler: (data: toClient.PositionParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "unlock_recipes", handler: (data: toClient.UnlockRecipesParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_destroy", handler: (data: toClient.EntityDestroyParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "remove_entity_effect", handler: (data: toClient.RemoveEntityEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "resource_pack_send", handler: (data: toClient.ResourcePackSendParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "respawn", handler: (data: toClient.RespawnParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_head_rotation", handler: (data: toClient.EntityHeadRotationParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "multi_block_change", handler: (data: toClient.MultiBlockChangeParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "select_advancement_tab", handler: (data: toClient.SelectAdvancementTabParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "world_border", handler: (data: toClient.WorldBorderParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "camera", handler: (data: toClient.CameraParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "held_item_slot", handler: (data: toClient.HeldItemSlotParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "update_view_position", handler: (data: toClient.UpdateViewPositionParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "update_view_distance", handler: (data: toClient.UpdateViewDistanceParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "spawn_position", handler: (data: toClient.SpawnPositionParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "scoreboard_display_objective", handler: (data: toClient.ScoreboardDisplayObjectiveParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_metadata", handler: (data: toClient.EntityMetadataParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "attach_entity", handler: (data: toClient.AttachEntityParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_velocity", handler: (data: toClient.EntityVelocityParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_equipment", handler: (data: toClient.EntityEquipmentParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "experience", handler: (data: toClient.ExperienceParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "update_health", handler: (data: toClient.UpdateHealthParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "scoreboard_objective", handler: (data: toClient.ScoreboardObjectiveParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "set_passengers", handler: (data: toClient.SetPassengersParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "teams", handler: (data: toClient.TeamsParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "scoreboard_score", handler: (data: toClient.ScoreboardScoreParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "update_time", handler: (data: toClient.UpdateTimeParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "title", handler: (data: toClient.TitleParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_sound_effect", handler: (data: toClient.EntitySoundEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "sound_effect", handler: (data: toClient.SoundEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "stop_sound", handler: (data: toClient.StopSoundParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "playerlist_header", handler: (data: toClient.PlayerlistHeaderParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "nbt_query_response", handler: (data: toClient.NbtQueryResponseParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "collect", handler: (data: toClient.CollectParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_teleport", handler: (data: toClient.EntityTeleportParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "advancements", handler: (data: toClient.AdvancementsParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_update_attributes", handler: (data: toClient.EntityUpdateAttributesParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_effect", handler: (data: toClient.EntityEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "declare_recipes", handler: (data: toClient.DeclareRecipesParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "tags", handler: (data: toClient.TagsParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "set_protocol", handler: (data: toServer.SetProtocolParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "legacy_server_list_ping", handler: (data: toServer.LegacyServerListPingParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "ping_start", handler: (data: toServer.PingStartParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "ping", handler: (data: toServer.PingParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "login_start", handler: (data: toServer.LoginStartParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "encryption_begin", handler: (data: toServer.EncryptionBeginParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "login_plugin_response", handler: (data: toServer.LoginPluginResponseParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "teleport_confirm", handler: (data: toServer.TeleportConfirmParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "query_block_nbt", handler: (data: toServer.QueryBlockNbtParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "set_difficulty", handler: (data: toServer.SetDifficultyParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "chat", handler: (data: toServer.ChatParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "client_command", handler: (data: toServer.ClientCommandParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "settings", handler: (data: toServer.SettingsParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "tab_complete", handler: (data: toServer.TabCompleteParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "transaction", handler: (data: toServer.TransactionParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "enchant_item", handler: (data: toServer.EnchantItemParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "window_click", handler: (data: toServer.WindowClickParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "close_window", handler: (data: toServer.CloseWindowParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "custom_payload", handler: (data: toServer.CustomPayloadParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "edit_book", handler: (data: toServer.EditBookParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "query_entity_nbt", handler: (data: toServer.QueryEntityNbtParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "use_entity", handler: (data: toServer.UseEntityParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "generate_structure", handler: (data: toServer.GenerateStructureParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "keep_alive", handler: (data: toServer.KeepAliveParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "lock_difficulty", handler: (data: toServer.LockDifficultyParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "position", handler: (data: toServer.PositionParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "position_look", handler: (data: toServer.PositionLookParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "look", handler: (data: toServer.LookParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "flying", handler: (data: toServer.FlyingParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "vehicle_move", handler: (data: toServer.VehicleMoveParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "steer_boat", handler: (data: toServer.SteerBoatParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "pick_item", handler: (data: toServer.PickItemParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "craft_recipe_request", handler: (data: toServer.CraftRecipeRequestParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "abilities", handler: (data: toServer.AbilitiesParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "block_dig", handler: (data: toServer.BlockDigParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "entity_action", handler: (data: toServer.EntityActionParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "steer_vehicle", handler: (data: toServer.SteerVehicleParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "recipe_book", handler: (data: toServer.RecipeBookParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "displayed_recipe", handler: (data: toServer.DisplayedRecipeParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "name_item", handler: (data: toServer.NameItemParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "resource_pack_receive", handler: (data: toServer.ResourcePackReceiveParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "advancement_tab", handler: (data: toServer.AdvancementTabParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "select_trade", handler: (data: toServer.SelectTradeParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "set_beacon_effect", handler: (data: toServer.SetBeaconEffectParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "held_item_slot", handler: (data: toServer.HeldItemSlotParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "update_command_block", handler: (data: toServer.UpdateCommandBlockParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "update_command_block_minecart", handler: (data: toServer.UpdateCommandBlockMinecartParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "set_creative_slot", handler: (data: toServer.SetCreativeSlotParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "update_jigsaw_block", handler: (data: toServer.UpdateJigsawBlockParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "update_structure_block", handler: (data: toServer.UpdateStructureBlockParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "update_sign", handler: (data: toServer.UpdateSignParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "arm_animation", handler: (data: toServer.ArmAnimationParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "spectate", handler: (data: toServer.SpectateParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "block_place", handler: (data: toServer.BlockPlaceParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: "use_item", handler: (data: toServer.UseItemParams, packetMeta: PacketMeta) => PromiseLike): this
		once(event: `raw.${string}`, handler: (buffer: Buffer, packetMeta: PacketMeta) => PromiseLike): this
	}

	export interface SessionOption {
		accessToken: string,
		/** My be needed for mojang auth. Is send by mojang on username + password auth */
		clientToken?: string,
		selectedProfile: SessionProfile
	}

	export interface SessionObject {
		accessToken: string,
		/** My be needed for mojang auth. Is send by mojang on username + password auth */
		clientToken?: string,
		selectedProfile: {
			name: string
			id: string
		}
		availableProfiles?: SessionProfile[]
		availableProfile?: SessionProfile[]
	}

	interface SessionProfile {
		/** Character in game name */
		name: string
		/** Character UUID in short form */
		id: string
	}

	export interface ClientOptions {
		username: string
		port?: number
		auth?: 'mojang' | 'microsoft'
		password?: string
		host?: string
		clientToken?: string
		accessToken?: string
		authServer?: string
		authTitle?: string
		sessionServer?: string
		keepAlive?: boolean
		closeTimeout?: number 
		noPongTimeout?: number
		checkTimeoutInterval?: number
		version?: string
		customPackets?: any
		hideErrors?: boolean
		skipValidation?: boolean
		stream?: Stream
		connect?: (client: Client) => void
		agent?: Agent
		fakeHost?: string
		profilesFolder?: string
		onMsaCode?: (data: MicrosoftDeviceAuthorizationResponse) => void
		id?: number
		session?: SessionOption
	}

	export class Server extends EventEmitter {
		constructor(version: string, customPackets?: any)
		writeToClients(clients: Client[], name: string, params: any): void
		onlineModeExceptions: object
		clients: ClientsMap
		playerCount: number
		maxPlayers: number
		motd: string
		favicon: string
		close(): void
		on(event: 'connection', handler: (client: ServerClient) => PromiseLike): this
		on(event: 'error', listener: (error: Error) => PromiseLike): this
		on(event: 'login', handler: (client: ServerClient) => PromiseLike): this
		on(event: 'listening', listener: () => PromiseLike): this
		once(event: 'connection', handler: (client: ServerClient) => PromiseLike): this
		once(event: 'error', listener: (error: Error) => PromiseLike): this
		once(event: 'login', handler: (client: ServerClient) => PromiseLike): this
		once(event: 'listening', listener: () => PromiseLike): this
	}

	export interface ServerClient extends Client {
		id: number
	}

	export interface ServerOptions {
		port?: number
		host?: string
		kickTimeout?: number
		checkTimeoutInterval?: number
		'online-mode'?: boolean
		beforePing?: (response: any, client: Client, callback?: (error: any, result: any) => any) => any
		beforeLogin?: (client: Client) => void
		motd?: string
		maxPlayers?: number
		keepAlive?: boolean
		version?: string
		favicon?: string
		customPackets?: any
		errorHandler?: (client: Client, error: Error) => void
		hideErrors?: boolean
		agent?: Agent
	}

	export interface SerializerOptions {
		customPackets: any
		isServer?: boolean
		state?: States
		version: string
	}
	
	export interface MicrosoftDeviceAuthorizationResponse {
		device_code: string
		user_code: string
		verification_uri: string
		expires_in: number
		interval: number
		message: string
	}

	enum States {
		HANDSHAKING = 'handshaking',
		LOGIN = 'login',
		PLAY = 'play',
		STATUS = 'status',
	}

	export interface PacketMeta {
		name: string
		state: States
	}

	interface ClientsMap {
		[key: number]: Client
	}

	export interface PingOptions {
		host?: string
		majorVersion?: string
		port?: number
		protocolVersion?: string
		version?: string
		closeTimeout?: number
		noPongTimeout?: number
	}

	export interface OldPingResult {
		maxPlayers: number,
		motd: string
		playerCount: number
		prefix: string
		protocol: number
		version: string
	}

	export interface NewPingResult {
		description: {
			text?: string
			extra?: any[]
		} | string
		players: {
			max: number
			online: number
			sample?: {
				id: string
				name: string
			}[]
		}
		version: {
			name: string
			protocol: number
		}
		favicon?: string
		latency: number
	}

	export const states: typeof States
	export const supportedVersions: ['1.7', '1.8', '1.9', '1.10', '1.11.2', '1.12.2', '1.13.2', '1.14.4', '1.15.2', '1.16.5', '1.17.1']

	export function createServer(options: ServerOptions): Server
	export function createClient(options: ClientOptions): Client

	// TODO: Create typings on protodef to define here
	export function createSerializer({ state, isServer, version, customPackets }: SerializerOptions): any
	export function createDeserializer({ state, isServer, version, customPackets }: SerializerOptions): any

	export function ping(options: PingOptions, callback?: (error: Error, result: OldPingResult | NewPingResult) => void): Promise<OldPingResult | NewPingResult>
}
