[@defisaver/sdk](../README.md) / [Exports](../modules.md) / ReflexerSupplyAction

# Class: ReflexerSupplyAction

ReflexerSupplyAction - Supply token to a Safe

## Hierarchy

- [`Action`](Action.md)

  ↳ **`ReflexerSupplyAction`**

## Table of contents

### Constructors

- [constructor](ReflexerSupplyAction.md#constructor)

### Properties

- [args](ReflexerSupplyAction.md#args)
- [contractAddress](ReflexerSupplyAction.md#contractaddress)
- [mappableArgs](ReflexerSupplyAction.md#mappableargs)
- [name](ReflexerSupplyAction.md#name)
- [paramTypes](ReflexerSupplyAction.md#paramtypes)

### Methods

- [\_encodeForCall](ReflexerSupplyAction.md#_encodeforcall)
- [\_formatType](ReflexerSupplyAction.md#_formattype)
- [\_getArgumentMapping](ReflexerSupplyAction.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](ReflexerSupplyAction.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](ReflexerSupplyAction.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](ReflexerSupplyAction.md#_replacewithplaceholders)
- [encodeForDsProxyCall](ReflexerSupplyAction.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](ReflexerSupplyAction.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](ReflexerSupplyAction.md#encodeforl2recipe)
- [encodeForRecipe](ReflexerSupplyAction.md#encodeforrecipe)
- [encodeForStrategy](ReflexerSupplyAction.md#encodeforstrategy)
- [getAccessList](ReflexerSupplyAction.md#getaccesslist)
- [getAssetsToApprove](ReflexerSupplyAction.md#getassetstoapprove)
- [getEthValue](ReflexerSupplyAction.md#getethvalue)
- [getId](ReflexerSupplyAction.md#getid)

## Constructors

### constructor

• **new ReflexerSupplyAction**(`safeId`, `amount`, `adapterAddr`, `from`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `safeId` | `string` | {SafeId} |
| `amount` | `string` | {string} |
| `adapterAddr` | `string` | {EthAddress} |
| `from` | `string` | {EthAddress} Tokens will be supplied from this address |

#### Overrides

[Action](Action.md).[constructor](Action.md#constructor)

#### Defined in

[src/actions/reflexer/ReflexerSupplyAction.ts:18](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/actions/reflexer/ReflexerSupplyAction.ts#L18)

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

[src/actions/reflexer/ReflexerSupplyAction.ts:22](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/actions/reflexer/ReflexerSupplyAction.ts#L22)

___

### getEthValue

▸ **getEthValue**(): `Promise`<`any`\>

ETH value to be sent with transaction

#### Returns

`Promise`<`any`\>

ETH value in wei

#### Overrides

[Action](Action.md).[getEthValue](Action.md#getethvalue)

#### Defined in

[src/actions/reflexer/ReflexerSupplyAction.ts:28](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/actions/reflexer/ReflexerSupplyAction.ts#L28)

___

### getId

▸ `Private` **getId**(): `string`

#### Returns

`string`

#### Inherited from

[Action](Action.md).[getId](Action.md#getid)

#### Defined in

[src/Action.ts:43](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L43)
