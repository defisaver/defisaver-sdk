const poolInfo = require('./convexPoolInfo');

const DepositOption = {
    WRAP: 0,
    STAKE: 1,
    WRAP_AND_STAKE: 2,
}

const WithdrawOption = {
    UNWRAP: 0,
    UNSTAKE: 1,
    UNSTAKE_AND_UNWRAP: 2,
}

module.exports = {
    DepositOption,
    WithdrawOption,
    poolInfo,
    getConvexPool: (curveLpToken) => poolInfo.find((e) => e.lpToken === curveLpToken),
}