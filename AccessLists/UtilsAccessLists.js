const UtilsAccessLists = {
    WrapEth: [
        ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // WETH
    ],

    UnwrapEth: [
        ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // WETH
    ],

    DFSSell: [
        ['0x25dd3F51e0C3c3Ff164DDC02A8E4D65Bb9cBB12D', []], // SaverExchangeRegistry
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    SendToken: [],

    PullToken: [],

    SumInputs: [],

    SubInputs: [],

    ChangeProxyOwner: [
        ['0xF8f8B3C98Cf2E63Df3041b73f80F362a4cf3A576', []], // DFSProxyRegistryController
    ],

    TokenBalance: [],

    AutomationV2Unsub: [
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],
};

module.exports = {
    UtilsAccessLists,
};
