const numbers = [45, 4, 58, 45, 7];

/*
const a = numbers.map((element,index,array) => {
    return element*4;
});
console.log(a);
const b = numbers.filter((element,index,array) => {
    if(element>4){
        return element;
    }
});
console.log(b);*/
/*
//Use array.reduce() to make min,max array
let total=100;
const c = numbers.reduce((total,element)=>{
    console.log(total,element);
    const minn =total[0]<element?total[0]:element;
    const maxx =total[1]>element?total[1]:element; 
    return [minn,maxx];
},[Infinity,-Infinity]);
console.log(c)*/
/*
const aa = numbers.map(fun);
function fun(value){
    return value;
}
console.log(aa);
*/
let sum = numbers.reduce(myFunction, [0, 0]);
function myFunction(total, value) {
    console.log(total, value);
    return total + value;
}
console.log(sum)