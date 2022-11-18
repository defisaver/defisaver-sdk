import { Action } from './Action';

/**
 *
 * @category Base Classes
 */
export class Strategy {
  name: string;

  subSlots: any;

  actions: Array<Action>;

  triggers: Array<Action>;

  numSubSlots: number;

  constructor(name: string) {
    this.name = name;
    this.subSlots = {};
    this.actions = [];
    this.triggers = [];
    this.numSubSlots = 0;
  }

  addSubSlot(name: string, type: string) {
    this.subSlots[name] = { type, index: this.numSubSlots + 128 };
    this.numSubSlots++;
  }

  addTrigger(newTrigger: Action) {
    this.triggers.push(newTrigger);
  }

  addAction(newAction: Action) {
    this.actions.push(newAction);
  }

  print() {
    console.log(`Name: ${this.name}`);
    console.log(`Slots: ${this.subSlots}`);
    console.log(`Action: ${this.actions[0]}`);
  }

  getSubSlots() {
    return this.subSlots;
  }

  encodeForDsProxyCall() {
    const triggerIds = this.triggers.map((trigger) => trigger.getId());

    const paramMappings : Array<number[]> = [];
    const actionIds : Array<string> = [];

    this.actions.forEach(action => {
      const actionEncoded = action.encodeForStrategy(this.subSlots);

      actionIds.push(actionEncoded[0] as string);
      paramMappings.push(actionEncoded[1] as number[]);
    });

    return [
      this.name,
      triggerIds,
      actionIds,
      paramMappings,
    ];
  }
}
