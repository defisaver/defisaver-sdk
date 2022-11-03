[@defisaver/sdk](../README.md) / [Exports](../modules.md) / ActionWithL2

# Class: ActionWithL2

Single L2 action that can be executed directly, or combined into a set (ie. supply a vault)

## Hierarchy

- [`Action`](Action.md)

  ↳ **`ActionWithL2`**

  ↳↳ [`SellAction`](SellAction.md)

  ↳↳ [`WrapEthAction`](WrapEthAction.md)

  ↳↳ [`UnwrapEthAction`](UnwrapEthAction.md)

  ↳↳ [`AaveV3FlashLoanAction`](AaveV3FlashLoanAction.md)

  ↳↳ [`UniswapV3MintAction`](UniswapV3MintAction.md)

  ↳↳ [`UniswapV3WithdrawAction`](UniswapV3WithdrawAction.md)

  ↳↳ [`UniswapV3CollectAction`](UniswapV3CollectAction.md)

  ↳↳ [`UniswapV3CreatePoolAction`](UniswapV3CreatePoolAction.md)

  ↳↳ [`AaveV3SupplyAction`](AaveV3SupplyAction.md)

  ↳↳ [`AaveV3BorrowAction`](AaveV3BorrowAction.md)

  ↳↳ [`AaveV3PaybackAction`](AaveV3PaybackAction.md)

  ↳↳ [`AaveV3WithdrawAction`](AaveV3WithdrawAction.md)

  ↳↳ [`AaveV3SetEModeAction`](AaveV3SetEModeAction.md)

  ↳↳ [`AaveV3ATokenPaybackAction`](AaveV3ATokenPaybackAction.md)

  ↳↳ [`AaveV3CollateralSwitchAction`](AaveV3CollateralSwitchAction.md)

  ↳↳ [`AaveV3ClaimRewardsAction`](AaveV3ClaimRewardsAction.md)

  ↳↳ [`AaveV3SwapBorrowRateModeAction`](AaveV3SwapBorrowRateModeAction.md)

## Table of contents

### Constructors

