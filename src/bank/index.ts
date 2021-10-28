import {KeplrWallet} from "../wallet/keplrwallet";
import {BroadcastTxResponse, Coin, SigningStargateClient} from "@cosmjs/stargate";
import { COIN_MINIMAL_DENOM } from '../config';

export class BankClient {
    public rpcUri: string;
    private keplr: KeplrWallet;
    private client: SigningStargateClient;

    constructor(keplr: KeplrWallet) {
        this.rpcUri = keplr.rpcUri;
        this.keplr = keplr;
    }

    public static async build(keplr: KeplrWallet) {
        const client: BankClient = new BankClient(keplr);
        await client.init();
        return client;
    }

    private async init() {
        this.client = await SigningStargateClient.connectWithSigner(this.rpcUri, this.keplr.getOfflineSigner());
    }

    public async getBalance(address: string): Promise<string> {
        const coin: Coin = await this.client.getBalance(address, COIN_MINIMAL_DENOM);
        return (parseFloat(coin.amount) / 1000000).toString();
    }

    public async sendToken(recipient: string, _amount: string): Promise<BroadcastTxResponse> {
        const sender: string = await this.keplr.getSignerAddress();
        let amount = parseFloat(_amount) * 1000000;
        return this.client.sendTokens(sender, recipient, [{denom: COIN_MINIMAL_DENOM, amount: amount.toString()}])
    }
}