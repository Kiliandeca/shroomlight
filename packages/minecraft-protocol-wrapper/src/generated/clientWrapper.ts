import { EventEmitter} from 'events';
import { Client } from "minecraft-protocol";
import {
  toClient,
  toServer,
} from './packets'

class ClientWrapper extends EventEmitter {

  client: Client

  constructor(client: Client) {
    super()
    this.client = client;
    this.client.on("packet", (data, packetMeta) => {
      this.emit(packetMeta.name, data, packetMeta)
    })
  }
}

interface ServerSideClientEvents {
  'set_protocol': (data: toServer.SetProtocolParams) => void;
  'legacy_server_list_ping': (data: toServer.LegacyServerListPingParams) => void;
  'ping_start': (data: toServer.PingStartParams) => void;
  'ping': (data: toServer.PingParams) => void;
  'login_start': (data: toServer.LoginStartParams) => void;
  'encryption_begin': (data: toServer.EncryptionBeginParams) => void;
  'login_plugin_response': (data: toServer.LoginPluginResponseParams) => void;
  'teleport_confirm': (data: toServer.TeleportConfirmParams) => void;
  'query_block_nbt': (data: toServer.QueryBlockNbtParams) => void;
  'set_difficulty': (data: toServer.SetDifficultyParams) => void;
  'chat': (data: toServer.ChatParams) => void;
  'client_command': (data: toServer.ClientCommandParams) => void;
  'settings': (data: toServer.SettingsParams) => void;
  'tab_complete': (data: toServer.TabCompleteParams) => void;
  'transaction': (data: toServer.TransactionParams) => void;
  'enchant_item': (data: toServer.EnchantItemParams) => void;
  'window_click': (data: toServer.WindowClickParams) => void;
  'close_window': (data: toServer.CloseWindowParams) => void;
  'custom_payload': (data: toServer.CustomPayloadParams) => void;
  'edit_book': (data: toServer.EditBookParams) => void;
  'query_entity_nbt': (data: toServer.QueryEntityNbtParams) => void;
  'use_entity': (data: toServer.UseEntityParams) => void;
  'generate_structure': (data: toServer.GenerateStructureParams) => void;
  'keep_alive': (data: toServer.KeepAliveParams) => void;
  'lock_difficulty': (data: toServer.LockDifficultyParams) => void;
  'position': (data: toServer.PositionParams) => void;
  'position_look': (data: toServer.PositionLookParams) => void;
  'look': (data: toServer.LookParams) => void;
  'flying': (data: toServer.FlyingParams) => void;
  'vehicle_move': (data: toServer.VehicleMoveParams) => void;
  'steer_boat': (data: toServer.SteerBoatParams) => void;
  'pick_item': (data: toServer.PickItemParams) => void;
  'craft_recipe_request': (data: toServer.CraftRecipeRequestParams) => void;
  'abilities': (data: toServer.AbilitiesParams) => void;
  'block_dig': (data: toServer.BlockDigParams) => void;
  'entity_action': (data: toServer.EntityActionParams) => void;
  'steer_vehicle': (data: toServer.SteerVehicleParams) => void;
  'recipe_book': (data: toServer.RecipeBookParams) => void;
  'displayed_recipe': (data: toServer.DisplayedRecipeParams) => void;
  'name_item': (data: toServer.NameItemParams) => void;
  'resource_pack_receive': (data: toServer.ResourcePackReceiveParams) => void;
  'advancement_tab': (data: toServer.AdvancementTabParams) => void;
  'select_trade': (data: toServer.SelectTradeParams) => void;
  'set_beacon_effect': (data: toServer.SetBeaconEffectParams) => void;
  'held_item_slot': (data: toServer.HeldItemSlotParams) => void;
  'update_command_block': (data: toServer.UpdateCommandBlockParams) => void;
  'update_command_block_minecart': (data: toServer.UpdateCommandBlockMinecartParams) => void;
  'set_creative_slot': (data: toServer.SetCreativeSlotParams) => void;
  'update_jigsaw_block': (data: toServer.UpdateJigsawBlockParams) => void;
  'update_structure_block': (data: toServer.UpdateStructureBlockParams) => void;
  'update_sign': (data: toServer.UpdateSignParams) => void;
  'arm_animation': (data: toServer.ArmAnimationParams) => void;
  'spectate': (data: toServer.SpectateParams) => void;
  'block_place': (data: toServer.BlockPlaceParams) => void;
  'use_item': (data: toServer.UseItemParams) => void;
}

