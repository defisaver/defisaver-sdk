const Action = require('./Action');

class Strategy {
  constructor(name) {
    this.name = name;
    this.subSlots = [];
    this.actions = [];
  }

  addSubSlot(name, type) {
    this.subSlots.push({ name, type });
  }

  addTrigger() {

  }

  addAction(newAction) {
    this.actions.push(newAction);
  }

  print() {
    console.log(`Name: ${this.name }`);
    console.log(`Slots: ${this.subSlots }`);
    console.log(`Actions: ${this.actions }`);

  }

}

module.exports = Strategy;

