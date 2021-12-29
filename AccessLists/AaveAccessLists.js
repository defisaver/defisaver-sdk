const AaveAccessLists = {
    AaveSupply: [
        ['0xC71113E9122465e8bCd42123f840Df99abaF29F1', []], // AaveSupply
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    AaveWithdraw: [
        ['0xE06Fc1CBD78Eb0799d5B0ca62D51B065886e08FC', []], // AaveWithdraw
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    AaveBorrow: [
        ['0xEdBbF97C505309e5174E164fbec3cAE774d310Ea', []], // AaveBorrow
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    AavePayback: [
        ['0xb583Bc7603E5E482F475Ec9Ea90129029D53fbc8', []], // AavePayback
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    AaveCollateralSwitch: [
        ['0x27d77c80A88665342C98Ea31B687A5fc8ca9a445', []], // AaveCollateralSwitch
    ],

    AaveClaimStkAave: [
        // missing contract address
    ],
};

module.exports = {
    AaveAccessLists,
};
