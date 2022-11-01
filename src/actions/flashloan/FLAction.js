const Action = require("../../Action");
const { getAddr } = require('../../addresses.js');

class FLAction extends Action {
    constructor (specificFLAction){
        console.log(specificFLAction.constructor.name);
        super(
            "FLAction",
            getAddr("FLAction"),
            [],
            []
        )
        this.paramTypes = ['address[]','uint256[]', 'uint256[]', 'address', 'address', 'bytes', 'bytes'];
        this.args = handleArgs(specificFLAction);
        console.log(this.args);
    }
}

function handleArgs(specificFLAction){
    argsToReturn = [
            specificFLAction.args[0],
            specificFLAction.args[1],
            specificFLAction.args[2],
            specificFLAction.args[3],
            getAddr('Empty'),
            [],
            specificFLAction.args[6],
    ];
    if (specificFLAction.constructor.name == "AaveV2FlashloanAction"){
        argsToReturn[5] = [1];
    }
    if (specificFLAction.constructor.name == "AaveV3FlashloanAction"){
        argsToReturn[5] = [1];
    }
    if (specificFLAction.constructor.name == "BalancerFlashloanAction"){
        argsToReturn[5] = [2];
    }
    if (specificFLAction.constructor.name == "EulerFlashloanAction"){
        argsToReturn[5] = [3];
    }
    if (specificFLAction.constructor.name == "MakerFlashLoanAction"){
        argsToReturn[5] = [4];
    }
    return argsToReturn;
}
module.exports = FLAction;