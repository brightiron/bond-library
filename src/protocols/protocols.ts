import { CHAIN_ID } from "../chains/chains";

interface Links {
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

interface Protocol {
  name: string;
  logo: string;
  description: string;
  links: Links;
}

export enum PROTOCOL_NAMES {
  OX_DAO = "OXDAO",
  ABRACADABRA = "ABRACADABRA",
  ALCHEMIX = "ALCHEMIX",
  ANGLE_PROTOCOL = "ANGLE_PROTOCOL",
  BANKLESS_DAO = "BANKLESS_DAO",
  BARNBRIDGE = "BARNBRIDGE",
  BEETHOVEN_X = "BEETHOVEN_X",
  BENQI_FINANCE = "BENQI_FINANCE",
  BLACKPOOL = "BLACKPOOL",
  BOTTO = "BOTTO",
  CRYPTO_RAIDERS = "CRYPTO_RAIDERS",
  CRYPTO_VOLATILITY_INDEX = "CRYPTO_VOLATILITY_INDEX",
  DEUS_FINANCE = "DEUS_FINANCE",
  DEX_FINANCE = "DEX_FINANCE",
  DIVINE_DAO = "DIVINE_DAO",
  EVERIPEDIA = "EVERIPEDIA",
  FIAT_DAO = "FIAT_DAO",
  FLOAT = "FLOAT",
  FRAX = "FRAX",
  GAMMA_STRATEGIES = "GAMMA_STRATEGIES",
  GELATO_NETWORK = "GELATO_NETWORK",
  GET_PROTOCOL = "GET_PROTOCOL",
  GMX = "GMX",
  GRO_PROTOCOL = "GRO_PROTOCOL",
  GROWTH_DEFI = "GROWTH_DEFI",
  HUNDRED_FINANCE = "HUNDRED_FINANCE",
  ICHI = "ICHI",
  INSTRUMENTAL_FINANCE = "INSTRUMENTAL_FINANCE",
  IRON_BANK = "IRON_BANK",
  INVERSE = "INVERSE",
  JPEGD = "JPEGD",
  KEEP3R_FIXED_FOREX = "KEEP3R_FIXED_FOREX",
  KEEPER_DAO = "KEEPER_DAO",
  LIQUIDDRIVER = "LIQUIDDRIVER",
  MSTABLE = "MSTABLE",
  MUTE_IO = "MUTE_IO",
  PANGOLIN = "PANGOLIN",
  PARAGONS_DAO = "PARAGONS_DAO",
  PARASWAP = "PARASWAP",
  PENDLE = "PENDLE",
  POOL_TOGETHER = "POOL_TOGETHER",
  PREMIA = "PREMIA",
  SANDCLOCK = "SANDCLOCK",
  SCREAM = "SCREAM",
  SHAPESHIFT = "SHAPESHIFT",
  SIFCHAIN = "SIFCHAIN",
  SPIRITSWAP = "SPIRITSWAP",
  SPOOKYSWAP = "SPOOKYSWAP",
  STAKE_DAO = "STAKE_DAO",
  SYNAPSE = "SYNAPSE",
  TAROT = "TAROT",
  THALES = "THALES",
  THORSTARTER = "THORSTARTER",
  THORSWAP = "THORSWAP",
  TREASURE_DAO = "TREASURE_DAO",
  UNSLASHED_FINANCE = "UNSLASHED_FINANCE",
  VEDAO = "VEDAO",
  WOO_DAO = "WOO_DAO",
  YIELD_YAK = "YIELD_YAK",
}

export const getProtocolByAddress = function (address: string, chain: CHAIN_ID): Protocol | null {
  const res = ADDRESSES.filter((obj: Address) => chain === obj.chainId && obj.address === address);
  return PROTOCOLS.get(res[0]?.protocol) || null;
};

export const getAddressesByProtocol = function (protocol: PROTOCOL_NAMES): Address[] {
  return ADDRESSES.filter((obj: Address) => obj.protocol === protocol);
};

const ADDRESSES = [
  {
    chainId: "4",
    address: "0xda8b43d5DA504A3A418AeEDcE1Ece868536807fA",
    protocol: PROTOCOL_NAMES.ALCHEMIX,
  },
  {
    chainId: "4",
    address: "0x0b0C4248d5518B77f9Fc8C6AaB0A61c3377C956B",
    protocol: PROTOCOL_NAMES.ALCHEMIX,
  },
  {
    chainId: "4",
    address: "0x1543102a2c97026CF92e79a503268c2F73186f75",
    protocol: PROTOCOL_NAMES.SHAPESHIFT,
  },
];

export const PROTOCOLS = new Map<PROTOCOL_NAMES, Protocol>([
  [
    PROTOCOL_NAMES.OX_DAO,
    {
      name: "0xDAO",
      logo: "",
      description: "WE'RE NOT TELLING YOU TO INVEST IN US. YOU ARE - XOXO",
      links: {
        twitter: "@0xDAO_fi",
        github: "https://github.com/0xDAO-Protocol",
        medium: "https://medium.com/@0xdao",
        homepage: "https://www.oxdao.fi/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.ABRACADABRA,
    {
      name: "Abracadabra",
      logo: "",
      description:
        "Abracadabra is a spell book that allows users to produce magic internet money ($MIM) which is a stable coin that you can swap for any other",
      links: {
        twitter: "@MIM_Spell",
        github: "https://github.com/Abracadabra-money",
        medium: "https://abracadabramoney.medium.com/",
        homepage: "https://abracadabra.money/",
        staking: "https://abracadabra.money/spell-stake",
      },
    },
  ],
  [
    PROTOCOL_NAMES.ALCHEMIX,
    {
      name: "Alchemix",
      description:
        "Alchemix lets you reimagine the potential of DeFi by providing highly flexible instant loans that repay themselves overtime.",
      logo: "alchemix.svg",
      links: {
        twitter: "@AlchemixFi",
        github: "https://github.com/alchemix-finance",
        medium: "https://alchemixfi.medium.com/",
        homepage: "https://alchemix.fi/",
        staking: "https://app.alchemix.fi/farms",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Alchemix%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.ANGLE_PROTOCOL,
    {
      name: "Angle Protocol",
      logo: "",
      description: "Angle is the first decentralized, capital efficient and over-collateralized stablecoin protocol",
      links: {
        twitter: "@AngleProtocol",
        medium: "https://medium.com/@angleprotocol",
        homepage: "https://www.angle.money/",
        github: "https://github.com/AngleProtocol",
        staking: "https://app.angle.money/#/staking",
      },
    },
  ],
  [
    PROTOCOL_NAMES.BANKLESS_DAO,
    {
      name: "Bankless DAO",
      logo: "",
      description:
        "A decentralized autonomous organization that acts as a steward of the Bankless Movement progressing the world towards a future of greater freedom.",
      links: {
        twitter: "@banklessDAO",
        medium: "https://bankless.medium.com/",
        homepage: "https://bankless.community/",
        staking: "https://app.balancer.fi/#/pool/0x87165b659ba7746907a48763063efa3b323c2b0700020000000000000000002d",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Bankless%2520DAO%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.BARNBRIDGE,
    {
      name: "BarnBridge",
      logo: "",
      description:
        "BOND is an Ethereum token that governs BarnBridge, a protocol that enables users to hedge against DeFi yield sensitivity and price volatility.",
      links: {
        twitter: "@Barn_Bridge",
        github: "https://github.com/BarnBridge/",
        medium: "https://medium.com/barnbridge",
        homepage: "https://barnbridge.com/",
        staking: "https://app.barnbridge.com/governance/overview",
      },
    },
  ],
  [
    PROTOCOL_NAMES.BEETHOVEN_X,
    {
      name: "Beethoven X",
      logo: "",
      description:
        "Beethoven X leverages the best in breed DeFi protocols to offer novel decentralized investment strategies. As the first official Friendly Balancer V2 Fork, Beethoven X is the first next-generation AMM protocol on Fantom.",
      links: {
        twitter: "@beethoven_x",
        github: "https://github.com/beethovenxfi",
        medium: "https://medium.com/@beethovenxio",
        homepage: "https://beets.fi",
        staking: "https://beets.fi/#/stake",
      },
    },
  ],
  [
    PROTOCOL_NAMES.BENQI_FINANCE,
    {
      name: "BENQI Finance",
      logo: "",
      description:
        "BENQI is a non-custodial liquidity market protocol, built on Avalanche. The protocol enables users to effortlessly lend, borrow, and earn interest with their digital assets.",
      links: {
        twitter: "@BenqiFinance",
        github: "https://github.com/Benqi-fi",
        medium: "https://benqifinance.medium.com/",
        homepage: "https://benqi.fi/",
        staking: "https://app.benqi.fi/markets",
      },
    },
  ],
  [
    PROTOCOL_NAMES.BLACKPOOL,
    {
      name: "BlackPool",
      logo: "",
      description:
        "BlackPool is the first decentralised autonomous organisation (DAO) built solely for NFT gaming and trading.",
      links: {
        twitter: "@BlackpoolHQ",
        medium: "https://blackpool.medium.com/",
        homepage: "https://blackpool.finance/",
        github: "https://github.com/BlackPool-Finance",
        staking: "https://blackpool.finance/token",
      },
    },
  ],
  [
    PROTOCOL_NAMES.BOTTO,
    {
      name: "Botto",
      logo: "",
      description: "Botto is a decentralized artist that generates art based on community feedback.",
      links: {
        twitter: "@bottoproject",
        medium: "https://medium.com/@iambotto",
        homepage: "https://botto.com/",
        github: "https://github.com/bottoproject",
        staking: "https://app.botto.com/",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Botto%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.CRYPTO_RAIDERS,
    {
      name: "Crypto Raiders",
      logo: "",
      description:
        "Crypto Raiders is an NFT-based dungeon crawler on Polygon. Raid dungeons, earn gear, level up, craft potions, and own all of your game assets on-chain.",
      links: {
        twitter: "@crypto_raiders",
        medium: "https://cryptoraiders.medium.com/",
        homepage: "https://cryptoraiders.xyz/",
        staking: "https://econ.cryptoraiders.xyz/staking",
      },
    },
  ],
  [
    PROTOCOL_NAMES.CRYPTO_VOLATILITY_INDEX,
    {
      name: "Crypto Volatility Index",
      logo: "",
      description:
        "The Crypto Volatility Index (CVI) is a decentralized VIX for crypto that allows users to hedge themselves against market volatility and impermanent loss.",
      links: {
        twitter: "@official_cvi",
        medium: "https://cviofficial.medium.com/",
        github: "https://github.com/govi-dao/cvi-contracts",
        homepage: "https://cvi.finance/",
        staking: "https://www.cvi.finance/staking",
        discord: "https://discord.gg/CVvyB7ef",
        telegram: "https://t.me/cviofficial",
      },
    },
  ],
  [
    PROTOCOL_NAMES.DEUS_FINANCE,
    {
      name: "DEUS Finance",
      logo: "",
      description:
        "DEUS Finance Evolution is a marketplace of decentralized financial services. We provide the infrastructure for others to build financial instruments, such as synthetic stock trading platforms, options and futures trading, and more.",
      links: {
        twitter: "@DeusDao",
        github: "https://github.com/deusfinance",
        medium: "https://medium.com/deus-finance",
        homepage: "https://deus.finance/",
        staking: "https://app.dei.finance/vest",
      },
    },
  ],
  [
    PROTOCOL_NAMES.DEX_FINANCE,
    {
      name: "DEX Finance",
      logo: "",
      description:
        "DEX Finance is a decentralized autonomous organization (DAO) providing an ecosystem of financial products that aims at providing the highest yields in the market.",
      links: {
        twitter: "@DexFinance",
        medium: "https://medium.com/@DexFinance",
        telegram: "https://t.co/iXZvSMvAw1",
        homepage: "https://www.dexfinance.com/",
        staking: "https://app.dexfinance.com/",
        github: "https://github.com/thales-markets",
      },
    },
  ],
  [
    PROTOCOL_NAMES.DIVINE_DAO,
    {
      name: "Divine DAO",
      logo: "",
      description:
        "An immersive storytelling layer in the LOOT ecosystem, rather than simply a financial mechanism. That’s where the Divine City comes in.",
      links: {
        twitter: "@divine_dao",
        medium: "https://divinedao.medium.com/",
        homepage: "https://divinedao.com/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.EVERIPEDIA,
    {
      name: "Everipedia",
      logo: "",
      description:
        "Everipedia's vision is to bring blockchain knowledge to the world and knowledge onto the blockchain, helping verify facts in an era of misinformation",
      links: {
        twitter: "@everipedia",
        medium: "https://everipedia.org/blog",
        homepage: "https://everipedia.org/",
        github: "https://github.com/EveripediaNetwork",
        staking: "https://everipedia.org/iq/lock",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Everipedia%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.FIAT_DAO,
    {
      name: "FIAT DAO",
      logo: "",
      description:
        "FIAT Protocol lets you borrow against your positions in fixed income assets issued by leading DeFi protocols, at high loan-to-value ratios and for low fees.",
      links: {
        twitter: "@fiatdao",
        medium: "https://medium.com/fiat-dao",
        homepage: "https://fiatdao.com/",
        github: "https://github.com/fiatdao",
        staking: "https://app.fiatdao.com/rewards",
      },
    },
  ],
  [
    PROTOCOL_NAMES.FLOAT,
    {
      name: "Float",
      logo: "",
      description: "Floating, low-volatility currency for web3, by a team of anonymous researchers.",
      links: {
        twitter: "@FloatProtocol",
        github: "https://github.com/FloatProtocol",
        medium: "https://medium.com/@floatprotocol",
        homepage: "https://floatprotocol.com/#/",
        staking: "https://floatprotocol.com/#/pools",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Float%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.FRAX,
    {
      name: "Frax",
      logo: "",
      description:
        "The Frax Protocol introduced the world to the concept of a cryptocurrency being partially backed by collateral and partially stabilized algorithmically",
      links: {
        twitter: "@fraxfinance",
        github: "https://github.com/FraxFinance",
        homepage: "https://frax.finance/",
        staking: "https://app.frax.finance/vefxs",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Frax%2520Finance%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.GAMMA_STRATEGIES,
    {
      name: "Gamma Strategies",
      logo: "",
      description:
        "Gamma is the protocol for active liquidity management on Uniswap v3. Gamma has developed a protocol, a management infrastructure, and a variety of strategies used by managers and market makers.",
      links: {
        twitter: "@gammastrategies",
        medium: "https://gammastrategies.medium.com/",
        homepage: "https://www.gammastrategies.org/",
        staking: "https://app.gammastrategies.org/staking",
        github: "https://github.com/gammastrategies",
      },
    },
  ],
  [
    PROTOCOL_NAMES.GELATO_NETWORK,
    {
      name: "Gelato Network",
      logo: "",
      description:
        "Gelato is Web3's premier automation network, enabling developers to automate arbitrary smart contract executions on and across all EVM based compatible blockchains such as Ethereum. Examples of use cases developers have built on top of Gelato include: Limit Orders on AMMs like Uniswap, automatic compounding of yield farming vaults, Aave liquidation protection, MakerDAO debt ceiling updates and even the automated petting of Aavegotchis!",
      links: {
        twitter: "@gelatonetwork",
        medium: "https://medium.com/gelato-network",
        homepage: "https://www.gelato.network/",
        github: "https://github.com/gelatodigital",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Gelato%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.GET_PROTOCOL,
    {
      name: "GET Protocol",
      logo: "",
      description:
        "GET Protocol is an NFT Ticketing infrastructure provider that since 2016 has built and battle tested ticketing products at events across the world, providing the benefits of blockchain and NFTs to non-crypto savvy attendees.  Since inception the protocol has processed over 1.2 million on-chain tickets, with 500k+ NFT Tickets processed since last year, all fuelled by the $GET token. Anyone can transparently view ticketing activity in real-time through the NFT Ticket Explorer: https://explorer.get-protocol.io/",
      links: {
        twitter: "@getprotocol",
        medium: "https://medium.com/get-protocol",
        homepage: "https://www.get-protocol.io/",
        github: "https://github.com/GUTSTickets",
      },
    },
  ],
  [
    PROTOCOL_NAMES.GMX,
    {
      name: "GMX",
      logo: "",
      description:
        "GMX is a decentralized spot and perpetual exchange that supports low swap fees and zero price impact trades. Trading is supported by a unique multi-asset pool that earns liquidity providers fees from market making, swap fees and leverage trading.",
      links: {
        twitter: "@GMX_IO",
        github: "https://github.com/gmx-io",
        medium: "https://medium.com/@gmx.io",
        homepage: "https://gmx.io/",
        staking: "https://gmx.io/earn",
      },
    },
  ],
  [
    PROTOCOL_NAMES.GRO_PROTOCOL,
    {
      name: "Gro Protocol",
      logo: "",
      description: "Gro protocol is a stablecoin yield aggregator that tranches risk and yield.",
      links: {
        twitter: "@groprotocol",
        medium: "https://groprotocol.medium.com/",
        homepage: "https://www.gro.xyz/",
        staking: "https://app.gro.xyz/pools",
      },
    },
  ],
  [
    PROTOCOL_NAMES.GROWTH_DEFI,
    {
      name: "Growth DeFi",
      logo: "",
      description:
        "Growth DeFi is a multichain ecosystem that combines products such as its overcollateralized stablecoin (MOR) and yield aggregator (WHEAT) to provide the highest level of capital efficiency for its users. All products maximize tokenholder value through decentralized governance.",
      links: {
        twitter: "@GrowthDefi",
        github: "https://github.com/GrowthDeFi",
        medium: "https://growthdefi.medium.com/",
        homepage: "https://growthdefi.com/",
        staking: "https://wheat.growthdefi.com/vaults",
      },
    },
  ],
  [
    PROTOCOL_NAMES.HUNDRED_FINANCE,
    {
      name: "Hundred Finance",
      logo: "",
      description:
        "Hundred Finance is a decentralized application (dApp) that enables the lending and borrowing of cryptocurrencies. A multi-chain protocol, it integrates with Chainlink oracles to ensure market health and stability, while specializing in serving long-tail assets.",
      links: {
        twitter: "@HundredFinance",
        github: "https://github.com/hundred-finance",
        medium: "https://blog.hundred.finance/",
        homepage: "https://hundred.finance/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.ICHI,
    {
      name: "ICHI",
      logo: "",
      description: "ICHI has supported the creation of branded dollars for leading cryptocurrency communities.",
      links: {
        twitter: "@ichifarm",
        medium: "https://medium.com/ichifarm",
        homepage: "https://www.ichi.org/",
        staking: "https://app.ichi.org/farm",
        github: "https://github.com/ichifarm",
      },
    },
  ],
  [
    PROTOCOL_NAMES.INSTRUMENTAL_FINANCE,
    {
      name: "Instrumental Finance",
      logo: "",
      description:
        "Instrumental Finance offers chain- and layer-agnostic liquidity providing (LPing). With the current lack of interoperability between layer 2 (L2) solutions, liquidity providers face barriers when trying to move assets to maintain a yield-optimized position. Leveraging Instrumental, users can move their LP position around to various platforms, regardless of layer or chain, in order to help maximize their yields.",
      links: {
        twitter: "@instrumentalfi",
        medium: "https://medium.com/@instrumentalfinance",
        homepage: "https://www.instrumental.finance/",
        github: "https://github.com/instrumental-finance",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Instrumental%2520Finance%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.IRON_BANK,
    {
      name: "Iron Bank",
      logo: "",
      description: "Users can access Fantom Iron Bank markets on ib.xyz and earn IB token rewards.",
      links: {
        twitter: "@ibdotxyz",
        medium: "https://ibdotxyz.medium.com/",
        homepage: "https://ib.xyz/",
        staking: "https://app.ib.xyz/reward",
      },
    },
  ],
  [
    PROTOCOL_NAMES.INVERSE,
    {
      name: "Inverse",
      logo: "",
      description:
        "Inverse is part of the new wave of decentralized banking and finance. From a capital-efficient money market, to tokenized synthetic assets, our mission is to grow your wealth",
      links: {
        twitter: "@InverseFinance",
        github: "https://github.com/InverseFinance",
        medium: "https://medium.com/inverse-finance",
        homepage: "https://wwww.inverse.finance",
        staking: "https://www.inverse.finance/anchor",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Inverse%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.JPEGD,
    {
      name: "JPEG'd",
      logo: "",
      description: "Bridging the gap between DeFi and NFTs.",
      links: {
        twitter: "@JPEGd_69",
        medium: "https://medium.com/@jpegd",
        homepage: "https://jpegd.io/",
        staking: "https://jpegd.io/pools",
      },
    },
  ],
  [
    PROTOCOL_NAMES.KEEP3R_FIXED_FOREX,
    {
      name: "Keep3r Fixed Forex",
      logo: "",
      description:
        "Supply Collateral to Borrow Iron Bank Assets. Fixed Forex provides an alternative to USD denominated stable coins. It allows liquidity providers exposure to currencies such as EUR, KRW, GBP, CHF, AUD, and JPY.",
      links: {
        twitter: "@thekeep3r",
        medium: "https://andrecronje.medium.com/keep3r-network-v1-beta-20ab98c9e91a",
        homepage: "https://keep3r.network/",
        github: "https://github.com/keep3r-network",
        staking: "https://keep3r.network/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.KEEPER_DAO,
    {
      name: "KeeperDAO",
      logo: "",
      description:
        "KeeperDAO is building a decentralized protocol for Keepers that will help make Ethereum a more secure, egalitarian, and profitable network for all.",
      links: {
        twitter: "@Keeper_DAO",
        github: "https://github.com/keeperdao",
        medium: "https://blog.keeperdao.com/",
        homepage: "https://www.keeperdao.com/",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580KeeperDAO%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.LIQUIDDRIVER,
    {
      name: "LiquidDriver",
      logo: "",
      description:
        "LiquidDriver is a High-Yield liquidity mining DAPP launched on fantom, incentivizing liquidity providers on SushiSwap.",
      links: {
        twitter: "@LiquidDriver",
        github: "https://github.com/LiquidDriver-finance",
        medium: "https://liquiddriver.medium.com/",
        homepage: "https://www.liquiddriver.finance/",
        staking: "https://www.liquiddriver.finance/xlqdr",
      },
    },
  ],
  [
    PROTOCOL_NAMES.MSTABLE,
    {
      name: "mStable",
      logo: "",
      description:
        "Swap, save and protect your stablecoins on mStable, a decentralised, community driven platform powered by $MTA.",
      links: {
        twitter: "@mstable_",
        github: "https://github.com/mstable",
        medium: "https://medium.com/mstable",
        homepage: "https://mstable.org/",
        staking: "https://staking.mstable.app/",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580mStable%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.MUTE_IO,
    {
      name: "Mute.io",
      logo: "",
      description:
        "Mute makes cryptocurrency more accessible by providing an L2 based DeFi suite utilizing ZK-Rollup scalability.",
      links: {
        twitter: "@mute_io",
        medium: "https://nixplatform.medium.com/",
        homepage: "https://mute.io/",
        staking: "https://mute.io/#staking",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Mute-io%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.PANGOLIN,
    {
      name: "Pangolin",
      logo: "",
      description:
        "A community-driven decentralized exchange for Avalanche and Ethereum assets with fast settlement, low transaction fees, and a democratic process to engage with.",
      links: {
        twitter: "@pangolindex",
        github: "https://github.com/pangolindex",
        medium: "https://pangolindex.medium.com/",
        homepage: "https://pangolin.exchange/",
        staking: "https://app.pangolin.exchange/#/stake/0",
      },
    },
  ],
  [
    PROTOCOL_NAMES.PARAGONS_DAO,
    {
      name: "ParagonsDAO",
      logo: "",
      description: "We’re an economic and social partner-DAO to promising blockchain-powered gaming ecosystems.",
      links: {
        twitter: "@ParagonsDAO",
        medium: "https://medium.com/@ParagonsDAO",
        homepage: "https://paragonsdao.com/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.PARASWAP,
    {
      name: "Paraswap",
      logo: "",
      description:
        "We are the leading DeFi aggregator that unites the liquidity of decentralized exchanges and lending protocols into one comprehensive and secure interface and APIs.",
      links: {
        twitter: "@paraswap",
        medium: "https://medium.com/paraswap",
        homepage: "https://www.paraswap.io/",
        github: "https://github.com/paraswap",
      },
    },
  ],
  [
    PROTOCOL_NAMES.PENDLE,
    {
      name: "Pendle",
      logo: "",
      description: "Pendle allows traders a more capital-efficient way to earn profits.",
      links: {
        twitter: "@pendle_fi",
        github: "https://github.com/pendle-finance",
        medium: "https://medium.com/pendle/",
        homepage: "https://pendle.finance/",
        staking: "https://app.pendle.finance/stake",
      },
    },
  ],
  [
    PROTOCOL_NAMES.POOL_TOGETHER,
    {
      name: "Pool Together",
      logo: "",
      description:
        "PoolTogether is a crypto-powered savings protocol based on Premium Bonds. Save money and have a chance to win every week.",
      links: {
        twitter: "@PoolTogether_",
        github: "https://github.com/pooltogether",
        medium: "https://medium.com/pooltogether",
        homepage: "https://pooltogether.com/",
        staking: "https://app.pooltogether.com/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.PREMIA,
    {
      name: "Premia",
      logo: "",
      description:
        "Premia enables best-in-class pricing based on market volatility, providing fully-featured peer-to-pool trading and capital efficiency to DeFi options.",
      links: {
        twitter: "@PremiaFinance",
        github: "https://github.com/PremiaFinance",
        medium: "https://medium.premia.finance/",
        homepage: "https://premia.finance/",
        staking: "https://app.premia.finance/stake",
      },
    },
  ],
  [
    PROTOCOL_NAMES.SANDCLOCK,
    {
      name: "Sandclock",
      logo: "",
      description:
        "Sandclock exists to empower the next generation of wealth creation by enabling our users to grow their wealth responsibly.",
      links: {
        twitter: "@SandclockOrg",
        medium: "https://medium.com/sandclock",
        homepage: "https://sandclock.org/",
        github: "https://github.com/sandclock-org",
      },
    },
  ],
  [
    PROTOCOL_NAMES.SCREAM,
    {
      name: "Scream",
      logo: "",
      description:
        "SCREAM cryptocurrency is a decentralized lending protocol for individuals and protocols for accessing deep liquidity within the Fantom network.",
      links: {
        twitter: "https://twitter.com/screamdotsh",
        github: "https://github.com/scream-finance",
        medium: "https://screamsh.medium.com/",
        homepage: "https://scream.sh",
        staking: "https://scream.sh/stake",
      },
    },
  ],
  [
    PROTOCOL_NAMES.SHAPESHIFT,
    {
      name: "ShapeShift",
      logo: "shapeshift.svg",
      description:
        "A complete crypto management platform: send, receive, trade, track, and hodl bitcoin and other major cryptos. Hardware-secured.",
      links: {
        twitter: "@ShapeShift_io",
        github: "https://github.com/shapeshift/fox-token",
        medium: "https://medium.com/shapeshift-stories",
        homepage: "https://shapeshift.com/",
        staking: "https://shapeshift.com/",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580ShapeShift%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.SIFCHAIN,
    {
      name: "Sifchain",
      logo: "",
      description:
        "Sifchain is committed to creating a blockchain and cryptocurrency world where any asset across the globe can move freely between different blockchains, and do so quickly and at the cheapest price possible. SifDEX is a decentralized exchange (DEX) that enables users to swap digital assets from a wide variety of blockchain ecosystems in one place, by connecting all major blockchains together using advanced bridging technology that we call 'Peggy'.  Currently Sifchain enables routing from Ethereum main net to the Cosmos Ecosystem. This is accomplished using Peggy from Ethereum to Sifchain, and via IBC from Sifchain to the other Cosmos-based blockchains. In the future, up to 25 major blockchains will be able to interact seamlessly through the Sifchain interface. After extensive development, Sifchain is soon to deploy an innovative decentralised Margin Trading platform on the DEX.",
      links: {
        twitter: "@sifchain",
        medium: "https://medium.com/sifchain-finance",
        homepage: "https://sifchain.finance/",
        github: "https://github.com/Sifchain",
      },
    },
  ],
  [
    PROTOCOL_NAMES.SPIRITSWAP,
    {
      name: "SpiritSwap",
      logo: "",
      description:
        "Spiritswap Token is a exchange token of Spiritswap DEX that offers trading, farming, staking, and more to come.",
      links: {
        twitter: "@Spirit_Swap",
        github: "https://github.com/Layer3Org/",
        medium: "https://spiritswap.medium.com/",
        homepage: "https://spiritswap.finance/",
        staking: "https://inspirit.spiritswap.finance/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.SPOOKYSWAP,
    {
      name: "SpookySwap",
      logo: "",
      description: "SpookySwap is an automated market-making (AMM) decentralized exchange (DEX) for the Fantom Opera",
      links: {
        twitter: "https://twitter.com/spookyswap",
        github: "https://github.com/SpookySwap",
        medium: "https://spookyswap.medium.com/",
        homepage: "https://spookyswap.finance/",
        staking: "https://spookyswap.finance/pools",
      },
    },
  ],
  [
    PROTOCOL_NAMES.STAKE_DAO,
    {
      name: "StakeDAO",
      logo: "",
      description:
        "Stake DAO is a non-custodial platform where you can do more with your money. Easily grow, track, and control your assets right from your wallet.",
      links: {
        twitter: "@StakeDAOHQ",
        github: "https://github.com/StakeDAO",
        medium: "https://stakedaohq.medium.com/",
        homepage: "https://stakedao.org/",
        staking: "https://stakedao.org/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.SYNAPSE,
    {
      name: "Synapse",
      logo: "",
      description: "Synapse is a cross-chain layer ∞ protocol powering interoperability between chains.",
      links: {
        twitter: "@SynapseProtocol",
        medium: "https://synapseprotocol.medium.com/",
        homepage: "https://synapseprotocol.com/",
        staking: "https://synapseprotocol.com/stake",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Synapse%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.TAROT,
    {
      name: "Tarot",
      logo: "",
      description:
        "Tarot is a decentralized protocol on Fantom where users can participate as lenders or borrowers in isolated lending pools.",
      links: {
        twitter: "@TarotFinance",
        medium: "https://tarotfinance.medium.com/",
        homepage: "https://www.tarot.to/",
        staking: "https://www.tarot.to/stake",
      },
    },
  ],
  [
    PROTOCOL_NAMES.THALES,
    {
      name: "Thales",
      logo: "",
      description:
        "Thales protocol allows for the formation of and participation in parimutuel markets on Ethereum. Born out of the Synthetix ecosystem, Thales leverages Chainlink Data Feeds, trustless order books, novel AMM mechanism and the decentralized sUSD stablecoin to provide participants with a novel on-chain, permissionless, and non-custodial way to access immutable parimutuel markets and trade positions backed by high-quality data for market resolution. Anyone can mint or trade UP and DOWN positions of Chainlink supported asset markets available on the Thales marketplace.",
      links: {
        twitter: "@thalesmarket",
        medium: "https://thalesmarket.medium.com/",
        homepage: "https://thalesmarket.io/",
        staking: "https://thalesmarket.io/token",
        github: "https://github.com/thales-markets",
      },
    },
  ],
  [
    PROTOCOL_NAMES.THORSTARTER,
    {
      name: "Thorstarter",
      logo: "",
      description:
        "Thorstarter is a multichain Venture DAO and IDO platform that combines a unique launchpad model with liquidity grants to incubate, fund, and launch the most promising projects.",
      links: {
        twitter: "@thorstarter",
        medium: "https://thorstarter.medium.com/",
        homepage: "https://thorstarter.org",
        staking: "https://thorstarter.org/stake",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Thorstarter%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.THORSWAP,
    {
      name: "THORSwap",
      logo: "",
      description: "Swap Layer 1 assets, earn yield and bond nodes on the leading DEX powered by THORChain.",
      links: {
        twitter: "@THORSwap",
        medium: "https://thorswap.medium.com/",
        homepage: "https://thorswap.finance/",
        github: "https://github.com/thorswap",
        staking: "https://app.thorswap.finance/stake",
        dataStudio:
          "https://datastudio.google.com/u/0/embed/reporting/b9f1f912-b6a0-4a09-b64f-3a8c4810f43a/page/oYFoC?params=%7B%22df16%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580Thorswap%22%7D",
      },
    },
  ],
  [
    PROTOCOL_NAMES.TREASURE_DAO,
    {
      name: "TreasureDAO",
      logo: "",
      description:
        "Treasure bridges the growing network of metaverses through an open and composable approach to the convergence of NFTs, DeFi and Gaming.",
      links: {
        twitter: "@Treasure_NFT",
        medium: "https://medium.com/@TreasureNFT",
        homepage: "https://www.treasure.lol/",
        staking: "https://mine.treasure.lol/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.UNSLASHED_FINANCE,
    {
      name: "Unslashed Finance",
      logo: "",
      description:
        "Unslashed is a decentralized insurance protocol covering all common risks for crypto assets. Unslashed enables almost instant liquidity to insurance buyers and risk underwriters, ensures constant collateralization, and guarantees transparency through an unbiased claims process.",
      links: {
        twitter: "@UnslashedF",
        medium: "https://medium.com/unslashed",
        homepage: "https://unslashed.finance/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.VEDAO,
    {
      name: "veDAO",
      logo: "",
      description: "veDAO is sub-DAO for the Solidly ecosystem",
      links: {
        twitter: "@_veDAO_",
        github: "https://github.com/ve-DAO",
        medium: "https://medium.com/@ve.dao.ex",
        homepage: "https://www.vedao.io/#/",
      },
    },
  ],
  [
    PROTOCOL_NAMES.WOO_DAO,
    {
      name: "WOO DAO",
      logo: "",
      description:
        "WOO DAO was launched in December 2021 to support WOO Network's growth across DeFi. WOO DAO continues to expand its community and improve the WOO token's utility through partnering with top DeFi protocols and applications.",
      links: {
        twitter: "@WOOnetwork",
        github: "https://github.com/woonetwork/",
        medium: "https://medium.com/woonetwork",
        homepage: "https://woo.org/",
        staking: "https://fi.woo.org/stake",
      },
    },
  ],
  [
    PROTOCOL_NAMES.YIELD_YAK,
    {
      name: "Yield Yak",
      logo: "",
      description:
        "YY Farms autocompound farm rewards, with support for Avalanche. YY Swap finds the best price execution for dex trades.",
      links: {
        twitter: "@yieldyak_",
        github: "https://github.com/yieldyak",
        medium: "https://yieldyak.medium.com/",
        homepage: "https://yieldyak.com/",
        staking: "https://yieldyak.com/stake",
      },
    },
  ],
]);
