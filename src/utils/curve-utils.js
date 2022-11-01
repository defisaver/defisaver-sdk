const poolInfo = require('./curvePoolInfo.json');

const makeFlags = (
    depositTargetType,
    explicitUnderlying,
    withdrawExact,
    removeOneCoin
) => {
    return depositTargetType | explicitUnderlying << 2 | withdrawExact << 3 | removeOneCoin << 4;
}

module.exports = {
    poolInfo,
    makeFlags,
};
