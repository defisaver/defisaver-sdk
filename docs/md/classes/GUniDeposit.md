[@defisaver/sdk](../README.md) / [Exports](../modules.md) / GUniDeposit

# Class: GUniDeposit

Action that adds liquidity to G-UNI pool of interest (mints G-UNI LP tokens)

## Hierarchy

- [`Action`](Action.md)

  ↳ **`GUniDeposit`**

## Table of contents

### Constructors

- [constructor](GUniDeposit.md#constructor)

### Properties

- [args](GUniDeposit.md#args)
- [contractAddress](GUniDeposit.md#contractaddress)
- [mappableArgs](GUniDeposit.md#mappableargs)
- [name](GUniDeposit.md#name)
- [paramTypes](GUniDeposit.md#paramtypes)

### Methods

- [\_encodeForCall](GUniDeposit.md#_encodeforcall)
- [\_formatType](GUniDeposit.md#_formattype)
- [\_getArgumentMapping](GUniDeposit.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](GUniDeposit.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](GUniDeposit.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](GUniDeposit.md#_replacewithplaceholders)
- [encodeForDsProxyCall](GUniDeposit.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](GUniDeposit.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](GUniDeposit.md#encodeforl2recipe)
- [encodeForRecipe](GUniDeposit.md#encodeforrecipe)
- [encodeForStrategy](GUniDeposit.md#encodeforstrategy)
- [getAccessList](GUniDeposit.md#getaccesslist)
- [getAssetsToApprove](GUniDeposit.md#getassetstoapprove)
- [getEthValue](GUniDeposit.md#getethvalue)
- [getId](GUniDeposit.md#getid)

## Constructors

### constructor

• **new GUniDeposit**(`pool`, `token0`, `token1`, `amount0Max`, `amount1Max`, `amount0Min`, `amount1Min`, `to`, `from`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pool` | `string` | address of G-UNI pool to add liquidity to |
| `token0` | `string` | address of token0 |
| `token1` | `string` | address of token1 |
| `amount0Max` | `string` | the maximum amount of token0 msg.sender willing to input |
| `amount1Max` | `string` | the maximum amount of token1 msg.sender willing to input |
| `amount0Min` | `string` | the minimum amount of token0 actually input (slippage protection) |
| `amount1Min` | `string` | the minimum amount of token1 actually input (slippage protection) |
| `to` | `string` | account to receive minted G-UNI tokens |
| `from` | `string` | account from which to pull underlying tokens from |

#### Overrides

[Action](Action.md).[constructor](Action.md#constructor)

#### Defined in

[src/actions/guni/GUniDeposit.ts:22](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/guni/GUniDeposit.ts#L22)

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

▸ **getAssetsToApprove**(): `Promise`<{ `asset`: `any` ; `owner`: `any`  }[]\>

Assets requiring approval to be used by DsProxy
Approval is done from owner to DsProxy

#### Returns

`Promise`<{ `asset`: `any` ; `owner`: `any`  }[]\>

#### Overrides

[Action](Action.md).[getAssetsToApprove](Action.md#getassetstoapprove)

#### Defined in

[src/actions/guni/GUniDeposit.ts:38](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/guni/GUniDeposit.ts#L38)

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
