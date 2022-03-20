import * as protocolType from "../lib/types"
export interface SetProtocolParams {
  protocolVersion: protocolType.varint
  serverHost: protocolType.stringType
  serverPort: protocolType.u16
  nextState: protocolType.varint

}
export interface LegacyServerListPingParams {
  payload: protocolType.u8

}
export interface PingStartParams {

}
export interface PingParams {
  time: protocolType.i64

}
export interface LoginStartParams {
  username: protocolType.stringType

}
export interface EncryptionBeginParams {
  sharedSecret: any
  verifyToken: any

}
export interface LoginPluginResponseParams {
  messageId: protocolType.varint
  data: any

}
export interface TeleportConfirmParams {
  teleportId: protocolType.varint

}
export interface QueryBlockNbtParams {
  transactionId: protocolType.varint
  location: protocolType.position

}
export interface SetDifficultyParams {
  newDifficulty: protocolType.u8

}
export interface ChatParams {
  message: protocolType.stringType

}
export interface ClientCommandParams {
  actionId: protocolType.varint

}
export interface SettingsParams {
  locale: protocolType.stringType
  viewDistance: protocolType.i8
  chatFlags: protocolType.varint
  chatColors: protocolType.bool
  skinParts: protocolType.u8
  mainHand: protocolType.varint

}
export interface TabCompleteParams {
  transactionId: protocolType.varint
  text: protocolType.stringType

}
export interface TransactionParams {
  windowId: protocolType.i8
  action: protocolType.i16
  accepted: protocolType.bool

}
export interface EnchantItemParams {
  windowId: protocolType.i8
  enchantment: protocolType.i8

}
export interface WindowClickParams {
  windowId: protocolType.u8
  slot: protocolType.i16
  mouseButton: protocolType.i8
  action: protocolType.i16
  mode: protocolType.i8
  item: protocolType.slot

}
export interface CloseWindowParams {
  windowId: protocolType.u8

}
export interface CustomPayloadParams {
  channel: protocolType.stringType
  data: protocolType.restBuffer

}
export interface EditBookParams {
  new_book: protocolType.slot
  signing: protocolType.bool
  hand: protocolType.varint

}
export interface QueryEntityNbtParams {
  transactionId: protocolType.varint
  entityId: protocolType.varint

}
export interface UseEntityParams {
  target: protocolType.varint
  mouse: protocolType.varint
  x?: any
  y?: any
  z?: any
  hand?: any
  sneaking: protocolType.bool

}
export interface GenerateStructureParams {
  location: protocolType.position
  levels: protocolType.varint
  keepJigsaws: protocolType.bool

}
export interface KeepAliveParams {
  keepAliveId: protocolType.i64

}
export interface LockDifficultyParams {
  locked: protocolType.bool

}
export interface PositionParams {
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  onGround: protocolType.bool

}
export interface PositionLookParams {
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  yaw: protocolType.f32
  pitch: protocolType.f32
  onGround: protocolType.bool

}
export interface LookParams {
  yaw: protocolType.f32
  pitch: protocolType.f32
  onGround: protocolType.bool

}
export interface FlyingParams {
  onGround: protocolType.bool

}
export interface VehicleMoveParams {
  x: protocolType.f64
  y: protocolType.f64
  z: protocolType.f64
  yaw: protocolType.f32
  pitch: protocolType.f32

}
export interface SteerBoatParams {
  leftPaddle: protocolType.bool
  rightPaddle: protocolType.bool

}
export interface PickItemParams {
  slot: protocolType.varint

}
export interface CraftRecipeRequestParams {
  windowId: protocolType.i8
  recipe: protocolType.stringType
  makeAll: protocolType.bool

}
export interface AbilitiesParams {
  flags: protocolType.i8

}
export interface BlockDigParams {
  status: protocolType.i8
  location: protocolType.position
  face: protocolType.i8

}
export interface EntityActionParams {
  entityId: protocolType.varint
  actionId: protocolType.varint
  jumpBoost: protocolType.varint

}
export interface SteerVehicleParams {
  sideways: protocolType.f32
  forward: protocolType.f32
  jump: protocolType.u8

}
export interface RecipeBookParams {
  bookId: protocolType.varint
  bookOpen: protocolType.bool
  filterActive: protocolType.bool

}
export interface DisplayedRecipeParams {
  recipeId: protocolType.stringType

}
export interface NameItemParams {
  name: protocolType.stringType

}
export interface ResourcePackReceiveParams {
  result: protocolType.varint

}
export interface AdvancementTabParams {
  action: protocolType.varint
  tabId: any

}
export interface SelectTradeParams {
  slot: protocolType.varint

}
export interface SetBeaconEffectParams {
  primary_effect: protocolType.varint
  secondary_effect: protocolType.varint

}
export interface HeldItemSlotParams {
  slotId: protocolType.i16

}
export interface UpdateCommandBlockParams {
  location: protocolType.position
  command: protocolType.stringType
  mode: protocolType.varint
  flags: protocolType.u8

}
export interface UpdateCommandBlockMinecartParams {
  entityId: protocolType.varint
  command: protocolType.stringType
  track_output: protocolType.bool

}
export interface SetCreativeSlotParams {
  slot: protocolType.i16
  item: protocolType.slot

}
export interface UpdateJigsawBlockParams {
  location: protocolType.position
  name: protocolType.stringType
  target: protocolType.stringType
  pool: protocolType.stringType
  finalState: protocolType.stringType
  jointType: protocolType.stringType

}
export interface UpdateStructureBlockParams {
  location: protocolType.position
  action: protocolType.varint
  mode: protocolType.varint
  name: protocolType.stringType
  offset_x: protocolType.u8
  offset_y: protocolType.u8
  offset_z: protocolType.u8
  size_x: protocolType.u8
  size_y: protocolType.u8
  size_z: protocolType.u8
  mirror: protocolType.varint
  rotation: protocolType.varint
  metadata: protocolType.stringType
  integrity: protocolType.f32
  seed: protocolType.varint
  flags: protocolType.u8

}
export interface UpdateSignParams {
  location: protocolType.position
  text1: protocolType.stringType
  text2: protocolType.stringType
  text3: protocolType.stringType
  text4: protocolType.stringType

}
export interface ArmAnimationParams {
  hand: protocolType.varint

}
export interface SpectateParams {
  target: protocolType.UUID

}
export interface BlockPlaceParams {
  hand: protocolType.varint
  location: protocolType.position
  direction: protocolType.varint
  cursorX: protocolType.f32
  cursorY: protocolType.f32
  cursorZ: protocolType.f32
  insideBlock: protocolType.bool

}
export interface UseItemParams {
  hand: protocolType.varint

}
