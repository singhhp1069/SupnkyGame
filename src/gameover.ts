import {KeplrWallet} from "./wallet/keplrwallet";
import { ScoreClient } from './score/scoreclient';
import {Client} from "./client"; 

let keplrWallet: KeplrWallet;
let scoreClient: ScoreClient;

window.onload = async () => {
        const client: Client = await Client.build();
        keplrWallet = client.keplrWallet;
        scoreClient = client.scoreClient;
        var score = document.getElementById("leaderboard-player");
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const code = urlParams.get('score');
        await scoreClient.updateScore(code.toString());
}