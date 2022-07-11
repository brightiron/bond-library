import axios from "axios";
import {PROTOCOL_NAMES} from "../protocols/protocols";
import {CHAIN_ID, CHAINS} from "../chains/chains";
import {SUPPORTED_LP_TYPES} from "../lp-pairs";

export interface Token {
  name: string;
  symbol: string;
  chainId: CHAIN_ID;
  logoUrl?: string;
  nomicsId?: string;
  coingeckoId?: string;
  protocol?: PROTOCOL_NAMES;
  customPriceFunction?: () => Promise<string>;
}

export interface LpToken extends Token {
  lpType?: SUPPORTED_LP_TYPES;
  token0Address: string;
  token1Address: string;
  baseTokenPosition: 0 | 1;
}

export const getToken = function (address: string): Token | null {
  return TOKENS.get(address) || null;
};

export const getTokensForProtocol = function (protocol: PROTOCOL_NAMES, includeTestnet = false): Token[] {
  if (includeTestnet) {
    return Array.from(TOKENS.values()).filter((token: Token) => token.protocol === protocol);
  }
  return Array.from(TOKENS.values()).filter(
    (token: Token) => token.protocol === protocol && !CHAINS.get(token.chainId)?.isTestnet
  );
};

const TOKENS = new Map<string, Token | LpToken>([
  [
    "0x0ab87046fbb341d058f17cbc4c1133f25a20a52f",
    {
      name: "Governance OHM",
      symbol: "GOHM",
      chainId: CHAIN_ID.ETHEREUM_MAINNET,
      coingeckoId: "governance-ohm",
    },
  ],
  [
    "0xdbdb4d16eda451d0503b854cf79d55697f90c8df",
    {
      name: "Alchemix",
      symbol: "ALCX",
      chainId: CHAIN_ID.ETHEREUM_MAINNET,
      protocol: PROTOCOL_NAMES.ALCHEMIX,
      customPriceFunction: async () => {
        let resp;
        try {
          resp = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=alchemix&vs_currencies=usd");
          return resp.data["alchemix"].usd;
        } catch (e) {
          // console.log("coingecko api error: ", e);
        }
      },
    },
  ],
  [
    "0x034618c94c99232Dc7463563D5285cDB6eDc73e0",
    {
      name: "Alchemix",
      symbol: "ALCX",
      chainId: CHAIN_ID.RINKEBY_TESTNET,
      protocol: PROTOCOL_NAMES.ALCHEMIX,
      customPriceFunction: async () => {
        let resp;
        try {
          resp = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=alchemix&vs_currencies=usd");
          return resp.data["alchemix"].usd;
        } catch (e) {
          // console.log("coingecko api error: ", e);
        }
      },
    },
  ],
  [
    "0x47096F8f6166762b727e8985D92D31be37DD26Bd",
    {
      name: "ALCX-ETH SLP",
      symbol: "ALCX-ETH SLP",
      chainId: CHAIN_ID.RINKEBY_TESTNET,
      protocol: PROTOCOL_NAMES.ALCHEMIX,
      lpType: SUPPORTED_LP_TYPES.SUSHISWAP,
      token0Address: "0x034618c94c99232Dc7463563D5285cDB6eDc73e0",
      token1Address: "0x458821d1eBcAFC3f185a359c1bf2d27f8421AC14",
      baseTokenPosition: 1,
    },
  ],
]);
