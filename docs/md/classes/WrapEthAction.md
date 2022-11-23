[@defisaver/sdk](../README.md) / [Exports](../modules.md) / WrapEthAction

# Class: WrapEthAction

Wraps a specified amount of ETH from the wallet to WETH on the recipe

## Hierarchy

- [`ActionWithL2`](ActionWithL2.md)

  ↳ **`WrapEthAction`**

## Table of contents

### Constructors

- [constructor](WrapEthAction.md#constructor)

### Properties

- [args](WrapEthAction.md#args)
- [contractAddress](WrapEthAction.md#contractaddress)
- [mappableArgs](WrapEthAction.md#mappableargs)
- [name](WrapEthAction.md#name)
- [paramTypes](WrapEthAction.md#paramtypes)

### Methods

- [\_encodeForCall](WrapEthAction.md#_encodeforcall)
- [\_formatType](WrapEthAction.md#_formattype)
- [\_getArgumentMapping](WrapEthAction.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](WrapEthAction.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](WrapEthAction.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](WrapEthAction.md#_replacewithplaceholders)
- [addressToBytes20](WrapEthAction.md#addresstobytes20)
- [boolToBytes1](WrapEthAction.md#booltobytes1)
- [encodeForDsProxyCall](WrapEthAction.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](WrapEthAction.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](WrapEthAction.md#encodeforl2recipe)
- [encodeForRecipe](WrapEthAction.md#encodeforrecipe)
- [encodeForStrategy](WrapEthAction.md#encodeforstrategy)
- [encodeInputs](WrapEthAction.md#encodeinputs)
- [getAccessList](WrapEthAction.md#getaccesslist)
- [getAssetsToApprove](WrapEthAction.md#getassetstoapprove)
- [getEthValue](WrapEthAction.md#getethvalue)
- [getId](WrapEthAction.md#getid)
- [numberToBytes1](WrapEthAction.md#numbertobytes1)
- [numberToBytes2](WrapEthAction.md#numbertobytes2)
- [numberToBytes32](WrapEthAction.md#numbertobytes32)

## Constructors

### constructor

• **new WrapEthAction**(`amount`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `string` | Wrap amount |

#### Overrides

[ActionWithL2](ActionWithL2.md).[constructor](ActionWithL2.md#constructor)

#### Defined in

[src/actions/basic/WrapEthAction.ts:14](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/basic/WrapEthAction.ts#L14)

## Properties

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

[src/actions/basic/WrapEthAction.ts:22](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/basic/WrapEthAction.ts#L22)

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

▸ **getAssetsToApprove**(): `Promise`<{ `[key: string]`: `any`; `asset?`: `string` ; `owner?`: `string`  }[]\>

Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

#### Returns

`Promise`<{ `[key: string]`: `any`; `asset?`: `string` ; `owner?`: `string`  }[]\>

#### Inherited from

[ActionWithL2](ActionWithL2.md).[getAssetsToApprove](ActionWithL2.md#getassetstoapprove)

#### Defined in

[src/Action.ts:170](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L170)

___

### getEthValue

▸ **getEthValue**(): `Promise`<`any`\>

ETH value to be sent with transaction

#### Returns

`Promise`<`any`\>

ETH value in wei

#### Overrides

[ActionWithL2](ActionWithL2.md).[getEthValue](ActionWithL2.md#getethvalue)

#### Defined in

[src/actions/basic/WrapEthAction.ts:18](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/basic/WrapEthAction.ts#L18)

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
