import poolInfo from './curvePoolInfo.json';

export { poolInfo };

/**
 * Make Flags
 *
 * */
export const makeFlags = (
  depositTargetType: any,
  explicitUnderlying: any,
  withdrawExact: any,
  removeOneCoin: any,
  // eslint-disable-next-line
) => depositTargetType | explicitUnderlying << 2 | withdrawExact << 3 | removeOneCoin << 4;
