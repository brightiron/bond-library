import {getAddressesByProtocol, getProtocolByAddress, PROTOCOL_NAMES} from "../../src/protocols/protocols";
import {CHAIN_ID} from "../../src/chains/chains";

test("gets correct protocol", () => {
  expect(getProtocolByAddress("0xda8b43d5DA504A3A418AeEDcE1Ece868536807fA", CHAIN_ID.RINKEBY_TESTNET)).toEqual({
    name: "Alchemix",
    logo: "alchemix.svg",
    description: "cool protocol",
    links: {},
  });
  expect(getProtocolByAddress("0x1543102a2c97026CF92e79a503268c2F73186f75", CHAIN_ID.RINKEBY_TESTNET)).toEqual({
    name: "Shapeshift",
    logo: "shapeshift.svg",
    description: "cool protocol",
    links: {},
  });
  expect(getProtocolByAddress("0x0000000000000000000000000000000000000000", CHAIN_ID.RINKEBY_TESTNET)).toEqual(null);
});

test("gets correct addresses", () => {
  expect(getAddressesByProtocol(PROTOCOL_NAMES.ALCHEMIX)).toEqual([
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
  ]);
  expect(getAddressesByProtocol(PROTOCOL_NAMES.SHAPESHIFT)).toEqual([
    {
      chainId: "4",
      address: "0x1543102a2c97026CF92e79a503268c2F73186f75",
      protocol: PROTOCOL_NAMES.SHAPESHIFT,
    },
  ]);
  expect(getAddressesByProtocol(3)).toEqual([]);
});
