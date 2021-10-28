import {KeplrWallet} from "./wallet/keplrwallet";
import {BankClient} from "./bank/index";
import { RewardClient } from './reward/rewardclient';
import {Client} from "./client"; 

let keplrWallet: KeplrWallet;
let bankClient: BankClient;
let rewardClient: RewardClient;

window.onload = async () => {
        const client: Client = await Client.build();
        keplrWallet = client.keplrWallet;
        bankClient = client.bankClient;
        rewardClient = client.rewardClient;
        const rewards = await rewardClient.getAllRewards();
        console.log(rewards);
        (document.getElementById("rewards").innerText = JSON.stringify(rewards.Rewards));
}

