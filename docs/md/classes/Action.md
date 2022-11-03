[@defisaver/sdk](../README.md) / [Exports](../modules.md) / Action

# Class: Action

Single action that can be executed directly, or combined into a set (ie. supply a vault)

## Hierarchy

- **`Action`**

  ↳ [`ActionWithL2`](ActionWithL2.md)

  ↳ [`MakerOpenVaultAction`](MakerOpenVaultAction.md)

  ↳ [`MakerGenerateAction`](MakerGenerateAction.md)

  ↳ [`MakerSupplyAction`](MakerSupplyAction.md)

  ↳ [`MakerPaybackAction`](MakerPaybackAction.md)

  ↳ [`MakerWithdrawAction`](MakerWithdrawAction.md)

  ↳ [`MakerGiveAction`](MakerGiveAction.md)

  ↳ [`MakerMergeAction`](MakerMergeAction.md)

  ↳ [`MakerRatioAction`](MakerRatioAction.md)

  ↳ [`MakerClaimAction`](MakerClaimAction.md)

  ↳ [`AaveBorrowAction`](AaveBorrowAction.md)

  ↳ [`AaveSupplyAction`](AaveSupplyAction.md)

  ↳ [`AavePaybackAction`](AavePaybackAction.md)

  ↳ [`AaveWithdrawAction`](AaveWithdrawAction.md)

  ↳ [`AaveClaimStkAaveAction`](AaveClaimStkAaveAction.md)

  ↳ [`AaveCollateralSwitchAction`](AaveCollateralSwitchAction.md)

  ↳ [`CompoundBorrowAction`](CompoundBorrowAction.md)

  ↳ [`CompoundSupplyAction`](CompoundSupplyAction.md)

  ↳ [`CompoundPaybackAction`](CompoundPaybackAction.md)

  ↳ [`CompoundWithdrawAction`](CompoundWithdrawAction.md)

  ↳ [`CompoundClaimAction`](CompoundClaimAction.md)

  ↳ [`CompoundCollateralSwitchAction`](CompoundCollateralSwitchAction.md)

  ↳ [`CompoundGetDebtAction`](CompoundGetDebtAction.md)

  ↳ [`SendTokenAction`](SendTokenAction.md)

  ↳ [`SendTokenAndUnwrapAction`](SendTokenAndUnwrapAction.md)

  ↳ [`PullTokenAction`](PullTokenAction.md)

  ↳ [`SumInputsAction`](SumInputsAction.md)

  ↳ [`SubInputsAction`](SubInputsAction.md)

  ↳ [`ChangeProxyOwnerAction`](ChangeProxyOwnerAction.md)

  ↳ [`TokenBalanceAction`](TokenBalanceAction.md)

  ↳ [`AutomationV2Unsub`](AutomationV2Unsub.md)

  ↳ [`GasFeeAction`](GasFeeAction.md)

  ↳ [`UpdateSubAction`](UpdateSubAction.md)

  ↳ [`ToggleSubAction`](ToggleSubAction.md)

  ↳ [`GasFeeActionL2`](GasFeeActionL2.md)

  ↳ [`TransferNFTAction`](TransferNFTAction.md)

  ↳ [`DyDxFlashLoanAction`](DyDxFlashLoanAction.md)

  ↳ [`AaveV2FlashLoanAction`](AaveV2FlashLoanAction.md)

  ↳ [`MakerFlashLoanAction`](MakerFlashLoanAction.md)

  ↳ [`BalancerFlashLoanAction`](BalancerFlashLoanAction.md)

  ↳ [`EulerFlashLoanAction`](EulerFlashLoanAction.md)

  ↳ [`UniswapSupplyAction`](UniswapSupplyAction.md)

  ↳ [`UniswapWithdrawAction`](UniswapWithdrawAction.md)

  ↳ [`ReflexerOpenSafeAction`](ReflexerOpenSafeAction.md)

  ↳ [`ReflexerGenerateAction`](ReflexerGenerateAction.md)

  ↳ [`ReflexerSupplyAction`](ReflexerSupplyAction.md)

  ↳ [`ReflexerPaybackAction`](ReflexerPaybackAction.md)

  ↳ [`ReflexerWithdrawAction`](ReflexerWithdrawAction.md)

  ↳ [`ReflexerNativeUniV2SaviourDepositAction`](ReflexerNativeUniV2SaviourDepositAction.md)

  ↳ [`ReflexerNativeUniV2SaviourWithdrawAction`](ReflexerNativeUniV2SaviourWithdrawAction.md)

  ↳ [`ReflexerNativeUniV2SaviourGetReservesAction`](ReflexerNativeUniV2SaviourGetReservesAction.md)

  ↳ [`DyDxWithdrawAction`](DyDxWithdrawAction.md)

  ↳ [`MakerRatioCheckAction`](MakerRatioCheckAction.md)

  ↳ [`AaveV3RatioCheckAction`](AaveV3RatioCheckAction.md)

  ↳ [`CompoundV3RatioCheckAction`](CompoundV3RatioCheckAction.md)

  ↳ [`LiquityOpenAction`](LiquityOpenAction.md)

  ↳ [`LiquityBorrowAction`](LiquityBorrowAction.md)

  ↳ [`LiquityPaybackAction`](LiquityPaybackAction.md)

  ↳ [`LiquitySupplyAction`](LiquitySupplyAction.md)

  ↳ [`LiquityWithdrawAction`](LiquityWithdrawAction.md)

  ↳ [`LiquityCloseAction`](LiquityCloseAction.md)

  ↳ [`LiquityClaimAction`](LiquityClaimAction.md)

  ↳ [`LiquityRedeemAction`](LiquityRedeemAction.md)

  ↳ [`LiquitySPDepositAction`](LiquitySPDepositAction.md)

  ↳ [`LiquitySPWithdrawAction`](LiquitySPWithdrawAction.md)

  ↳ [`LiquityStakeAction`](LiquityStakeAction.md)

  ↳ [`LiquityUnstakeAction`](LiquityUnstakeAction.md)

  ↳ [`LiquityEthGainToTroveAction`](LiquityEthGainToTroveAction.md)

  ↳ [`YearnSupplyAction`](YearnSupplyAction.md)

  ↳ [`YearnWithdrawAction`](YearnWithdrawAction.md)

  ↳ [`LidoStakeAction`](LidoStakeAction.md)

  ↳ [`LidoWrapAction`](LidoWrapAction.md)

  ↳ [`LidoUnwrapAction`](LidoUnwrapAction.md)

  ↳ [`InstPullTokensAction`](InstPullTokensAction.md)

  ↳ [`BalancerV2SupplyAction`](BalancerV2SupplyAction.md)

  ↳ [`BalancerV2WithdrawAction`](BalancerV2WithdrawAction.md)

  ↳ [`BalancerV2ClaimAction`](BalancerV2ClaimAction.md)

  ↳ [`CurveSwapAction`](CurveSwapAction.md)

  ↳ [`CurveDepositAction`](CurveDepositAction.md)

  ↳ [`CurveWithdrawAction`](CurveWithdrawAction.md)

  ↳ [`CurveGaugeDepositAction`](CurveGaugeDepositAction.md)

  ↳ [`CurveGaugeWithdrawAction`](CurveGaugeWithdrawAction.md)

  ↳ [`CurveMintCrvAction`](CurveMintCrvAction.md)

  ↳ [`CurveClaimFeesAction`](CurveClaimFeesAction.md)

  ↳ [`CurveStethPoolDepositAction`](CurveStethPoolDepositAction.md)

  ↳ [`CurveStethPoolWithdrawAction`](CurveStethPoolWithdrawAction.md)

  ↳ [`GUniDeposit`](GUniDeposit.md)

  ↳ [`GUniWithdraw`](GUniWithdraw.md)

  ↳ [`MStableDepositAction`](MStableDepositAction.md)

  ↳ [`MStableWithdrawAction`](MStableWithdrawAction.md)

  ↳ [`MStableClaimAction`](MStableClaimAction.md)

  ↳ [`RariDepositAction`](RariDepositAction.md)

  ↳ [`RariWithdrawAction`](RariWithdrawAction.md)

  ↳ [`ConvexDepositAction`](ConvexDepositAction.md)

  ↳ [`ConvexWithdrawAction`](ConvexWithdrawAction.md)

  ↳ [`ConvexClaimAction`](ConvexClaimAction.md)

  ↳ [`CBCreateAction`](CBCreateAction.md)

  ↳ [`CBChickenInAction`](CBChickenInAction.md)

  ↳ [`CBChickenOutAction`](CBChickenOutAction.md)

  ↳ [`CBRedeemAction`](CBRedeemAction.md)

  ↳ [`CompoundV3SupplyAction`](CompoundV3SupplyAction.md)

  ↳ [`CompoundV3BorrowAction`](CompoundV3BorrowAction.md)

  ↳ [`CompoundV3PaybackAction`](CompoundV3PaybackAction.md)

  ↳ [`CompoundV3WithdrawAction`](CompoundV3WithdrawAction.md)

  ↳ [`CompoundV3ClaimAction`](CompoundV3ClaimAction.md)

  ↳ [`CompoundV3AllowAction`](CompoundV3AllowAction.md)

  ↳ [`CompoundV3TransferAction`](CompoundV3TransferAction.md)

  ↳ [`MakerRatioTrigger`](MakerRatioTrigger.md)

  ↳ [`ChainLinkPriceTrigger`](ChainLinkPriceTrigger.md)

  ↳ [`UniV3CurrentTickTrigger`](UniV3CurrentTickTrigger.md)

  ↳ [`TimestampTrigger`](TimestampTrigger.md)

  ↳ [`CompoundRatioTrigger`](CompoundRatioTrigger.md)

  ↳ [`ReflexerRatioTrigger`](ReflexerRatioTrigger.md)

  ↳ [`LiquityRatioTrigger`](LiquityRatioTrigger.md)

  ↳ [`AaveV3RatioTrigger`](AaveV3RatioTrigger.md)

  ↳ [`CompV3RatioTrigger`](CompV3RatioTrigger.md)

  ↳ [`TrailingStopTrigger`](TrailingStopTrigger.md)

