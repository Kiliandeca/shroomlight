export function parseProtocol(protocol: Protocol) {
  const result: {types?: {[key:string]: any}, [key:string]: any} = {}

  for (const [key, value] of Object.entries(protocol)) {
    if (key == "types") {
      result.types = parseTypes(Object.entries(value))
    } else {
      result[key] = parseProtocol(value)
    }
  }
  return result
}

const parseTypes = (types: Type[]) => {
  const result: any = {}
  types.forEach(type => {
    const parseResult = parseType(type)
    result[parseResult[0]] = parseResult[1]
  })
  return result
}

const parseType = (value: Type): any => {

  if (!(value instanceof Array)) {
    return value
  }
  
  if (value[1] == "native") {
    return value
  }

  const parser = parsersMap.get(value[0])
  if (parser) {
    return parser(value[1])
  }
  
  return [value[0], parseType(value[1])]
}

const parsersMap = new Map<string, Function>()
  .set('container', parseContainer)
  .set('mapper', parseMapper)
  .set('switch', parseSwitch)
  .set('array', parseArray)

function parseContainer(containers: Container){
  const result: {[key: string]: any} = {}  
  containers.forEach(e => {
    result[e.name] = parseType(e.type)
  })
  return result
}

function parseMapper(mapper: Mapper){
  const map = new Map()
  for (const [name, value] of Object.entries(mapper.mappings)) {   
    map.set(name, parseType(value)) 
  }
  return map
}

function parseSwitch(switchValue: Switch) {
  switchValue.fields = new Map(Object.entries(switchValue.fields))
  return switchValue
}

function parseArray(arrayValue: ProtodefArray) {
  arrayValue.type = parseType(arrayValue.type)
  return arrayValue
}

type Protocol = Namespace
type Namespace = {
  types?: {[key:string]: Type | "native"},
  [key: symbol]: Namespace
}

type Type = string | Datatypes | [name: string, options: any]

type DatatypeLiterals = 'container' | 'mapper' | 'switch' | 'array'
type Datatypes = 
  ['container', Container] |
  ['mapper', Mapper] |
  ['switch', Switch] |
  ['array', ProtodefArray]

type Container = [{
  name: string,
  type: Datatypes
}]

type Mapper = {
  type: Type,
  mappings: {
    [key:string]: Type
  }
}

type Switch = {
  compareTo: string,
  fields: {
    [key:string]: any
  }
  default: string
}

type ProtodefArray = {
  countType: string
  type: Type
}
