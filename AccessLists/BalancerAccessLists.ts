import { AccessLists } from "../src/types";

export const BalancerAccessLists : AccessLists = {
    BalancerV2Supply: [
        ['0xBA12222222228d8Ba445958a75a0704d566BF2C8', []], // Vault
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    BalancerV2Withdraw: [
        ['0xBA12222222228d8Ba445958a75a0704d566BF2C8', []], // Vault
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    BalancerV2Claim: [
        ['0x6d19b2bF3A36A61530909Ae65445a906D98A2Fa8', []], // MerkleRedeem
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],
};