- [constructor](ActionWithL2.md#constructor)

### Properties

- [args](ActionWithL2.md#args)
- [contractAddress](ActionWithL2.md#contractaddress)
- [mappableArgs](ActionWithL2.md#mappableargs)
- [name](ActionWithL2.md#name)
- [paramTypes](ActionWithL2.md#paramtypes)

### Methods

- [\_encodeForCall](ActionWithL2.md#_encodeforcall)
- [\_formatType](ActionWithL2.md#_formattype)
- [\_getArgumentMapping](ActionWithL2.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](ActionWithL2.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](ActionWithL2.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](ActionWithL2.md#_replacewithplaceholders)
- [addressToBytes20](ActionWithL2.md#addresstobytes20)
- [boolToBytes1](ActionWithL2.md#booltobytes1)
- [encodeForDsProxyCall](ActionWithL2.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](ActionWithL2.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](ActionWithL2.md#encodeforl2recipe)
- [encodeForRecipe](ActionWithL2.md#encodeforrecipe)
- [encodeForStrategy](ActionWithL2.md#encodeforstrategy)
- [encodeInputs](ActionWithL2.md#encodeinputs)
- [getAccessList](ActionWithL2.md#getaccesslist)
- [getAssetsToApprove](ActionWithL2.md#getassetstoapprove)
- [getEthValue](ActionWithL2.md#getethvalue)
- [getId](ActionWithL2.md#getid)
- [numberToBytes1](ActionWithL2.md#numbertobytes1)
- [numberToBytes2](ActionWithL2.md#numbertobytes2)
- [numberToBytes32](ActionWithL2.md#numbertobytes32)

## Constructors

### constructor

• **new ActionWithL2**(`name`, `contractAddress`, `paramTypes`, `args`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | {string} |
| `contractAddress` | `string` | {string} |
| `paramTypes` | (`string` \| `any`[])[] | {Array<string>} |
| `args` | `any`[] | {Array<*>} |

#### Inherited from

[Action](Action.md).[constructor](Action.md#constructor)

#### Defined in

[src/Action.ts:27](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L27)

## Properties

### args

• **args**: `any`[]

#### Inherited from

[Action](Action.md).[args](Action.md#args)

#### Defined in

[src/Action.ts:18](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L18)

___

### contractAddress

• **contractAddress**: `string`

#### Inherited from

[Action](Action.md).[contractAddress](Action.md#contractaddress)

#### Defined in

[src/Action.ts:15](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L15)

___

### mappableArgs

• **mappableArgs**: `any`[]

#### Inherited from

[Action](Action.md).[mappableArgs](Action.md#mappableargs)

#### Defined in

[src/Action.ts:19](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L19)

___

### name

• **name**: `string`

#### Inherited from

[Action](Action.md).[name](Action.md#name)

#### Defined in

[src/Action.ts:17](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L17)

___

### paramTypes

• **paramTypes**: (`string` \| `any`[])[]

#### Inherited from

[Action](Action.md).[paramTypes](Action.md#paramtypes)

#### Defined in

[src/Action.ts:16](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L16)

## Methods

### \_encodeForCall

▸ `Private` **_encodeForCall**(): `string`[]

Encode arguments for calling the action directly

#### Returns

`string`[]

bytes-encoded args

#### Inherited from

[Action](Action.md).[_encodeForCall](Action.md#_encodeforcall)

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

#### Inherited from

[Action](Action.md).[_formatType](Action.md#_formattype)

#### Defined in

[src/Action.ts:110](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L110)

___

### \_getArgumentMapping

▸ `Private` **_getArgumentMapping**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[Action](Action.md).[_getArgumentMapping](Action.md#_getargumentmapping)

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

#### Inherited from

[Action](Action.md).[_getArgumentMappingWithSlots](Action.md#_getargumentmappingwithslots)

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

#### Inherited from

[Action](Action.md).[_getPlaceholderForType](Action.md#_getplaceholderfortype)

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

#### Inherited from

[Action](Action.md).[_replaceWithPlaceholders](Action.md#_replacewithplaceholders)

#### Defined in

[src/Action.ts:98](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L98)

___

### addressToBytes20

▸ **addressToBytes20**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`

#### Defined in

[src/ActionWithL2.ts:27](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L27)

___

### boolToBytes1

▸ **boolToBytes1**(`bool`): ``"01"`` \| ``"00"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `bool` | `boolean` |

#### Returns

``"01"`` \| ``"00"``

#### Defined in

[src/ActionWithL2.ts:29](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L29)

___

### encodeForDsProxyCall

▸ **encodeForDsProxyCall**(): (`string` \| `string`[])[]

Encode arguments for calling the action via DsProxy

#### Returns

(`string` \| `string`[])[]

`address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`

#### Inherited from

[Action](Action.md).[encodeForDsProxyCall](Action.md#encodefordsproxycall)

#### Defined in

[src/Action.ts:138](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L138)

___

### encodeForL2DsProxyCall

▸ **encodeForL2DsProxyCall**(): `string`

Encode arguments for calling the action via DsProxy

#### Returns

`string`

#### Overrides

[Action](Action.md).[encodeForL2DsProxyCall](Action.md#encodeforl2dsproxycall)

#### Defined in

[src/ActionWithL2.ts:16](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L16)

___

### encodeForL2Recipe

▸ **encodeForL2Recipe**(): `string`

#### Returns

`string`

#### Overrides

[Action](Action.md).[encodeForL2Recipe](Action.md#encodeforl2recipe)

#### Defined in

[src/ActionWithL2.ts:18](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L18)

___

### encodeForRecipe

▸ **encodeForRecipe**(): (`string` \| `string`[] \| `number`[])[]

Encodes action for Recipe call

#### Returns

(`string` \| `string`[] \| `number`[])[]

#### Inherited from

[Action](Action.md).[encodeForRecipe](Action.md#encodeforrecipe)

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

#### Inherited from

[Action](Action.md).[encodeForStrategy](Action.md#encodeforstrategy)

#### Defined in

[src/Action.ts:163](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L163)

___

### encodeInputs

▸ **encodeInputs**(): `string`

#### Returns

`string`

#### Defined in

[src/ActionWithL2.ts:20](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L20)

___

### getAccessList

▸ **getAccessList**(): `AccessListItem`[]

Access list for single action

#### Returns

`AccessListItem`[]

#### Inherited from

[Action](Action.md).[getAccessList](Action.md#getaccesslist)

#### Defined in

[src/Action.ts:191](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L191)

___

### getAssetsToApprove

▸ **getAssetsToApprove**(): `Promise`<{ `[key: string]`: `any`; `asset?`: `string` ; `owner?`: `string`  }[]\>

Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

#### Returns

`Promise`<{ `[key: string]`: `any`; `asset?`: `string` ; `owner?`: `string`  }[]\>

#### Inherited from

[Action](Action.md).[getAssetsToApprove](Action.md#getassetstoapprove)

#### Defined in

[src/Action.ts:175](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L175)

___

### getEthValue

▸ **getEthValue**(): `Promise`<`string`\>

ETH value to be sent with transaction

#### Returns

`Promise`<`string`\>

ETH value in wei

#### Overrides

[Action](Action.md).[getEthValue](Action.md#getethvalue)

#### Defined in

[src/ActionWithL2.ts:31](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L31)

___

### getId

▸ `Private` **getId**(): `string`

#### Returns

`string`

#### Inherited from

[Action](Action.md).[getId](Action.md#getid)

#### Defined in

[src/Action.ts:43](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L43)

___

### numberToBytes1

▸ **numberToBytes1**(`number`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`string`

#### Defined in

[src/ActionWithL2.ts:38](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L38)

___

### numberToBytes2

▸ **numberToBytes2**(`number`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`string`

#### Defined in

[src/ActionWithL2.ts:33](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L33)

___

### numberToBytes32

▸ **numberToBytes32**(`number`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`string`

#### Defined in

[src/ActionWithL2.ts:43](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L43)
