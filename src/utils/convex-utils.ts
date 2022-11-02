import poolInfo from './convexPoolInfo.json';

export{poolInfo};

export const DepositOption = {
    WRAP: 0,
    STAKE: 1,
    WRAP_AND_STAKE: 2,
}

export const WithdrawOption = {
    UNWRAP: 0,
    UNSTAKE: 1,
    UNSTAKE_AND_UNWRAP: 2,
}
export const getConvexPool = (curveLpToken: string) => poolInfo.find((e) => e.lpToken === curveLpToken);

