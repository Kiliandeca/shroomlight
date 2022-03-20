import * as camelcase from "camelcase"
import { writeFileSync } from "fs"
import { parseProtocol } from "./protocolParsers"

import { render } from "nunjucks"

import * as mcData from "minecraft-data"
const parsedProtocol = parseProtocol(mcData("1.16.5").protocol)

interface Packet {
  id: number
  name: string
  params: Object
}

interface ParsedTypes {
  packet: ParsedPackets
  [key:string]: object
}

interface ParsedPackets {
  name: Map<string, string>,
  params: {
    compareTo: string,
    fields: Map<string, string>
  }
}

function getPackets(parsedTypes: ParsedTypes) {
  const result: Packet[] = []
  parsedTypes.packet.name.forEach((name, id) => {
    const paramsName = parsedTypes.packet.params.fields.get(name) as string
    const params = parsedTypes[paramsName]
  
    result.push({
      id: Number(id),
      name,
      params
    })
  })
  return result
}

const packets : { toClient: Packet[], toServer: Packet[]} = {
  toClient : [],
  toServer: []
}

const states = ["handshaking", "status", "login", "play"]
states.forEach(state => {
  packets.toClient.push(...getPackets(parsedProtocol[state].toClient.types))
  packets.toServer.push(...getPackets(parsedProtocol[state].toServer.types))
})

function getAllowedTypeName(typeName: string) {
  if (typeName == 'void' || typeName == 'string' || typeName == 'switch') {
    return `${typeName}Type`
  }
  return typeName
}

function getPacketParamsInterfaceContent(packet: Packet): string {
  let interfaceString = ''
  for (const [field, type] of Object.entries(packet.params)) {
    if (typeof type == 'string') {
      interfaceString += `  ${field}: protocolType.${getAllowedTypeName(type)}\n`
    } else if (type.fields) {
      const optional = type.default == 'void' ? '?' : ''
      interfaceString += `  ${field}${optional}: any\n`
    } else {
      interfaceString += `  ${field}: any\n`
    }
  }
  return interfaceString
}

function getParamsInterfaceName(packet: Packet) {
  return `${camelcase(packet.name, {pascalCase: true})}Params`
}

const indexTypesDefinition = render("src/templates/index.d.ts.j2", {
  packets,
  camelcase,
  getParamsInterfaceName,
})

const toClientPacketsParamsTypeDefinition = render("src/templates/packetsParams.d.ts.j2", {
  packets: packets.toClient,
  camelcase,
  getParamsInterfaceName,
  getPacketParamsInterfaceContent
})

const toServerPacketsParamsTypeDefinition = render("src/templates/packetsParams.d.ts.j2", {
  packets: packets.toServer,
  camelcase,
  getParamsInterfaceName,
  getPacketParamsInterfaceContent
})

const clientWrapperCode = render("src/templates/clientWrapper.ts.j2", {
  packets,
  camelcase,
  getParamsInterfaceName
})

writeFileSync('src/generated/index.d.ts', indexTypesDefinition)
writeFileSync('src/generated/toClientPacketsParams.ts', toClientPacketsParamsTypeDefinition)
writeFileSync('src/generated/toServerPacketsParams.ts', toServerPacketsParamsTypeDefinition)
writeFileSync('src/generated/clientWrapper.ts', clientWrapperCode)
