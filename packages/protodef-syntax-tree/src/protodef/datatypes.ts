import { Type } from "./protocol"

export type Datatypes = 
  DataTypesNames.Bool |
  DataTypesNames.Varint |
  DataTypesNames.Void |
  [DataTypesNames.Array, ArrayOptions] |
  [DataTypesNames.Buffer, BufferOptions] |
  [DataTypesNames.Bitfield, BitfieldOptions] |
  [DataTypesNames.Container, ContainerOptions] |
  [DataTypesNames.Count, CountOptions] |
  [DataTypesNames.Cstring, CstringOptions] |
  [DataTypesNames.Int, IntOptions] |
  [DataTypesNames.Mapper, MapperOptions] |
  [DataTypesNames.Pstring, PstringOptions] |
  [DataTypesNames.Option, OptionOptions] |
  [DataTypesNames.Switch, SwitchOptions]

export enum DataTypesNames {
  Array = 'array',
  Bool = 'bool',
  Buffer = 'buffer',
  Bitfield = 'bitfield',
  Container = 'container',
  Count = 'count',
  Cstring = 'cstring',
  Int = 'int',
  Mapper = 'mapper',
  Option = 'option',
  Pstring = 'pstring',
  Switch = 'switch',
  Varint = 'varint',
  Void = 'void'
}

type Countable = string | number

export type ArrayOptions = {
  countType: Type
  type: Type
} | {
  count: Countable
  type: Type
}

export type BufferOptions = {
  countType: Type
} | {
  count: Countable
} | {
  rest: boolean
}

export type BitfieldOptions = {
  name: string,
  size: number
  signed: boolean
}[]

export type ContainerOptions = {
  name: string,
  type: Type
}[]

export type CountOptions = {
  type: Type,
  countFor: string
}

export type CstringOptions = {
  encoding: string
}

export type IntOptions = {
  size: string
}

export type MapperOptions = {
  type: Type,
  mappings: {
    [key:string]: Type
  }
}

// This name is funny
export type OptionOptions = Type

export type PstringOptions = {
  countType: Type
  encoding: string
} | {
  count: Countable
  encoding: string
}

export type SwitchOptions = {
  compareTo: string,
  fields: {
    [key:string]: any
  }
  default: string
}
