const Action = require('./Action');
class Strategy {

  constructor(name) {
    this.name = name;
    this.subSlots = {};
    this.actions = [];
    this.triggers = [];
    this.numSubSlots = 0;
  }

  addSubSlot(name, type) {
    this.subSlots[name] = { type, index:  this.numSubSlots + 128 };
    this.numSubSlots++;
  }

  addTrigger(newTrigger) {
    this.triggers.push(newTrigger);
  }

  addAction(newAction) {
    this.actions.push(newAction);
  }

  print() {
    console.log(`Name: ${this.name }`);
    console.log(`Slots: ${this.subSlots }`);
    console.log(`Action: ${this.actions[0]}`);
  }

  getSubSlots() {
    return this.subSlots;
  }

  encodeForDsProxyCall() {
    const triggerIds = this.triggers.map((trigger) => trigger.getId());

    const paramMappings = [];
    const actionIds = [];

    this.actions.forEach(action => {
      const actionEncoded = action.encodeForStrategy(this.subSlots);

      actionIds.push(actionEncoded[0]);
      paramMappings.push(actionEncoded[1]);
    });

    return [
      this.name,
      triggerIds,
      actionIds,
      paramMappings
    ];
  }

}

module.exports = Strategy;

