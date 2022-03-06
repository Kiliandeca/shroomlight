export namespace toClient {
interface ServerInfoParams {
  response: string

}
interface PingParams {
  time: i64

}
interface DisconnectParams {
  reason: string

}
interface EncryptionBeginParams {
  serverId: string
  publicKey: any
  verifyToken: any

}
interface SuccessParams {
  uuid: UUID
  username: string

}
interface CompressParams {
  threshold: varint

}
interface LoginPluginRequestParams {
  messageId: varint
  channel: string
  data: restBuffer

}
interface SpawnEntityParams {
  entityId: varint
  objectUUID: UUID
  type: varint
  x: f64
  y: f64
  z: f64
  pitch: i8
  yaw: i8
  objectData: i32
  velocityX: i16
  velocityY: i16
  velocityZ: i16

}
interface SpawnEntityExperienceOrbParams {
  entityId: varint
  x: f64
  y: f64
  z: f64
  count: i16

}
interface SpawnEntityLivingParams {
  entityId: varint
  entityUUID: UUID
  type: varint
  x: f64
  y: f64
  z: f64
  yaw: i8
  pitch: i8
  headPitch: i8
  velocityX: i16
  velocityY: i16
  velocityZ: i16

}
interface SpawnEntityPaintingParams {
  entityId: varint
  entityUUID: UUID
  title: varint
  location: position
  direction: u8

}
interface NamedEntitySpawnParams {
  entityId: varint
  playerUUID: UUID
  x: f64
  y: f64
  z: f64
  yaw: i8
  pitch: i8

}
interface AnimationParams {
  entityId: varint
  animation: u8

}
interface StatisticsParams {
  entries: any

}
interface AcknowledgePlayerDiggingParams {
  location: position
  block: varint
  status: varint
  successful: bool

}
interface BlockBreakAnimationParams {
  entityId: varint
  location: position
  destroyStage: i8

}
interface TileEntityDataParams {
  location: position
  action: u8
  nbtData: optionalNbt

}
interface BlockActionParams {
  location: position
  byte1: u8
  byte2: u8
  blockId: varint

}
interface BlockChangeParams {
  location: position
  type: varint

}
interface BossBarParams {
  entityUUID: UUID
  action: varint
  title?: any
  health?: any
  color?: any
  dividers?: any
  flags?: any

}
interface DifficultyParams {
  difficulty: u8
  difficultyLocked: bool

}
interface ChatParams {
  message: string
  position: i8
  sender: UUID

}
interface TabCompleteParams {
  transactionId: varint
  start: varint
  length: varint
  matches: any

}
interface DeclareCommandsParams {
  nodes: any
  rootIndex: varint

}
interface TransactionParams {
  windowId: i8
  action: i16
  accepted: bool

}
interface CloseWindowParams {
  windowId: u8

}
interface WindowItemsParams {
  windowId: u8
  items: any

}
interface CraftProgressBarParams {
  windowId: u8
  property: i16
  value: i16

}
interface SetSlotParams {
  windowId: i8
  slot: i16
  item: slot

}
interface SetCooldownParams {
  itemID: varint
  cooldownTicks: varint

}
interface CustomPayloadParams {
  channel: string
  data: restBuffer

}
interface NamedSoundEffectParams {
  soundName: string
  soundCategory: varint
  x: i32
  y: i32
  z: i32
  volume: f32
  pitch: f32

}
interface KickDisconnectParams {
  reason: string

}
interface EntityStatusParams {
  entityId: i32
  entityStatus: i8

}
interface ExplosionParams {
  x: f32
  y: f32
  z: f32
  radius: f32
  affectedBlockOffsets: any
  playerMotionX: f32
  playerMotionY: f32
  playerMotionZ: f32

}
interface UnloadChunkParams {
  chunkX: i32
  chunkZ: i32

}
interface GameStateChangeParams {
  reason: u8
  gameMode: f32

}
interface OpenHorseWindowParams {
  windowId: u8
  nbSlots: varint
  entityId: i32

}
interface KeepAliveParams {
  keepAliveId: i64

}
interface MapChunkParams {
  x: i32
  z: i32
  groundUp: bool
  bitMap: varint
  heightmaps: nbt
  biomes: any
  chunkData: any
  blockEntities: any

}
interface WorldEventParams {
  effectId: i32
  location: position
  data: i32
  global: bool

}
interface WorldParticlesParams {
  particleId: i32
  longDistance: bool
  x: f64
  y: f64
  z: f64
  offsetX: f32
  offsetY: f32
  offsetZ: f32
  particleData: f32
  particles: i32
  data: any

}
interface UpdateLightParams {
  chunkX: varint
  chunkZ: varint
  trustEdges: bool
  skyLightMask: varint
  blockLightMask: varint
  emptySkyLightMask: varint
  emptyBlockLightMask: varint
  data: restBuffer

}
interface LoginParams {
  entityId: i32
  isHardcore: bool
  gameMode: u8
  previousGameMode: u8
  worldNames: any
  dimensionCodec: nbt
  dimension: nbt
  worldName: string
  hashedSeed: i64
  maxPlayers: varint
  viewDistance: varint
  reducedDebugInfo: bool
  enableRespawnScreen: bool
  isDebug: bool
  isFlat: bool

}
interface MapParams {
  itemDamage: varint
  scale: i8
  trackingPosition: bool
  locked: bool
  icons: any
  columns: i8
  rows: any
  x: any
  y: any
  data: any

}
interface TradeListParams {
  windowId: varint
  trades: any
  villagerLevel: varint
  experience: varint
  isRegularVillager: bool
  canRestock: bool

}
interface RelEntityMoveParams {
  entityId: varint
  dX: i16
  dY: i16
  dZ: i16
  onGround: bool

}
interface EntityMoveLookParams {
  entityId: varint
  dX: i16
  dY: i16
  dZ: i16
  yaw: i8
  pitch: i8
  onGround: bool

}
interface EntityLookParams {
  entityId: varint
  yaw: i8
  pitch: i8
  onGround: bool

}
interface EntityParams {
  entityId: varint

}
interface VehicleMoveParams {
  x: f64
  y: f64
  z: f64
  yaw: f32
  pitch: f32

}
interface OpenBookParams {
  hand: varint

}
interface OpenWindowParams {
  windowId: varint
  inventoryType: varint
  windowTitle: string

}
interface OpenSignEntityParams {
  location: position

}
interface CraftRecipeResponseParams {
  windowId: i8
  recipe: string

}
interface AbilitiesParams {
  flags: i8
  flyingSpeed: f32
  walkingSpeed: f32

}
interface CombatEventParams {
  event: varint
  duration?: any
  playerId?: any
  entityId?: any
  message?: any

}
interface PlayerInfoParams {
  action: varint
  data: any

}
interface FacePlayerParams {
  feet_eyes: varint
  x: f64
  y: f64
  z: f64
  isEntity: bool
  entityId?: any
  entity_feet_eyes?: any

}
interface PositionParams {
  x: f64
  y: f64
  z: f64
  yaw: f32
  pitch: f32
  flags: i8
  teleportId: varint

}
interface UnlockRecipesParams {
  action: varint
  craftingBookOpen: bool
  filteringCraftable: bool
  smeltingBookOpen: bool
  filteringSmeltable: bool
  blastFurnaceOpen: bool
  filteringBlastFurnace: bool
  smokerBookOpen: bool
  filteringSmoker: bool
  recipes1: any
  recipes2?: any

}
interface EntityDestroyParams {
  entityIds: any

}
interface RemoveEntityEffectParams {
  entityId: varint
  effectId: i8

}
interface ResourcePackSendParams {
  url: string
  hash: string

}
interface RespawnParams {
  dimension: nbt
  worldName: string
  hashedSeed: i64
  gamemode: u8
  previousGamemode: u8
  isDebug: bool
  isFlat: bool
  copyMetadata: bool

}
interface EntityHeadRotationParams {
  entityId: varint
  headYaw: i8

}
interface MultiBlockChangeParams {
  chunkCoordinates: any
  notTrustEdges: bool
  records: any

}
interface SelectAdvancementTabParams {
  id: any

}
interface WorldBorderParams {
  action: varint
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
interface CameraParams {
  cameraId: varint

}
interface HeldItemSlotParams {
  slot: i8

}
interface UpdateViewPositionParams {
  chunkX: varint
  chunkZ: varint

}
interface UpdateViewDistanceParams {
  viewDistance: varint

}
interface SpawnPositionParams {
  location: position

}
interface ScoreboardDisplayObjectiveParams {
  position: i8
  name: string

}
interface EntityMetadataParams {
  entityId: varint
  metadata: entityMetadata

}
interface AttachEntityParams {
  entityId: i32
  vehicleId: i32

}
interface EntityVelocityParams {
  entityId: varint
  velocityX: i16
  velocityY: i16
  velocityZ: i16

}
interface EntityEquipmentParams {
  entityId: varint
  equipments: any

}
interface ExperienceParams {
  experienceBar: f32
  level: varint
  totalExperience: varint

}
interface UpdateHealthParams {
  health: f32
  food: varint
  foodSaturation: f32

}
interface ScoreboardObjectiveParams {
  name: string
  action: i8
  displayText?: any
  type?: any

}
interface SetPassengersParams {
  entityId: varint
  passengers: any

}
interface TeamsParams {
  team: string
  mode: i8
  name?: any
  friendlyFire?: any
  nameTagVisibility?: any
  collisionRule?: any
  formatting?: any
  prefix?: any
  suffix?: any
  players?: any

}
interface ScoreboardScoreParams {
  itemName: string
  action: i8
  scoreName: string
  value: any

}
interface UpdateTimeParams {
  age: i64
  time: i64

}
interface TitleParams {
  action: varint
  text?: any
  fadeIn?: any
  stay?: any
  fadeOut?: any

}
interface EntitySoundEffectParams {
  soundId: varint
  soundCategory: varint
  entityId: varint
  volume: f32
  pitch: f32

}
interface SoundEffectParams {
  soundId: varint
  soundCategory: varint
  x: i32
  y: i32
  z: i32
  volume: f32
  pitch: f32

}
interface StopSoundParams {
  flags: i8
  source?: any
  sound?: any

}
interface PlayerlistHeaderParams {
  header: string
  footer: string

}
interface NbtQueryResponseParams {
  transactionId: varint
  nbt: optionalNbt

}
interface CollectParams {
  collectedEntityId: varint
  collectorEntityId: varint
  pickupItemCount: varint

}
interface EntityTeleportParams {
  entityId: varint
  x: f64
  y: f64
  z: f64
  yaw: i8
  pitch: i8
  onGround: bool

}
interface AdvancementsParams {
  reset: bool
  advancementMapping: any
  identifiers: any
  progressMapping: any

}
interface EntityUpdateAttributesParams {
  entityId: varint
  properties: any

}
interface EntityEffectParams {
  entityId: varint
  effectId: i8
  amplifier: i8
  duration: varint
  hideParticles: i8

}
interface DeclareRecipesParams {
  recipes: any

}
interface TagsParams {
  blockTags: tags
  itemTags: tags
  fluidTags: tags
  entityTags: tags

}

}

export namespace toServer {
interface SetProtocolParams {
  protocolVersion: varint
  serverHost: string
  serverPort: u16
  nextState: varint

}
interface LegacyServerListPingParams {
  payload: u8

}
interface PingStartParams {

}
interface PingParams {
  time: i64

}
interface LoginStartParams {
  username: string

}
interface EncryptionBeginParams {
  sharedSecret: any
  verifyToken: any

}
interface LoginPluginResponseParams {
  messageId: varint
  data: any

}
interface TeleportConfirmParams {
  teleportId: varint

}
interface QueryBlockNbtParams {
  transactionId: varint
  location: position

}
interface SetDifficultyParams {
  newDifficulty: u8

}
interface ChatParams {
  message: string

}
interface ClientCommandParams {
  actionId: varint

}
interface SettingsParams {
  locale: string
  viewDistance: i8
  chatFlags: varint
  chatColors: bool
  skinParts: u8
  mainHand: varint

}
interface TabCompleteParams {
  transactionId: varint
  text: string

}
interface TransactionParams {
  windowId: i8
  action: i16
  accepted: bool

}
interface EnchantItemParams {
  windowId: i8
  enchantment: i8

}
interface WindowClickParams {
  windowId: u8
  slot: i16
  mouseButton: i8
  action: i16
  mode: i8
  item: slot

}
interface CloseWindowParams {
  windowId: u8

}
interface CustomPayloadParams {
  channel: string
  data: restBuffer

}
interface EditBookParams {
  new_book: slot
  signing: bool
  hand: varint

}
interface QueryEntityNbtParams {
  transactionId: varint
  entityId: varint

}
interface UseEntityParams {
  target: varint
  mouse: varint
  x?: any
  y?: any
  z?: any
  hand?: any
  sneaking: bool

}
interface GenerateStructureParams {
  location: position
  levels: varint
  keepJigsaws: bool

}
interface KeepAliveParams {
  keepAliveId: i64

}
interface LockDifficultyParams {
  locked: bool

}
interface PositionParams {
  x: f64
  y: f64
  z: f64
  onGround: bool

}
interface PositionLookParams {
  x: f64
  y: f64
  z: f64
  yaw: f32
  pitch: f32
  onGround: bool

}
interface LookParams {
  yaw: f32
  pitch: f32
  onGround: bool

}
interface FlyingParams {
  onGround: bool

}
interface VehicleMoveParams {
  x: f64
  y: f64
  z: f64
  yaw: f32
  pitch: f32

}
interface SteerBoatParams {
  leftPaddle: bool
  rightPaddle: bool

}
interface PickItemParams {
  slot: varint

}
interface CraftRecipeRequestParams {
  windowId: i8
  recipe: string
  makeAll: bool

}
interface AbilitiesParams {
  flags: i8

}
interface BlockDigParams {
  status: i8
  location: position
  face: i8

}
interface EntityActionParams {
  entityId: varint
  actionId: varint
  jumpBoost: varint

}
interface SteerVehicleParams {
  sideways: f32
  forward: f32
  jump: u8

}
interface RecipeBookParams {
  bookId: varint
  bookOpen: bool
  filterActive: bool

}
interface DisplayedRecipeParams {
  recipeId: string

}
interface NameItemParams {
  name: string

}
interface ResourcePackReceiveParams {
  result: varint

}
interface AdvancementTabParams {
  action: varint
  tabId: any

}
interface SelectTradeParams {
  slot: varint

}
interface SetBeaconEffectParams {
  primary_effect: varint
  secondary_effect: varint

}
interface HeldItemSlotParams {
  slotId: i16

}
interface UpdateCommandBlockParams {
  location: position
  command: string
  mode: varint
  flags: u8

}
interface UpdateCommandBlockMinecartParams {
  entityId: varint
  command: string
  track_output: bool

}
interface SetCreativeSlotParams {
  slot: i16
  item: slot

}
interface UpdateJigsawBlockParams {
  location: position
  name: string
  target: string
  pool: string
  finalState: string
  jointType: string

}
interface UpdateStructureBlockParams {
  location: position
  action: varint
  mode: varint
  name: string
  offset_x: u8
  offset_y: u8
  offset_z: u8
  size_x: u8
  size_y: u8
  size_z: u8
  mirror: varint
  rotation: varint
  metadata: string
  integrity: f32
  seed: varint
  flags: u8

}
interface UpdateSignParams {
  location: position
  text1: string
  text2: string
  text3: string
  text4: string

}
interface ArmAnimationParams {
  hand: varint

}
interface SpectateParams {
  target: UUID

}
interface BlockPlaceParams {
  hand: varint
  location: position
  direction: varint
  cursorX: f32
  cursorY: f32
  cursorZ: f32
  insideBlock: bool

}
interface UseItemParams {
  hand: varint

}

}