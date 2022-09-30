import { CHAIN_ID } from "../chains/chains";
import { SUPPORTED_LP_TYPES } from "../lp-pairs";

export interface PriceSource {
  source: "coingecko" | "custom";
}

export interface SupportedPriceSource extends PriceSource {
  source: "coingecko";
  apiId: string;        // The token's Coingecko API ID
}

export interface CustomPriceSource extends PriceSource {
  source: "custom";
  customPriceFunction: () => Promise<string>;
}

export interface Token {
  name: string;                   // The token name
  symbol: string;                 // The token symbol
  logoUrl?: string;               // A URL to the token logo, preferably .png
  priceSources: Map<number, SupportedPriceSource | CustomPriceSource>;    // A map of price sources for the token. The `number` key represents the price source's priority, lower numbers being higher priority
  purchaseLinks: Map<CHAIN_ID, string>;   // Map of links to a place where the token can be purchased
}

export interface LpToken extends Token {
  lpType?: SUPPORTED_LP_TYPES;
  token0Address: string;
  token1Address: string;
}

export function getToken(address: string): Token | null {
  // @ts-ignore
  return TOKENS.get(address.toLowerCase()) || null;
}

export const getUniqueApiIds = function(): {
  coingecko: Set<string>,
  } {
  const coingecko: Set<string> = new Set();

  for (const token of TOKENS.values()) {
    for (const priceSource of token.priceSources.values()) {
      priceSource.source === "coingecko" && coingecko.add(priceSource.apiId);
    }
  }

  return {
    coingecko: coingecko,
  };
};

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
      "eth",
      "mainnet_0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2".toLowerCase(),
      "goerli_0x8b7fb00abb67ba04ce894b9e2769fe24a8409a6a".toLowerCase(),
      "goerli_0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6".toLowerCase()
    ],
    {
      name: "Ethereum",
      symbol: "ETH",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, { source: "coingecko", apiId: "ethereum" }],
      ]),
      purchaseLinks: new Map<CHAIN_ID, string>([
        [CHAIN_ID.ETHEREUM_MAINNET, "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2&chainId=1"],
        [CHAIN_ID.GOERLI_TESTNET, "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6&chainId=5"]
      ])
    }
  ],
  [
    [
      "goerli_0x41e38e70a36150d08a8c97aec194321b5eb545a5".toLowerCase()
    ],
    {
      name: "Mock DAI (2)",
      symbol: "DAI2",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {
          source: "custom",
          customPriceFunction: async () => "1.00"
        }]
      ]),
      purchaseLinks: new Map<CHAIN_ID, string>([
        [CHAIN_ID.GOERLI_TESTNET, "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x41e38e70a36150d08a8c97aec194321b5eb545a5&chainId=5"]
      ])
    }
  ],
  [
    [
      "goerli_0x326C977E6efc84E512bB9C30f76E30c160eD06FB".toLowerCase()
    ],
    {
      name: "Mock Chainlink",
      symbol: "LINK",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {
          source: "coingecko",
          apiId: "chainlink"
        }]
      ]),
      purchaseLinks: new Map<CHAIN_ID, string>([
        [CHAIN_ID.GOERLI_TESTNET, "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x326C977E6efc84E512bB9C30f76E30c160eD06FB&chainId=5"]
      ])
    }
  ],
  [
    [
      "goerli_0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C".toLowerCase()
    ],
    {
      name: "Mock USDC",
      symbol: "USDC",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {
          source: "custom",
          customPriceFunction: async () => "1.00"
        }]
      ]),
      purchaseLinks: new Map<CHAIN_ID, string>([
        [CHAIN_ID.GOERLI_TESTNET, "https://app.compound.finance/"]
      ])
    }
  ],
  [
    [
      "goerli_0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60".toLowerCase()
    ],
    {
      name: "Mock DAI 3",
      symbol: "DAI3",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {
          source: "custom",
          customPriceFunction: async () => "1.00"
        }]
      ]),
      purchaseLinks: new Map<CHAIN_ID, string>([
        [CHAIN_ID.GOERLI_TESTNET, "https://app.compound.finance/"]
      ])
    }
  ],
  [
    [
      "goerli_0x2899a03ffdab5c90badc5920b4f53b0884eb13cc".toLowerCase()
    ],
    {
      name: "Mock DAI 4",
      symbol: "DAI4",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {
          source: "custom",
          customPriceFunction: async () => "1.00"
        }]
      ]),
      purchaseLinks: new Map<CHAIN_ID, string>([
        [CHAIN_ID.GOERLI_TESTNET, "https://app.compound.finance/"]
      ])
    }
  ],
  [
    [
      "goerli_0x79C950C7446B234a6Ad53B908fBF342b01c4d446".toLowerCase()
    ],
    {
      name: "Mock USDT",
      symbol: "USDT",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {
          source: "custom",
          customPriceFunction: async () => "1.00"
        }]
      ]),
      purchaseLinks: new Map<CHAIN_ID, string>([
        [CHAIN_ID.GOERLI_TESTNET, "https://app.compound.finance/"]
      ])
    }
  ],
  [
    [
      "goerli_0x3587b2F7E0E2D6166d6C14230e7Fe160252B0ba4".toLowerCase()
    ],
    {
      name: "Mock COMP",
      symbol: "COMP",
      priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
        [0, {
          source: "coingecko",
          apiId: "compound-governance-token"
        }]
      ]),
      purchaseLinks: new Map<CHAIN_ID, string>([
        [CHAIN_ID.GOERLI_TESTNET, "https://app.compound.finance/"]
      ])
    }
  ],
  [
    [
      "goerli_0x77195bB23B8Dac9F05D16092C7290BB7d1F7F1d3".toLowerCase()
    ],
      {
        name: "COMP-USDT LP",
        symbol: "COMP-USDT LP",
        lpType: SUPPORTED_LP_TYPES.SUSHISWAP,
        token0Address: "goerli_0x3587b2F7E0E2D6166d6C14230e7Fe160252B0ba4".toLowerCase(),
        token1Address: "goerli_0x79C950C7446B234a6Ad53B908fBF342b01c4d446".toLowerCase(),
        priceSources: new Map(),
        purchaseLinks: new Map<CHAIN_ID, string>([
          [CHAIN_ID.GOERLI_TESTNET, "https://app.uniswap.org/#/add/v2/0x3587b2F7E0E2D6166d6C14230e7Fe160252B0ba4/0x79C950C7446B234a6Ad53B908fBF342b01c4d446"]
        ])
      }
    ],
    [
      [
        "mainnet_0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5".toLowerCase(),
        "goerli_0x0595328847af962f951a4f8f8ee9a3bf261e4f6b".toLowerCase(),
      ],
      {
        name: "Olympus",
        symbol: "OHM",
        priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
          [0, { source: "coingecko", apiId: "olympus" }],
        ]),
        purchaseLinks: new Map<CHAIN_ID, string>([
          [
            CHAIN_ID.ETHEREUM_MAINNET,
            "https://app.balancer.fi/#/trade/ether/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5",
          ],
          [CHAIN_ID.GOERLI_TESTNET, "https://app.balancer.fi/#/trade/ether/0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5"],
        ]),
      },
    ],
].reduce(mapReducer, []));
