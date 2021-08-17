let s=100;
let ss = "10";
let a = 100*'10';

function func(){
    return true
}

a = NaN;

s=2/0;
console.log(typeof s);
a = new Number(10);
let b= new Number(10);
if (a<b){
    //Object can not be compared so it always return false
    console.log(true);
}
else{
    console.log(false);
    //Object can not be compared
}

s =10;
console.log(s.toString(35));
let d = new Date("2017-09-30");
d = Number(d)
console.log(d);
console.log(parseFloat("10"));        // returns 10