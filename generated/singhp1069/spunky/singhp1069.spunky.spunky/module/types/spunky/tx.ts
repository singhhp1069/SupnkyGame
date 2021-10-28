/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "singhp1069.spunky.spunky";

export interface MsgCreateScores {
  creator: string;
  highscore: string;
}

export interface MsgCreateScoresResponse {
  id: number;
}

export interface MsgUpdateScores {
  creator: string;
  id: number;
  highscore: string;
}

export interface MsgUpdateScoresResponse {}

export interface MsgCreateNFT {
  creator: string;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
}

export interface MsgCreateNFTResponse {
  id: number;
}

export interface MsgUpdateNFT {
  creator: string;
  id: number;
  name: string;
  symbol: string;
  description: string;
  uri: string;
  uriHash: string;
}

export interface MsgUpdateNFTResponse {}

export interface MsgTransferNFT {
  creator: string;
  recipient: string;
  nft: number;
}

export interface MsgTransferNFTResponse {}

export interface MsgCreateRewards {
  creator: string;
  milestone: string;
  description: string;
  reward: string;
  spunker: string;
}

export interface MsgCreateRewardsResponse {
  id: number;
}

export interface MsgDeleteRewards {
  creator: string;
  id: number;
}

export interface MsgDeleteRewardsResponse {}

export interface MsgClaimReward {
  creator: string;
  id: string;
}

export interface MsgClaimRewardResponse {}

const baseMsgCreateScores: object = { creator: "", highscore: "" };

export const MsgCreateScores = {
  encode(message: MsgCreateScores, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.highscore !== "") {
      writer.uint32(18).string(message.highscore);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateScores {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateScores } as MsgCreateScores;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.highscore = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateScores {
    const message = { ...baseMsgCreateScores } as MsgCreateScores;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.highscore !== undefined && object.highscore !== null) {
      message.highscore = String(object.highscore);
    } else {
      message.highscore = "";
    }
    return message;
  },

  toJSON(message: MsgCreateScores): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.highscore !== undefined && (obj.highscore = message.highscore);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateScores>): MsgCreateScores {
    const message = { ...baseMsgCreateScores } as MsgCreateScores;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.highscore !== undefined && object.highscore !== null) {
      message.highscore = object.highscore;
    } else {
      message.highscore = "";
    }
    return message;
  },
};

const baseMsgCreateScoresResponse: object = { id: 0 };

export const MsgCreateScoresResponse = {
  encode(
    message: MsgCreateScoresResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateScoresResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateScoresResponse,
    } as MsgCreateScoresResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateScoresResponse {
    const message = {
      ...baseMsgCreateScoresResponse,
    } as MsgCreateScoresResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateScoresResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateScoresResponse>
  ): MsgCreateScoresResponse {
    const message = {
      ...baseMsgCreateScoresResponse,
    } as MsgCreateScoresResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateScores: object = { creator: "", id: 0, highscore: "" };

export const MsgUpdateScores = {
  encode(message: MsgUpdateScores, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.highscore !== "") {
      writer.uint32(26).string(message.highscore);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateScores {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateScores } as MsgUpdateScores;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.highscore = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateScores {
    const message = { ...baseMsgUpdateScores } as MsgUpdateScores;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.highscore !== undefined && object.highscore !== null) {
      message.highscore = String(object.highscore);
    } else {
      message.highscore = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateScores): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.highscore !== undefined && (obj.highscore = message.highscore);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateScores>): MsgUpdateScores {
    const message = { ...baseMsgUpdateScores } as MsgUpdateScores;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.highscore !== undefined && object.highscore !== null) {
      message.highscore = object.highscore;
    } else {
      message.highscore = "";
    }
    return message;
  },
};

const baseMsgUpdateScoresResponse: object = {};

export const MsgUpdateScoresResponse = {
  encode(_: MsgUpdateScoresResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateScoresResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateScoresResponse,
    } as MsgUpdateScoresResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateScoresResponse {
    const message = {
      ...baseMsgUpdateScoresResponse,
    } as MsgUpdateScoresResponse;
    return message;
  },

  toJSON(_: MsgUpdateScoresResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateScoresResponse>
  ): MsgUpdateScoresResponse {
    const message = {
      ...baseMsgUpdateScoresResponse,
    } as MsgUpdateScoresResponse;
    return message;
  },
};

const baseMsgCreateNFT: object = {
  creator: "",
  name: "",
  symbol: "",
  description: "",
  uri: "",
  uriHash: "",
};

export const MsgCreateNFT = {
  encode(message: MsgCreateNFT, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(42).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(50).string(message.uriHash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNFT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNFT } as MsgCreateNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.uri = reader.string();
          break;
        case 6:
          message.uriHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNFT {
    const message = { ...baseMsgCreateNFT } as MsgCreateNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.uriHash !== undefined && object.uriHash !== null) {
      message.uriHash = String(object.uriHash);
    } else {
      message.uriHash = "";
    }
    return message;
  },

  toJSON(message: MsgCreateNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.description !== undefined &&
      (obj.description = message.description);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateNFT>): MsgCreateNFT {
    const message = { ...baseMsgCreateNFT } as MsgCreateNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.uriHash !== undefined && object.uriHash !== null) {
      message.uriHash = object.uriHash;
    } else {
      message.uriHash = "";
    }
    return message;
  },
};

