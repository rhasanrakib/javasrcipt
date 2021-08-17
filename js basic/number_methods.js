let x = 9;
console.log(x.toFixed(2));
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000 

console.log(x.toPrecision(2));

let a = new Number(123);
a = a.valueOf(a);
console.log(typeof a);
let b = "s";
b= b.valueOf(b)
console.log(b);
b= new String("b")
b= b.valueOf(b)
console.log(b);