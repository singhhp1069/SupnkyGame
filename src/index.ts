import {KeplrWallet} from "./wallet/keplrwallet";
import {Client} from "./client"; 

let keplrWallet: KeplrWallet;

window.onload = async () => {
        const client: Client = await Client.build();
        keplrWallet = client.keplrWallet;
}