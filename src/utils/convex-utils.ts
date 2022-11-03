import poolInfo from './convexPoolInfo.json';

export{poolInfo};

/** Deposit options. */
export const DepositOption = {
    WRAP: 0,
    STAKE: 1,
    WRAP_AND_STAKE: 2,
}

/** Withdraw options. */
export const WithdrawOption = {
    UNWRAP: 0,
    UNSTAKE: 1,
    UNSTAKE_AND_UNWRAP: 2,
}

/** Get convex pool based on provided LP Token. */
export const getConvexPool = (curveLpToken: string) => poolInfo.find((e) => e.lpToken === curveLpToken);

