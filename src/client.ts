import {KeplrWallet} from "./wallet/keplrwallet";
import {BankClient} from "./bank";
import { ScoreClient } from './score/scoreclient';
import { RewardClient } from './reward/rewardclient';
import { NFTClient } from './nft/nftclient';
import { CHAIN_ID, CHAIN_NAME, TENDERMINT_RPC, REST_ENDPOINT} from './config';

const chainId: string = CHAIN_ID;
const chainName: string = CHAIN_NAME;
const rpcUri: string = TENDERMINT_RPC;
const restUri: string = REST_ENDPOINT;

export class Client {

    keplrWallet: KeplrWallet;
    bankClient: BankClient;
    scoreClient: ScoreClient;
    rewardClient : RewardClient;
    nftClient: NFTClient;

    public static async build(): Promise<Client> {
        const client: Client = new Client();
        await client.init()
        return client;
    }

    private async init() {
        this.keplrWallet = await KeplrWallet.build(chainId, chainName, rpcUri, restUri);
        this.bankClient = await BankClient.build(this.keplrWallet);
        this.scoreClient = await ScoreClient.build(this.keplrWallet);
        this.rewardClient = await RewardClient.build(this.keplrWallet);
        this.nftClient = await NFTClient.build(this.keplrWallet);
    }
}