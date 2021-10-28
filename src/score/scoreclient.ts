import { MsgCreateScores, MsgUpdateScores} from "../../generated/singhp1069/spunky/singhp1069.spunky.spunky/module/types/spunky/tx";
import { KeplrWallet } from '../wallet/keplrwallet';
import {BroadcastTxResponse, SigningStargateClient, StdFee} from "@cosmjs/stargate";
import { EncodeObject, Registry } from '@cosmjs/proto-signing';
import axios, { AxiosResponse } from 'axios';
import {REST_ENDPOINT} from '../config';

export class ScoreClient {
    public rpcUri: string;
    private keplr: KeplrWallet;
    private client: SigningStargateClient;
    private registry: Registry;
    types = [
      ["/singhp1069.spunky.spunky.MsgCreateScores", MsgCreateScores],
      ["/singhp1069.spunky.spunky.MsgUpdateScores", MsgUpdateScores],
    ];

    constructor(keplr: KeplrWallet) {
        this.rpcUri = keplr.rpcUri;
        this.keplr = keplr;
        this.registry = new Registry(<any>this.types);
    }

    public static async build(keplr: KeplrWallet) {
        const client: ScoreClient = new ScoreClient(keplr);
        await client.init();
        return client;
    }

    private async init() {
        this.client = await SigningStargateClient.connectWithSigner(this.rpcUri, this.keplr.getOfflineSigner(), {registry: this.registry} );
    }

    public async createScore(score: string) : Promise<BroadcastTxResponse> {
      const walletAddress =await this.keplr.getSignerAddress();
      const createScore = MsgCreateScores.fromPartial({creator: walletAddress, highscore: score});
      const msgAny: EncodeObject = {
        typeUrl: "/singhp1069.spunky.spunky.MsgCreateScores",
        value: createScore,
      };
      const fee: StdFee = {
        amount: [],
        gas: "200000",
      };
      const memo = "";
     
      return this.client.signAndBroadcast(walletAddress, [msgAny], fee, memo);
    }

    public async updateScore(score: string) : Promise<BroadcastTxResponse> {
      const walletAddress =await this.keplr.getSignerAddress();
      const scores: Scores = await this.getAllScore();
      const isUserExist = scores.Scores.find(score => (score.creator == walletAddress));
      console.log("isUserExist " + JSON.stringify(isUserExist));
      if(!isUserExist) {
        return Promise.reject("No user found");
      }
      const updateScore = MsgUpdateScores.fromPartial({creator: walletAddress, highscore: score});
      const msgAny: EncodeObject = {
        typeUrl: "/singhp1069.spunky.spunky.MsgUpdateScores",
        value: updateScore,
      };
      const fee: StdFee = {
        amount: [],
        gas: "200000",
      };
      const memo = "";
     
      return this.client.signAndBroadcast(walletAddress, [msgAny], fee, memo);
    }

    public async getAllScore() : Promise<Scores> {
      let result: AxiosResponse = await axios.get(`${REST_ENDPOINT}/spunky/scores`);
      let scores: Scores = result.data;
      return scores;
    }

    public async getScoreById(id: string) : Promise<ScoreByID> {
      let result: AxiosResponse = await axios.get(`${REST_ENDPOINT}/spunky/scores/${id}`);
      let scores: ScoreByID = result.data;
      return scores;
    }
}

export interface Score {
  id: string;
  highscore: string;
  creator: string;
}

export interface Pagination {
  next_key?: any;
  total: string;
}

export interface Scores {
  Scores: Score[];
  pagination: Pagination;
}

export interface ScoreByID {
  Scores: Scores;
}