export declare interface ServerSideClientWrapper {
  on<U extends keyof ServerSideClientEvents>(
    event: U, listener: ServerSideClientEvents[U]
  ): this;
}

export class ServerSideClientWrapper extends ClientWrapper {
  constructor(client: Client) {
    super(client);
  }
  serverInfo(params: toClient.ServerInfoParams) {
    this.client.write('server_info', params)
  }
  ping(params: toClient.PingParams) {
    this.client.write('ping', params)
  }
  disconnect(params: toClient.DisconnectParams) {
    this.client.write('disconnect', params)
  }
  encryptionBegin(params: toClient.EncryptionBeginParams) {
    this.client.write('encryption_begin', params)
  }
  success(params: toClient.SuccessParams) {
    this.client.write('success', params)
  }
  compress(params: toClient.CompressParams) {
    this.client.write('compress', params)
  }
  loginPluginRequest(params: toClient.LoginPluginRequestParams) {
    this.client.write('login_plugin_request', params)
  }
  spawnEntity(params: toClient.SpawnEntityParams) {
    this.client.write('spawn_entity', params)
  }
  spawnEntityExperienceOrb(params: toClient.SpawnEntityExperienceOrbParams) {
    this.client.write('spawn_entity_experience_orb', params)
  }
  spawnEntityLiving(params: toClient.SpawnEntityLivingParams) {
    this.client.write('spawn_entity_living', params)
  }
  spawnEntityPainting(params: toClient.SpawnEntityPaintingParams) {
    this.client.write('spawn_entity_painting', params)
  }
  namedEntitySpawn(params: toClient.NamedEntitySpawnParams) {
    this.client.write('named_entity_spawn', params)
  }
  animation(params: toClient.AnimationParams) {
    this.client.write('animation', params)
  }
  statistics(params: toClient.StatisticsParams) {
    this.client.write('statistics', params)
  }
  acknowledgePlayerDigging(params: toClient.AcknowledgePlayerDiggingParams) {
    this.client.write('acknowledge_player_digging', params)
  }
  blockBreakAnimation(params: toClient.BlockBreakAnimationParams) {
    this.client.write('block_break_animation', params)
  }
  tileEntityData(params: toClient.TileEntityDataParams) {
    this.client.write('tile_entity_data', params)
  }
  blockAction(params: toClient.BlockActionParams) {
    this.client.write('block_action', params)
  }
  blockChange(params: toClient.BlockChangeParams) {
    this.client.write('block_change', params)
  }
  bossBar(params: toClient.BossBarParams) {
    this.client.write('boss_bar', params)
  }
  difficulty(params: toClient.DifficultyParams) {
    this.client.write('difficulty', params)
  }
  chat(params: toClient.ChatParams) {
    this.client.write('chat', params)
  }
  tabComplete(params: toClient.TabCompleteParams) {
    this.client.write('tab_complete', params)
  }
  declareCommands(params: toClient.DeclareCommandsParams) {
    this.client.write('declare_commands', params)
  }
  transaction(params: toClient.TransactionParams) {
    this.client.write('transaction', params)
  }
  closeWindow(params: toClient.CloseWindowParams) {
    this.client.write('close_window', params)
  }
  windowItems(params: toClient.WindowItemsParams) {
    this.client.write('window_items', params)
  }
  craftProgressBar(params: toClient.CraftProgressBarParams) {
    this.client.write('craft_progress_bar', params)
  }
  setSlot(params: toClient.SetSlotParams) {
    this.client.write('set_slot', params)
  }
  setCooldown(params: toClient.SetCooldownParams) {
    this.client.write('set_cooldown', params)
  }
  customPayload(params: toClient.CustomPayloadParams) {
    this.client.write('custom_payload', params)
  }
  namedSoundEffect(params: toClient.NamedSoundEffectParams) {
    this.client.write('named_sound_effect', params)
  }
  kickDisconnect(params: toClient.KickDisconnectParams) {
    this.client.write('kick_disconnect', params)
  }
  entityStatus(params: toClient.EntityStatusParams) {
    this.client.write('entity_status', params)
  }
  explosion(params: toClient.ExplosionParams) {
    this.client.write('explosion', params)
  }
  unloadChunk(params: toClient.UnloadChunkParams) {
    this.client.write('unload_chunk', params)
  }
  gameStateChange(params: toClient.GameStateChangeParams) {
    this.client.write('game_state_change', params)
  }
  openHorseWindow(params: toClient.OpenHorseWindowParams) {
    this.client.write('open_horse_window', params)
  }
  keepAlive(params: toClient.KeepAliveParams) {
    this.client.write('keep_alive', params)
  }
  mapChunk(params: toClient.MapChunkParams) {
    this.client.write('map_chunk', params)
  }
  worldEvent(params: toClient.WorldEventParams) {
    this.client.write('world_event', params)
  }
  worldParticles(params: toClient.WorldParticlesParams) {
    this.client.write('world_particles', params)
  }
  updateLight(params: toClient.UpdateLightParams) {
    this.client.write('update_light', params)
  }
  login(params: toClient.LoginParams) {
    this.client.write('login', params)
  }
  map(params: toClient.MapParams) {
    this.client.write('map', params)
  }
  tradeList(params: toClient.TradeListParams) {
    this.client.write('trade_list', params)
  }
  relEntityMove(params: toClient.RelEntityMoveParams) {
    this.client.write('rel_entity_move', params)
  }
  entityMoveLook(params: toClient.EntityMoveLookParams) {
    this.client.write('entity_move_look', params)
  }
  entityLook(params: toClient.EntityLookParams) {
    this.client.write('entity_look', params)
  }
  entity(params: toClient.EntityParams) {
    this.client.write('entity', params)
  }
  vehicleMove(params: toClient.VehicleMoveParams) {
    this.client.write('vehicle_move', params)
  }
  openBook(params: toClient.OpenBookParams) {
    this.client.write('open_book', params)
  }
  openWindow(params: toClient.OpenWindowParams) {
    this.client.write('open_window', params)
  }
  openSignEntity(params: toClient.OpenSignEntityParams) {
    this.client.write('open_sign_entity', params)
  }
  craftRecipeResponse(params: toClient.CraftRecipeResponseParams) {
    this.client.write('craft_recipe_response', params)
  }
  abilities(params: toClient.AbilitiesParams) {
    this.client.write('abilities', params)
  }
  combatEvent(params: toClient.CombatEventParams) {
    this.client.write('combat_event', params)
  }
  playerInfo(params: toClient.PlayerInfoParams) {
    this.client.write('player_info', params)
  }
  facePlayer(params: toClient.FacePlayerParams) {
    this.client.write('face_player', params)
  }
  position(params: toClient.PositionParams) {
    this.client.write('position', params)
  }
  unlockRecipes(params: toClient.UnlockRecipesParams) {
    this.client.write('unlock_recipes', params)
  }
  entityDestroy(params: toClient.EntityDestroyParams) {
    this.client.write('entity_destroy', params)
  }
  removeEntityEffect(params: toClient.RemoveEntityEffectParams) {
    this.client.write('remove_entity_effect', params)
  }
  resourcePackSend(params: toClient.ResourcePackSendParams) {
    this.client.write('resource_pack_send', params)
  }
  respawn(params: toClient.RespawnParams) {
    this.client.write('respawn', params)
  }
  entityHeadRotation(params: toClient.EntityHeadRotationParams) {
    this.client.write('entity_head_rotation', params)
  }
  multiBlockChange(params: toClient.MultiBlockChangeParams) {
    this.client.write('multi_block_change', params)
  }
  selectAdvancementTab(params: toClient.SelectAdvancementTabParams) {
    this.client.write('select_advancement_tab', params)
  }
  worldBorder(params: toClient.WorldBorderParams) {
    this.client.write('world_border', params)
  }
  camera(params: toClient.CameraParams) {
    this.client.write('camera', params)
  }
  heldItemSlot(params: toClient.HeldItemSlotParams) {
    this.client.write('held_item_slot', params)
  }
  updateViewPosition(params: toClient.UpdateViewPositionParams) {
    this.client.write('update_view_position', params)
  }
  updateViewDistance(params: toClient.UpdateViewDistanceParams) {
    this.client.write('update_view_distance', params)
  }
  spawnPosition(params: toClient.SpawnPositionParams) {
    this.client.write('spawn_position', params)
  }
  scoreboardDisplayObjective(params: toClient.ScoreboardDisplayObjectiveParams) {
    this.client.write('scoreboard_display_objective', params)
  }
  entityMetadata(params: toClient.EntityMetadataParams) {
    this.client.write('entity_metadata', params)
  }
  attachEntity(params: toClient.AttachEntityParams) {
    this.client.write('attach_entity', params)
  }
  entityVelocity(params: toClient.EntityVelocityParams) {
    this.client.write('entity_velocity', params)
  }
  entityEquipment(params: toClient.EntityEquipmentParams) {
    this.client.write('entity_equipment', params)
  }
  experience(params: toClient.ExperienceParams) {
    this.client.write('experience', params)
  }
  updateHealth(params: toClient.UpdateHealthParams) {
    this.client.write('update_health', params)
  }
  scoreboardObjective(params: toClient.ScoreboardObjectiveParams) {
    this.client.write('scoreboard_objective', params)
  }
  setPassengers(params: toClient.SetPassengersParams) {
    this.client.write('set_passengers', params)
  }
  teams(params: toClient.TeamsParams) {
    this.client.write('teams', params)
  }
  scoreboardScore(params: toClient.ScoreboardScoreParams) {
    this.client.write('scoreboard_score', params)
  }
  updateTime(params: toClient.UpdateTimeParams) {
    this.client.write('update_time', params)
  }
  title(params: toClient.TitleParams) {
    this.client.write('title', params)
  }
  entitySoundEffect(params: toClient.EntitySoundEffectParams) {
    this.client.write('entity_sound_effect', params)
  }
  soundEffect(params: toClient.SoundEffectParams) {
    this.client.write('sound_effect', params)
  }
  stopSound(params: toClient.StopSoundParams) {
    this.client.write('stop_sound', params)
  }
  playerlistHeader(params: toClient.PlayerlistHeaderParams) {
    this.client.write('playerlist_header', params)
  }
  nbtQueryResponse(params: toClient.NbtQueryResponseParams) {
    this.client.write('nbt_query_response', params)
  }
  collect(params: toClient.CollectParams) {
    this.client.write('collect', params)
  }
  entityTeleport(params: toClient.EntityTeleportParams) {
    this.client.write('entity_teleport', params)
  }
  advancements(params: toClient.AdvancementsParams) {
    this.client.write('advancements', params)
  }
  entityUpdateAttributes(params: toClient.EntityUpdateAttributesParams) {
    this.client.write('entity_update_attributes', params)
  }
  entityEffect(params: toClient.EntityEffectParams) {
    this.client.write('entity_effect', params)
  }
  declareRecipes(params: toClient.DeclareRecipesParams) {
    this.client.write('declare_recipes', params)
  }
  tags(params: toClient.TagsParams) {
    this.client.write('tags', params)
  }
}

