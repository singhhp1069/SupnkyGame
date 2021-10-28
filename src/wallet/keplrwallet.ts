import { ADDREE_PREFIX, COIN_DENOM, COIN_MINIMAL_DENOM, COIN_DECIMALS,COIN_TYPE } from '../config';

export class KeplrWallet {
    public chainId: string;
    public chainName: string;
    public rpcUri: string;
    public restUri: string

    constructor(chainId: string, chainName: string, rpcUri: string, restUri: string) {
        this.chainId = chainId;
        this.chainName = chainName;
        this.rpcUri = rpcUri;
        this.restUri = restUri;
    }

    public static async build(chainId: string, chainName: string, rpcUri: string, restUri: string): Promise<KeplrWallet> {
        let keplr = new KeplrWallet(chainId, chainName, rpcUri, restUri);
        const status = await keplr.registerKeplr();
        if (!status) {
            return null;
        }
        return keplr;
    }

    private async registerKeplr(): Promise<boolean> {
        if (!(window as any).getOfflineSigner || !this.getKeplrInWindow()) {
            alert("Please install keplr extension");
        } else {
            if (this.getKeplrInWindow().experimentalSuggestChain) {
                try {
                    await this.getKeplrInWindow().experimentalSuggestChain(this.makeOption());
                    return true;
                } catch {
                    alert("Failed to suggest the chain");
                }
            } else {
                alert("Please use the recent version of keplr extension");
            }
        }
        return false;
    }

    public getKeplrInWindow(): any {
        return (window as any).keplr;
    }

    public getOfflineSigner(): any {
        return (window as any).getOfflineSigner(this.chainId);
    }

    public async getSignerAddress(): Promise<string> {
        return (await this.getOfflineSigner().getAccounts())[0].address;
    }

    private makeOption() {
        return {
            chainId: this.chainId,
            chainName: this.chainName,
            rpc: this.rpcUri,
            rest: this.restUri,
            stakeCurrency: {
                coinDenom: COIN_DENOM,
                coinMinimalDenom: COIN_MINIMAL_DENOM,
                coinDecimals: COIN_DECIMALS,
            },

            bip44: {
                coinType: COIN_TYPE,
            },

            bech32Config: {
                bech32PrefixAccAddr: ADDREE_PREFIX,
                bech32PrefixAccPub: ADDREE_PREFIX + "pub",
                bech32PrefixValAddr: ADDREE_PREFIX + "valoper",
                bech32PrefixValPub: ADDREE_PREFIX + "valoperpub",
                bech32PrefixConsAddr: ADDREE_PREFIX + "valcons",
                bech32PrefixConsPub: ADDREE_PREFIX + "valconspub"
            },
            currencies: [{
                amount: '0',
                denom: COIN_MINIMAL_DENOM,
                coinDenom: COIN_DENOM, 
                coinMinimalDenom: COIN_MINIMAL_DENOM, 
                coinDecimals: COIN_DECIMALS, 
            }],
            feeCurrencies: [{
                amount: '0',
                denom: COIN_MINIMAL_DENOM,
                coinDenom: COIN_DENOM,
                coinMinimalDenom: COIN_MINIMAL_DENOM,
                coinDecimals: COIN_DECIMALS,
            }],
            coinType: COIN_TYPE,
            gasPriceStep: {
                low: 0.01,
                average: 0.025,
                high: 0.04
            }
        };
    }

}