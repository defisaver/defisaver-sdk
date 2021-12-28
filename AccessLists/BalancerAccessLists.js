const BalancerAccessLists = {
    BalancerV2SupplyAction: [
        ['0xD78E5D95A28a67F7851b0a94505790813A92E405', []], // BalancerV2Supply
        ['0xBA12222222228d8Ba445958a75a0704d566BF2C8', []], // Vault
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    BalancerV2WithdrawAction: [
        ['0xCcf4b96407BEF25D7df1c95045CCF64950e73E97', []], // BalancerV2Withdraw
        ['0xBA12222222228d8Ba445958a75a0704d566BF2C8', []], // Vault
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    BalancerV2ClaimAction: [
        ['0x259Ae83567858B7960d2De0D00F3717a764aD73B', []], // BalancerV2Claim
        ['0x6d19b2bF3A36A61530909Ae65445a906D98A2Fa8', []], // MerkleRedeem
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],
};

module.exports = {
    BalancerAccessLists,
};
