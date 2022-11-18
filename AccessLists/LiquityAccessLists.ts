import { AccessLists } from '../src/types';

export const LiquityAccessLists : AccessLists = {
  LiquityOpen: [
    ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // Weth
    ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquityBorrow: [
    ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquityPayback: [
    ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquitySupply: [
    ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // Weth
    ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquityWithdraw: [
    ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // Weth
    ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquityClose: [
    ['0xA39739EF8b0231DbFA0DcdA07d7e29faAbCf4bb2', []], // TroveManager
    ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // Weth
    ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquityClaim: [
    ['0x3D32e8b97Ed5881324241Cf03b2DA5E2EBcE5521', []], // CollSurplusPool
    ['0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', []], // Weth
    ['0x24179CD81c9e782A4096035f7eC97fB8B783e007', []], // BorrowerOperations
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquityRedeem: [
    ['0x5f98805A4E8be255a32880FDeC7F6728C6568bA0', []], // Lusd
    ['0xA39739EF8b0231DbFA0DcdA07d7e29faAbCf4bb2', []], // TroveManager
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquitySPDeposit: [
    ['0x66017D22b0f8556afDd19FC67041899Eb65a21bb', []], // StabilityPool
    ['0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D', []], // Lqty
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquitySPWithdraw: [
    ['0x66017D22b0f8556afDd19FC67041899Eb65a21bb', []], // StabilityPool
    ['0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D', []], // Lqty
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquityStake: [
    ['0x4f9Fbb3f1E99B56e0Fe2892e623Ed36A76Fc605d', []], // LQTYStaking
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquityUnstake: [
    ['0x4f9Fbb3f1E99B56e0Fe2892e623Ed36A76Fc605d', []], // LQTYStaking
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],

  LiquityEthGainToTrove: [
    ['0x66017D22b0f8556afDd19FC67041899Eb65a21bb', []], // StabilityPool
    ['0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D', []], // Lqty
    ['0x5c55B921f590a89C1Ebe84dF170E655a82b62126', []], // DefisaverLogger
  ],
};
