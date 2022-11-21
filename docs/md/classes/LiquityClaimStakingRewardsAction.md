[@defisaver/sdk](../README.md) / [Exports](../modules.md) / LiquityClaimStakingRewardsAction

# Class: LiquityClaimStakingRewardsAction

LiquityClaimStakingRewardsAction - Claims rewards from LQTYStaking

## Hierarchy

- [`LiquityUnstakeAction`](LiquityUnstakeAction.md)

  ↳ **`LiquityClaimStakingRewardsAction`**

## Table of contents

### Constructors

- [constructor](LiquityClaimStakingRewardsAction.md#constructor)

### Properties

- [args](LiquityClaimStakingRewardsAction.md#args)
- [contractAddress](LiquityClaimStakingRewardsAction.md#contractaddress)
- [mappableArgs](LiquityClaimStakingRewardsAction.md#mappableargs)
- [name](LiquityClaimStakingRewardsAction.md#name)
- [paramTypes](LiquityClaimStakingRewardsAction.md#paramtypes)

### Methods

- [\_encodeForCall](LiquityClaimStakingRewardsAction.md#_encodeforcall)
- [\_formatType](LiquityClaimStakingRewardsAction.md#_formattype)
- [\_getArgumentMapping](LiquityClaimStakingRewardsAction.md#_getargumentmapping)
- [\_getArgumentMappingWithSlots](LiquityClaimStakingRewardsAction.md#_getargumentmappingwithslots)
- [\_getPlaceholderForType](LiquityClaimStakingRewardsAction.md#_getplaceholderfortype)
- [\_replaceWithPlaceholders](LiquityClaimStakingRewardsAction.md#_replacewithplaceholders)
- [encodeForDsProxyCall](LiquityClaimStakingRewardsAction.md#encodefordsproxycall)
- [encodeForL2DsProxyCall](LiquityClaimStakingRewardsAction.md#encodeforl2dsproxycall)
- [encodeForL2Recipe](LiquityClaimStakingRewardsAction.md#encodeforl2recipe)
- [encodeForRecipe](LiquityClaimStakingRewardsAction.md#encodeforrecipe)
- [encodeForStrategy](LiquityClaimStakingRewardsAction.md#encodeforstrategy)
- [getAccessList](LiquityClaimStakingRewardsAction.md#getaccesslist)
- [getAssetsToApprove](LiquityClaimStakingRewardsAction.md#getassetstoapprove)
- [getEthValue](LiquityClaimStakingRewardsAction.md#getethvalue)
- [getId](LiquityClaimStakingRewardsAction.md#getid)

## Constructors

### constructor

• **new LiquityClaimStakingRewardsAction**(`wethTo`, `lusdTo`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `wethTo` | `string` | Address that will receive ETH gains |
| `lusdTo` | `string` | Address that will receive LUSD gains |

#### Overrides

[LiquityUnstakeAction](LiquityUnstakeAction.md).[constructor](LiquityUnstakeAction.md#constructor)

#### Defined in

[src/actions/liquity/LiquityClaimStakingRewardsAction.ts:15](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/actions/liquity/LiquityClaimStakingRewardsAction.ts#L15)

## Properties

### args

• **args**: `any`[]

#### Inherited from

[LiquityUnstakeAction](LiquityUnstakeAction.md).[args](LiquityUnstakeAction.md#args)

#### Defined in

[src/Action.ts:18](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L18)

___

### contractAddress

• **contractAddress**: `string`

#### Inherited from

[LiquityUnstakeAction](LiquityUnstakeAction.md).[contractAddress](LiquityUnstakeAction.md#contractaddress)

#### Defined in

[src/Action.ts:15](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L15)

___

### mappableArgs

• **mappableArgs**: `any`[]

#### Inherited from

[LiquityUnstakeAction](LiquityUnstakeAction.md).[mappableArgs](LiquityUnstakeAction.md#mappableargs)

#### Defined in

[src/Action.ts:19](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L19)

___

### name

• **name**: `string`

#### Inherited from

[LiquityUnstakeAction](LiquityUnstakeAction.md).[name](LiquityUnstakeAction.md#name)

#### Defined in

[src/Action.ts:17](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L17)

___

### paramTypes

• **paramTypes**: (`string` \| `any`[])[]

#### Inherited from

[LiquityUnstakeAction](LiquityUnstakeAction.md).[paramTypes](LiquityUnstakeAction.md#paramtypes)

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

[LiquityUnstakeAction](LiquityUnstakeAction.md).[_encodeForCall](LiquityUnstakeAction.md#_encodeforcall)

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

[LiquityUnstakeAction](LiquityUnstakeAction.md).[_formatType](LiquityUnstakeAction.md#_formattype)

#### Defined in

[src/Action.ts:107](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L107)

___

### \_getArgumentMapping

▸ `Private` **_getArgumentMapping**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[LiquityUnstakeAction](LiquityUnstakeAction.md).[_getArgumentMapping](LiquityUnstakeAction.md#_getargumentmapping)

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

[LiquityUnstakeAction](LiquityUnstakeAction.md).[_getArgumentMappingWithSlots](LiquityUnstakeAction.md#_getargumentmappingwithslots)

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

[LiquityUnstakeAction](LiquityUnstakeAction.md).[_getPlaceholderForType](LiquityUnstakeAction.md#_getplaceholderfortype)

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

[LiquityUnstakeAction](LiquityUnstakeAction.md).[_replaceWithPlaceholders](LiquityUnstakeAction.md#_replacewithplaceholders)

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

[LiquityUnstakeAction](LiquityUnstakeAction.md).[encodeForDsProxyCall](LiquityUnstakeAction.md#encodefordsproxycall)

#### Defined in

[src/Action.ts:135](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L135)

___

### encodeForL2DsProxyCall

▸ **encodeForL2DsProxyCall**(): `string`

#### Returns

`string`

#### Inherited from

[LiquityUnstakeAction](LiquityUnstakeAction.md).[encodeForL2DsProxyCall](LiquityUnstakeAction.md#encodeforl2dsproxycall)

#### Defined in

[src/Action.ts:123](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L123)

___

### encodeForL2Recipe

▸ **encodeForL2Recipe**(): `string`

#### Returns

`string`

#### Inherited from

[LiquityUnstakeAction](LiquityUnstakeAction.md).[encodeForL2Recipe](LiquityUnstakeAction.md#encodeforl2recipe)

#### Defined in

[src/Action.ts:127](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L127)

___

### encodeForRecipe

▸ **encodeForRecipe**(): (`string` \| `string`[] \| `number`[])[]

Encodes action for Recipe call

#### Returns

(`string` \| `string`[] \| `number`[])[]

#### Inherited from

[LiquityUnstakeAction](LiquityUnstakeAction.md).[encodeForRecipe](LiquityUnstakeAction.md#encodeforrecipe)

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

[LiquityUnstakeAction](LiquityUnstakeAction.md).[encodeForStrategy](LiquityUnstakeAction.md#encodeforstrategy)

#### Defined in

[src/Action.ts:159](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L159)

___

### getAccessList

▸ **getAccessList**(): [`AccessListItem`](../modules.md#accesslistitem)[]

Access list for single action

#### Returns

[`AccessListItem`](../modules.md#accesslistitem)[]

#### Inherited from

[LiquityUnstakeAction](LiquityUnstakeAction.md).[getAccessList](LiquityUnstakeAction.md#getaccesslist)

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

[LiquityUnstakeAction](LiquityUnstakeAction.md).[getAssetsToApprove](LiquityUnstakeAction.md#getassetstoapprove)

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

[LiquityUnstakeAction](LiquityUnstakeAction.md).[getEthValue](LiquityUnstakeAction.md#getethvalue)

#### Defined in

[src/Action.ts:178](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L178)

___

### getId

▸ `Private` **getId**(): `string`

#### Returns

`string`

#### Inherited from

[LiquityUnstakeAction](LiquityUnstakeAction.md).[getId](LiquityUnstakeAction.md#getid)

#### Defined in

[src/Action.ts:42](https://github.com/defisaver/defisaver-sdk/blob/7ebb702/src/Action.ts#L42)
