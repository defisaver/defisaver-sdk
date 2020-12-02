## Classes

<dl>
<dt><a href="#Action">Action</a> ℗</dt>
<dd><p>Single action that can be executed directly, or combined into a set (ie. supply a vault)</p>
</dd>
<dt><a href="#ActionSet">ActionSet</a></dt>
<dd><p>Set of Actions to be performed sequentially in a single transaction</p>
</dd>
</dl>

<a name="Action"></a>

## Action ℗
Single action that can be executed directly, or combined into a set (ie. supply a vault)

**Kind**: global class  
**Access**: private  

* [Action](#Action) ℗
    * [new Action(name, contractAddress, paramTypes, args)](#new_Action_new)
    * [.getId()](#Action+getId) ⇒ <code>String</code>
    * [.getArgumentMapping()](#Action+getArgumentMapping) ⇒ <code>Array.&lt;Number&gt;</code>
    * [.encodeForCall()](#Action+encodeForCall) ⇒ <code>Array.&lt;Array.&lt;String&gt;&gt;</code>
    * [.encodeForDsProxyCall()](#Action+encodeForDsProxyCall) ⇒ <code>Array.&lt;String&gt;</code>
    * [.encodeForActionSet()](#Action+encodeForActionSet) ⇒ <code>Array.&lt;String&gt;</code>

<a name="new_Action_new"></a>

### new Action(name, contractAddress, paramTypes, args)
**Params**

- name <code>String</code>
- contractAddress <code>String</code>
- paramTypes <code>Array.&lt;String&gt;</code>
- args <code>Array.&lt;\*&gt;</code>

<a name="Action+getId"></a>

### action.getId() ⇒ <code>String</code>
**Kind**: instance method of [<code>Action</code>](#Action)  
<a name="Action+getArgumentMapping"></a>

### action.getArgumentMapping() ⇒ <code>Array.&lt;Number&gt;</code>
**Kind**: instance method of [<code>Action</code>](#Action)  
<a name="Action+encodeForCall"></a>

### action.encodeForCall() ⇒ <code>Array.&lt;Array.&lt;String&gt;&gt;</code>
Encode arguments for calling the action directly

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>Array.&lt;Array.&lt;String&gt;&gt;</code> - bytes-encoded args  
<a name="Action+encodeForDsProxyCall"></a>

### action.encodeForDsProxyCall() ⇒ <code>Array.&lt;String&gt;</code>
Encode arguments for calling the action via DsProxy

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>Array.&lt;String&gt;</code> - `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`  
<a name="Action+encodeForActionSet"></a>

### action.encodeForActionSet() ⇒ <code>Array.&lt;String&gt;</code>
Encodes action for ActionSet call

**Kind**: instance method of [<code>Action</code>](#Action)  
<a name="ActionSet"></a>

## ActionSet
Set of Actions to be performed sequentially in a single transaction

**Kind**: global class  

* [ActionSet](#ActionSet)
    * [new ActionSet(name, actions)](#new_ActionSet_new)
    * [.addAction(action)](#ActionSet+addAction) ⇒ [<code>ActionSet</code>](#ActionSet)
    * [.encodeForCall()](#ActionSet+encodeForCall) ⇒ <code>Array.&lt;(String\|Array.&lt;\*&gt;)&gt;</code>
    * [.encodeForDsProxyCall()](#ActionSet+encodeForDsProxyCall) ⇒ <code>Array.&lt;String&gt;</code>
    * [._validateParamMappings()](#ActionSet+_validateParamMappings)

<a name="new_ActionSet_new"></a>

### new ActionSet(name, actions)
**Params**

- name <code>String</code>
- actions [<code>Array.&lt;Action&gt;</code>](#Action)

<a name="ActionSet+addAction"></a>

### actionSet.addAction(action) ⇒ [<code>ActionSet</code>](#ActionSet)
**Kind**: instance method of [<code>ActionSet</code>](#ActionSet)  
**Params**

- action [<code>Action</code>](#Action)

<a name="ActionSet+encodeForCall"></a>

### actionSet.encodeForCall() ⇒ <code>Array.&lt;(String\|Array.&lt;\*&gt;)&gt;</code>
Encode arguments for calling the action set directly
You most likely don't want to use this directly.
Instead, you probably want to use `encodeForDsProxyCall`

**Kind**: instance method of [<code>ActionSet</code>](#ActionSet)  
<a name="ActionSet+encodeForDsProxyCall"></a>

### actionSet.encodeForDsProxyCall() ⇒ <code>Array.&lt;String&gt;</code>
Encode arguments for calling the action set via DsProxy

**Kind**: instance method of [<code>ActionSet</code>](#ActionSet)  
**Returns**: <code>Array.&lt;String&gt;</code> - `address` & `data` to be passed on to DSProxy's `execute(address _target, bytes memory _data)`  
<a name="ActionSet+_validateParamMappings"></a>

### actionSet.\_validateParamMappings()
Logs parameter mapping in verbose format for validation. Used for testing in development.

**Kind**: instance method of [<code>ActionSet</code>](#ActionSet)  
