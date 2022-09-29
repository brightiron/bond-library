import { CHAIN_ID } from "../chains/chains";

export interface Links {
  governanceVote: string;   // REQUIRED: Link to a governance vote allowing your protocol to run a BondProtocol market\
  twitter?: string;         // OPTIONAL links to social media, protocol websites etc
  discord?: string;
  github?: string;
  medium?: string;
  telegram?: string;
  homepage?: string;
  staking?: string;
  dataStudio?: string;      // Link to data on bond market performance. Not required for verification, we will add when ready.
}

interface Address {
  chainId: string;          // e.g. CHAIN_ID.ETHEREUM_MAINNET - See src/chains/chains.ts CHAIN_ID enum for a list of chain IDs.
  address: string;          // The address you will use to call the create market transaction
  protocol: PROTOCOL_NAMES; // e.g. PROTOCOL_NAMES.YOUR_PROTOCOL
}

export interface Protocol {
  id: string;           // Protocol ID, should be set as PROTOCOL_NAMES.YOUR_PROTOCOL
  name: string;         // Display name of the protocol, this will be shown in the dapp UI
  logo?: string;        // URL to your protocol's logo, preferably .png
  description: string;  // A description of your protocol
  links: Links;
}

export enum PROTOCOL_NAMES {
  APHEX_PROTOCOL = "AphexProtocol",
  BIGFISHJOE_PROTOCOL = "BigfishjoeProtocol",
  BOND_PROTOCOL = "BondProtocol",
  DEVOLTAIRE_PROTOCOL = "DevoltaireProtocol",
  OIGHTY_PROTOCOL = "OightyProtocol",
  TEX_PROTOCOL = "TexProtocol",
}

export const getProtocolByAddress = function (address: string, chain: CHAIN_ID | string): Protocol | null {
  address = address.toLowerCase();
  const res = ADDRESSES.filter((obj: Address) => {
    return chain === obj.chainId && obj.address.toLowerCase() === address;
  });
  return PROTOCOLS.get(res[0]?.protocol) || null;
};

export const getAddressesByProtocol = function (protocol: PROTOCOL_NAMES): Address[] {
  return ADDRESSES.filter((obj: Address) => obj.protocol === protocol);
};

export const getAddressesByChain = function (chainId: CHAIN_ID): string[] {
  const addresses: string[] = [];
  ADDRESSES.forEach(address => {
    if (address.chainId === chainId) addresses.push(address.address.toLowerCase());
  });
  return addresses;
};

const ADDRESSES = [
  {
    chainId: CHAIN_ID.ETHEREUM_MAINNET,
    address: "0xda8b43d5DA504A3A418AeEDcE1Ece868536807fA",
    protocol: PROTOCOL_NAMES.BOND_PROTOCOL,
  },
  {
    chainId: CHAIN_ID.GOERLI_TESTNET,
    address: "0xda8b43d5DA504A3A418AeEDcE1Ece868536807fA",
    protocol: PROTOCOL_NAMES.BOND_PROTOCOL,
  },
  {
    chainId: CHAIN_ID.GOERLI_TESTNET,
    address: "0x69442345d059895bd408e7bde8ab1428c009cc83",
    protocol: PROTOCOL_NAMES.BOND_PROTOCOL,
  },
  {
    chainId: CHAIN_ID.GOERLI_TESTNET,
    address: "0x62A665d3f9fc9a968dC35a789122981d9109349a",
    protocol: PROTOCOL_NAMES.APHEX_PROTOCOL,
  },
  {
    chainId: CHAIN_ID.GOERLI_TESTNET,
    address: "0x72A0363bbd9dE17435A57d6a6F2f89102F1EBE8b",
    protocol: PROTOCOL_NAMES.BIGFISHJOE_PROTOCOL,
  },
  {
    chainId: CHAIN_ID.GOERLI_TESTNET,
    address: "0x24Ef8c193E02c0d952eC56C0097dF33b7947b7F6",
    protocol: PROTOCOL_NAMES.DEVOLTAIRE_PROTOCOL,
  },
  {
    chainId: CHAIN_ID.GOERLI_TESTNET,
    address: "0x19518E4D4E542f4b0Fc27366C23FaC7a0bA491Da",
    protocol: PROTOCOL_NAMES.OIGHTY_PROTOCOL,
  },
  {
    chainId: CHAIN_ID.GOERLI_TESTNET,
    address: "0xE5e93C4CBA55e98cCAa2618AC0772CD6fEEB43C5",
    protocol: PROTOCOL_NAMES.TEX_PROTOCOL,
  },
];

export const PROTOCOLS = new Map<PROTOCOL_NAMES, Protocol>([
  [
    PROTOCOL_NAMES.APHEX_PROTOCOL,
    {
      id: PROTOCOL_NAMES.APHEX_PROTOCOL,
      name: "AphexProtocol",
      description: "We help aphex own his liquidity",
      links: {
        governanceVote: "",
        twitter: "@bond_protocol",
        github: "https://github.com/bond-protocol",
        medium: "https://medium.com/@Bond_Protocol",
        homepage: "https://bondprotocol.finance/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.BIGFISHJOE_PROTOCOL,
    {
      id: PROTOCOL_NAMES.BIGFISHJOE_PROTOCOL,
      name: "BigfishjoeProtocol",
      description: "We help bigfishjoe own his liquidity",
      links: {
        governanceVote: "",
        twitter: "@bond_protocol",
        github: "https://github.com/bond-protocol",
        medium: "https://medium.com/@Bond_Protocol",
        homepage: "https://bondprotocol.finance/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.BOND_PROTOCOL,
    {
      id: PROTOCOL_NAMES.BOND_PROTOCOL,
      name: "BondProtocol",
      description: "We help protocols own their liquidity",
      links: {
        governanceVote: "",
        twitter: "@bond_protocol",
        github: "https://github.com/bond-protocol",
        medium: "https://medium.com/@Bond_Protocol",
        homepage: "https://bondprotocol.finance/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.DEVOLTAIRE_PROTOCOL,
    {
      id: PROTOCOL_NAMES.DEVOLTAIRE_PROTOCOL,
      name: "DevoltaireProtocol",
      description: "We help devoltaire own his liquidity",
      links: {
        governanceVote: "",
        twitter: "@bond_protocol",
        github: "https://github.com/bond-protocol",
        medium: "https://medium.com/@Bond_Protocol",
        homepage: "https://bondprotocol.finance/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.OIGHTY_PROTOCOL,
    {
      id: PROTOCOL_NAMES.OIGHTY_PROTOCOL,
      name: "OightyProtocol",
      description: "We help oighty own his liquidity",
      links: {
        governanceVote: "",
        twitter: "@bond_protocol",
        github: "https://github.com/bond-protocol",
        medium: "https://medium.com/@Bond_Protocol",
        homepage: "https://bondprotocol.finance/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.TEX_PROTOCOL,
    {
      id: PROTOCOL_NAMES.TEX_PROTOCOL,
      name: "TexProtocol",
      description: "We help tex own his liquidity",
      links: {
        governanceVote: "",
        twitter: "@bond_protocol",
        github: "https://github.com/bond-protocol",
        medium: "https://medium.com/@Bond_Protocol",
        homepage: "https://bondprotocol.finance/",
      },
    },
  ],
]);
