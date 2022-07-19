import {getToken, getTokensForProtocol, TOKENS} from "../../src/tokens/tokens";
import {PROTOCOL_NAMES} from "../../src/protocols/protocols";
import {CHAINS} from "../../src/chains/chains";

test("returns correct token", () => {
  expect(getToken("ethereum_0xdbdb4d16eda451d0503b854cf79d55697f90c8df").name).toEqual("Alchemix");
});

test("returns mainnet alchemix tokens", () => {
  expect(getTokensForProtocol(PROTOCOL_NAMES.ALCHEMIX).length).toBe(3);
  expect(getTokensForProtocol(PROTOCOL_NAMES.ALCHEMIX)[0].name).toBe("Alchemix");
});

test("returns mainnet and testnet alchemix tokens", () => {
  expect(getTokensForProtocol(PROTOCOL_NAMES.ALCHEMIX, true).length).toBe(3);
  const tokens = getTokensForProtocol(PROTOCOL_NAMES.ALCHEMIX, true);
  let testnetTokens = 0;
  tokens.forEach((token) => {
    if (CHAINS.get(token.supportedChainIds).isTestnet) testnetTokens++;
  });
  expect(testnetTokens).toBeGreaterThan(0);
});

test("returns price", async () => {
  const token = getToken("ethereum_0xdbdb4d16eda451d0503b854cf79d55697f90c8df");
  await expect(token.customPriceFunction()).resolves.toBeDefined();
});

test("aaaaaaaaaaaaaaa", async () => {
  const token = TOKENS.get("ethereum_0xdbdb4d16eda451d0503b854cf79d55697f90c8df");
  const token2 = TOKENS.get("rinkeby_0x034618c94c99232Dc7463563D5285cDB6eDc73e0");
  await expect(token.customPriceFunction()).resolves.toBeDefined();
  await expect(token.symbol).toEqual(token2.symbol);
});
