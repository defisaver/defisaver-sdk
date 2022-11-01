import poolInfo from './convexPoolInfo.json';

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
const getConvexPool = (curveLpToken: string) => poolInfo.find((e) => e.lpToken === curveLpToken);

export default{
    getConvexPool,
    DepositOption,
    WithdrawOption,
    poolInfo,
}
