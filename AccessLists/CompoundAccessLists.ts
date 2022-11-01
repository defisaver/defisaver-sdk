import { AccessLists } from "../src/types";

export const CompoundAccessLists : AccessLists= {
    CompSupply: [
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    CompWithdraw: [
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    CompBorrow: [
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    CompPayback: [
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    CompCollateralSwitch: [
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    CompGetDebt: [],

    CompClaim: [
        ['0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B', []], // Comptroller
        ['0xc00e94Cb662C3520282E6f5717214004A7f26888', []], // Comp
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],
};
