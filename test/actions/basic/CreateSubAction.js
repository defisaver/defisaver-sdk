const dfs = require("../../../umd");
const {encodeForDsProxyCall, encodeForRecipe} = require("../../_actionUtils");

describe('Action: CreateSubAction', () => {
  let action;

  context('CreateSubAction', () => {
    it('constructor', () => {
      action = new dfs.actions.basic.CreateSubAction(
        [24,
          true,
          ["0x0000000000000000000000009ccf93089cb14f94baeb8822f8ceffd91bd71649000000000000000000000000a920de414ea4ab66b97da1bfe9e6eca7d421963500000000000000000000000000000000000000000000000016e5fa42076500000000000000000000000000000000000000000000000000000000000000000001"],
          [
            "0x000000000000000000000000a920de414ea4ab66b97da1bfe9e6eca7d4219635",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
            "0x00000000000000000000000000000000000000000000000018fae27693b40000",
            "0x000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            "0x000000000000000000000000f939e0a03fb07f59a73314e73794be0e57ac1b4e"
          ],
        ]
      );
      console.log(action);
    });

    it('encodeForDsProxyCall', () => encodeForDsProxyCall(action));
    it('encodeForRecipe', () => encodeForRecipe(action));
  })

});
