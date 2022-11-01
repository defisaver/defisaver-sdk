import { AccessLists } from "../src/types";

export const FlashLoanAccessLists : AccessLists = {
    FLDyDx: [
        ['0x1E0447b19BB6EcFdAe1e4AE1694b0C3659614e4e', []], // SoloMargin
        ['0x47f159C90850D5cE09E21F931d504536840f34b4', []], // FLFeeFaucet
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    FLAaveV2: [
        ['0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9', []], // LendingPool
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    FLMaker: [
        ['0x1EB4CF3A948E7D72A198fe073cCb8C7a948cD853', []], // DssFlash
        ['0x6B175474E89094C44Da98b954EedeAC495271d0F', []], // Dai
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    FLBalancer: [
        ['0xBA12222222228d8Ba445958a75a0704d566BF2C8', []], // Vault
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],
};

