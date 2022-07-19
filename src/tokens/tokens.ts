import axios from "axios";
import {PROTOCOL_NAMES} from "../protocols/protocols";
import {CHAIN_ID, CHAINS} from "../chains/chains";
import {SUPPORTED_LP_TYPES} from "../lp-pairs";

export interface PriceSource {
  source: "coingecko" | "nomics" | "custom";
}

export interface SupportedPriceSource extends PriceSource {
  source: "coingecko" | "nomics";
  apiId: string;
}

export interface CustomPriceSource extends PriceSource {
  source: "custom";
  customPriceFunction: () => Promise<string>;
}

export interface Token {
  name: string;
  symbol: string;
  supportedChainIds: CHAIN_ID[];
  logoUrl?: string;
  nomicsId?: string;
  coingeckoId?: string;
  protocol?: PROTOCOL_NAMES;
  customPriceFunction?: () => Promise<string>;
  priceSources: Map<number, SupportedPriceSource | CustomPriceSource>;
}

export interface LpToken extends Token {
  lpType?: SUPPORTED_LP_TYPES;
  token0Address: string;
  token1Address: string;
  baseTokenPosition: 0 | 1;
}

export function getToken(address: string): Token | null {
  // @ts-ignore
  return TOKENS.get(address) || null;
}

export const getTokensForProtocol = function (protocol: PROTOCOL_NAMES, includeTestnet = false): Token[] {
  if (includeTestnet) {
    // @ts-ignore
    return Array.from(TOKENS.values()).filter((token: Token) => token.protocol === protocol);
  }
  return Array.from(TOKENS.values()).filter(
    // @ts-ignore
    (token: Token) => token.protocol === protocol && !CHAINS.get(token.supportedChainIds)?.isTestnet
  );
};

export const getUniqueApiIds = function (): {
  coingecko: Set<string>,
  nomics: Set<string>,
} {
  const coingecko: Set<string> = new Set();
  const nomics: Set<string> = new Set();

  for (const token of TOKENS.values()) {
    for (const priceSource of token.priceSources.values()) {
      priceSource.source === "coingecko" && coingecko.add(priceSource.apiId);
      priceSource.source === "nomics" && nomics.add(priceSource.apiId);
    }
  }

  return {
    coingecko: coingecko,
    nomics: nomics,
  }
}

const mapReducer = (arr: any, [keys, val]: any) => [
  ...arr,
  ...(Array.isArray(keys)
      ? [...keys.map(key => [key, val])]
      : [[keys, val]]
  )
];

