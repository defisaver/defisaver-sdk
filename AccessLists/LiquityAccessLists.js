const LiquityAccessLists = {
    LiquityOpen: [
        ['0x50D69350E2629987551C563E19D29dee6Faf3A78', []], // LiquityOpen
        ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // Weth
        ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquityBorrow: [
        ['0x46e8fE6bbE3C08eCc250295583490be9ac97B969', []], // LiquityBorrow
        ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquityPayback: [
        ['0x86eCa72dF81ae76AfF0dEeC01521154F33147e46', []], // LiquityPayback
        ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquitySupply: [
        ['0x7d9157a022A263EFd34C867Fd261235D45B48453', []], // LiquitySupply
        ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // Weth
        ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquityWithdraw: [
        ['0x8CDA51bB0D7E03252d554Ba5Bbb9254f3deB8441', []], // LiquityWithdraw
        ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // Weth
        ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquityClose: [
        ['0x9C563dc9F8e3FcCF996DAB4b6B6003fb7Bbca90f', []], // LiquityClose
        ['0xA39739EF8b0231DbFA0DcdA07d7e29faAbCf4bb2', []], // TroveManager
        ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // Weth
        ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquityClaim: [
        ['0x5a2E638DE65323c55f1245f920B84dB4603002eE', []], // LiquityClaim
        ['0x3D32e8b97Ed5881324241Cf03b2DA5E2EBcE5521', []], // CollSurplusPool
        ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // Weth
        ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquityRedeem: [
        ['0x6C5Dd88D033c8857254Cc94098BF75Ac275B17c7', []], // LiquityRedeem
        ['0x5f98805A4E8be255a32880FDeC7F6728C6568bA0', []], // Lusd
        ['0xA39739EF8b0231DbFA0DcdA07d7e29faAbCf4bb2', []], // TroveManager
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquitySPDeposit: [
        ['0x20D85391A69E9906b67238cb82E51114dE7116a9', []], // LiquitySPDeposit
        ['0x66017D22b0f8556afDd19FC67041899Eb65a21bb', []], // StabilityPool
        ['0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D', []], // Lqty
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquitySPWithdraw: [
        ['0x621ac2A927cc9323C23f7792e8FD25aAbc9cC04B', []], // LiquitySPWithdraw
        ['0x66017D22b0f8556afDd19FC67041899Eb65a21bb', []], // StabilityPool
        ['0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D', []], // Lqty
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquityStake: [
        ['0xF0782DE9d734e54aa080B985d6a9235880C48Fe5', []], // LiquityStake
        ['0x4f9Fbb3f1E99B56e0Fe2892e623Ed36A76Fc605d', []], // LQTYStaking
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquityUnstake: [
        ['0xc39DdBa031D014BFC1E3b6158842Ffb43f8D47e9', []], // LiquityUnstake
        ['0x4f9Fbb3f1E99B56e0Fe2892e623Ed36A76Fc605d', []], // LQTYStaking
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],

    LiquityEthGainToTrove: [
        ['0x60427bD08785527FDca7d84d2A75871273E9F209', []], // LiquityEthGainToTrove
        ['0x66017D22b0f8556afDd19FC67041899Eb65a21bb', []], // StabilityPool
        ['0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D', []], // Lqty
        ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
    ],
};

module.exports = {
    LiquityAccessLists,
};