interface ClientSideClientEvents {
  'server_info': (data: toClient.ServerInfoParams) => void;
  'ping': (data: toClient.PingParams) => void;
  'disconnect': (data: toClient.DisconnectParams) => void;
  'encryption_begin': (data: toClient.EncryptionBeginParams) => void;
  'success': (data: toClient.SuccessParams) => void;
  'compress': (data: toClient.CompressParams) => void;
  'login_plugin_request': (data: toClient.LoginPluginRequestParams) => void;
  'spawn_entity': (data: toClient.SpawnEntityParams) => void;
  'spawn_entity_experience_orb': (data: toClient.SpawnEntityExperienceOrbParams) => void;
  'spawn_entity_living': (data: toClient.SpawnEntityLivingParams) => void;
  'spawn_entity_painting': (data: toClient.SpawnEntityPaintingParams) => void;
  'named_entity_spawn': (data: toClient.NamedEntitySpawnParams) => void;
  'animation': (data: toClient.AnimationParams) => void;
  'statistics': (data: toClient.StatisticsParams) => void;
  'acknowledge_player_digging': (data: toClient.AcknowledgePlayerDiggingParams) => void;
  'block_break_animation': (data: toClient.BlockBreakAnimationParams) => void;
  'tile_entity_data': (data: toClient.TileEntityDataParams) => void;
  'block_action': (data: toClient.BlockActionParams) => void;
  'block_change': (data: toClient.BlockChangeParams) => void;
  'boss_bar': (data: toClient.BossBarParams) => void;
  'difficulty': (data: toClient.DifficultyParams) => void;
  'chat': (data: toClient.ChatParams) => void;
  'tab_complete': (data: toClient.TabCompleteParams) => void;
  'declare_commands': (data: toClient.DeclareCommandsParams) => void;
  'transaction': (data: toClient.TransactionParams) => void;
  'close_window': (data: toClient.CloseWindowParams) => void;
  'window_items': (data: toClient.WindowItemsParams) => void;
  'craft_progress_bar': (data: toClient.CraftProgressBarParams) => void;
  'set_slot': (data: toClient.SetSlotParams) => void;
  'set_cooldown': (data: toClient.SetCooldownParams) => void;
  'custom_payload': (data: toClient.CustomPayloadParams) => void;
  'named_sound_effect': (data: toClient.NamedSoundEffectParams) => void;
  'kick_disconnect': (data: toClient.KickDisconnectParams) => void;
  'entity_status': (data: toClient.EntityStatusParams) => void;
  'explosion': (data: toClient.ExplosionParams) => void;
  'unload_chunk': (data: toClient.UnloadChunkParams) => void;
  'game_state_change': (data: toClient.GameStateChangeParams) => void;
  'open_horse_window': (data: toClient.OpenHorseWindowParams) => void;
  'keep_alive': (data: toClient.KeepAliveParams) => void;
  'map_chunk': (data: toClient.MapChunkParams) => void;
  'world_event': (data: toClient.WorldEventParams) => void;
  'world_particles': (data: toClient.WorldParticlesParams) => void;
  'update_light': (data: toClient.UpdateLightParams) => void;
  'login': (data: toClient.LoginParams) => void;
  'map': (data: toClient.MapParams) => void;
  'trade_list': (data: toClient.TradeListParams) => void;
  'rel_entity_move': (data: toClient.RelEntityMoveParams) => void;
  'entity_move_look': (data: toClient.EntityMoveLookParams) => void;
  'entity_look': (data: toClient.EntityLookParams) => void;
  'entity': (data: toClient.EntityParams) => void;
  'vehicle_move': (data: toClient.VehicleMoveParams) => void;
  'open_book': (data: toClient.OpenBookParams) => void;
  'open_window': (data: toClient.OpenWindowParams) => void;
  'open_sign_entity': (data: toClient.OpenSignEntityParams) => void;
  'craft_recipe_response': (data: toClient.CraftRecipeResponseParams) => void;
  'abilities': (data: toClient.AbilitiesParams) => void;
  'combat_event': (data: toClient.CombatEventParams) => void;
  'player_info': (data: toClient.PlayerInfoParams) => void;
  'face_player': (data: toClient.FacePlayerParams) => void;
  'position': (data: toClient.PositionParams) => void;
  'unlock_recipes': (data: toClient.UnlockRecipesParams) => void;
  'entity_destroy': (data: toClient.EntityDestroyParams) => void;
  'remove_entity_effect': (data: toClient.RemoveEntityEffectParams) => void;
  'resource_pack_send': (data: toClient.ResourcePackSendParams) => void;
  'respawn': (data: toClient.RespawnParams) => void;
  'entity_head_rotation': (data: toClient.EntityHeadRotationParams) => void;
  'multi_block_change': (data: toClient.MultiBlockChangeParams) => void;
  'select_advancement_tab': (data: toClient.SelectAdvancementTabParams) => void;
  'world_border': (data: toClient.WorldBorderParams) => void;
  'camera': (data: toClient.CameraParams) => void;
  'held_item_slot': (data: toClient.HeldItemSlotParams) => void;
  'update_view_position': (data: toClient.UpdateViewPositionParams) => void;
  'update_view_distance': (data: toClient.UpdateViewDistanceParams) => void;
  'spawn_position': (data: toClient.SpawnPositionParams) => void;
  'scoreboard_display_objective': (data: toClient.ScoreboardDisplayObjectiveParams) => void;
  'entity_metadata': (data: toClient.EntityMetadataParams) => void;
  'attach_entity': (data: toClient.AttachEntityParams) => void;
  'entity_velocity': (data: toClient.EntityVelocityParams) => void;
  'entity_equipment': (data: toClient.EntityEquipmentParams) => void;
  'experience': (data: toClient.ExperienceParams) => void;
  'update_health': (data: toClient.UpdateHealthParams) => void;
  'scoreboard_objective': (data: toClient.ScoreboardObjectiveParams) => void;
  'set_passengers': (data: toClient.SetPassengersParams) => void;
  'teams': (data: toClient.TeamsParams) => void;
  'scoreboard_score': (data: toClient.ScoreboardScoreParams) => void;
  'update_time': (data: toClient.UpdateTimeParams) => void;
  'title': (data: toClient.TitleParams) => void;
  'entity_sound_effect': (data: toClient.EntitySoundEffectParams) => void;
  'sound_effect': (data: toClient.SoundEffectParams) => void;
  'stop_sound': (data: toClient.StopSoundParams) => void;
  'playerlist_header': (data: toClient.PlayerlistHeaderParams) => void;
  'nbt_query_response': (data: toClient.NbtQueryResponseParams) => void;
  'collect': (data: toClient.CollectParams) => void;
  'entity_teleport': (data: toClient.EntityTeleportParams) => void;
  'advancements': (data: toClient.AdvancementsParams) => void;
  'entity_update_attributes': (data: toClient.EntityUpdateAttributesParams) => void;
  'entity_effect': (data: toClient.EntityEffectParams) => void;
  'declare_recipes': (data: toClient.DeclareRecipesParams) => void;
  'tags': (data: toClient.TagsParams) => void;
}

