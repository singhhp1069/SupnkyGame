/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Scores } from "../spunky/scores";
import { NFT } from "../spunky/nft";
import { Rewards } from "../spunky/rewards";

export const protobufPackage = "singhp1069.spunky.spunky";

/** GenesisState defines the spunky module's genesis state. */
export interface GenesisState {
  scoresList: Scores[];
  scoresCount: number;
  NFTList: NFT[];
  NFTCount: number;
  rewardsList: Rewards[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  rewardsCount: number;
}

const baseGenesisState: object = {
  scoresCount: 0,
  NFTCount: 0,
  rewardsCount: 0,
};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.scoresList) {
      Scores.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.scoresCount !== 0) {
      writer.uint32(16).uint64(message.scoresCount);
    }
    for (const v of message.NFTList) {
      NFT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.NFTCount !== 0) {
      writer.uint32(32).uint64(message.NFTCount);
    }
    for (const v of message.rewardsList) {
      Rewards.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.rewardsCount !== 0) {
      writer.uint32(48).uint64(message.rewardsCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.scoresList = [];
    message.NFTList = [];
    message.rewardsList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.scoresList.push(Scores.decode(reader, reader.uint32()));
          break;
        case 2:
          message.scoresCount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.NFTList.push(NFT.decode(reader, reader.uint32()));
          break;
        case 4:
          message.NFTCount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.rewardsList.push(Rewards.decode(reader, reader.uint32()));
          break;
        case 6:
          message.rewardsCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.scoresList = [];
    message.NFTList = [];
    message.rewardsList = [];
    if (object.scoresList !== undefined && object.scoresList !== null) {
      for (const e of object.scoresList) {
        message.scoresList.push(Scores.fromJSON(e));
      }
    }
    if (object.scoresCount !== undefined && object.scoresCount !== null) {
      message.scoresCount = Number(object.scoresCount);
    } else {
      message.scoresCount = 0;
    }
    if (object.NFTList !== undefined && object.NFTList !== null) {
      for (const e of object.NFTList) {
        message.NFTList.push(NFT.fromJSON(e));
      }
    }
    if (object.NFTCount !== undefined && object.NFTCount !== null) {
      message.NFTCount = Number(object.NFTCount);
    } else {
      message.NFTCount = 0;
    }
    if (object.rewardsList !== undefined && object.rewardsList !== null) {
      for (const e of object.rewardsList) {
        message.rewardsList.push(Rewards.fromJSON(e));
      }
    }
    if (object.rewardsCount !== undefined && object.rewardsCount !== null) {
      message.rewardsCount = Number(object.rewardsCount);
    } else {
      message.rewardsCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.scoresList) {
      obj.scoresList = message.scoresList.map((e) =>
        e ? Scores.toJSON(e) : undefined
      );
    } else {
      obj.scoresList = [];
    }
    message.scoresCount !== undefined &&
      (obj.scoresCount = message.scoresCount);
    if (message.NFTList) {
      obj.NFTList = message.NFTList.map((e) => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.NFTList = [];
    }
    message.NFTCount !== undefined && (obj.NFTCount = message.NFTCount);
    if (message.rewardsList) {
      obj.rewardsList = message.rewardsList.map((e) =>
        e ? Rewards.toJSON(e) : undefined
      );
    } else {
      obj.rewardsList = [];
    }
    message.rewardsCount !== undefined &&
      (obj.rewardsCount = message.rewardsCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.scoresList = [];
    message.NFTList = [];
    message.rewardsList = [];
    if (object.scoresList !== undefined && object.scoresList !== null) {
      for (const e of object.scoresList) {
        message.scoresList.push(Scores.fromPartial(e));
      }
    }
    if (object.scoresCount !== undefined && object.scoresCount !== null) {
      message.scoresCount = object.scoresCount;
    } else {
      message.scoresCount = 0;
    }
    if (object.NFTList !== undefined && object.NFTList !== null) {
      for (const e of object.NFTList) {
        message.NFTList.push(NFT.fromPartial(e));
      }
    }
    if (object.NFTCount !== undefined && object.NFTCount !== null) {
      message.NFTCount = object.NFTCount;
    } else {
      message.NFTCount = 0;
    }
    if (object.rewardsList !== undefined && object.rewardsList !== null) {
      for (const e of object.rewardsList) {
        message.rewardsList.push(Rewards.fromPartial(e));
      }
    }
    if (object.rewardsCount !== undefined && object.rewardsCount !== null) {
      message.rewardsCount = object.rewardsCount;
    } else {
      message.rewardsCount = 0;
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
