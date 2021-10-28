import { MsgClaimReward, MsgCreateRewards, MsgDeleteRewards } from "../../generated/singhp1069/spunky/singhp1069.spunky.spunky/module/types/spunky/tx";
import { KeplrWallet } from '../wallet/keplrwallet';
import {BroadcastTxResponse, SigningStargateClient, StdFee} from "@cosmjs/stargate";
import { EncodeObject, Registry } from '@cosmjs/proto-signing';
import axios, { AxiosResponse } from 'axios';
import {REST_ENDPOINT} from '../config';

export class RewardClient {
    public rpcUri: string;
    private keplr: KeplrWallet;
    private client: SigningStargateClient;
    private registry: Registry;
    types = [
      ["/singhp1069.spunky.spunky.MsgClaimReward", MsgClaimReward],
      ["/singhp1069.spunky.spunky.MsgCreateRewards", MsgCreateRewards],
      ["/singhp1069.spunky.spunky.MsgDeleteRewards", MsgDeleteRewards],
    ];

    constructor(keplr: KeplrWallet) {
        this.rpcUri = keplr.rpcUri;
        this.keplr = keplr;
        this.registry = new Registry(<any>this.types);
    }

    public static async build(keplr: KeplrWallet) {
        const client: RewardClient = new RewardClient(keplr);
        await client.init();
        return client;
    }

    private async init() {
        this.client = await SigningStargateClient.connectWithSigner(this.rpcUri, this.keplr.getOfflineSigner(), {registry: this.registry} );
    }

    public async createReward( milestone: string, description: string, reward: string) : Promise<BroadcastTxResponse> {
      const walletAddress = await this.keplr.getSignerAddress();
      const createReward = MsgCreateRewards.fromPartial({creator: walletAddress, milestone: milestone, description: description, reward: reward, spunker: ""});
      const msgAny: EncodeObject = {
        typeUrl: "/singhp1069.spunky.spunky.MsgCreateRewards",
        value: createReward,
      };
      const fee: StdFee = {
        amount: [],
        gas: "200000",
      };
      const memo = "";
     
      return this.client.signAndBroadcast(walletAddress, [msgAny], fee, memo);
    }

    public async deleteReward(id:number) : Promise<BroadcastTxResponse> {
      const walletAddress =await this.keplr.getSignerAddress();
      const updateScore = MsgDeleteRewards.fromPartial({creator: walletAddress, id: id});
      const msgAny: EncodeObject = {
        typeUrl: "/singhp1069.spunky.spunky.MsgDeleteRewards",
        value: updateScore,
      };
      const fee: StdFee = {
        amount: [],
        gas: "200000",
      };
      const memo = "";
     
      return this.client.signAndBroadcast(walletAddress, [msgAny], fee, memo);
    }

    public async claimReward(id: number) : Promise<BroadcastTxResponse> {
      const walletAddress =await this.keplr.getSignerAddress();
      const updateScore = MsgClaimReward.fromPartial({creator: walletAddress, id: id.toString()});
      const msgAny: EncodeObject = {
        typeUrl: "/singhp1069.spunky.spunky.MsgClaimReward",
        value: updateScore,
      };
      const fee: StdFee = {
        amount: [],
        gas: "200000",
      };
      const memo = "";
     
      return this.client.signAndBroadcast(walletAddress, [msgAny], fee, memo);
    }

    public async getAllRewards() : Promise<Rewards> {
      let result: AxiosResponse = await axios.get(`${REST_ENDPOINT}/spunky/rewards`);
      let rewards: Rewards = result.data;
      return rewards;
    }

    public async getScoreById(id: string) : Promise<RewardByID> {
      let result: AxiosResponse = await axios.get(`${REST_ENDPOINT}/spunky/rewards/${id}`);
      let scores: RewardByID = result.data;
      return scores;
    }
}

  export interface Reward {
      id: string;
      milestone: string;
      description: string;
      reward: string;
      spunker: string;
      creator: string;
  }

  export interface Pagination {
      nextKey: string;
      total: string;
  }

  export interface Rewards {
      Rewards: Reward[];
      pagination: Pagination;
  }


export interface RewardByID {
  Rewards: Reward;
}