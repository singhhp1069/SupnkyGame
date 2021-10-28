/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "singhp1069.spunky.spunky";

export interface Rewards {
  id: number;
  milestone: string;
  description: string;
  reward: string;
  spunker: string;
  creator: string;
}

const baseRewards: object = {
  id: 0,
  milestone: "",
  description: "",
  reward: "",
  spunker: "",
  creator: "",
};

export const Rewards = {
  encode(message: Rewards, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.milestone !== "") {
      writer.uint32(18).string(message.milestone);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.reward !== "") {
      writer.uint32(34).string(message.reward);
    }
    if (message.spunker !== "") {
      writer.uint32(42).string(message.spunker);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Rewards {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRewards } as Rewards;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.milestone = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.reward = reader.string();
          break;
        case 5:
          message.spunker = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Rewards {
    const message = { ...baseRewards } as Rewards;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.milestone !== undefined && object.milestone !== null) {
      message.milestone = String(object.milestone);
    } else {
      message.milestone = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = String(object.reward);
    } else {
      message.reward = "";
    }
    if (object.spunker !== undefined && object.spunker !== null) {
      message.spunker = String(object.spunker);
    } else {
      message.spunker = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: Rewards): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.milestone !== undefined && (obj.milestone = message.milestone);
    message.description !== undefined &&
      (obj.description = message.description);
    message.reward !== undefined && (obj.reward = message.reward);
    message.spunker !== undefined && (obj.spunker = message.spunker);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Rewards>): Rewards {
    const message = { ...baseRewards } as Rewards;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.milestone !== undefined && object.milestone !== null) {
      message.milestone = object.milestone;
    } else {
      message.milestone = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = object.reward;
    } else {
      message.reward = "";
    }
    if (object.spunker !== undefined && object.spunker !== null) {
      message.spunker = object.spunker;
    } else {
      message.spunker = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
