import { CONFIG, NETWORKS } from '../../config';

/** Must match the unified FLAction contract's FLSource enum. */
export enum FLSource {
  EMPTY,
  AAVEV2,
  BALANCER,
  GHO,
  MAKER,
  AAVEV3,
  UNIV3,
  SPARK,
  MORPHO_BLUE,
  CURVEUSD,
  BALANCER_V3,
}

/** Provider support in the current unified deployments. */
export const supportedFlashLoanSources: Readonly<Record<number, readonly FLSource[]>> = {
  [NETWORKS.ethereum.chainId]: [
    FLSource.AAVEV2, FLSource.BALANCER, FLSource.GHO, FLSource.MAKER,
    FLSource.AAVEV3, FLSource.UNIV3, FLSource.SPARK, FLSource.MORPHO_BLUE,
    FLSource.CURVEUSD, FLSource.BALANCER_V3,
  ],
  [NETWORKS.arbitrum.chainId]: [
    FLSource.BALANCER, FLSource.AAVEV3, FLSource.UNIV3, FLSource.MORPHO_BLUE, FLSource.BALANCER_V3,
  ],
  [NETWORKS.base.chainId]: [
    FLSource.BALANCER, FLSource.AAVEV3, FLSource.UNIV3, FLSource.MORPHO_BLUE, FLSource.BALANCER_V3,
  ],
  [NETWORKS.optimism.chainId]: [
    FLSource.BALANCER, FLSource.AAVEV3, FLSource.UNIV3, FLSource.BALANCER_V3,
  ],
  [NETWORKS.linea.chainId]: [FLSource.AAVEV3],
  [NETWORKS.plasma.chainId]: [FLSource.AAVEV3, FLSource.BALANCER_V3],
};

export const isFlashLoanSourceSupported = (source: FLSource, chainId: number = CONFIG.chainId): boolean => supportedFlashLoanSources[chainId]?.includes(source) ?? false;

export const assertFlashLoanSourceSupported = (source: FLSource, chainId: number = CONFIG.chainId): void => {
  if (!isFlashLoanSourceSupported(source, chainId)) {
    throw new Error(`Flashloan source ${FLSource[source] ?? String(source)} is not supported by FLAction on chainId: ${chainId}.`);
  }
};
