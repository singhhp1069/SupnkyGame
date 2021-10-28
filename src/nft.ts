import {KeplrWallet} from "./wallet/keplrwallet";
import { NFTClient } from './nft/nftclient';
import {Client} from "./client"; 

let keplrWallet: KeplrWallet;
let nftClient: NFTClient;

window.onload = async () => {
        const client: Client = await Client.build();
        keplrWallet = client.keplrWallet;
        nftClient = client.nftClient;
        const nfts = await nftClient.getAllNFT();
        (document.getElementById("nfts").innerText = JSON.stringify(nfts.NFT));
}

