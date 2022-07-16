import { Datatypes } from "./datatypes"

export type Protocol = Namespace

export type Namespace = {
  types?: {[key:string]: Type | "native"},
  [key: symbol]: Namespace
}

export type Type = string | Datatypes | [name: string, options: any]
