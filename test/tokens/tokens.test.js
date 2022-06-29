import {getToken, getTokensForProtocol} from "../../src/tokens/tokens";
import {PROTOCOL_NAMES} from "../../src/protocols/protocols";
import {CHAINS} from "../../src/chains/chains";

test("returns correct token", () => {
  expect(getToken("0xdbdb4d16eda451d0503b854cf79d55697f90c8df").name).toEqual("Alchemix");
});

test("returns mainnet alchemix tokens", () => {
  expect(getTokensForProtocol(PROTOCOL_NAMES.ALCHEMIX).length).toBe(1);
  expect(getTokensForProtocol(PROTOCOL_NAMES.ALCHEMIX)[0].name).toBe("Alchemix");
});

test("returns mainnet and testnet alchemix tokens", () => {
  expect(getTokensForProtocol(PROTOCOL_NAMES.ALCHEMIX, true).length).toBe(2);
  const tokens = getTokensForProtocol(PROTOCOL_NAMES.ALCHEMIX, true);
  let testnetTokens = 0;
  tokens.forEach((token) => {
    if (CHAINS.get(token.chainId).isTestnet) testnetTokens++;
  });
  expect(testnetTokens).toBeGreaterThan(0);
});

test("returns price", async () => {
  const token = getToken("0xdbdb4d16eda451d0503b854cf79d55697f90c8df");
  await expect(token.customPriceFunction()).resolves.toBeDefined();
});
