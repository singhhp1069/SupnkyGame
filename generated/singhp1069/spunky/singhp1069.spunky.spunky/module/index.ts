// // THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

// import { StdFee } from "@cosmjs/launchpad";
// import { SigningStargateClient } from "@cosmjs/stargate";
// import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
// import { Api } from "./rest";
// import { MsgTransferNFT } from "./types/spunky/tx";
// import { MsgClaimReward } from "./types/spunky/tx";
// import { MsgCreateNFT } from "./types/spunky/tx";
// import { MsgUpdateNFT } from "./types/spunky/tx";
// import { MsgCreateRewards } from "./types/spunky/tx";
// import { MsgDeleteRewards } from "./types/spunky/tx";
// import { MsgCreateScores } from "./types/spunky/tx";
// import { MsgUpdateScores } from "./types/spunky/tx";


// const types = [
//   ["/singhp1069.spunky.spunky.MsgTransferNFT", MsgTransferNFT],
//   ["/singhp1069.spunky.spunky.MsgClaimReward", MsgClaimReward],
//   ["/singhp1069.spunky.spunky.MsgCreateNFT", MsgCreateNFT],
//   ["/singhp1069.spunky.spunky.MsgUpdateNFT", MsgUpdateNFT],
//   ["/singhp1069.spunky.spunky.MsgCreateRewards", MsgCreateRewards],
//   ["/singhp1069.spunky.spunky.MsgDeleteRewards", MsgDeleteRewards],
//   ["/singhp1069.spunky.spunky.MsgCreateScores", MsgCreateScores],
//   ["/singhp1069.spunky.spunky.MsgUpdateScores", MsgUpdateScores],
  
// ];
// export const MissingWalletError = new Error("wallet is required");

// const registry = new Registry(<any>types);

// const defaultFee = {
//   amount: [],
//   gas: "200000",
// };

// interface TxClientOptions {
//   addr: string
// }

// interface SignAndBroadcastOptions {
//   fee: StdFee,
//   memo?: string
// }

// const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
//   if (!wallet) throw MissingWalletError;

//   const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
//   const { address } = (await wallet.getAccounts())[0];

//   return {
//     signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
//     msgTransferNFT: (data: MsgTransferNFT): EncodeObject => ({ typeUrl: "/singhp1069.spunky.spunky.MsgTransferNFT", value: data }),
//     msgClaimReward: (data: MsgClaimReward): EncodeObject => ({ typeUrl: "/singhp1069.spunky.spunky.MsgClaimReward", value: data }),
//     msgCreateNFT: (data: MsgCreateNFT): EncodeObject => ({ typeUrl: "/singhp1069.spunky.spunky.MsgCreateNFT", value: data }),
//     msgUpdateNFT: (data: MsgUpdateNFT): EncodeObject => ({ typeUrl: "/singhp1069.spunky.spunky.MsgUpdateNFT", value: data }),
//     msgCreateRewards: (data: MsgCreateRewards): EncodeObject => ({ typeUrl: "/singhp1069.spunky.spunky.MsgCreateRewards", value: data }),
//     msgDeleteRewards: (data: MsgDeleteRewards): EncodeObject => ({ typeUrl: "/singhp1069.spunky.spunky.MsgDeleteRewards", value: data }),
//     msgCreateScores: (data: MsgCreateScores): EncodeObject => ({ typeUrl: "/singhp1069.spunky.spunky.MsgCreateScores", value: data }),
//     msgUpdateScores: (data: MsgUpdateScores): EncodeObject => ({ typeUrl: "/singhp1069.spunky.spunky.MsgUpdateScores", value: data }),
    
//   };
// };

// interface QueryClientOptions {
//   addr: string
// }

// const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
//   return new Api({ baseUrl: addr });
// };

// export {
//   txClient,
//   queryClient,
// };
