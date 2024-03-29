[@defisaver/sdk](../README.md) / [Exports](../modules.md) / Recipe

# Class: Recipe

Set of Actions to be performed sequentially in a single transaction

## Table of contents

### Constructors

- [constructor](Recipe.md#constructor)

### Properties

- [actions](Recipe.md#actions)
- [name](Recipe.md#name)
- [recipeExecutorAddress](Recipe.md#recipeexecutoraddress)

### Methods

- [\_encodeForCall](Recipe.md#_encodeforcall)
- [\_validateParamMappings](Recipe.md#_validateparammappings)
- [addAction](Recipe.md#addaction)
- [encodeForDsProxyCall](Recipe.md#encodefordsproxycall)
- [getAccessList](Recipe.md#getaccesslist)
- [getAssetsToApprove](Recipe.md#getassetstoapprove)
- [getEthValue](Recipe.md#getethvalue)

## Constructors

### constructor

• **new Recipe**(`name`, `actions?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `name` | `string` | `undefined` |
| `actions` | [`Action`](Action.md)[] | `[]` |

#### Defined in

[src/Recipe.ts:25](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Recipe.ts#L25)

## Properties

### actions

• **actions**: [`Action`](Action.md)[]

#### Defined in

[src/Recipe.ts:18](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Recipe.ts#L18)

___

### name

• **name**: `string`

#### Defined in

[src/Recipe.ts:17](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Recipe.ts#L17)

___

### recipeExecutorAddress

• **recipeExecutorAddress**: `string`

#### Defined in

[src/Recipe.ts:19](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Recipe.ts#L19)

## Methods

### \_encodeForCall

▸ `Private` **_encodeForCall**(): (`string` \| `any`[])[]

Encode arguments for calling the action set directly

#### Returns

(`string` \| `any`[])[]

#### Defined in

[src/Recipe.ts:49](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Recipe.ts#L49)

___

### \_validateParamMappings

▸ **_validateParamMappings**(): `void`

Logs parameter mapping in verbose format for validation. Used for testing in development.

#### Returns

`void`

#### Defined in

[src/Recipe.ts:76](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Recipe.ts#L76)

___

### addAction

▸ **addAction**(`action`): [`Recipe`](Recipe.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](Action.md) |

#### Returns

[`Recipe`](Recipe.md)

#### Defined in

[src/Recipe.ts:39](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Recipe.ts#L39)

___

### encodeForDsProxyCall

▸ **encodeForDsProxyCall**(): `string`[]

Encode arguments for calling the action set via DsProxy

#### Returns

`string`[]

`address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`

#### Defined in

[src/Recipe.ts:63](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Recipe.ts#L63)

___

### getAccessList

▸ **getAccessList**(): [`AccessListItem`](../modules.md#accesslistitem)[]

Generates an access list for the recipe

#### Returns

[`AccessListItem`](../modules.md#accesslistitem)[]

#### Defined in

[src/Recipe.ts:115](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Recipe.ts#L115)

___

### getAssetsToApprove

▸ **getAssetsToApprove**(): `Promise`<{ `asset`: `string` ; `owner`: `string`  }[]\>

Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

#### Returns

`Promise`<{ `asset`: `string` ; `owner`: `string`  }[]\>

#### Defined in

[src/Recipe.ts:88](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Recipe.ts#L88)

___

### getEthValue

▸ **getEthValue**(): `Promise`<`string`\>

ETH value to be sent with transaction

#### Returns

`Promise`<`string`\>

ETH value in wei

#### Defined in

[src/Recipe.ts:106](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Recipe.ts#L106)
