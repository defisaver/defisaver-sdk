[@defisaver/sdk](../README.md) / [Exports](../modules.md) / Strategy

# Class: Strategy

## Table of contents

### Constructors

- [constructor](Strategy.md#constructor)

### Properties

- [actions](Strategy.md#actions)
- [name](Strategy.md#name)
- [numSubSlots](Strategy.md#numsubslots)
- [subSlots](Strategy.md#subslots)
- [triggers](Strategy.md#triggers)

### Methods

- [addAction](Strategy.md#addaction)
- [addSubSlot](Strategy.md#addsubslot)
- [addTrigger](Strategy.md#addtrigger)
- [encodeForDsProxyCall](Strategy.md#encodefordsproxycall)
- [getSubSlots](Strategy.md#getsubslots)
- [print](Strategy.md#print)

## Constructors

### constructor

• **new Strategy**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[src/Strategy.ts:15](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L15)

## Properties

### actions

• **actions**: [`Action`](Action.md)[]

#### Defined in

[src/Strategy.ts:11](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L11)

___

### name

• **name**: `string`

#### Defined in

[src/Strategy.ts:9](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L9)

___

### numSubSlots

• **numSubSlots**: `number`

#### Defined in

[src/Strategy.ts:13](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L13)

___

### subSlots

• **subSlots**: `any`

#### Defined in

[src/Strategy.ts:10](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L10)

___

### triggers

• **triggers**: [`Action`](Action.md)[]

#### Defined in

[src/Strategy.ts:12](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L12)

## Methods

### addAction

▸ **addAction**(`newAction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newAction` | [`Action`](Action.md) |

#### Returns

`void`

#### Defined in

[src/Strategy.ts:32](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L32)

___

### addSubSlot

▸ **addSubSlot**(`name`, `type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type` | `string` |

#### Returns

`void`

#### Defined in

[src/Strategy.ts:23](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L23)

___

### addTrigger

▸ **addTrigger**(`newTrigger`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newTrigger` | [`Action`](Action.md) |

#### Returns

`void`

#### Defined in

[src/Strategy.ts:28](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L28)

___

### encodeForDsProxyCall

▸ **encodeForDsProxyCall**(): (`string` \| `string`[] \| `number`[][])[]

#### Returns

(`string` \| `string`[] \| `number`[][])[]

#### Defined in

[src/Strategy.ts:46](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L46)

___

### getSubSlots

▸ **getSubSlots**(): `any`

#### Returns

`any`

#### Defined in

[src/Strategy.ts:42](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L42)

___

### print

▸ **print**(): `void`

#### Returns

`void`

#### Defined in

[src/Strategy.ts:36](https://github.com/defisaver/defisaver-sdk/blob/4146181/src/Strategy.ts#L36)
