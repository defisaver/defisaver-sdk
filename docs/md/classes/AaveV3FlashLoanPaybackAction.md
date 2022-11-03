[@defisaver/sdk](../README.md) / [Exports](../modules.md) / AaveV3FlashLoanPaybackAction

# Class: AaveV3FlashLoanPaybackAction

Pays back a single flashloan from Aave v3

## Hierarchy

- [`SendTokenAction`](SendTokenAction.md)

  ↳ **`AaveV3FlashLoanPaybackAction`**

## Table of contents

### Constructors

- [constructor](AaveV3FlashLoanPaybackAction.md#constructor)

### Properties

- [args](AaveV3FlashLoanPaybackAction.md#args)
- [contractAddress](AaveV3FlashLoanPaybackAction.md#contractaddress)
- [mappableArgs](AaveV3FlashLoanPaybackAction.md#mappableargs)
- [name](AaveV3FlashLoanPaybackAction.md#name)
- [paramTypes](AaveV3FlashLoanPaybackAction.md#paramtypes)

### Methods

- [\_encodeForCall](AaveV3FlashLoanPaybackAction.md#_encodeforcall)
- [\_formatType](AaveV3FlashLoanPaybackAction.md#_formattype)
- [\_getArgumentMapping](AaveV3FlashLoanPaybackAction.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](AaveV3FlashLoanPaybackAction.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](AaveV3FlashLoanPaybackAction.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](AaveV3FlashLoanPaybackAction.md#_replacewithplaceholders)
- [encodeForDsProxyCall](AaveV3FlashLoanPaybackAction.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](AaveV3FlashLoanPaybackAction.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](AaveV3FlashLoanPaybackAction.md#encodeforl2recipe)
- [encodeForRecipe](AaveV3FlashLoanPaybackAction.md#encodeforrecipe)
- [encodeForStrategy](AaveV3FlashLoanPaybackAction.md#encodeforstrategy)
- [getAccessList](AaveV3FlashLoanPaybackAction.md#getaccesslist)
- [getAssetsToApprove](AaveV3FlashLoanPaybackAction.md#getassetstoapprove)
- [getEthValue](AaveV3FlashLoanPaybackAction.md#getethvalue)
- [getId](AaveV3FlashLoanPaybackAction.md#getid)

## Constructors

### constructor

• **new AaveV3FlashLoanPaybackAction**(`loanAmount`, `tokenAddr`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `loanAmount` | `string` | {string} |
| `tokenAddr` | `string` | {EthAddress} |

#### Overrides

[SendTokenAction](SendTokenAction.md).[constructor](SendTokenAction.md#constructor)

#### Defined in

[src/actions/flashloan/AaveV3FlashLoanPaybackAction.ts:15](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/actions/flashloan/AaveV3FlashLoanPaybackAction.ts#L15)

## Properties

### args

• **args**: `any`[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[args](SendTokenAction.md#args)

#### Defined in

[src/Action.ts:18](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L18)

___

### contractAddress

• **contractAddress**: `string`

#### Inherited from

[SendTokenAction](SendTokenAction.md).[contractAddress](SendTokenAction.md#contractaddress)

#### Defined in

[src/Action.ts:15](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L15)

___

### mappableArgs

• **mappableArgs**: `any`[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[mappableArgs](SendTokenAction.md#mappableargs)

#### Defined in

[src/Action.ts:19](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L19)

___

### name

• **name**: `string`

#### Inherited from

[SendTokenAction](SendTokenAction.md).[name](SendTokenAction.md#name)

#### Defined in

[src/Action.ts:17](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L17)

___

### paramTypes

• **paramTypes**: (`string` \| `any`[])[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[paramTypes](SendTokenAction.md#paramtypes)

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

[SendTokenAction](SendTokenAction.md).[_encodeForCall](SendTokenAction.md#_encodeforcall)

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

[SendTokenAction](SendTokenAction.md).[_formatType](SendTokenAction.md#_formattype)

#### Defined in

[src/Action.ts:110](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L110)

___

### \_getArgumentMapping

▸ `Private` **_getArgumentMapping**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[_getArgumentMapping](SendTokenAction.md#_getargumentmapping)

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

[SendTokenAction](SendTokenAction.md).[_getArgumentMappingWithSlots](SendTokenAction.md#_getargumentmappingwithslots)

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

[SendTokenAction](SendTokenAction.md).[_getPlaceholderForType](SendTokenAction.md#_getplaceholderfortype)

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

[SendTokenAction](SendTokenAction.md).[_replaceWithPlaceholders](SendTokenAction.md#_replacewithplaceholders)

#### Defined in

[src/Action.ts:98](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L98)

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

[src/Action.ts:138](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L138)

___

### encodeForL2DsProxyCall

▸ **encodeForL2DsProxyCall**(): `string`

#### Returns

`string`

#### Inherited from

[SendTokenAction](SendTokenAction.md).[encodeForL2DsProxyCall](SendTokenAction.md#encodeforl2dsproxycall)

#### Defined in

[src/Action.ts:126](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L126)

___

### encodeForL2Recipe

▸ **encodeForL2Recipe**(): `string`

#### Returns

`string`

#### Inherited from

[SendTokenAction](SendTokenAction.md).[encodeForL2Recipe](SendTokenAction.md#encodeforl2recipe)

#### Defined in

[src/Action.ts:130](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L130)

___

### encodeForRecipe

▸ **encodeForRecipe**(): (`string` \| `string`[] \| `number`[])[]

Encodes action for Recipe call

#### Returns

(`string` \| `string`[] \| `number`[])[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[encodeForRecipe](SendTokenAction.md#encodeforrecipe)

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

[SendTokenAction](SendTokenAction.md).[encodeForStrategy](SendTokenAction.md#encodeforstrategy)

#### Defined in

[src/Action.ts:163](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L163)

___

### getAccessList

▸ **getAccessList**(): `AccessListItem`[]

Access list for single action

#### Returns

`AccessListItem`[]

#### Inherited from

[SendTokenAction](SendTokenAction.md).[getAccessList](SendTokenAction.md#getaccesslist)

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

[SendTokenAction](SendTokenAction.md).[getAssetsToApprove](SendTokenAction.md#getassetstoapprove)

#### Defined in

[src/Action.ts:175](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L175)

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

[src/Action.ts:183](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L183)

___

### getId

▸ `Private` **getId**(): `string`

#### Returns

`string`

#### Inherited from

[SendTokenAction](SendTokenAction.md).[getId](SendTokenAction.md#getid)

#### Defined in

[src/Action.ts:43](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L43)
