const poolInfo = require('./curvePoolInfo.json');

const makeFlags = (
    depositTargetType,
    explicitUnderlying,
    withdrawExact,
) => {
    return depositTargetType | explicitUnderlying << 2 | withdrawExact << 3;
}

module.exports = {
    poolInfo,
    makeFlags,
};
