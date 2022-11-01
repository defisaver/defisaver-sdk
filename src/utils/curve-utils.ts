import poolInfo from './curvePoolInfo.json';
export {poolInfo};

export const makeFlags = (
    depositTargetType: any,
    explicitUnderlying: any,
    withdrawExact: any,
) => {
    return depositTargetType | explicitUnderlying << 2 | withdrawExact << 3;
}