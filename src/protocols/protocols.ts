import { CHAIN_ID } from "../chains/chains";

export interface Links {
  twitter?: string;
  discord?: string;
  github?: string;
  medium?: string;
  telegram?: string;
  homepage?: string;
  staking?: string;
  dataStudio?: string;
}

interface Address {
  chainId: string;
  address: string;
  protocol: PROTOCOL_NAMES;
}

export interface Protocol {
  id: string;
  name: string;
  logo?: string;
  description: string;
  links: Links;
}

export enum PROTOCOL_NAMES {
  BOND_PROTOCOL = "BondProtocol",
  OLYMPUS_DAO = "OlympusDAO",
}

export const getProtocolByAddress = function (address: string, chain: CHAIN_ID | string): Protocol | null {
  address = address.toLowerCase();
  const res = ADDRESSES.filter((obj: Address) => {
    return chain === obj.chainId && obj.address.toLowerCase() === address
  });
  return PROTOCOLS.get(res[0]?.protocol) || null;
};

export const getAddressesByProtocol = function (protocol: PROTOCOL_NAMES): Address[] {
  return ADDRESSES.filter((obj: Address) => obj.protocol === protocol);
};

export const getAddressesByChain = function (chainId: CHAIN_ID): String[] {
  const addresses: String[] = [];
  ADDRESSES.forEach(address => {
    if (address.chainId === chainId) addresses.push(address.address.toLowerCase());
  });
  return addresses;
}

const ADDRESSES = [
  {
    chainId: CHAIN_ID.RINKEBY_TESTNET,
    address: "0xda8b43d5DA504A3A418AeEDcE1Ece868536807fA",
    protocol: PROTOCOL_NAMES.BOND_PROTOCOL,
  },
  {
    chainId: CHAIN_ID.GOERLI_TESTNET,
    address: "0xda8b43d5DA504A3A418AeEDcE1Ece868536807fA",
    protocol: PROTOCOL_NAMES.BOND_PROTOCOL,
  },
  {
    chainId: CHAIN_ID.RINKEBY_TESTNET,
    address: "0x62A665d3f9fc9a968dC35a789122981d9109349a",
    protocol: PROTOCOL_NAMES.BOND_PROTOCOL,
  },
  {
    chainId: CHAIN_ID.GOERLI_TESTNET,
    address: "0x62A665d3f9fc9a968dC35a789122981d9109349a",
    protocol: PROTOCOL_NAMES.BOND_PROTOCOL,
  },
];

export const PROTOCOLS = new Map<PROTOCOL_NAMES, Protocol>([
  [
    PROTOCOL_NAMES.BOND_PROTOCOL,
    {
      id: PROTOCOL_NAMES.BOND_PROTOCOL,
      name: "BondProtocol",
      description: "We help protocols own their liquidity",
      links: {
        twitter: "@bond_protocol",
        github: "https://github.com/bond-labs",
        medium: "https://medium.com/@Bond_Protocol",
        homepage: "https://bondprotocol.finance/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.OLYMPUS_DAO,
    {
      id: PROTOCOL_NAMES.OLYMPUS_DAO,
      name: "OlympusDAO",
      description:
        "Olympus is building OHM, a community-owned, decentralized and censorship-resistant reserve currency that is asset-backed, deeply liquid and used widely across Web3.",
      links: {
        twitter: "@OlympusDAO",
        github: "https://github.com/OlympusDAO",
        homepage: "https://olympusdao.finanace/",
        staking: "https://app.olympusdao.finance/",
      },
    },
  ],
]);
