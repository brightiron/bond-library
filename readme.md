# bond-library

Library containing off-chain details relating to bonds, protocols, tokens, chains etc

## Verification Guide

### Introduction

In order for bond markets to appear on the BondProtocol dapp market list, the market owner must have verified their
details with us. In addition to this, the market quote and payout tokens should be verified, so that we can use
off-chain data such as price feeds, token logos and so on in the dapp. Verification is done by making a pull request to
this library. Once we have merged your PR and published the updated version of the library, the dapp will be ready to
display your market details.

### Protocol Verification

Protocol details should be added to `src/protocols/protocols.ts`.

First, add an entry to the `PROTOCOL_NAMES` enum:

```
export enum PROTOCOL_NAMES {
    APHEX_PROTOCOL = "AphexProtocol",
    BIGFISHJOE_PROTOCOL = "BigfishjoeProtocol",
    BOND_PROTOCOL = "BondProtocol",
    DEVOLTAIRE_PROTOCOL = "DevoltaireProtocol",
    OIGHTY_PROTOCOL = "OightyProtocol",
    OLYMPUS_DAO = "OlympusDAO",
    TEX_PROTOCOL = "TexProtocol",
}
```

Next, add your protocol details to the `PROTOCOLS` map. A `Protocol` object is defined as follows:

```
export interface Protocol {
    id: string;           // Protocol ID, should be set as PROTOCOL_NAMES.YOUR_PROTOCOL
    name: string;         // Display name of the protocol, this will be shown in the dapp UI
    logo?: string;        // URL to your protocol's logo, preferably .png
    description: string;  // A description of your protocol
    links: Links;
}
```

This contains a `Links` object, defined as follows:

```
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
```

NOTE: the `governanceVote` link is required. We are only able to display markets which are being offered by
decentralized organizations that have held a vote allowing them to run BondProtocol market programs. Without this link,
we will be unable to accept your verification request. The smart contracts are permissionless, so you are free to use
them to run markets regardless, but you will need to provide your own UI or alternative solution.

Put this information into the `PROTOCOLS` map in the following format:

```
[
    PROTOCOL_NAMES.BOND_PROTOCOL,
    {
        id: PROTOCOL_NAMES.BOND_PROTOCOL,
        name: "BondProtocol",
        description: "We help protocols own their liquidity",
        links: {
            governanceVote: "", <-- don't do this, your verification won't be accepted :)
            twitter: "@bond_protocol",
            github: "https://github.com/bond-protocol",
            medium: "https://medium.com/@Bond_Protocol",
            homepage: "https://bondprotocol.finance/",
        },
    },
],
```

Finally, add the address(es) you wish to associate with your protocol to the `ADDRESSES` list. The `Address` object is
defined as follows:

```
interface Address {
    chainId: string;          // e.g. CHAIN_ID.ETHEREUM_MAINNET - See src/chains/chains.ts CHAIN_ID enum for a list of chain IDs.
    address: string;          // The address you will use to call the create market transaction
    protocol: PROTOCOL_NAMES; // e.g. PROTOCOL_NAMES.YOUR_PROTOCOL
}
```

Add the address/chain combinations to the `ADDRESSES` list. For example:

```
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
```

In this case, any markets created on Ethereum Mainnet or Goerli Testnet by the
address `0xda8b43d5DA504A3A418AeEDcE1Ece868536807fA` would be associated with `PROTOCOL_NAMES.BOND_PROTOCOL`, along with
any created on Goerli Testnet by `0x69442345d059895bd408e7bde8ab1428c009cc83`. In this
example, `0x69442345d059895bd408e7bde8ab1428c009cc83` would *not* be associated with the protocol on Ethereum Mainnet.

After this, make a pull request to the `develop` branch. If you do not have your own UI or other alternative, we
strongly recommend waiting until it has been accepted before creating a market.

### Token Verification