const baseMsgCreateNFTResponse: object = { id: 0 };

export const MsgCreateNFTResponse = {
  encode(
    message: MsgCreateNFTResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateNFTResponse } as MsgCreateNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateNFTResponse {
    const message = { ...baseMsgCreateNFTResponse } as MsgCreateNFTResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateNFTResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateNFTResponse>): MsgCreateNFTResponse {
    const message = { ...baseMsgCreateNFTResponse } as MsgCreateNFTResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateNFT: object = {
  creator: "",
  id: 0,
  name: "",
  symbol: "",
  description: "",
  uri: "",
  uriHash: "",
};

export const MsgUpdateNFT = {
  encode(message: MsgUpdateNFT, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.uri !== "") {
      writer.uint32(50).string(message.uri);
    }
    if (message.uriHash !== "") {
      writer.uint32(58).string(message.uriHash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNFT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateNFT } as MsgUpdateNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.uri = reader.string();
          break;
        case 7:
          message.uriHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateNFT {
    const message = { ...baseMsgUpdateNFT } as MsgUpdateNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri);
    } else {
      message.uri = "";
    }
    if (object.uriHash !== undefined && object.uriHash !== null) {
      message.uriHash = String(object.uriHash);
    } else {
      message.uriHash = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.description !== undefined &&
      (obj.description = message.description);
    message.uri !== undefined && (obj.uri = message.uri);
    message.uriHash !== undefined && (obj.uriHash = message.uriHash);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateNFT>): MsgUpdateNFT {
    const message = { ...baseMsgUpdateNFT } as MsgUpdateNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri;
    } else {
      message.uri = "";
    }
    if (object.uriHash !== undefined && object.uriHash !== null) {
      message.uriHash = object.uriHash;
    } else {
      message.uriHash = "";
    }
    return message;
  },
};

const baseMsgUpdateNFTResponse: object = {};

export const MsgUpdateNFTResponse = {
  encode(_: MsgUpdateNFTResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateNFTResponse } as MsgUpdateNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateNFTResponse {
    const message = { ...baseMsgUpdateNFTResponse } as MsgUpdateNFTResponse;
    return message;
  },

  toJSON(_: MsgUpdateNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateNFTResponse>): MsgUpdateNFTResponse {
    const message = { ...baseMsgUpdateNFTResponse } as MsgUpdateNFTResponse;
    return message;
  },
};

const baseMsgTransferNFT: object = { creator: "", recipient: "", nft: 0 };

export const MsgTransferNFT = {
  encode(message: MsgTransferNFT, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.nft !== 0) {
      writer.uint32(24).uint64(message.nft);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferNFT {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferNFT } as MsgTransferNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.nft = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferNFT {
    const message = { ...baseMsgTransferNFT } as MsgTransferNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = Number(object.nft);
    } else {
      message.nft = 0;
    }
    return message;
  },

  toJSON(message: MsgTransferNFT): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.nft !== undefined && (obj.nft = message.nft);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferNFT>): MsgTransferNFT {
    const message = { ...baseMsgTransferNFT } as MsgTransferNFT;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = object.nft;
    } else {
      message.nft = 0;
    }
    return message;
  },
};

const baseMsgTransferNFTResponse: object = {};

export const MsgTransferNFTResponse = {
  encode(_: MsgTransferNFTResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgTransferNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferNFTResponse } as MsgTransferNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgTransferNFTResponse {
    const message = { ...baseMsgTransferNFTResponse } as MsgTransferNFTResponse;
    return message;
  },

  toJSON(_: MsgTransferNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgTransferNFTResponse>): MsgTransferNFTResponse {
    const message = { ...baseMsgTransferNFTResponse } as MsgTransferNFTResponse;
    return message;
  },
};

const baseMsgCreateRewards: object = {
  creator: "",
  milestone: "",
  description: "",
  reward: "",
  spunker: "",
};

