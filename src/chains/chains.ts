export interface NativeCurrency {
  name: string;
  symbol: string;
  decimals?: number;
}

export interface Chain {
  chainName: string;
  chainId: string;
  isTestnet: boolean;
  nativeCurrency: NativeCurrency;
  rpcUrls: string[];
  blockExplorerUrls: string[];
  blockExplorerName: string;
  image: string;
  imageAltText: string;
}

export enum CHAIN_ID {
  ETHEREUM_MAINNET = "1",
  RINKEBY_TESTNET = "4",
  GOERLI_TESTNET = "5",
  OPTIMISM_MAINNET = "10",
  BSC_MAINNET = "56",
  POLYGON_MAINNET = "137",
  POLYGON_MUMBAI_TESTNET = "80001",
  ANDROMEDA_MAINNET = "1088",
  FANTOM_MAINNET = "250",
  FANTOM_TESTNET = "0xfa2",
  ARBITRUM_MAINNET = "42161",
  ARBITRUM_TESTNET = "421611",
  AVALANCHE_MAINNET = "43114",
  AVALANCHE_FUJI_TESTNET = "43113",
}

const ethereumMainnet: Chain = {
  chainName: "Ethereum",
  chainId: "1",
  isTestnet: false,
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: [""],
  blockExplorerUrls: ["https://etherscan.io/#/"],
  blockExplorerName: "Etherscan",
  image: "",
  imageAltText: "Ethereum Logo",
};

const rinkebyTestnet: Chain = {
  chainName: "Rinkeby Testnet",
  chainId: "4",
  isTestnet: true,
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: [""],
  blockExplorerUrls: ["https://rinkeby.etherscan.io/#/"],
  blockExplorerName: "Etherscan",
  image: "",
  imageAltText: "Ethereum Logo",
};

const goerliTestnet = {
  chainName: "Goerli Testnet",
  chainId: "5",
  isTestnet: true,
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: [""],
  blockExplorerUrls: ["https://goerli.etherscan.io/#/"],
  blockExplorerName: "Etherscan",
  image: "",
  imageAltText: "Ethereum Logo",
};

