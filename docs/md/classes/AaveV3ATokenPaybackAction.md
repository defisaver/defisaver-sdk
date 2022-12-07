[@defisaver/sdk](../README.md) / [Exports](../modules.md) / AaveV3ATokenPaybackAction

# Class: AaveV3ATokenPaybackAction

AaveV3ATokenPaybackAction - Repay Aave V3 debt using aTokens

## Hierarchy

- [`ActionWithL2`](ActionWithL2.md)

  ↳ **`AaveV3ATokenPaybackAction`**

## Table of contents

### Constructors

- [constructor](AaveV3ATokenPaybackAction.md#constructor)

### Properties

- [addressForApproval](AaveV3ATokenPaybackAction.md#addressforapproval)
- [args](AaveV3ATokenPaybackAction.md#args)
- [contractAddress](AaveV3ATokenPaybackAction.md#contractaddress)
- [mappableArgs](AaveV3ATokenPaybackAction.md#mappableargs)
- [name](AaveV3ATokenPaybackAction.md#name)
- [paramTypes](AaveV3ATokenPaybackAction.md#paramtypes)

### Methods

- [\_encodeForCall](AaveV3ATokenPaybackAction.md#_encodeforcall)
- [\_formatType](AaveV3ATokenPaybackAction.md#_formattype)
- [\_getArgumentMapping](AaveV3ATokenPaybackAction.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](AaveV3ATokenPaybackAction.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](AaveV3ATokenPaybackAction.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](AaveV3ATokenPaybackAction.md#_replacewithplaceholders)
- [addressToBytes20](AaveV3ATokenPaybackAction.md#addresstobytes20)
- [boolToBytes1](AaveV3ATokenPaybackAction.md#booltobytes1)
- [encodeForDsProxyCall](AaveV3ATokenPaybackAction.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](AaveV3ATokenPaybackAction.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](AaveV3ATokenPaybackAction.md#encodeforl2recipe)
- [encodeForRecipe](AaveV3ATokenPaybackAction.md#encodeforrecipe)
- [encodeForStrategy](AaveV3ATokenPaybackAction.md#encodeforstrategy)
- [encodeInputs](AaveV3ATokenPaybackAction.md#encodeinputs)
- [getAccessList](AaveV3ATokenPaybackAction.md#getaccesslist)
- [getAssetsToApprove](AaveV3ATokenPaybackAction.md#getassetstoapprove)
- [getEthValue](AaveV3ATokenPaybackAction.md#getethvalue)
- [getId](AaveV3ATokenPaybackAction.md#getid)
- [numberToBytes1](AaveV3ATokenPaybackAction.md#numbertobytes1)
- [numberToBytes2](AaveV3ATokenPaybackAction.md#numbertobytes2)
- [numberToBytes32](AaveV3ATokenPaybackAction.md#numbertobytes32)

## Constructors

### constructor

• **new AaveV3ATokenPaybackAction**(`aTokenAddr`, `useDefaultMarket`, `market`, `amount`, `from`, `rateMode`, `assetId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `aTokenAddr` | `string` |
| `useDefaultMarket` | `boolean` |
| `market` | `string` |
| `amount` | `string` |
| `from` | `string` |
| `rateMode` | `string` |
| `assetId` | `string` |

#### Overrides

[ActionWithL2](ActionWithL2.md).[constructor](ActionWithL2.md#constructor)

#### Defined in

[src/actions/aaveV3/AaveV3ATokenPaybackAction.ts:24](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/aaveV3/AaveV3ATokenPaybackAction.ts#L24)

## Properties

### addressForApproval

• **addressForApproval**: `string`

**`Param`**

If this is true it defaults to the hardcoded market in contract

**`Param`**

Address provider for specific market

**`Param`**

Amount of tokens to be payed back (uint.max for full debt)

**`Param`**

Where are we pulling the payback aTokens from

**`Param`**

Type of borrow debt [Stable: 1, Variable: 2]

**`Param`**

address of the aToken to be pulled

**`Param`**

The id of the underlying asset to be repaid

#### Defined in

[src/actions/aaveV3/AaveV3ATokenPaybackAction.ts:22](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/aaveV3/AaveV3ATokenPaybackAction.ts#L22)

___

### args

• **args**: `any`[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[args](ActionWithL2.md#args)

#### Defined in

[src/Action.ts:18](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L18)

___

### contractAddress

• **contractAddress**: `string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[contractAddress](ActionWithL2.md#contractaddress)

#### Defined in

[src/Action.ts:15](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L15)

___

### mappableArgs

• **mappableArgs**: `any`[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[mappableArgs](ActionWithL2.md#mappableargs)

#### Defined in

[src/Action.ts:19](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L19)

___

### name

• **name**: `string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[name](ActionWithL2.md#name)

#### Defined in

[src/Action.ts:17](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L17)

___

### paramTypes

• **paramTypes**: (`string` \| `any`[])[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[paramTypes](ActionWithL2.md#paramtypes)

#### Defined in

[src/Action.ts:16](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L16)

## Methods

### \_encodeForCall

▸ `Private` **_encodeForCall**(): `string`[]

Encode arguments for calling the action directly

#### Returns

`string`[]

bytes-encoded args

#### Inherited from

[ActionWithL2](ActionWithL2.md).[_encodeForCall](ActionWithL2.md#_encodeforcall)

#### Defined in

[src/Action.ts:117](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L117)

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

[ActionWithL2](ActionWithL2.md).[_formatType](ActionWithL2.md#_formattype)

#### Defined in

[src/Action.ts:107](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L107)

___

### \_getArgumentMapping

▸ `Private` **_getArgumentMapping**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[_getArgumentMapping](ActionWithL2.md#_getargumentmapping)

#### Defined in

[src/Action.ts:70](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L70)

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

[ActionWithL2](ActionWithL2.md).[_getArgumentMappingWithSlots](ActionWithL2.md#_getargumentmappingwithslots)

#### Defined in

[src/Action.ts:49](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L49)

___

### \_getPlaceholderForType

▸ `Private` **_getPlaceholderForType**(`type`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[_getPlaceholderForType](ActionWithL2.md#_getplaceholderfortype)

#### Defined in

[src/Action.ts:84](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L84)

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

[ActionWithL2](ActionWithL2.md).[_replaceWithPlaceholders](ActionWithL2.md#_replacewithplaceholders)

#### Defined in

[src/Action.ts:95](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L95)

___

### addressToBytes20

▸ **addressToBytes20**(`address`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[addressToBytes20](ActionWithL2.md#addresstobytes20)

#### Defined in

[src/ActionWithL2.ts:26](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/ActionWithL2.ts#L26)

___

### boolToBytes1

▸ **boolToBytes1**(`bool`): ``"01"`` \| ``"00"``

#### Parameters

| Name | Type |
| :------ | :------ |
| `bool` | `boolean` |

#### Returns

``"01"`` \| ``"00"``

#### Inherited from

[ActionWithL2](ActionWithL2.md).[boolToBytes1](ActionWithL2.md#booltobytes1)

#### Defined in

[src/ActionWithL2.ts:28](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/ActionWithL2.ts#L28)

___

### encodeForDsProxyCall

▸ **encodeForDsProxyCall**(): (`string` \| `string`[])[]

Encode arguments for calling the action via DsProxy

#### Returns

(`string` \| `string`[])[]

`address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[encodeForDsProxyCall](ActionWithL2.md#encodefordsproxycall)

#### Defined in

[src/Action.ts:135](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L135)

___

### encodeForL2DsProxyCall

▸ **encodeForL2DsProxyCall**(): `string`

Encode arguments for calling the action via DsProxy

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[encodeForL2DsProxyCall](ActionWithL2.md#encodeforl2dsproxycall)

#### Defined in

[src/ActionWithL2.ts:15](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/ActionWithL2.ts#L15)

___

### encodeForL2Recipe

▸ **encodeForL2Recipe**(): `string`

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[encodeForL2Recipe](ActionWithL2.md#encodeforl2recipe)

#### Defined in

[src/ActionWithL2.ts:17](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/ActionWithL2.ts#L17)

___

### encodeForRecipe

▸ **encodeForRecipe**(): (`string` \| `string`[] \| `number`[])[]

Encodes action for Recipe call

#### Returns

(`string` \| `string`[] \| `number`[])[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[encodeForRecipe](ActionWithL2.md#encodeforrecipe)

#### Defined in

[src/Action.ts:150](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L150)

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

[ActionWithL2](ActionWithL2.md).[encodeForStrategy](ActionWithL2.md#encodeforstrategy)

#### Defined in

[src/Action.ts:159](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L159)

___

### encodeInputs

▸ **encodeInputs**(): `string`

#### Returns

`string`

#### Overrides

[ActionWithL2](ActionWithL2.md).[encodeInputs](ActionWithL2.md#encodeinputs)

#### Defined in

[src/actions/aaveV3/AaveV3ATokenPaybackAction.ts:43](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/aaveV3/AaveV3ATokenPaybackAction.ts#L43)

___

### getAccessList

▸ **getAccessList**(): [`AccessListItem`](../modules.md#accesslistitem)[]

Access list for single action

#### Returns

[`AccessListItem`](../modules.md#accesslistitem)[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[getAccessList](ActionWithL2.md#getaccesslist)

#### Defined in

[src/Action.ts:185](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L185)

___

### getAssetsToApprove

▸ **getAssetsToApprove**(): `Promise`<{ `asset`: `string` ; `owner`: `any`  }[]\>

Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

#### Returns

`Promise`<{ `asset`: `string` ; `owner`: `any`  }[]\>

#### Overrides

[ActionWithL2](ActionWithL2.md).[getAssetsToApprove](ActionWithL2.md#getassetstoapprove)

#### Defined in

[src/actions/aaveV3/AaveV3ATokenPaybackAction.ts:38](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/aaveV3/AaveV3ATokenPaybackAction.ts#L38)

___

### getEthValue

▸ **getEthValue**(): `Promise`<`string`\>

ETH value to be sent with transaction

#### Returns

`Promise`<`string`\>

ETH value in wei

#### Inherited from

[ActionWithL2](ActionWithL2.md).[getEthValue](ActionWithL2.md#getethvalue)

#### Defined in

[src/ActionWithL2.ts:30](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/ActionWithL2.ts#L30)

___

### getId

▸ `Private` **getId**(): `string`

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[getId](ActionWithL2.md#getid)

#### Defined in

[src/Action.ts:42](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L42)

___

### numberToBytes1

▸ **numberToBytes1**(`number`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[numberToBytes1](ActionWithL2.md#numbertobytes1)

#### Defined in

[src/ActionWithL2.ts:37](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/ActionWithL2.ts#L37)

___

### numberToBytes2

▸ **numberToBytes2**(`number`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[numberToBytes2](ActionWithL2.md#numbertobytes2)

#### Defined in

[src/ActionWithL2.ts:32](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/ActionWithL2.ts#L32)

___

### numberToBytes32

▸ **numberToBytes32**(`number`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `number` |

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[numberToBytes32](ActionWithL2.md#numbertobytes32)

#### Defined in

[src/ActionWithL2.ts:42](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/ActionWithL2.ts#L42)