export const MsgCreateRewards = {
  encode(message: MsgCreateRewards, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
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
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRewards {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateRewards } as MsgCreateRewards;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRewards {
    const message = { ...baseMsgCreateRewards } as MsgCreateRewards;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: MsgCreateRewards): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.milestone !== undefined && (obj.milestone = message.milestone);
    message.description !== undefined &&
      (obj.description = message.description);
    message.reward !== undefined && (obj.reward = message.reward);
    message.spunker !== undefined && (obj.spunker = message.spunker);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateRewards>): MsgCreateRewards {
    const message = { ...baseMsgCreateRewards } as MsgCreateRewards;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseMsgCreateRewardsResponse: object = { id: 0 };

export const MsgCreateRewardsResponse = {
  encode(
    message: MsgCreateRewardsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateRewardsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateRewardsResponse,
    } as MsgCreateRewardsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateRewardsResponse {
    const message = {
      ...baseMsgCreateRewardsResponse,
    } as MsgCreateRewardsResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateRewardsResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateRewardsResponse>
  ): MsgCreateRewardsResponse {
    const message = {
      ...baseMsgCreateRewardsResponse,
    } as MsgCreateRewardsResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteRewards: object = { creator: "", id: 0 };

export const MsgDeleteRewards = {
  encode(message: MsgDeleteRewards, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteRewards {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteRewards } as MsgDeleteRewards;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteRewards {
    const message = { ...baseMsgDeleteRewards } as MsgDeleteRewards;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteRewards): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteRewards>): MsgDeleteRewards {
    const message = { ...baseMsgDeleteRewards } as MsgDeleteRewards;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteRewardsResponse: object = {};

export const MsgDeleteRewardsResponse = {
  encode(
    _: MsgDeleteRewardsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteRewardsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteRewardsResponse,
    } as MsgDeleteRewardsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteRewardsResponse {
    const message = {
      ...baseMsgDeleteRewardsResponse,
    } as MsgDeleteRewardsResponse;
    return message;
  },

  toJSON(_: MsgDeleteRewardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteRewardsResponse>
  ): MsgDeleteRewardsResponse {
    const message = {
      ...baseMsgDeleteRewardsResponse,
    } as MsgDeleteRewardsResponse;
    return message;
  },
};

const baseMsgClaimReward: object = { creator: "", id: "" };

export const MsgClaimReward = {
  encode(message: MsgClaimReward, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClaimReward {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimReward } as MsgClaimReward;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimReward {
    const message = { ...baseMsgClaimReward } as MsgClaimReward;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: MsgClaimReward): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClaimReward>): MsgClaimReward {
    const message = { ...baseMsgClaimReward } as MsgClaimReward;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseMsgClaimRewardResponse: object = {};

export const MsgClaimRewardResponse = {
  encode(_: MsgClaimRewardResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClaimRewardResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClaimRewardResponse } as MsgClaimRewardResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgClaimRewardResponse {
    const message = { ...baseMsgClaimRewardResponse } as MsgClaimRewardResponse;
    return message;
  },

  toJSON(_: MsgClaimRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgClaimRewardResponse>): MsgClaimRewardResponse {
    const message = { ...baseMsgClaimRewardResponse } as MsgClaimRewardResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateScores(request: MsgCreateScores): Promise<MsgCreateScoresResponse>;
  UpdateScores(request: MsgUpdateScores): Promise<MsgUpdateScoresResponse>;
  CreateNFT(request: MsgCreateNFT): Promise<MsgCreateNFTResponse>;
  UpdateNFT(request: MsgUpdateNFT): Promise<MsgUpdateNFTResponse>;
  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
  CreateRewards(request: MsgCreateRewards): Promise<MsgCreateRewardsResponse>;
  DeleteRewards(request: MsgDeleteRewards): Promise<MsgDeleteRewardsResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ClaimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateScores(request: MsgCreateScores): Promise<MsgCreateScoresResponse> {
    const data = MsgCreateScores.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Msg",
      "CreateScores",
      data
    );
    return promise.then((data) =>
      MsgCreateScoresResponse.decode(new Reader(data))
    );
  }

  UpdateScores(request: MsgUpdateScores): Promise<MsgUpdateScoresResponse> {
    const data = MsgUpdateScores.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Msg",
      "UpdateScores",
      data
    );
    return promise.then((data) =>
      MsgUpdateScoresResponse.decode(new Reader(data))
    );
  }

  CreateNFT(request: MsgCreateNFT): Promise<MsgCreateNFTResponse> {
    const data = MsgCreateNFT.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Msg",
      "CreateNFT",
      data
    );
    return promise.then((data) =>
      MsgCreateNFTResponse.decode(new Reader(data))
    );
  }

  UpdateNFT(request: MsgUpdateNFT): Promise<MsgUpdateNFTResponse> {
    const data = MsgUpdateNFT.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Msg",
      "UpdateNFT",
      data
    );
    return promise.then((data) =>
      MsgUpdateNFTResponse.decode(new Reader(data))
    );
  }

  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse> {
    const data = MsgTransferNFT.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Msg",
      "TransferNFT",
      data
    );
    return promise.then((data) =>
      MsgTransferNFTResponse.decode(new Reader(data))
    );
  }

  CreateRewards(request: MsgCreateRewards): Promise<MsgCreateRewardsResponse> {
    const data = MsgCreateRewards.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Msg",
      "CreateRewards",
      data
    );
    return promise.then((data) =>
      MsgCreateRewardsResponse.decode(new Reader(data))
    );
  }

  DeleteRewards(request: MsgDeleteRewards): Promise<MsgDeleteRewardsResponse> {
    const data = MsgDeleteRewards.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Msg",
      "DeleteRewards",
      data
    );
    return promise.then((data) =>
      MsgDeleteRewardsResponse.decode(new Reader(data))
    );
  }

  ClaimReward(request: MsgClaimReward): Promise<MsgClaimRewardResponse> {
    const data = MsgClaimReward.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Msg",
      "ClaimReward",
      data
    );
    return promise.then((data) =>
      MsgClaimRewardResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
