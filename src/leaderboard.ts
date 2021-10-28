import {KeplrWallet} from "./wallet/keplrwallet";
import { ScoreClient } from './score/scoreclient';
import {Client} from "./client"; 

let keplrWallet: KeplrWallet;
let scoreClient: ScoreClient;

window.onload = async () => {
        const client: Client = await Client.build();
        keplrWallet = client.keplrWallet;
        scoreClient = client.scoreClient;
        const scores = await scoreClient.getAllScore();
        console.log(scores);
        (document.getElementById("leaderboard").innerText = JSON.stringify(scores.Scores));
}