export declare interface ClientSideClientWrapper {
  on<U extends keyof ClientSideClientEvents>(
    event: U, listener: ClientSideClientEvents[U]
  ): this;
}

export class ClientSideClientWrapper extends ClientWrapper {
  constructor(client: Client) {
    super(client);
  }
  setProtocol(params: toServer.SetProtocolParams) {
    this.client.write('set_protocol', params)
  }
  legacyServerListPing(params: toServer.LegacyServerListPingParams) {
    this.client.write('legacy_server_list_ping', params)
  }
  pingStart(params: toServer.PingStartParams) {
    this.client.write('ping_start', params)
  }
  ping(params: toServer.PingParams) {
    this.client.write('ping', params)
  }
  loginStart(params: toServer.LoginStartParams) {
    this.client.write('login_start', params)
  }
  encryptionBegin(params: toServer.EncryptionBeginParams) {
    this.client.write('encryption_begin', params)
  }
  loginPluginResponse(params: toServer.LoginPluginResponseParams) {
    this.client.write('login_plugin_response', params)
  }
  teleportConfirm(params: toServer.TeleportConfirmParams) {
    this.client.write('teleport_confirm', params)
  }
  queryBlockNbt(params: toServer.QueryBlockNbtParams) {
    this.client.write('query_block_nbt', params)
  }
  setDifficulty(params: toServer.SetDifficultyParams) {
    this.client.write('set_difficulty', params)
  }
  chat(params: toServer.ChatParams) {
    this.client.write('chat', params)
  }
  clientCommand(params: toServer.ClientCommandParams) {
    this.client.write('client_command', params)
  }
  settings(params: toServer.SettingsParams) {
    this.client.write('settings', params)
  }
  tabComplete(params: toServer.TabCompleteParams) {
    this.client.write('tab_complete', params)
  }
  transaction(params: toServer.TransactionParams) {
    this.client.write('transaction', params)
  }
  enchantItem(params: toServer.EnchantItemParams) {
    this.client.write('enchant_item', params)
  }
  windowClick(params: toServer.WindowClickParams) {
    this.client.write('window_click', params)
  }
  closeWindow(params: toServer.CloseWindowParams) {
    this.client.write('close_window', params)
  }
  customPayload(params: toServer.CustomPayloadParams) {
    this.client.write('custom_payload', params)
  }
  editBook(params: toServer.EditBookParams) {
    this.client.write('edit_book', params)
  }
  queryEntityNbt(params: toServer.QueryEntityNbtParams) {
    this.client.write('query_entity_nbt', params)
  }
  useEntity(params: toServer.UseEntityParams) {
    this.client.write('use_entity', params)
  }
  generateStructure(params: toServer.GenerateStructureParams) {
    this.client.write('generate_structure', params)
  }
  keepAlive(params: toServer.KeepAliveParams) {
    this.client.write('keep_alive', params)
  }
  lockDifficulty(params: toServer.LockDifficultyParams) {
    this.client.write('lock_difficulty', params)
  }
  position(params: toServer.PositionParams) {
    this.client.write('position', params)
  }
  positionLook(params: toServer.PositionLookParams) {
    this.client.write('position_look', params)
  }
  look(params: toServer.LookParams) {
    this.client.write('look', params)
  }
  flying(params: toServer.FlyingParams) {
    this.client.write('flying', params)
  }
  vehicleMove(params: toServer.VehicleMoveParams) {
    this.client.write('vehicle_move', params)
  }
  steerBoat(params: toServer.SteerBoatParams) {
    this.client.write('steer_boat', params)
  }
  pickItem(params: toServer.PickItemParams) {
    this.client.write('pick_item', params)
  }
  craftRecipeRequest(params: toServer.CraftRecipeRequestParams) {
    this.client.write('craft_recipe_request', params)
  }
  abilities(params: toServer.AbilitiesParams) {
    this.client.write('abilities', params)
  }
  blockDig(params: toServer.BlockDigParams) {
    this.client.write('block_dig', params)
  }
  entityAction(params: toServer.EntityActionParams) {
    this.client.write('entity_action', params)
  }
  steerVehicle(params: toServer.SteerVehicleParams) {
    this.client.write('steer_vehicle', params)
  }
  recipeBook(params: toServer.RecipeBookParams) {
    this.client.write('recipe_book', params)
  }
  displayedRecipe(params: toServer.DisplayedRecipeParams) {
    this.client.write('displayed_recipe', params)
  }
  nameItem(params: toServer.NameItemParams) {
    this.client.write('name_item', params)
  }
  resourcePackReceive(params: toServer.ResourcePackReceiveParams) {
    this.client.write('resource_pack_receive', params)
  }
  advancementTab(params: toServer.AdvancementTabParams) {
    this.client.write('advancement_tab', params)
  }
  selectTrade(params: toServer.SelectTradeParams) {
    this.client.write('select_trade', params)
  }
  setBeaconEffect(params: toServer.SetBeaconEffectParams) {
    this.client.write('set_beacon_effect', params)
  }
  heldItemSlot(params: toServer.HeldItemSlotParams) {
    this.client.write('held_item_slot', params)
  }
  updateCommandBlock(params: toServer.UpdateCommandBlockParams) {
    this.client.write('update_command_block', params)
  }
  updateCommandBlockMinecart(params: toServer.UpdateCommandBlockMinecartParams) {
    this.client.write('update_command_block_minecart', params)
  }
  setCreativeSlot(params: toServer.SetCreativeSlotParams) {
    this.client.write('set_creative_slot', params)
  }
  updateJigsawBlock(params: toServer.UpdateJigsawBlockParams) {
    this.client.write('update_jigsaw_block', params)
  }
  updateStructureBlock(params: toServer.UpdateStructureBlockParams) {
    this.client.write('update_structure_block', params)
  }
  updateSign(params: toServer.UpdateSignParams) {
    this.client.write('update_sign', params)
  }
  armAnimation(params: toServer.ArmAnimationParams) {
    this.client.write('arm_animation', params)
  }
  spectate(params: toServer.SpectateParams) {
    this.client.write('spectate', params)
  }
  blockPlace(params: toServer.BlockPlaceParams) {
    this.client.write('block_place', params)
  }
  useItem(params: toServer.UseItemParams) {
    this.client.write('use_item', params)
  }
}