// @ts-ignore
export const TOKENS = new Map<string, Token>([
  [
    [
      "ethereum_0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2".toLowerCase(),
      "rinkeby_0x458821d1eBcAFC3f185a359c1bf2d27f8421AC14".toLowerCase(),
      "goerli_0x8b7fb00abb67ba04ce894b9e2769fe24a8409a6a".toLowerCase(),
    ],
    {
      name: "Ethereum",
      symbol: "ETH",
      chainId: CHAIN_ID.RINKEBY_TESTNET,
      coingeckoId: "ethereum",
      nomicsId: "ETH",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {source: "coingecko", apiId: "ethereum"}],
        [1, {source: "nomics", apiId: "ETH"}],
      ]),
    },
  ],
  [
    [
      "ethereum_0x0ab87046fbb341d058f17cbc4c1133f25a20a52f".toLowerCase(),
      "goerli_0xbd5cd2dc63626780b496f55a8e99bfa42b2b891a".toLowerCase(),
    ],
    {
      name: "Governance OHM",
      symbol: "GOHM",
      chainId: CHAIN_ID.ETHEREUM_MAINNET,
      coingeckoId: "governance-ohm",
      nomicsId: "GOHM",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {source: "nomics", apiId: "GOHM"}],
        [1, {source: "coingecko", apiId: "governance-ohm"}],
      ]),
    },
  ],
  [
    [
      "ethereum_0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5".toLowerCase(),
      "goerli_0x0595328847af962f951a4f8f8ee9a3bf261e4f6b".toLowerCase(),
    ],
    {
      name: "Olympus",
      symbol: "OHM",
      chainId: CHAIN_ID.ETHEREUM_MAINNET,
      coingeckoId: "olympus",
      nomicsId: "OHM2",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {source: "coingecko", apiId: "olympus"}],
        [1, {source: "nomics", apiId: "OHM2"}],
      ]),
    },
  ],
  [
    [
      "ethereum_0xdbdb4d16eda451d0503b854cf79d55697f90c8df".toLowerCase(),
      "rinkeby_0x034618c94c99232dc7463563d5285cdb6edc73e0".toLowerCase(),
    ],
    {
      name: "Alchemix",
      symbol: "ALCX",
      chainId: CHAIN_ID.ETHEREUM_MAINNET,
      protocol: PROTOCOL_NAMES.ALCHEMIX,
      coingeckoId: "alchemix",
      nomicsId: "ALCX",
      customPriceFunction: async () => {
        let resp;
        try {
          resp = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=alchemix&vs_currencies=usd");
          return resp.data["alchemix"].usd;
        } catch (e) {
          // console.log("coingecko api error: ", e);
        }
      },
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {
          source: "custom",
          customPriceFunction: async () => {
            let resp;
            try {
              resp = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=alchemix&vs_currencies=usd");
              return resp.data["alchemix"].usd;
            } catch (e) {
              // console.log("coingecko api error: ", e);
            }
          }
        }],
        [1, {source: "coingecko", apiId: "alchemix"}],
        [2, {source: "nomics", apiId: "ALCX"}],
      ]),
    },
  ],
  [
    [
      "rinkeby_0x47096F8f6166762b727e8985D92D31be37DD26Bd".toLowerCase(),
    ],
    {
      name: "ALCX-ETH SLP",
      symbol: "ALCX-ETH SLP",
      chainId: CHAIN_ID.RINKEBY_TESTNET,
      protocol: PROTOCOL_NAMES.ALCHEMIX,
      lpType: SUPPORTED_LP_TYPES.SUSHISWAP,
      token0Address: "rinkeby_0x034618c94c99232Dc7463563D5285cDB6eDc73e0",
      token1Address: "rinkeby_0x458821d1eBcAFC3f185a359c1bf2d27f8421AC14",
      baseTokenPosition: 1,
      priceSources: new Map(),
    },
  ],
  [
    [
      "ethereum_0x6b175474e89094c44da98b954eedeac495271d0f".toLowerCase(),
      "goerli_0x41e38e70a36150d08a8c97aec194321b5eb545a5".toLowerCase(),
    ],
    {
      name: "Dai",
      symbol: "DAI",
      chainId: CHAIN_ID.ETHEREUM_MAINNET,
      coingeckoId: "dai",
      nomicsId: "DAI",
      customPriceFunction: async () => {
        let resp;
        try {
          resp = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=dai&vs_currencies=usd");
          return resp.data["dai"].usd;
        } catch (e) {
          // console.log("coingecko api error: ", e);
        }
      },
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {source: "coingecko", apiId: "dai"}],
        [1, {source: "nomics", apiId: "DAI"}],
        [2, {
          source: "custom",
          customPriceFunction: async () => {
            let resp;
            try {
              resp = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=dai&vs_currencies=usd");
              return resp.data["dai"].usd;
            } catch (e) {
              // console.log("coingecko api error: ", e);
            }
          }
        }],
      ]),
    },
  ],
  [
    [
      "ethereum_0x853d955acef822db058eb8505911ed77f175b99e".toLowerCase(),
      "rinkeby_0x2f7249cb599139e560f0c81c269ab9b04799e453".toLowerCase(),
    ],
    {
      name: "Frax",
      symbol: "FRAX",
      chainId: CHAIN_ID.ETHEREUM_MAINNET,
      coingeckoId: "frax",
      nomicsId: "FRAX",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {source: "coingecko", apiId: "frax"}],
        [1, {source: "nomics", apiId: "FRAX"}],
      ]),
    },
  ],
].reduce(mapReducer, []));
