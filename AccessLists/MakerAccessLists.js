const MakerAccessLists = {
    MakerOpenAction: [
        ['0x6467a24950451b3abd6654Fb6d8ae01635dcFe00', []], // McdOpen
        ['0x5ef30b9986345249bc32d8928B7ee64DE9435E39', []], // DssCdpManager
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    MakerSupplyAction: [
        ['0xD3C50623F44E97B59CFbfC1232146858be18e6cc', []], // McdSupply
        ['0x5ef30b9986345249bc32d8928B7ee64DE9435E39', []], // DssCdpManager
        ['0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B', []], // Vat
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    MakerWithdrawAction: [
        ['0x19654613812850081D80e7EC992e8F71DcbD30B4', []], // McdWithdraw
        ['0x5ef30b9986345249bc32d8928B7ee64DE9435E39', []], // DssCdpManager
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    MakerGenerateAction: [
        ['0x28C568A2C7216e8b61C71527C4b9ce2b92d217aa', []], // McdGenerate
        ['0x5ef30b9986345249bc32d8928B7ee64DE9435E39', []], // DssCdpManager
        ['0x19c0976f590D67707E62397C87829d896Dc0f1F1', []], // Jug
        ['0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B', []], // Vat
        ['0x9759A6Ac90977b93B58547b4A71c78317f391A28', []], // DaiJoin
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    MakerPaybackAction: [
        ['0xF8811168BDb3665de94c05B8DbA42588D038ce1b', []], // McdPayback
        ['0x5ef30b9986345249bc32d8928B7ee64DE9435E39', []], // DssCdpManager
        ['0x6B175474E89094C44Da98b954EedeAC495271d0F', []], // Dai
        ['0x9759A6Ac90977b93B58547b4A71c78317f391A28', []], // DaiJoin
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],
};

module.exports = {
    MakerAccessLists,
};
