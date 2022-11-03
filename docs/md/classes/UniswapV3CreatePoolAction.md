[@defisaver/sdk](../README.md) / [Exports](../modules.md) / UniswapV3CreatePoolAction

# Class: UniswapV3CreatePoolAction

Create a uniswap v3 pool

## Hierarchy

- [`ActionWithL2`](ActionWithL2.md)

  ↳ **`UniswapV3CreatePoolAction`**

## Table of contents

### Constructors

- [constructor](UniswapV3CreatePoolAction.md#constructor)

### Properties

- [args](UniswapV3CreatePoolAction.md#args)
- [contractAddress](UniswapV3CreatePoolAction.md#contractaddress)
- [mappableArgs](UniswapV3CreatePoolAction.md#mappableargs)
- [name](UniswapV3CreatePoolAction.md#name)
- [paramTypes](UniswapV3CreatePoolAction.md#paramtypes)

### Methods

- [\_encodeForCall](UniswapV3CreatePoolAction.md#_encodeforcall)
- [\_formatType](UniswapV3CreatePoolAction.md#_formattype)
- [\_getArgumentMapping](UniswapV3CreatePoolAction.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](UniswapV3CreatePoolAction.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](UniswapV3CreatePoolAction.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](UniswapV3CreatePoolAction.md#_replacewithplaceholders)
- [addressToBytes20](UniswapV3CreatePoolAction.md#addresstobytes20)
- [boolToBytes1](UniswapV3CreatePoolAction.md#booltobytes1)
- [encodeForDsProxyCall](UniswapV3CreatePoolAction.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](UniswapV3CreatePoolAction.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](UniswapV3CreatePoolAction.md#encodeforl2recipe)
- [encodeForRecipe](UniswapV3CreatePoolAction.md#encodeforrecipe)
- [encodeForStrategy](UniswapV3CreatePoolAction.md#encodeforstrategy)
- [encodeInputs](UniswapV3CreatePoolAction.md#encodeinputs)
- [getAccessList](UniswapV3CreatePoolAction.md#getaccesslist)
- [getAssetsToApprove](UniswapV3CreatePoolAction.md#getassetstoapprove)
- [getEthValue](UniswapV3CreatePoolAction.md#getethvalue)
- [getId](UniswapV3CreatePoolAction.md#getid)
- [numberToBytes1](UniswapV3CreatePoolAction.md#numbertobytes1)
- [numberToBytes2](UniswapV3CreatePoolAction.md#numbertobytes2)
- [numberToBytes32](UniswapV3CreatePoolAction.md#numbertobytes32)

## Constructors

### constructor

• **new UniswapV3CreatePoolAction**(`token0`, `token1`, `fee`, `tickLower`, `tickUpper`, `amount0Desired`, `amount1Desired`, `amount0Min`, `amount1Min`, `recipient`, `deadline`, `from`, `sqrtPriceX96`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token0` | `string` |
| `token1` | `string` |
| `fee` | `string` |
| `tickLower` | `string` |
| `tickUpper` | `string` |
| `amount0Desired` | `string` |
| `amount1Desired` | `string` |
| `amount0Min` | `string` |
| `amount1Min` | `string` |
| `recipient` | `string` |
| `deadline` | `string` |
| `from` | `string` |
| `sqrtPriceX96` | `string` |

#### Overrides

[ActionWithL2](ActionWithL2.md).[constructor](ActionWithL2.md#constructor)

#### Defined in

[src/actions/uniswapV3/UniswapV3CreatePoolAction.ts:28](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/actions/uniswapV3/UniswapV3CreatePoolAction.ts#L28)

## Properties

### args

• **args**: `any`[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[args](ActionWithL2.md#args)

#### Defined in

[src/Action.ts:18](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L18)

___

### contractAddress

• **contractAddress**: `string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[contractAddress](ActionWithL2.md#contractaddress)

#### Defined in

[src/Action.ts:15](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L15)

___

### mappableArgs

• **mappableArgs**: `any`[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[mappableArgs](ActionWithL2.md#mappableargs)

#### Defined in

[src/Action.ts:19](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L19)

___

### name

• **name**: `string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[name](ActionWithL2.md#name)

#### Defined in

[src/Action.ts:17](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L17)

___

### paramTypes

• **paramTypes**: (`string` \| `any`[])[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[paramTypes](ActionWithL2.md#paramtypes)

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

[ActionWithL2](ActionWithL2.md).[_encodeForCall](ActionWithL2.md#_encodeforcall)

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

[ActionWithL2](ActionWithL2.md).[_formatType](ActionWithL2.md#_formattype)

#### Defined in

[src/Action.ts:110](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L110)

___

### \_getArgumentMapping

▸ `Private` **_getArgumentMapping**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[_getArgumentMapping](ActionWithL2.md#_getargumentmapping)

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

[ActionWithL2](ActionWithL2.md).[_getArgumentMappingWithSlots](ActionWithL2.md#_getargumentmappingwithslots)

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

[ActionWithL2](ActionWithL2.md).[_getPlaceholderForType](ActionWithL2.md#_getplaceholderfortype)

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

[ActionWithL2](ActionWithL2.md).[_replaceWithPlaceholders](ActionWithL2.md#_replacewithplaceholders)

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

#### Inherited from

[ActionWithL2](ActionWithL2.md).[addressToBytes20](ActionWithL2.md#addresstobytes20)

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

#### Inherited from

[ActionWithL2](ActionWithL2.md).[boolToBytes1](ActionWithL2.md#booltobytes1)

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

[ActionWithL2](ActionWithL2.md).[encodeForDsProxyCall](ActionWithL2.md#encodefordsproxycall)

#### Defined in

[src/Action.ts:138](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L138)

___

### encodeForL2DsProxyCall

▸ **encodeForL2DsProxyCall**(): `string`

Encode arguments for calling the action via DsProxy

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[encodeForL2DsProxyCall](ActionWithL2.md#encodeforl2dsproxycall)

#### Defined in

[src/ActionWithL2.ts:16](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L16)

___

### encodeForL2Recipe

▸ **encodeForL2Recipe**(): `string`

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[encodeForL2Recipe](ActionWithL2.md#encodeforl2recipe)

#### Defined in

[src/ActionWithL2.ts:18](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L18)

___

### encodeForRecipe

▸ **encodeForRecipe**(): (`string` \| `string`[] \| `number`[])[]

Encodes action for Recipe call

#### Returns

(`string` \| `string`[] \| `number`[])[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[encodeForRecipe](ActionWithL2.md#encodeforrecipe)

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

[ActionWithL2](ActionWithL2.md).[encodeForStrategy](ActionWithL2.md#encodeforstrategy)

#### Defined in

[src/Action.ts:163](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L163)

___

### encodeInputs

▸ **encodeInputs**(): `string`

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[encodeInputs](ActionWithL2.md#encodeinputs)

#### Defined in

[src/ActionWithL2.ts:20](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L20)

___

### getAccessList

▸ **getAccessList**(): `AccessListItem`[]

Access list for single action

#### Returns

`AccessListItem`[]

#### Inherited from

[ActionWithL2](ActionWithL2.md).[getAccessList](ActionWithL2.md#getaccesslist)

#### Defined in

[src/Action.ts:191](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Action.ts#L191)

___

### getAssetsToApprove

▸ **getAssetsToApprove**(): `Promise`<{ `asset`: `any` ; `owner`: `any` ; `specialApproveLabel`: `string` = 'uniswap v3' }[]\>

Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

#### Returns

`Promise`<{ `asset`: `any` ; `owner`: `any` ; `specialApproveLabel`: `string` = 'uniswap v3' }[]\>

#### Overrides

[ActionWithL2](ActionWithL2.md).[getAssetsToApprove](ActionWithL2.md#getassetstoapprove)

#### Defined in

[src/actions/uniswapV3/UniswapV3CreatePoolAction.ts:57](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/actions/uniswapV3/UniswapV3CreatePoolAction.ts#L57)

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

[src/ActionWithL2.ts:31](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L31)

___

### getId

▸ `Private` **getId**(): `string`

#### Returns

`string`

#### Inherited from

[ActionWithL2](ActionWithL2.md).[getId](ActionWithL2.md#getid)

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

#### Inherited from

[ActionWithL2](ActionWithL2.md).[numberToBytes1](ActionWithL2.md#numbertobytes1)

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

#### Inherited from

[ActionWithL2](ActionWithL2.md).[numberToBytes2](ActionWithL2.md#numbertobytes2)

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

#### Inherited from

[ActionWithL2](ActionWithL2.md).[numberToBytes32](ActionWithL2.md#numbertobytes32)

#### Defined in

[src/ActionWithL2.ts:43](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/ActionWithL2.ts#L43)
