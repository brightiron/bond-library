import {
  DodoLp__factory,
  GUniPool__factory,
  Hypervisor__factory,
  ICHIVault__factory,
  SlpAbi__factory,
  VFloat__factory,
  VolatileV1AMM__factory
} from "./contracts";
import {Provider} from "@ethersproject/providers";
import {BigNumberish, Signer} from "ethers";

export interface LpReserves {
  token0: BigNumberish;
  token1: BigNumberish;
}

export interface LpType {
  getContract: (address: string, providerOrSigner: Provider | Signer) => any,
  getReserves: (address: string, providerOrSigner: Provider | Signer) => Promise<LpReserves>
}

export enum SUPPORTED_LP_TYPES {
  CAKE_LP,
  DODO,
  G_UNI,
  HYPERVISOR,
  ICHI_VAULT,
  SUSHISWAP,
  UNISWAP_V2,
  V_FLOAT,
  VOLATILE_V1_AMM,
}

const lpTypeSlp: LpType = {
  getContract: (address: string, providerOrSigner: Provider | Signer) => SlpAbi__factory.connect(address, providerOrSigner),
  getReserves: (address: string, providerOrSigner: Provider | Signer) => {
    const contract = SlpAbi__factory.connect(address, providerOrSigner)
    return contract.getReserves().then((result: any) => {
      return {
        token0: result._reserve0,
        token1: result._reserve1
      };
    });
  }
}

const lpTypeDodo: LpType = {
  getContract: (address: string, providerOrSigner: Provider | Signer) => DodoLp__factory.connect(address, providerOrSigner),
  getReserves: (address: string, providerOrSigner: Provider | Signer) => {
    const contract = DodoLp__factory.connect(address, providerOrSigner)
    return contract.getVaultReserve().then(result => {
      return {
        token0: result.baseReserve,
        token1: result.quoteReserve
      };
    });
  }
}

const lpTypeGUni: LpType = {
  getContract: (address: string, providerOrSigner: Provider | Signer) => GUniPool__factory.connect(address, providerOrSigner),
  getReserves: (address: string, providerOrSigner: Provider | Signer) => {
    const contract = GUniPool__factory.connect(address, providerOrSigner)
    return contract.getUnderlyingBalances().then(result => {
      return {
        token0: result.amount0Current,
        token1: result.amount1Current
      };
    });
  }
}

const lpTypeHypervisor: LpType = {
  getContract: (address: string, providerOrSigner: Provider | Signer) => Hypervisor__factory.connect(address, providerOrSigner),
  getReserves: (address: string, providerOrSigner: Provider | Signer) => {
    const contract = Hypervisor__factory.connect(address, providerOrSigner)
    return contract.getTotalAmounts().then(result => {
      return {
        token0: result.total0,
        token1: result.total1
      };
    });
  }
}

const lpTypeIchi: LpType = {
  getContract: (address: string, providerOrSigner: Provider | Signer) => ICHIVault__factory.connect(address, providerOrSigner),
  getReserves: (address: string, providerOrSigner: Provider | Signer) => {
    const contract = ICHIVault__factory.connect(address, providerOrSigner)
    return contract.getTotalAmounts().then(result => {
      return {
        token0: result.total0,
        token1: result.total1
      };
    });
  }
}

const lpTypeVFloat: LpType = {
  getContract: (address: string, providerOrSigner: Provider | Signer) => VFloat__factory.connect(address, providerOrSigner),
  getReserves: (address: string, providerOrSigner: Provider | Signer) => {
    const contract = VFloat__factory.connect(address, providerOrSigner)
    return contract.getTotalAmounts().then(result => {
      return {
        token0: result.total0,
        token1: result.total1
      };
    });
  }
}

const lpTypeVolatileV1Amm: LpType = {
  getContract: (address: string, providerOrSigner: Provider | Signer) => VolatileV1AMM__factory.connect(address, providerOrSigner),
  getReserves: (address: string, providerOrSigner: Provider | Signer) => {
    const contract = VolatileV1AMM__factory.connect(address, providerOrSigner)
    return contract.getReserves().then((result: any) => {
      return {
        token0: result._reserve0,
        token1: result._reserve1
      };
    });
  }
}

export const LP_TYPES = new Map<SUPPORTED_LP_TYPES, LpType>([
  [SUPPORTED_LP_TYPES.CAKE_LP, lpTypeSlp],
  [SUPPORTED_LP_TYPES.DODO, lpTypeDodo],
  [SUPPORTED_LP_TYPES.G_UNI, lpTypeGUni],
  [SUPPORTED_LP_TYPES.HYPERVISOR, lpTypeHypervisor],
  [SUPPORTED_LP_TYPES.ICHI_VAULT, lpTypeIchi],
  [SUPPORTED_LP_TYPES.SUSHISWAP, lpTypeSlp],
  [SUPPORTED_LP_TYPES.UNISWAP_V2, lpTypeSlp],
  [SUPPORTED_LP_TYPES.V_FLOAT, lpTypeVFloat],
  [SUPPORTED_LP_TYPES.VOLATILE_V1_AMM, lpTypeVolatileV1Amm],
])
