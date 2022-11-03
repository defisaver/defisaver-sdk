[@defisaver/sdk](../README.md) / [Exports](../modules.md) / AaveV2FlashLoanPaybackAction

# Class: AaveV2FlashLoanPaybackAction

Pays back a single flashloan from Aave v2

## Hierarchy

- [`SendTokenAction`](SendTokenAction.md)

  ↳ **`AaveV2FlashLoanPaybackAction`**

## Table of contents

### Constructors

- [constructor](AaveV2FlashLoanPaybackAction.md#constructor)

### Properties

- [args](AaveV2FlashLoanPaybackAction.md#args)
- [contractAddress](AaveV2FlashLoanPaybackAction.md#contractaddress)
- [mappableArgs](AaveV2FlashLoanPaybackAction.md#mappableargs)
- [name](AaveV2FlashLoanPaybackAction.md#name)
- [paramTypes](AaveV2FlashLoanPaybackAction.md#paramtypes)

### Methods

- [\_encodeForCall](AaveV2FlashLoanPaybackAction.md#_encodeforcall)
- [\_formatType](AaveV2FlashLoanPaybackAction.md#_formattype)
- [\_getArgumentMapping](AaveV2FlashLoanPaybackAction.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](AaveV2FlashLoanPaybackAction.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](AaveV2FlashLoanPaybackAction.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](AaveV2FlashLoanPaybackAction.md#_replacewithplaceholders)
- [encodeForDsProxyCall](AaveV2FlashLoanPaybackAction.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](AaveV2FlashLoanPaybackAction.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](AaveV2FlashLoanPaybackAction.md#encodeforl2recipe)
- [encodeForRecipe](AaveV2FlashLoanPaybackAction.md#encodeforrecipe)
- [encodeForStrategy](AaveV2FlashLoanPaybackAction.md#encodeforstrategy)
- [getAccessList](AaveV2FlashLoanPaybackAction.md#getaccesslist)
- [getAssetsToApprove](AaveV2FlashLoanPaybackAction.md#getassetstoapprove)
- [getEthValue](AaveV2FlashLoanPaybackAction.md#getethvalue)
- [getId](AaveV2FlashLoanPaybackAction.md#getid)

## Constructors

### constructor

• **new AaveV2FlashLoanPaybackAction**(`loanAmount`, `tokenAddr`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `loanAmount` | `string` |
| `tokenAddr` | `string` |

#### Overrides

[SendTokenAction](SendTokenAction.md).[constructor](SendTokenAction.md#constructor)

#### Defined in

[src/actions/flashloan/AaveV2FlashLoanPaybackAction.ts:15](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/flashloan/AaveV2FlashLoanPaybackAction.ts#L15)

## Properties

### args

• **args**: `any`[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[args](SendTokenAction.md#args)

#### Defined in

[src/Action.ts:18](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L18)

___

### contractAddress

• **contractAddress**: `string`

#### Inherited from

[SendTokenAction](SendTokenAction.md).[contractAddress](SendTokenAction.md#contractaddress)

#### Defined in

[src/Action.ts:15](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L15)

___

### mappableArgs

• **mappableArgs**: `any`[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[mappableArgs](SendTokenAction.md#mappableargs)

#### Defined in

[src/Action.ts:19](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L19)

___

### name

• **name**: `string`

#### Inherited from

[SendTokenAction](SendTokenAction.md).[name](SendTokenAction.md#name)

#### Defined in

[src/Action.ts:17](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L17)

___

### paramTypes

• **paramTypes**: (`string` \| `any`[])[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[paramTypes](SendTokenAction.md#paramtypes)

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

[SendTokenAction](SendTokenAction.md).[_encodeForCall](SendTokenAction.md#_encodeforcall)

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

[SendTokenAction](SendTokenAction.md).[_formatType](SendTokenAction.md#_formattype)

#### Defined in

[src/Action.ts:107](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L107)

___

### \_getArgumentMapping

▸ `Private` **_getArgumentMapping**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[_getArgumentMapping](SendTokenAction.md#_getargumentmapping)

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

[SendTokenAction](SendTokenAction.md).[_getArgumentMappingWithSlots](SendTokenAction.md#_getargumentmappingwithslots)

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

[SendTokenAction](SendTokenAction.md).[_getPlaceholderForType](SendTokenAction.md#_getplaceholderfortype)

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

[SendTokenAction](SendTokenAction.md).[_replaceWithPlaceholders](SendTokenAction.md#_replacewithplaceholders)

#### Defined in

[src/Action.ts:95](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L95)

___

### encodeForDsProxyCall

▸ **encodeForDsProxyCall**(): (`string` \| `string`[])[]

Encode arguments for calling the action via DsProxy

#### Returns

(`string` \| `string`[])[]

`address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`

#### Inherited from

[SendTokenAction](SendTokenAction.md).[encodeForDsProxyCall](SendTokenAction.md#encodefordsproxycall)

#### Defined in

[src/Action.ts:135](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L135)

___

### encodeForL2DsProxyCall

▸ **encodeForL2DsProxyCall**(): `string`

#### Returns

`string`

#### Inherited from

[SendTokenAction](SendTokenAction.md).[encodeForL2DsProxyCall](SendTokenAction.md#encodeforl2dsproxycall)

#### Defined in

[src/Action.ts:123](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L123)

___

### encodeForL2Recipe

▸ **encodeForL2Recipe**(): `string`

#### Returns

`string`

#### Inherited from

[SendTokenAction](SendTokenAction.md).[encodeForL2Recipe](SendTokenAction.md#encodeforl2recipe)

#### Defined in

[src/Action.ts:127](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L127)

___

### encodeForRecipe

▸ **encodeForRecipe**(): (`string` \| `string`[] \| `number`[])[]

Encodes action for Recipe call

#### Returns

(`string` \| `string`[] \| `number`[])[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[encodeForRecipe](SendTokenAction.md#encodeforrecipe)

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

[SendTokenAction](SendTokenAction.md).[encodeForStrategy](SendTokenAction.md#encodeforstrategy)

#### Defined in

[src/Action.ts:159](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L159)

___

### getAccessList

▸ **getAccessList**(): [`AccessListItem`](../modules.md#accesslistitem)[]

Access list for single action

#### Returns

[`AccessListItem`](../modules.md#accesslistitem)[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[getAccessList](SendTokenAction.md#getaccesslist)

#### Defined in

[src/Action.ts:185](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L185)

___

### getAssetsToApprove

▸ **getAssetsToApprove**(): `Promise`<{ `[key: string]`: `any`; `asset?`: `string` ; `owner?`: `string`  }[]\>

Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

#### Returns

`Promise`<{ `[key: string]`: `any`; `asset?`: `string` ; `owner?`: `string`  }[]\>

#### Inherited from

[SendTokenAction](SendTokenAction.md).[getAssetsToApprove](SendTokenAction.md#getassetstoapprove)

#### Defined in

[src/Action.ts:170](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L170)

___

### getEthValue

▸ **getEthValue**(): `Promise`<`string`\>

ETH value to be sent with transaction

#### Returns

`Promise`<`string`\>

ETH value in wei

#### Inherited from

[SendTokenAction](SendTokenAction.md).[getEthValue](SendTokenAction.md#getethvalue)

#### Defined in

[src/Action.ts:178](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L178)

___

### getId

▸ `Private` **getId**(): `string`

#### Returns

`string`

#### Inherited from

[SendTokenAction](SendTokenAction.md).[getId](SendTokenAction.md#getid)

#### Defined in

[src/Action.ts:42](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L42)
