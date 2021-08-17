 "use strict";
const myDisplay = (sums) => {
    console.log("We have vlaue", sums);
}
const myCalculator = (myCallBack,...nums) => {
    let total=0;
    for (let i of nums) {
        total+=i;
    }
    
    myCallBack(total);
}
//setTimeout(myCalculator, 2000,myDisplay,1,2);
myCalculator(myDisplay,1,2);