## Table of contents

### Constructors

- [constructor](Action.md#constructor)

### Properties

- [args](Action.md#args)
- [contractAddress](Action.md#contractaddress)
- [mappableArgs](Action.md#mappableargs)
- [name](Action.md#name)
- [paramTypes](Action.md#paramtypes)

### Methods

- [\_encodeForCall](Action.md#_encodeforcall)
- [\_formatType](Action.md#_formattype)
- [\_getArgumentMapping](Action.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](Action.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](Action.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](Action.md#_replacewithplaceholders)
- [encodeForDsProxyCall](Action.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](Action.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](Action.md#encodeforl2recipe)
- [encodeForRecipe](Action.md#encodeforrecipe)
- [encodeForStrategy](Action.md#encodeforstrategy)
- [getAccessList](Action.md#getaccesslist)
- [getAssetsToApprove](Action.md#getassetstoapprove)
- [getEthValue](Action.md#getethvalue)
- [getId](Action.md#getid)

## Constructors

### constructor

• **new Action**(`name`, `contractAddress`, `paramTypes`, `args`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | {string} |
| `contractAddress` | `string` | {string} |
| `paramTypes` | (`string` \| `any`[])[] | {Array<string>} |
| `args` | `any`[] | {Array<*>} |

#### Defined in

[src/Action.ts:27](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L27)

## Properties

### args

• **args**: `any`[]

#### Defined in

[src/Action.ts:18](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L18)

___

### contractAddress

• **contractAddress**: `string`

#### Defined in

[src/Action.ts:15](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L15)

___

### mappableArgs

• **mappableArgs**: `any`[]

#### Defined in

[src/Action.ts:19](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L19)

___

### name

• **name**: `string`

#### Defined in

[src/Action.ts:17](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L17)

___

### paramTypes

• **paramTypes**: (`string` \| `any`[])[]

#### Defined in

[src/Action.ts:16](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L16)

## Methods

### \_encodeForCall

▸ `Private` **_encodeForCall**(): `string`[]

Encode arguments for calling the action directly

#### Returns

`string`[]

bytes-encoded args

#### Defined in

[src/Action.ts:120](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L120)

___

### \_formatType

▸ `Private` **_formatType**(`paramType`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paramType` | `string` \| `any`[] |

#### Returns

`string`

#### Defined in

[src/Action.ts:110](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L110)

___

### \_getArgumentMapping

▸ `Private` **_getArgumentMapping**(): `number`[]

#### Returns

`number`[]

#### Defined in

[src/Action.ts:73](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L73)

___

### \_getArgumentMappingWithSlots

▸ `Private` **_getArgumentMappingWithSlots**(`subSlots`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `subSlots` | `any`[] |

#### Returns

`number`[]

#### Defined in

[src/Action.ts:51](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L51)

___

### \_getPlaceholderForType

▸ `Private` **_getPlaceholderForType**(`type`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | {string} |

#### Returns

`string`

#### Defined in

[src/Action.ts:87](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L87)

___

### \_replaceWithPlaceholders

▸ `Private` **_replaceWithPlaceholders**(`arg`, `paramType`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |
| `paramType` | `string` \| `any`[] |

#### Returns

`any`

#### Defined in

[src/Action.ts:98](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L98)

___

### encodeForDsProxyCall

▸ **encodeForDsProxyCall**(): (`string` \| `string`[])[]

Encode arguments for calling the action via DsProxy

#### Returns

(`string` \| `string`[])[]

`address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`

#### Defined in

[src/Action.ts:138](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L138)

___

### encodeForL2DsProxyCall

▸ **encodeForL2DsProxyCall**(): `string`

#### Returns

`string`

#### Defined in

[src/Action.ts:126](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L126)

___

### encodeForL2Recipe

▸ **encodeForL2Recipe**(): `string`

#### Returns

`string`

#### Defined in

[src/Action.ts:130](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L130)

___

### encodeForRecipe

▸ **encodeForRecipe**(): (`string` \| `string`[] \| `number`[])[]

Encodes action for Recipe call

#### Returns

(`string` \| `string`[] \| `number`[])[]

#### Defined in

[src/Action.ts:154](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L154)

___

### encodeForStrategy

▸ **encodeForStrategy**(`subSlots`): (`string` \| `number`[])[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `subSlots` | `any` |

#### Returns

(`string` \| `number`[])[]

#### Defined in

[src/Action.ts:163](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L163)

___

### getAccessList

▸ **getAccessList**(): `AccessListItem`[]

Access list for single action

#### Returns

`AccessListItem`[]

#### Defined in

[src/Action.ts:191](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L191)

___

### getAssetsToApprove

▸ **getAssetsToApprove**(): `Promise`<{ `[key: string]`: `any`; `asset?`: `string` ; `owner?`: `string`  }[]\>

Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

#### Returns

`Promise`<{ `[key: string]`: `any`; `asset?`: `string` ; `owner?`: `string`  }[]\>

#### Defined in

[src/Action.ts:175](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L175)

___

### getEthValue

▸ **getEthValue**(): `Promise`<`string`\>

ETH value to be sent with transaction

#### Returns

`Promise`<`string`\>

ETH value in wei

#### Defined in

[src/Action.ts:183](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L183)

___

### getId

▸ `Private` **getId**(): `string`

#### Returns

`string`

#### Defined in

[src/Action.ts:43](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L43)
