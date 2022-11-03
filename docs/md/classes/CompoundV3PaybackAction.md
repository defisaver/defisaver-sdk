[@defisaver/sdk](../README.md) / [Exports](../modules.md) / CompoundV3PaybackAction

# Class: CompoundV3PaybackAction

CompoundV3PaybackAction - Repays specified amount of base token

## Hierarchy

- [`Action`](Action.md)

  ↳ **`CompoundV3PaybackAction`**

## Table of contents

### Constructors

- [constructor](CompoundV3PaybackAction.md#constructor)

### Properties

- [args](CompoundV3PaybackAction.md#args)
- [contractAddress](CompoundV3PaybackAction.md#contractaddress)
- [mappableArgs](CompoundV3PaybackAction.md#mappableargs)
- [name](CompoundV3PaybackAction.md#name)
- [paramTypes](CompoundV3PaybackAction.md#paramtypes)
- [tokenForApproval](CompoundV3PaybackAction.md#tokenforapproval)

### Methods

- [\_encodeForCall](CompoundV3PaybackAction.md#_encodeforcall)
- [\_formatType](CompoundV3PaybackAction.md#_formattype)
- [\_getArgumentMapping](CompoundV3PaybackAction.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](CompoundV3PaybackAction.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](CompoundV3PaybackAction.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](CompoundV3PaybackAction.md#_replacewithplaceholders)
- [encodeForDsProxyCall](CompoundV3PaybackAction.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](CompoundV3PaybackAction.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](CompoundV3PaybackAction.md#encodeforl2recipe)
- [encodeForRecipe](CompoundV3PaybackAction.md#encodeforrecipe)
- [encodeForStrategy](CompoundV3PaybackAction.md#encodeforstrategy)
- [getAccessList](CompoundV3PaybackAction.md#getaccesslist)
- [getAssetsToApprove](CompoundV3PaybackAction.md#getassetstoapprove)
- [getEthValue](CompoundV3PaybackAction.md#getethvalue)
- [getId](CompoundV3PaybackAction.md#getid)

## Constructors

### constructor

• **new CompoundV3PaybackAction**(`market`, `amount`, `from`, `onBehalf`, `asset`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `market` | `string` | {EthAddress} Comet proxy address of the market |
| `amount` | `string` | {uint256} amount of base token to be paid back |
| `from` | `string` | {EthAddress} address from which funds are paid |
| `onBehalf` | `string` | {EthAddress} address for which the funds are paid back |
| `asset` | `string` | {EthAddress} address for which the funds are paid back |

#### Overrides

[Action](Action.md).[constructor](Action.md#constructor)

#### Defined in

[src/actions/compoundV3/CompoundV3PaybackAction.ts:23](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/actions/compoundV3/CompoundV3PaybackAction.ts#L23)

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

___

### tokenForApproval

• **tokenForApproval**: `string`

#### Defined in

[src/actions/compoundV3/CompoundV3PaybackAction.ts:14](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/actions/compoundV3/CompoundV3PaybackAction.ts#L14)

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

#### Returns

`string`

#### Inherited from

[Action](Action.md).[encodeForL2DsProxyCall](Action.md#encodeforl2dsproxycall)

#### Defined in

[src/Action.ts:126](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L126)

___

### encodeForL2Recipe

▸ **encodeForL2Recipe**(): `string`

#### Returns

`string`

#### Inherited from

[Action](Action.md).[encodeForL2Recipe](Action.md#encodeforl2recipe)

#### Defined in

[src/Action.ts:130](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L130)

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

▸ **getAssetsToApprove**(): `Promise`<{ `asset`: `string` ; `owner`: `any`  }[]\>

Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

#### Returns

`Promise`<{ `asset`: `string` ; `owner`: `any`  }[]\>

#### Overrides

[Action](Action.md).[getAssetsToApprove](Action.md#getassetstoapprove)

#### Defined in

[src/actions/compoundV3/CompoundV3PaybackAction.ts:42](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/actions/compoundV3/CompoundV3PaybackAction.ts#L42)

___

### getEthValue

▸ **getEthValue**(): `Promise`<`string`\>

ETH value to be sent with transaction

#### Returns

`Promise`<`string`\>

ETH value in wei

#### Inherited from

[Action](Action.md).[getEthValue](Action.md#getethvalue)

#### Defined in

[src/Action.ts:183](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L183)

___

### getId

▸ `Private` **getId**(): `string`

#### Returns

`string`

#### Inherited from

[Action](Action.md).[getId](Action.md#getid)

#### Defined in

[src/Action.ts:43](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L43)
