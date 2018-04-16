inputVals = (startVal, endVal) => {
    let AP = [];
    let GP = [];
    let d = 2;
    for (let i = 0; i < endVal; i++){
    	let AP_formula = startVal + d*i;
        let GP_formula = startVal*d**i;

    	if (AP_formula < endVal) {
    		AP.push(AP_formula);
    		if (GP_formula < endVal) {
    			GP.push(GP_formula);
    		}
    	}
    }
    console.log(AP, GP);
}
inputVals(3, 15);