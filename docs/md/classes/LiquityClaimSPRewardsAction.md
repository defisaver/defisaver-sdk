[@defisaver/sdk](../README.md) / [Exports](../modules.md) / LiquityClaimSPRewardsAction

# Class: LiquityClaimSPRewardsAction

LiquityClaimSPRewardsAction - Claims rewards from LUSD Stability Pool

## Hierarchy

- [`LiquitySPWithdrawAction`](LiquitySPWithdrawAction.md)

  ↳ **`LiquityClaimSPRewardsAction`**

## Table of contents

### Constructors

- [constructor](LiquityClaimSPRewardsAction.md#constructor)

### Properties

- [args](LiquityClaimSPRewardsAction.md#args)
- [contractAddress](LiquityClaimSPRewardsAction.md#contractaddress)
- [mappableArgs](LiquityClaimSPRewardsAction.md#mappableargs)
- [name](LiquityClaimSPRewardsAction.md#name)
- [paramTypes](LiquityClaimSPRewardsAction.md#paramtypes)

### Methods

- [\_encodeForCall](LiquityClaimSPRewardsAction.md#_encodeforcall)
- [\_formatType](LiquityClaimSPRewardsAction.md#_formattype)
- [\_getArgumentMapping](LiquityClaimSPRewardsAction.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](LiquityClaimSPRewardsAction.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](LiquityClaimSPRewardsAction.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](LiquityClaimSPRewardsAction.md#_replacewithplaceholders)
- [encodeForDsProxyCall](LiquityClaimSPRewardsAction.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](LiquityClaimSPRewardsAction.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](LiquityClaimSPRewardsAction.md#encodeforl2recipe)
- [encodeForRecipe](LiquityClaimSPRewardsAction.md#encodeforrecipe)
- [encodeForStrategy](LiquityClaimSPRewardsAction.md#encodeforstrategy)
- [getAccessList](LiquityClaimSPRewardsAction.md#getaccesslist)
- [getAssetsToApprove](LiquityClaimSPRewardsAction.md#getassetstoapprove)
- [getEthValue](LiquityClaimSPRewardsAction.md#getethvalue)
- [getId](LiquityClaimSPRewardsAction.md#getid)

## Constructors

### constructor

• **new LiquityClaimSPRewardsAction**(`wethTo`, `lqtyTo`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wethTo` | `string` | Address that will receive ETH gains |
| `lqtyTo` | `string` | Address that will receive LQTY gains |

#### Overrides

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[constructor](LiquitySPWithdrawAction.md#constructor)

#### Defined in

[src/actions/liquity/LiquityClaimSPRewardsAction.ts:15](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/liquity/LiquityClaimSPRewardsAction.ts#L15)

## Properties

### args

• **args**: `any`[]

#### Inherited from

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[args](LiquitySPWithdrawAction.md#args)

#### Defined in

[src/Action.ts:18](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L18)

___

### contractAddress

• **contractAddress**: `string`

#### Inherited from

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[contractAddress](LiquitySPWithdrawAction.md#contractaddress)

#### Defined in

[src/Action.ts:15](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L15)

___

### mappableArgs

• **mappableArgs**: `any`[]

#### Inherited from

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[mappableArgs](LiquitySPWithdrawAction.md#mappableargs)

#### Defined in

[src/Action.ts:19](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L19)

___

### name

• **name**: `string`

#### Inherited from

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[name](LiquitySPWithdrawAction.md#name)

#### Defined in

[src/Action.ts:17](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L17)

___

### paramTypes

• **paramTypes**: (`string` \| `any`[])[]

#### Inherited from

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[paramTypes](LiquitySPWithdrawAction.md#paramtypes)

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

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[_encodeForCall](LiquitySPWithdrawAction.md#_encodeforcall)

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

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[_formatType](LiquitySPWithdrawAction.md#_formattype)

#### Defined in

[src/Action.ts:107](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L107)

___

### \_getArgumentMapping

▸ `Private` **_getArgumentMapping**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[_getArgumentMapping](LiquitySPWithdrawAction.md#_getargumentmapping)

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

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[_getArgumentMappingWithSlots](LiquitySPWithdrawAction.md#_getargumentmappingwithslots)

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

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[_getPlaceholderForType](LiquitySPWithdrawAction.md#_getplaceholderfortype)

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

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[_replaceWithPlaceholders](LiquitySPWithdrawAction.md#_replacewithplaceholders)

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

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[encodeForDsProxyCall](LiquitySPWithdrawAction.md#encodefordsproxycall)

#### Defined in

[src/Action.ts:135](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L135)

___

### encodeForL2DsProxyCall

▸ **encodeForL2DsProxyCall**(): `string`

#### Returns

`string`

#### Inherited from

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[encodeForL2DsProxyCall](LiquitySPWithdrawAction.md#encodeforl2dsproxycall)

#### Defined in

[src/Action.ts:123](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L123)

___

### encodeForL2Recipe

▸ **encodeForL2Recipe**(): `string`

#### Returns

`string`

#### Inherited from

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[encodeForL2Recipe](LiquitySPWithdrawAction.md#encodeforl2recipe)

#### Defined in

[src/Action.ts:127](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L127)

___

### encodeForRecipe

▸ **encodeForRecipe**(): (`string` \| `string`[] \| `number`[])[]

Encodes action for Recipe call

#### Returns

(`string` \| `string`[] \| `number`[])[]

#### Inherited from

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[encodeForRecipe](LiquitySPWithdrawAction.md#encodeforrecipe)

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

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[encodeForStrategy](LiquitySPWithdrawAction.md#encodeforstrategy)

#### Defined in

[src/Action.ts:159](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L159)

___

### getAccessList

▸ **getAccessList**(): [`AccessListItem`](../modules.md#accesslistitem)[]

Access list for single action

#### Returns

[`AccessListItem`](../modules.md#accesslistitem)[]

#### Inherited from

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[getAccessList](LiquitySPWithdrawAction.md#getaccesslist)

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

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[getAssetsToApprove](LiquitySPWithdrawAction.md#getassetstoapprove)

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

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[getEthValue](LiquitySPWithdrawAction.md#getethvalue)

#### Defined in

[src/Action.ts:178](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L178)

___

### getId

▸ `Private` **getId**(): `string`

#### Returns

`string`

#### Inherited from

[LiquitySPWithdrawAction](LiquitySPWithdrawAction.md).[getId](LiquitySPWithdrawAction.md#getid)

#### Defined in

[src/Action.ts:42](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L42)
