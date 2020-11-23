## Classes

<dl>
<dt><a href="#Action">Action</a> ℗</dt>
<dd></dd>
<dt><a href="#ActionSet">ActionSet</a> ℗</dt>
<dd></dd>
</dl>

<a name="Action"></a>

## Action ℗
**Kind**: global class  
**Access**: private  

* [Action](#Action) ℗
    * [new Action(name, contractAddress, paramTypes, args)](#new_Action_new)
    * [.getId()](#Action+getId) ⇒ <code>String</code>
    * [.getArgumentMapping()](#Action+getArgumentMapping) ⇒ <code>Array.&lt;Number&gt;</code>
    * [.encodeForCall()](#Action+encodeForCall) ⇒ <code>Array.&lt;String&gt;</code>
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

### action.encodeForCall() ⇒ <code>Array.&lt;String&gt;</code>
Encode arguments for calling the action directly

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>Array.&lt;String&gt;</code> - bytes-encoded args  
<a name="Action+encodeForDsProxyCall"></a>

### action.encodeForDsProxyCall() ⇒ <code>Array.&lt;String&gt;</code>
Encode arguments for calling the action directly via DSProxy

**Kind**: instance method of [<code>Action</code>](#Action)  
**Returns**: <code>Array.&lt;String&gt;</code> - array to be passed on to DSProxy's `execute(address _target, bytes memory _data)`  
<a name="Action+encodeForActionSet"></a>

### action.encodeForActionSet() ⇒ <code>Array.&lt;String&gt;</code>
Encodes action for ActionSet call

**Kind**: instance method of [<code>Action</code>](#Action)  
<a name="ActionSet"></a>

## ActionSet ℗
**Kind**: global class  
**Access**: private  

* [ActionSet](#ActionSet) ℗
    * [new ActionSet(name, actions, paramMappings)](#new_ActionSet_new)
    * [.addAction(action)](#ActionSet+addAction)
    * [.encodeForCall()](#ActionSet+encodeForCall) ⇒ <code>Array.&lt;Array.&lt;\*&gt;&gt;</code>
    * [.encodeForDsProxyCall()](#ActionSet+encodeForDsProxyCall) ⇒ <code>Array.&lt;Array.&lt;\*&gt;&gt;</code>

<a name="new_ActionSet_new"></a>

### new ActionSet(name, actions, paramMappings)
**Params**

- name <code>String</code>
- actions [<code>Array.&lt;Action&gt;</code>](#Action)
- paramMappings <code>Array.&lt;Array.&lt;Number&gt;&gt;</code>

<a name="ActionSet+addAction"></a>

### actionSet.addAction(action)
**Kind**: instance method of [<code>ActionSet</code>](#ActionSet)  
**Params**

- action [<code>Action</code>](#Action)

<a name="ActionSet+encodeForCall"></a>

### actionSet.encodeForCall() ⇒ <code>Array.&lt;Array.&lt;\*&gt;&gt;</code>
**Kind**: instance method of [<code>ActionSet</code>](#ActionSet)  
<a name="ActionSet+encodeForDsProxyCall"></a>

### actionSet.encodeForDsProxyCall() ⇒ <code>Array.&lt;Array.&lt;\*&gt;&gt;</code>
TODO

**Kind**: instance method of [<code>ActionSet</code>](#ActionSet)  
