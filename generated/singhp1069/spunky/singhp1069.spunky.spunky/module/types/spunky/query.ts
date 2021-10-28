/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Scores } from "../spunky/scores";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { NFT } from "../spunky/nft";
import { Rewards } from "../spunky/rewards";

export const protobufPackage = "singhp1069.spunky.spunky";

export interface QueryGetScoresRequest {
  id: number;
}

export interface QueryGetScoresResponse {
  Scores: Scores | undefined;
}

export interface QueryAllScoresRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllScoresResponse {
  Scores: Scores[];
  pagination: PageResponse | undefined;
}

export interface QueryGetNFTRequest {
  id: number;
}

export interface QueryGetNFTResponse {
  NFT: NFT | undefined;
}

export interface QueryAllNFTRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllNFTResponse {
  NFT: NFT[];
  pagination: PageResponse | undefined;
}

export interface QueryGetRewardsRequest {
  id: number;
}

export interface QueryGetRewardsResponse {
  Rewards: Rewards | undefined;
}

export interface QueryAllRewardsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllRewardsResponse {
  Rewards: Rewards[];
  pagination: PageResponse | undefined;
}

const baseQueryGetScoresRequest: object = { id: 0 };

export const QueryGetScoresRequest = {
  encode(
    message: QueryGetScoresRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetScoresRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetScoresRequest } as QueryGetScoresRequest;
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

  fromJSON(object: any): QueryGetScoresRequest {
    const message = { ...baseQueryGetScoresRequest } as QueryGetScoresRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetScoresRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetScoresRequest>
  ): QueryGetScoresRequest {
    const message = { ...baseQueryGetScoresRequest } as QueryGetScoresRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetScoresResponse: object = {};

export const QueryGetScoresResponse = {
  encode(
    message: QueryGetScoresResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Scores !== undefined) {
      Scores.encode(message.Scores, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetScoresResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetScoresResponse } as QueryGetScoresResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Scores = Scores.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetScoresResponse {
    const message = { ...baseQueryGetScoresResponse } as QueryGetScoresResponse;
    if (object.Scores !== undefined && object.Scores !== null) {
      message.Scores = Scores.fromJSON(object.Scores);
    } else {
      message.Scores = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetScoresResponse): unknown {
    const obj: any = {};
    message.Scores !== undefined &&
      (obj.Scores = message.Scores ? Scores.toJSON(message.Scores) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetScoresResponse>
  ): QueryGetScoresResponse {
    const message = { ...baseQueryGetScoresResponse } as QueryGetScoresResponse;
    if (object.Scores !== undefined && object.Scores !== null) {
      message.Scores = Scores.fromPartial(object.Scores);
    } else {
      message.Scores = undefined;
    }
    return message;
  },
};

const baseQueryAllScoresRequest: object = {};

export const QueryAllScoresRequest = {
  encode(
    message: QueryAllScoresRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllScoresRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllScoresRequest } as QueryAllScoresRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllScoresRequest {
    const message = { ...baseQueryAllScoresRequest } as QueryAllScoresRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllScoresRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllScoresRequest>
  ): QueryAllScoresRequest {
    const message = { ...baseQueryAllScoresRequest } as QueryAllScoresRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllScoresResponse: object = {};

export const QueryAllScoresResponse = {
  encode(
    message: QueryAllScoresResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Scores) {
      Scores.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllScoresResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllScoresResponse } as QueryAllScoresResponse;
    message.Scores = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Scores.push(Scores.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllScoresResponse {
    const message = { ...baseQueryAllScoresResponse } as QueryAllScoresResponse;
    message.Scores = [];
    if (object.Scores !== undefined && object.Scores !== null) {
      for (const e of object.Scores) {
        message.Scores.push(Scores.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllScoresResponse): unknown {
    const obj: any = {};
    if (message.Scores) {
      obj.Scores = message.Scores.map((e) =>
        e ? Scores.toJSON(e) : undefined
      );
    } else {
      obj.Scores = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllScoresResponse>
  ): QueryAllScoresResponse {
    const message = { ...baseQueryAllScoresResponse } as QueryAllScoresResponse;
    message.Scores = [];
    if (object.Scores !== undefined && object.Scores !== null) {
      for (const e of object.Scores) {
        message.Scores.push(Scores.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetNFTRequest: object = { id: 0 };

export const QueryGetNFTRequest = {
  encode(
    message: QueryGetNFTRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNFTRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetNFTRequest } as QueryGetNFTRequest;
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

  fromJSON(object: any): QueryGetNFTRequest {
    const message = { ...baseQueryGetNFTRequest } as QueryGetNFTRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetNFTRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetNFTRequest>): QueryGetNFTRequest {
    const message = { ...baseQueryGetNFTRequest } as QueryGetNFTRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetNFTResponse: object = {};

export const QueryGetNFTResponse = {
  encode(
    message: QueryGetNFTResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.NFT !== undefined) {
      NFT.encode(message.NFT, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetNFTResponse } as QueryGetNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NFT = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetNFTResponse {
    const message = { ...baseQueryGetNFTResponse } as QueryGetNFTResponse;
    if (object.NFT !== undefined && object.NFT !== null) {
      message.NFT = NFT.fromJSON(object.NFT);
    } else {
      message.NFT = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetNFTResponse): unknown {
    const obj: any = {};
    message.NFT !== undefined &&
      (obj.NFT = message.NFT ? NFT.toJSON(message.NFT) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetNFTResponse>): QueryGetNFTResponse {
    const message = { ...baseQueryGetNFTResponse } as QueryGetNFTResponse;
    if (object.NFT !== undefined && object.NFT !== null) {
      message.NFT = NFT.fromPartial(object.NFT);
    } else {
      message.NFT = undefined;
    }
    return message;
  },
};

const baseQueryAllNFTRequest: object = {};

export const QueryAllNFTRequest = {
  encode(
    message: QueryAllNFTRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNFTRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllNFTRequest } as QueryAllNFTRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNFTRequest {
    const message = { ...baseQueryAllNFTRequest } as QueryAllNFTRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNFTRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllNFTRequest>): QueryAllNFTRequest {
    const message = { ...baseQueryAllNFTRequest } as QueryAllNFTRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllNFTResponse: object = {};

export const QueryAllNFTResponse = {
  encode(
    message: QueryAllNFTResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.NFT) {
      NFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNFTResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllNFTResponse } as QueryAllNFTResponse;
    message.NFT = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.NFT.push(NFT.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNFTResponse {
    const message = { ...baseQueryAllNFTResponse } as QueryAllNFTResponse;
    message.NFT = [];
    if (object.NFT !== undefined && object.NFT !== null) {
      for (const e of object.NFT) {
        message.NFT.push(NFT.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllNFTResponse): unknown {
    const obj: any = {};
    if (message.NFT) {
      obj.NFT = message.NFT.map((e) => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.NFT = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllNFTResponse>): QueryAllNFTResponse {
    const message = { ...baseQueryAllNFTResponse } as QueryAllNFTResponse;
    message.NFT = [];
    if (object.NFT !== undefined && object.NFT !== null) {
      for (const e of object.NFT) {
        message.NFT.push(NFT.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetRewardsRequest: object = { id: 0 };

export const QueryGetRewardsRequest = {
  encode(
    message: QueryGetRewardsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRewardsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetRewardsRequest } as QueryGetRewardsRequest;
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

  fromJSON(object: any): QueryGetRewardsRequest {
    const message = { ...baseQueryGetRewardsRequest } as QueryGetRewardsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetRewardsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRewardsRequest>
  ): QueryGetRewardsRequest {
    const message = { ...baseQueryGetRewardsRequest } as QueryGetRewardsRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetRewardsResponse: object = {};

export const QueryGetRewardsResponse = {
  encode(
    message: QueryGetRewardsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Rewards !== undefined) {
      Rewards.encode(message.Rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRewardsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetRewardsResponse,
    } as QueryGetRewardsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Rewards = Rewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetRewardsResponse {
    const message = {
      ...baseQueryGetRewardsResponse,
    } as QueryGetRewardsResponse;
    if (object.Rewards !== undefined && object.Rewards !== null) {
      message.Rewards = Rewards.fromJSON(object.Rewards);
    } else {
      message.Rewards = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetRewardsResponse): unknown {
    const obj: any = {};
    message.Rewards !== undefined &&
      (obj.Rewards = message.Rewards
        ? Rewards.toJSON(message.Rewards)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetRewardsResponse>
  ): QueryGetRewardsResponse {
    const message = {
      ...baseQueryGetRewardsResponse,
    } as QueryGetRewardsResponse;
    if (object.Rewards !== undefined && object.Rewards !== null) {
      message.Rewards = Rewards.fromPartial(object.Rewards);
    } else {
      message.Rewards = undefined;
    }
    return message;
  },
};

const baseQueryAllRewardsRequest: object = {};

export const QueryAllRewardsRequest = {
  encode(
    message: QueryAllRewardsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRewardsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllRewardsRequest } as QueryAllRewardsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRewardsRequest {
    const message = { ...baseQueryAllRewardsRequest } as QueryAllRewardsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRewardsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRewardsRequest>
  ): QueryAllRewardsRequest {
    const message = { ...baseQueryAllRewardsRequest } as QueryAllRewardsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllRewardsResponse: object = {};

export const QueryAllRewardsResponse = {
  encode(
    message: QueryAllRewardsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Rewards) {
      Rewards.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRewardsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllRewardsResponse,
    } as QueryAllRewardsResponse;
    message.Rewards = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Rewards.push(Rewards.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllRewardsResponse {
    const message = {
      ...baseQueryAllRewardsResponse,
    } as QueryAllRewardsResponse;
    message.Rewards = [];
    if (object.Rewards !== undefined && object.Rewards !== null) {
      for (const e of object.Rewards) {
        message.Rewards.push(Rewards.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllRewardsResponse): unknown {
    const obj: any = {};
    if (message.Rewards) {
      obj.Rewards = message.Rewards.map((e) =>
        e ? Rewards.toJSON(e) : undefined
      );
    } else {
      obj.Rewards = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllRewardsResponse>
  ): QueryAllRewardsResponse {
    const message = {
      ...baseQueryAllRewardsResponse,
    } as QueryAllRewardsResponse;
    message.Rewards = [];
    if (object.Rewards !== undefined && object.Rewards !== null) {
      for (const e of object.Rewards) {
        message.Rewards.push(Rewards.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a scores by id. */
  Scores(request: QueryGetScoresRequest): Promise<QueryGetScoresResponse>;
  /** Queries a list of scores items. */
  ScoresAll(request: QueryAllScoresRequest): Promise<QueryAllScoresResponse>;
  /** Queries a NFT by id. */
  NFT(request: QueryGetNFTRequest): Promise<QueryGetNFTResponse>;
  /** Queries a list of NFT items. */
  NFTAll(request: QueryAllNFTRequest): Promise<QueryAllNFTResponse>;
  /** Queries a rewards by id. */
  Rewards(request: QueryGetRewardsRequest): Promise<QueryGetRewardsResponse>;
  /** Queries a list of rewards items. */
  RewardsAll(request: QueryAllRewardsRequest): Promise<QueryAllRewardsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Scores(request: QueryGetScoresRequest): Promise<QueryGetScoresResponse> {
    const data = QueryGetScoresRequest.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Query",
      "Scores",
      data
    );
    return promise.then((data) =>
      QueryGetScoresResponse.decode(new Reader(data))
    );
  }

  ScoresAll(request: QueryAllScoresRequest): Promise<QueryAllScoresResponse> {
    const data = QueryAllScoresRequest.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Query",
      "ScoresAll",
      data
    );
    return promise.then((data) =>
      QueryAllScoresResponse.decode(new Reader(data))
    );
  }

  NFT(request: QueryGetNFTRequest): Promise<QueryGetNFTResponse> {
    const data = QueryGetNFTRequest.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Query",
      "NFT",
      data
    );
    return promise.then((data) => QueryGetNFTResponse.decode(new Reader(data)));
  }

  NFTAll(request: QueryAllNFTRequest): Promise<QueryAllNFTResponse> {
    const data = QueryAllNFTRequest.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Query",
      "NFTAll",
      data
    );
    return promise.then((data) => QueryAllNFTResponse.decode(new Reader(data)));
  }

  Rewards(request: QueryGetRewardsRequest): Promise<QueryGetRewardsResponse> {
    const data = QueryGetRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Query",
      "Rewards",
      data
    );
    return promise.then((data) =>
      QueryGetRewardsResponse.decode(new Reader(data))
    );
  }

  RewardsAll(
    request: QueryAllRewardsRequest
  ): Promise<QueryAllRewardsResponse> {
    const data = QueryAllRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "singhp1069.spunky.spunky.Query",
      "RewardsAll",
      data
    );
    return promise.then((data) =>
      QueryAllRewardsResponse.decode(new Reader(data))
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
