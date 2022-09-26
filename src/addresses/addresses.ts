import {CHAIN_ID} from "../chains";

export interface ContractAddress {
  authority: string;
  aggregator: string;
  fixedExpirationTeller: string;
  fixedExpirationAuctioneer: string;
  fixedTermTeller: string;
  fixedTermAuctioneer: string;
}

const CONTRACTS = new Map<CHAIN_ID, ContractAddress>([
  [
    CHAIN_ID.GOERLI_TESTNET,
    {
      authority: "0x3eC350EF1Ae2a7a3c0CEF78acdDea75C2E683675",
      aggregator: "0xbf3599Fe13b48A7F8caEDa4127C35b812F572697",
      fixedExpirationTeller: "0x45c10e192463666B135Cf3A7D3681Fd417010292",
      fixedExpirationAuctioneer: "0xa65678E1D68A3C3Eb547b748f91eF86c65324dd8",
      fixedTermTeller: "0xEc9630d7CE18BF513cfd0B49fd4eA98D1237a429",
      fixedTermAuctioneer: "0x620500330BE690f86600B0Cb06f8ee969f1a8746",
    },
  ],
]);