export const CHAINS = new Map<string, Chain>([
  [CHAIN_ID.ETHEREUM_MAINNET, ethereumMainnet],
  ["mainnet", ethereumMainnet],
  [CHAIN_ID.RINKEBY_TESTNET, rinkebyTestnet],
  ["rinkeby", rinkebyTestnet],
  [CHAIN_ID.GOERLI_TESTNET, goerliTestnet],
  ["goerli", goerliTestnet],
  /*
  [
    CHAIN_ID.OPTIMISM_MAINNET,
    {
      chainName: "Optimism",
      chainId: "10",
      isTestnet: false,
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://mainnet.optimism.io"],
      blockExplorerUrls: ["https://optimistic.etherscan.io/#/"],
      blockExplorerName: "Optimism Explorer",
      image: "",
      imageAltText: "Optimism Logo",
    },
  ],
  [
    CHAIN_ID.BSC_MAINNET,
    {
      chainName: "Binance Smart Chain",
      chainId: "56",
      isTestnet: false,
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ankr.com/bsc"],
      blockExplorerUrls: ["https://bscscan.com/#/"],
      blockExplorerName: "BscScan",
      image: "",
      imageAltText: "Binance Smart Chain Logo",
    },
  ],
  [
    CHAIN_ID.POLYGON_MAINNET,
    {
      chainName: "Polygon",
      chainId: "137",
      isTestnet: false,
      nativeCurrency: {
        name: "Matic",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/#/"],
      blockExplorerName: "Polygonscan",
      image: "",
      imageAltText: "Polygon Logo",
    },
  ],
  [
    CHAIN_ID.POLYGON_MUMBAI_TESTNET,
    {
      chainName: "Polygon Mumbai Testnet",
      chainId: "80001",
      isTestnet: true,
      nativeCurrency: {
        name: "Matic",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://rpc-mumbai.maticvigil.com/"],
      blockExplorerUrls: ["https://mumbai.polygonscan.com/#/"],
      blockExplorerName: "Polygonscan",
      image: "",
      imageAltText: "Polygon Logo",
    },
  ],
  [
    CHAIN_ID.ANDROMEDA_MAINNET,
    {
      chainName: "Andromeda",
      chainId: "1088",
      isTestnet: false,
      nativeCurrency: {
        name: "Metis",
        symbol: "METIS",
        decimals: 18,
      },
      rpcUrls: ["https://andromeda.metis.io/?owner=1088"],
      blockExplorerUrls: ["https://andromeda-explorer.metis.io/#/"],
      blockExplorerName: "Metis",
      image: "",
      imageAltText: "Andromeda Logo",
    },
  ],
  [
    CHAIN_ID.FANTOM_MAINNET,
    {
      chainName: "Fantom",
      chainId: "250",
      isTestnet: false,
      nativeCurrency: {
        name: "Fantom",
        symbol: "FTM",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ftm.tools"],
      blockExplorerUrls: ["https://ftmscan.com/#/"],
      blockExplorerName: "FTMScan",
      image: "",
      imageAltText: "Fantom Logo",
    },
  ],
  [
    CHAIN_ID.FANTOM_TESTNET,
    {
      chainName: "Fantom Testnet",
      chainId: "0xfa2",
      isTestnet: true,
      nativeCurrency: {
        name: "Fantom",
        symbol: "FTM",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.testnet.fantom.network"],
      blockExplorerUrls: ["https://testnet.ftmscan.com/#/"],
      blockExplorerName: "FTMScan",
      image: "",
      imageAltText: "Fantom Logo",
    },
  ],
  [
    CHAIN_ID.ARBITRUM_MAINNET,
    {
      chainName: "Arbitrum",
      chainId: "42161",
      isTestnet: false,
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://arb1.arbitrum.io/rpc"],
      blockExplorerUrls: ["https://arbiscan.io/#/"],
      blockExplorerName: "Arbiscan",
      image: "",
      imageAltText: "Arbitrum Logo",
    },
  ],
  [
    CHAIN_ID.ARBITRUM_TESTNET,
    {
      chainName: "Arbitrum Testnet",
      chainId: "421611",
      isTestnet: true,
      nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: ["https://rinkeby.arbitrum.io/rpc"],
      blockExplorerUrls: ["https://rinkeby-explorer.arbitrum.io/#/"],
      blockExplorerName: "Arbitrum Explorer",
      image: "",
      imageAltText: "Arbitrum Logo",
    },
  ],
  [
    CHAIN_ID.AVALANCHE_MAINNET,
    {
      chainName: "Avalanche",
      chainId: "43114",
      isTestnet: false,
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
        decimals: 18,
      },
      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
      blockExplorerUrls: ["https://snowtrace.io/#/"],
      blockExplorerName: "Snowtrace",
      image: "",
      imageAltText: "Avalanche Logo",
    },
  ],
  [
    CHAIN_ID.AVALANCHE_FUJI_TESTNET,
    {
      chainName: "Avalanche Fuji Testnet",
      chainId: "43113",
      isTestnet: true,
      nativeCurrency: {
        name: "Avalanche",
        symbol: "AVAX",
      },
      rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
      blockExplorerUrls: ["https://testnet.snowtrace.io/#/"],
      blockExplorerName: "Snowtrace",
      image: "",
      imageAltText: "Avalanche Logo",
    },
  ],*/
]);

export const SUPPORTED_CHAINS: Chain[] = [
  // @ts-ignore
  CHAINS.get(CHAIN_ID.RINKEBY_TESTNET),
  // @ts-ignore
  CHAINS.get(CHAIN_ID.GOERLI_TESTNET),
];
