import * as protocolType from "../lib/types"
export interface ServerInfoParams {
  response: protocolType.stringType

}
export interface PingParams {
  time: protocolType.i64

}
export interface DisconnectParams {
  reason: protocolType.stringType

}
export interface EncryptionBeginParams {
  serverId: protocolType.stringType
  publicKey: any
  verifyToken: any

}
export interface SuccessParams {
  uuid: protocolType.UUID
  username: protocolType.stringType

}
export interface CompressParams {
  threshold: protocolType.varint

}
export interface LoginPluginRequestParams {
  messageId: protocolType.varint
  channel: protocolType.stringType
  data: protocolType.restBuffer

}
export interface SpawnEntityParams {
  entityId: protocolType.varint
  objectUUID: protocolType.UUID
  type: protocolType.varint
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  pitch: protocolType.i8
  yaw: protocolType.i8
  objectData: protocolType.i32
  velocityX: protocolType.i16
  velocityY: protocolType.i16
  velocityZ: protocolType.i16

}
export interface SpawnEntityExperienceOrbParams {
  entityId: protocolType.varint
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  count: protocolType.i16

}
export interface SpawnEntityLivingParams {
  entityId: protocolType.varint
  entityUUID: protocolType.UUID
  type: protocolType.varint
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  yaw: protocolType.i8
  pitch: protocolType.i8
  headPitch: protocolType.i8
  velocityX: protocolType.i16
  velocityY: protocolType.i16
  velocityZ: protocolType.i16

}
export interface SpawnEntityPaintingParams {
  entityId: protocolType.varint
  entityUUID: protocolType.UUID
  title: protocolType.varint
  location: protocolType.position
  direction: protocolType.u8

}
export interface NamedEntitySpawnParams {
  entityId: protocolType.varint
  playerUUID: protocolType.UUID
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  yaw: protocolType.i8
  pitch: protocolType.i8

}
export interface AnimationParams {
  entityId: protocolType.varint
  animation: protocolType.u8

}
export interface StatisticsParams {
  entries: any[]

}
export interface AcknowledgePlayerDiggingParams {
  location: protocolType.position
  block: protocolType.varint
  status: protocolType.varint
  successful: protocolType.bool

}
export interface BlockBreakAnimationParams {
  entityId: protocolType.varint
  location: protocolType.position
  destroyStage: protocolType.i8

}
export interface TileEntityDataParams {
  location: protocolType.position
  action: protocolType.u8
  nbtData: protocolType.optionalNbt

}
export interface BlockActionParams {
  location: protocolType.position
  byte1: protocolType.u8
  byte2: protocolType.u8
  blockId: protocolType.varint

}
export interface BlockChangeParams {
  location: protocolType.position
  type: protocolType.varint

}
export interface BossBarParams {
  entityUUID: protocolType.UUID
  action: protocolType.varint
  title?: any
  health?: any
  color?: any
  dividers?: any
  flags?: any

}
export interface DifficultyParams {
  difficulty: protocolType.u8
  difficultyLocked: protocolType.bool

}
export interface ChatParams {
  message: protocolType.stringType
  position: protocolType.i8
  sender: protocolType.UUID

}
export interface TabCompleteParams {
  transactionId: protocolType.varint
  start: protocolType.varint
  length: protocolType.varint
  matches: any[]

}
export interface DeclareCommandsParams {
  nodes: any[]
  rootIndex: protocolType.varint

}
export interface TransactionParams {
  windowId: protocolType.i8
  action: protocolType.i16
  accepted: protocolType.bool

}
export interface CloseWindowParams {
  windowId: protocolType.u8

}
export interface WindowItemsParams {
  windowId: protocolType.u8
  items: any[]

}
export interface CraftProgressBarParams {
  windowId: protocolType.u8
  property: protocolType.i16
  value: protocolType.i16

}
export interface SetSlotParams {
  windowId: protocolType.i8
  slot: protocolType.i16
  item: protocolType.slot

}
export interface SetCooldownParams {
  itemID: protocolType.varint
  cooldownTicks: protocolType.varint

}
export interface CustomPayloadParams {
  channel: protocolType.stringType
  data: protocolType.restBuffer

}
export interface NamedSoundEffectParams {
  soundName: protocolType.stringType
  soundCategory: protocolType.varint
  x: protocolType.i32
  y: protocolType.i32
  z: protocolType.i32
  volume: protocolType.f32
  pitch: protocolType.f32

}
export interface KickDisconnectParams {
  reason: protocolType.stringType

}
export interface EntityStatusParams {
  entityId: protocolType.i32
  entityStatus: protocolType.i8

}
export interface ExplosionParams {
  x: protocolType.f32
  y: protocolType.f32
  z: protocolType.f32
  radius: protocolType.f32
  affectedBlockOffsets: any[]
  playerMotionX: protocolType.f32
  playerMotionY: protocolType.f32
  playerMotionZ: protocolType.f32

}
export interface UnloadChunkParams {
  chunkX: protocolType.i32
  chunkZ: protocolType.i32

}
export interface GameStateChangeParams {
  reason: protocolType.u8
  gameMode: protocolType.f32

}
export interface OpenHorseWindowParams {
  windowId: protocolType.u8
  nbSlots: protocolType.varint
  entityId: protocolType.i32

}
export interface KeepAliveParams {
  keepAliveId: protocolType.i64

}
export interface MapChunkParams {
  x: protocolType.i32
  z: protocolType.i32
  groundUp: protocolType.bool
  bitMap: protocolType.varint
  heightmaps: protocolType.nbt
  biomes: any
  chunkData: any
  blockEntities: any[]

}
export interface WorldEventParams {
  effectId: protocolType.i32
  location: protocolType.position
  data: protocolType.i32
  global: protocolType.bool

}
export interface WorldParticlesParams {
  particleId: protocolType.i32
  longDistance: protocolType.bool
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  offsetX: protocolType.f32
  offsetY: protocolType.f32
  offsetZ: protocolType.f32
  particleData: protocolType.f32
  particles: protocolType.i32
  data: any

}
export interface UpdateLightParams {
  chunkX: protocolType.varint
  chunkZ: protocolType.varint
  trustEdges: protocolType.bool
  skyLightMask: protocolType.varint
  blockLightMask: protocolType.varint
  emptySkyLightMask: protocolType.varint
  emptyBlockLightMask: protocolType.varint
  data: protocolType.restBuffer

}
export interface LoginParams {
  entityId: protocolType.i32
  isHardcore: protocolType.bool
  gameMode: protocolType.u8
  previousGameMode: protocolType.u8
  worldNames: any[]
  dimensionCodec: protocolType.nbt
  dimension: protocolType.nbt
  worldName: protocolType.stringType
  hashedSeed: protocolType.i64
  maxPlayers: protocolType.varint
  viewDistance: protocolType.varint
  reducedDebugInfo: protocolType.bool
  enableRespawnScreen: protocolType.bool
  isDebug: protocolType.bool
  isFlat: protocolType.bool

}
export interface MapParams {
  itemDamage: protocolType.varint
  scale: protocolType.i8
  trackingPosition: protocolType.bool
  locked: protocolType.bool
  icons: any[]
  columns: protocolType.i8
  rows: any
  x: any
  y: any
  data: any

}
export interface TradeListParams {
  windowId: protocolType.varint
  trades: any[]
  villagerLevel: protocolType.varint
  experience: protocolType.varint
  isRegularVillager: protocolType.bool
  canRestock: protocolType.bool

}
export interface RelEntityMoveParams {
  entityId: protocolType.varint
  dX: protocolType.i16
  dY: protocolType.i16
  dZ: protocolType.i16
  onGround: protocolType.bool

}
export interface EntityMoveLookParams {
  entityId: protocolType.varint
  dX: protocolType.i16
  dY: protocolType.i16
  dZ: protocolType.i16
  yaw: protocolType.i8
  pitch: protocolType.i8
  onGround: protocolType.bool

}
export interface EntityLookParams {
  entityId: protocolType.varint
  yaw: protocolType.i8
  pitch: protocolType.i8
  onGround: protocolType.bool

}
export interface EntityParams {
  entityId: protocolType.varint

}
export interface VehicleMoveParams {
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  yaw: protocolType.f32
  pitch: protocolType.f32

}
export interface OpenBookParams {
  hand: protocolType.varint

}
export interface OpenWindowParams {
  windowId: protocolType.varint
  inventoryType: protocolType.varint
  windowTitle: protocolType.stringType

}
export interface OpenSignEntityParams {
  location: protocolType.position

}
export interface CraftRecipeResponseParams {
  windowId: protocolType.i8
  recipe: protocolType.stringType

}
export interface AbilitiesParams {
  flags: protocolType.i8
  flyingSpeed: protocolType.f32
  walkingSpeed: protocolType.f32

}
export interface CombatEventParams {
  event: protocolType.varint
  duration?: any
  playerId?: any
  entityId?: any
  message?: any

}
export interface PlayerInfoParams {
  action: protocolType.varint
  data: any[]

}
export interface FacePlayerParams {
  feet_eyes: protocolType.varint
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  isEntity: protocolType.bool
  entityId?: any
  entity_feet_eyes?: any

}
export interface PositionParams {
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  yaw: protocolType.f32
  pitch: protocolType.f32
  flags: protocolType.i8
  teleportId: protocolType.varint

}
export interface UnlockRecipesParams {
  action: protocolType.varint
  craftingBookOpen: protocolType.bool
  filteringCraftable: protocolType.bool
  smeltingBookOpen: protocolType.bool
  filteringSmeltable: protocolType.bool
  blastFurnaceOpen: protocolType.bool
  filteringBlastFurnace: protocolType.bool
  smokerBookOpen: protocolType.bool
  filteringSmoker: protocolType.bool
  recipes1: any[]
  recipes2?: any

}
export interface EntityDestroyParams {
  entityIds: any[]

}
export interface RemoveEntityEffectParams {
  entityId: protocolType.varint
  effectId: protocolType.i8

}
export interface ResourcePackSendParams {
  url: protocolType.stringType
  hash: protocolType.stringType

}
export interface RespawnParams {
  dimension: protocolType.nbt
  worldName: protocolType.stringType
  hashedSeed: protocolType.i64
  gamemode: protocolType.u8
  previousGamemode: protocolType.u8
  isDebug: protocolType.bool
  isFlat: protocolType.bool
  copyMetadata: protocolType.bool

}
export interface EntityHeadRotationParams {
  entityId: protocolType.varint
  headYaw: protocolType.i8

}
export interface MultiBlockChangeParams {
  chunkCoordinates: any
  notTrustEdges: protocolType.bool
  records: any[]

}
export interface SelectAdvancementTabParams {
  id: any

}
export interface WorldBorderParams {
  action: protocolType.varint
  radius?: any
  x?: any
  z?: any
  old_radius?: any
  new_radius?: any
  speed?: any
  portalBoundary?: any
  warning_time?: any
  warning_blocks?: any

}
export interface CameraParams {
  cameraId: protocolType.varint

}
export interface HeldItemSlotParams {
  slot: protocolType.i8

}
export interface UpdateViewPositionParams {
  chunkX: protocolType.varint
  chunkZ: protocolType.varint

}
export interface UpdateViewDistanceParams {
  viewDistance: protocolType.varint

}
export interface SpawnPositionParams {
  location: protocolType.position

}
export interface ScoreboardDisplayObjectiveParams {
  position: protocolType.i8
  name: protocolType.stringType

}
export interface EntityMetadataParams {
  entityId: protocolType.varint
  metadata: protocolType.entityMetadata

}
export interface AttachEntityParams {
  entityId: protocolType.i32
  vehicleId: protocolType.i32

}
export interface EntityVelocityParams {
  entityId: protocolType.varint
  velocityX: protocolType.i16
  velocityY: protocolType.i16
  velocityZ: protocolType.i16

}
export interface EntityEquipmentParams {
  entityId: protocolType.varint
  equipments: any

}
export interface ExperienceParams {
  experienceBar: protocolType.f32
  level: protocolType.varint
  totalExperience: protocolType.varint

}
export interface UpdateHealthParams {
  health: protocolType.f32
  food: protocolType.varint
  foodSaturation: protocolType.f32

}
export interface ScoreboardObjectiveParams {
  name: protocolType.stringType
  action: protocolType.i8
  displayText?: any
  type?: any

}
export interface SetPassengersParams {
  entityId: protocolType.varint
  passengers: any[]

}
export interface TeamsParams {
  team: protocolType.stringType
  mode: protocolType.i8
  name?: any
  friendlyFire?: any
  nameTagVisibility?: any
  collisionRule?: any
  formatting?: any
  prefix?: any
  suffix?: any
  players?: any

}
export interface ScoreboardScoreParams {
  itemName: protocolType.stringType
  action: protocolType.i8
  scoreName: protocolType.stringType
  value: any

}
export interface UpdateTimeParams {
  age: protocolType.i64
  time: protocolType.i64

}
export interface TitleParams {
  action: protocolType.varint
  text?: any
  fadeIn?: any
  stay?: any
  fadeOut?: any

}
export interface EntitySoundEffectParams {
  soundId: protocolType.varint
  soundCategory: protocolType.varint
  entityId: protocolType.varint
  volume: protocolType.f32
  pitch: protocolType.f32

}
export interface SoundEffectParams {
  soundId: protocolType.varint
  soundCategory: protocolType.varint
  x: protocolType.i32
  y: protocolType.i32
  z: protocolType.i32
  volume: protocolType.f32
  pitch: protocolType.f32

}
export interface StopSoundParams {
  flags: protocolType.i8
  source?: any
  sound?: any

}
export interface PlayerlistHeaderParams {
  header: protocolType.stringType
  footer: protocolType.stringType

}
export interface NbtQueryResponseParams {
  transactionId: protocolType.varint
  nbt: protocolType.optionalNbt

}
export interface CollectParams {
  collectedEntityId: protocolType.varint
  collectorEntityId: protocolType.varint
  pickupItemCount: protocolType.varint

}
export interface EntityTeleportParams {
  entityId: protocolType.varint
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  yaw: protocolType.i8
  pitch: protocolType.i8
  onGround: protocolType.bool

}
export interface AdvancementsParams {
  reset: protocolType.bool
  advancementMapping: any[]
  identifiers: any[]
  progressMapping: any[]

}
export interface EntityUpdateAttributesParams {
  entityId: protocolType.varint
  properties: any[]

}
export interface EntityEffectParams {
  entityId: protocolType.varint
  effectId: protocolType.i8
  amplifier: protocolType.i8
  duration: protocolType.varint
  hideParticles: protocolType.i8

}
export interface DeclareRecipesParams {
  recipes: any[]

}
export interface TagsParams {
  blockTags: protocolType.tags
  itemTags: protocolType.tags
  fluidTags: protocolType.tags
  entityTags: protocolType.tags

}