Token verification is not strictly required, but strongly recommended. The most important part of token verification is
providing a price source. Failure to do this will mean bond prices, discounts and so on will be displayed incorrectly in
the dapp. The bonds will still work as expected on the contract level, but users would have to calculate prices and
discounts manually.

You will need to add a `Token` object to the `TOKENS` map in `src/tokens/tokens.ts`. The `Token` object is defined as
follows:

```
export interface Token {
    name: string;                   // The token name
    symbol: string;                 // The token symbol
    logoUrl?: string;               // A URL to the token logo, preferably .png
    priceSources: Map<number, SupportedPriceSource | CustomPriceSource>;    // A map of price sources for the token. The `number` key represents the price source's priority, lower numbers being higher priority
    purchaseLinks: Map<CHAIN_ID, string>;   // Link to a place where the token can be purchased
}
```

The `name` and `symbol` fields allow the on-chain values to be overridden for more useful UI display. For example, most
LP tokens use a default "Uniswap V2"/"UNI-V2" name and symbol, which isn't very helpful if multiple LP tokens are being
displayed in a list. So these could be overriden as "ETH-GOHM Uniswap LP"/"ETH-GOHM" in our UI, for example.

Price sources allow for multiple price sources to be listed in order of priority. We currently support Coingecko and
custom functions. Price sources are defined as follows:

```
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
```

The map should be added to the `Token` object as follows:

```
priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
    [0, { source: "coingecko", apiId: "governance-ohm" }],
    [1, {
        source: "custom",
        customPriceFunction: async () => {
            /* Code goes here */
            return priceString;
        }
    ]
]),
```

Next, we have a map of `CHAIN_ID` to purchase link URL. Although we currently only support Ethereum and Goerli Testnet,
BondProtocol will be going multi-chain in the near future. At that point, it will be useful to have different links per
network. For example, many dexes use the token address and chain id in the URL to populate selectors, so even for the
same token pair on the same dex, there might be different URL on different chains. Furthermore, the most liquid markets
for a token may be on different dexes from one chain to another, so this allows us to direct users to the most
appropriate one.

The `purchaseLinks` map should be added to the `Token` object as in the following example:

```
purchaseLinks: new Map<CHAIN_ID, string>([
    [CHAIN_ID.ETHEREUM_MAINNET, "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5&chainId=1"],
    [CHAIN_ID.GOERLI_TESTNET, "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x0595328847af962f951a4f8f8ee9a3bf261e4f6b&chainId=5"]
])
```

The complete `Token` object should be added to the `TOKENS` map in the following format:

```
[
    [
        "mainnet_0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5".toLowerCase(),
        "goerli_0x0595328847af962f951a4f8f8ee9a3bf261e4f6b".toLowerCase()
    ],
    {
        name: "Olympus",
        symbol: "OHM",
        priceSources: new Map<number, SupportedPriceSource | CustomPriceSource>([
            [0, { source: "coingecko", apiId: "olympus" }],
        ]),
        purchaseLinks: new Map<CHAIN_ID, string>([
            [CHAIN_ID.ETHEREUM_MAINNET, "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5&chainId=1"],
            [CHAIN_ID.GOERLI_TESTNET, "https://app.sushi.com/swap?inputCurrency=ETH&outputCurrency=0x0595328847af962f951a4f8f8ee9a3bf261e4f6b&chainId=5"]
        ])
    }
],
```

NOTE: the format of the map key includes the chain and the address, for example:

```
"mainnet_0x64aa3364f17a4d01c6f1751fd97c2bd3d7e7f1d5".toLowerCase(),
"goerli_0x0595328847af962f951a4f8f8ee9a3bf261e4f6b".toLowerCase()
```

This allows tokens available on multiple chains to share the same `Token` object. We call 'toLowerCase()' on all the
strings.

After adding this, your PR should be ready, once we have accepted it, your token data will appear in the BondProtocol
dapp UI.
