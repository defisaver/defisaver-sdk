[@defisaver/sdk](../README.md) / [Exports](../modules.md) / MakerRatioAction

# Class: MakerRatioAction

MakerRatioAction

## Hierarchy

- [`Action`](Action.md)

  ↳ **`MakerRatioAction`**

## Table of contents

### Constructors

- [constructor](MakerRatioAction.md#constructor)

### Properties

- [args](MakerRatioAction.md#args)
- [contractAddress](MakerRatioAction.md#contractaddress)
- [mappableArgs](MakerRatioAction.md#mappableargs)
- [name](MakerRatioAction.md#name)
- [paramTypes](MakerRatioAction.md#paramtypes)

### Methods

- [\_encodeForCall](MakerRatioAction.md#_encodeforcall)
- [\_formatType](MakerRatioAction.md#_formattype)
- [\_getArgumentMapping](MakerRatioAction.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](MakerRatioAction.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](MakerRatioAction.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](MakerRatioAction.md#_replacewithplaceholders)
- [encodeForDsProxyCall](MakerRatioAction.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](MakerRatioAction.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](MakerRatioAction.md#encodeforl2recipe)
- [encodeForRecipe](MakerRatioAction.md#encodeforrecipe)
- [encodeForStrategy](MakerRatioAction.md#encodeforstrategy)
- [getAccessList](MakerRatioAction.md#getaccesslist)
- [getAssetsToApprove](MakerRatioAction.md#getassetstoapprove)
- [getEthValue](MakerRatioAction.md#getethvalue)
- [getId](MakerRatioAction.md#getid)

## Constructors

### constructor

• **new MakerRatioAction**(`vaultId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `string` |

#### Overrides

[Action](Action.md).[constructor](Action.md#constructor)

#### Defined in

[src/actions/maker/MakerRatioAction.ts:14](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/maker/MakerRatioAction.ts#L14)

## Properties

### args

• **args**: `any`[]

#### Inherited from

[Action](Action.md).[args](Action.md#args)

#### Defined in

[src/Action.ts:18](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L18)

___

### contractAddress

• **contractAddress**: `string`

#### Inherited from

[Action](Action.md).[contractAddress](Action.md#contractaddress)

#### Defined in

[src/Action.ts:15](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L15)

___

### mappableArgs

• **mappableArgs**: `any`[]

#### Inherited from

[Action](Action.md).[mappableArgs](Action.md#mappableargs)

#### Defined in

[src/Action.ts:19](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L19)

___

### name

• **name**: `string`

#### Inherited from

[Action](Action.md).[name](Action.md#name)

#### Defined in

[src/Action.ts:17](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L17)

___

### paramTypes

• **paramTypes**: (`string` \| `any`[])[]

#### Inherited from

[Action](Action.md).[paramTypes](Action.md#paramtypes)

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

[Action](Action.md).[_encodeForCall](Action.md#_encodeforcall)

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

[Action](Action.md).[_formatType](Action.md#_formattype)

#### Defined in

[src/Action.ts:107](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L107)

___

### \_getArgumentMapping

▸ `Private` **_getArgumentMapping**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[Action](Action.md).[_getArgumentMapping](Action.md#_getargumentmapping)

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

[Action](Action.md).[_getArgumentMappingWithSlots](Action.md#_getargumentmappingwithslots)

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

[Action](Action.md).[_getPlaceholderForType](Action.md#_getplaceholderfortype)

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

[Action](Action.md).[_replaceWithPlaceholders](Action.md#_replacewithplaceholders)

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

[Action](Action.md).[encodeForDsProxyCall](Action.md#encodefordsproxycall)

#### Defined in

[src/Action.ts:135](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L135)

___

### encodeForL2DsProxyCall

▸ **encodeForL2DsProxyCall**(): `string`

#### Returns

`string`

#### Inherited from

[Action](Action.md).[encodeForL2DsProxyCall](Action.md#encodeforl2dsproxycall)

#### Defined in

[src/Action.ts:123](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L123)

___

### encodeForL2Recipe

▸ **encodeForL2Recipe**(): `string`

#### Returns

`string`

#### Inherited from

[Action](Action.md).[encodeForL2Recipe](Action.md#encodeforl2recipe)

#### Defined in

[src/Action.ts:127](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L127)

___

### encodeForRecipe

▸ **encodeForRecipe**(): (`string` \| `string`[] \| `number`[])[]

Encodes action for Recipe call

#### Returns

(`string` \| `string`[] \| `number`[])[]

#### Inherited from

[Action](Action.md).[encodeForRecipe](Action.md#encodeforrecipe)

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

[Action](Action.md).[encodeForStrategy](Action.md#encodeforstrategy)

#### Defined in

[src/Action.ts:159](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L159)

___

### getAccessList

▸ **getAccessList**(): [`AccessListItem`](../modules.md#accesslistitem)[]

Access list for single action

#### Returns

[`AccessListItem`](../modules.md#accesslistitem)[]

#### Inherited from

[Action](Action.md).[getAccessList](Action.md#getaccesslist)

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

[Action](Action.md).[getAssetsToApprove](Action.md#getassetstoapprove)

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

[Action](Action.md).[getEthValue](Action.md#getethvalue)

#### Defined in

[src/Action.ts:178](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L178)

___

### getId

▸ `Private` **getId**(): `string`

#### Returns

`string`

#### Inherited from

[Action](Action.md).[getId](Action.md#getid)

#### Defined in

[src/Action.ts:42](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L42)
