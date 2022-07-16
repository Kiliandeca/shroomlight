import { expectType } from 'tsd';
import { ArrayOptions, BitfieldOptions, BufferOptions, ContainerOptions, CountOptions, CstringOptions, DataTypesNames, IntOptions, MapperOptions, OptionOptions, PstringOptions, SwitchOptions } from './datatypes';

describe('Check type from ptorodef doc example matches', () => {
  it('Bool', () => {
    const data = DataTypesNames.Bool;
    expectType<DataTypesNames.Bool>(data)
  });
  it('Varint', () => {
    const data = DataTypesNames.Varint;
    expectType<DataTypesNames.Varint>(data)
  });
  it('Void', () => {
    const data = DataTypesNames.Void;
    expectType<DataTypesNames.Void>(data)
  });


  it('Array', () => {
    const data: [DataTypesNames.Array, ArrayOptions] = [
      DataTypesNames.Array,
      {
        "countType": "i16",
        "type": "i32"
      }
    ];
    expectType<[DataTypesNames.Array, ArrayOptions]>(data)
  });
  it('Buffer', () => {
    const data: [DataTypesNames.Buffer, BufferOptions] = [
      DataTypesNames.Buffer,
      { "countType": "varint" }
    ];
    expectType<[DataTypesNames.Buffer, BufferOptions]>(data)
  });
  it('Bitfield', () => {
    const data: [DataTypesNames.Bitfield, BitfieldOptions] = [
      DataTypesNames.Bitfield,
      [
        { "name": "x", "size": 26, "signed": true },
        { "name": "y", "size": 12, "signed": true },
        { "name": "z", "size": 26, "signed": true }
      ]
    ];
    expectType<[DataTypesNames.Bitfield, BitfieldOptions]>(data)
  });
  it('Container', () => {
    const data: [DataTypesNames.Container, ContainerOptions] = [
      DataTypesNames.Container,
      [
        { "name": "x", "type": "i32" },
        { "name": "z", "type": "i32" },
        { "name": "bitMap", "type": "u16" },
        { "name": "addBitMap", "type": "u16" }
      ]
    ];
    expectType<[DataTypesNames.Container, ContainerOptions]>(data)
  });
  it('Count', () => {
    const data: [DataTypesNames.Count, CountOptions] = [
      DataTypesNames.Count,
      {
        "type": "i16",
        "countFor": "records"
      }
    ];
    expectType<[DataTypesNames.Count, CountOptions]>(data)
  });
  it('Cstring', () => {
    const data: [DataTypesNames.Cstring, CstringOptions] = [
      DataTypesNames.Cstring,
      { "encoding": "utf-16" }
    ];
    expectType<[DataTypesNames.Cstring, CstringOptions]>(data)
  });
  it('Int', () => {
    const data: [DataTypesNames.Int, IntOptions] = [
      DataTypesNames.Int,
      { "size": "3" }
    ];
    expectType<[DataTypesNames.Int, IntOptions]>(data)
  });
  it('Mapper', () => {
    const data: [DataTypesNames.Mapper, MapperOptions] = [
      DataTypesNames.Mapper,
      {
        "type": "i8",
        "mappings": {
          "1": "byte",
          "2": "short",
          "3": "int",
          "4": "long"
        }
      }
    ];
    expectType<[DataTypesNames.Mapper, MapperOptions]>(data)
  });
  it('Pstring', () => {
    const data: [DataTypesNames.Pstring, PstringOptions] = [
      DataTypesNames.Pstring,
      {
        "countType": "varint",
        "encoding": "utf-8"
      }
    ];
    expectType<[DataTypesNames.Pstring, PstringOptions]>(data)
  });
  it('Option', () => {
    const data: [DataTypesNames.Option, OptionOptions] = [
      DataTypesNames.Option,
      "cstring"
    ];
    expectType<[DataTypesNames.Option, OptionOptions]>(data)
  });
  it('Switch', () => {
    const data: [DataTypesNames.Switch, SwitchOptions] = [
      DataTypesNames.Switch,
      {
        "compareTo": "someField",
        "fields": {
          "0": "i8",
          "1": "varint",
          "2": "f32",
          "3": "string"
        },
        "default": "void"
      }
    ];
    expectType<[DataTypesNames.Switch, SwitchOptions]>(data)
  });
});
