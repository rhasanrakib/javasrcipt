"use strict"
// const cc = (a)=>{
//     if(a==10)
//     {
//         return;
//     }
    
//     cc(a+1);


// }
// const a=(a,b)=>{
//     return a>b?a:b;
// }

// const ff =(x,y=5,...b)=>{
//     //console.log(x,y);
//     for (let i = 0; i < b.length; i++) {
//        console.log(b[i]);
//       }
// }
// ff(1,2,3,4,5);

// const people={
//     fName: "Rakib",
//     lName: "R",
//     fullName: ()=>{
//         return people.fName+" "+people.lName; 
//     }
// }
// console.log(people.fullName());


/**In object method arrow function is not suitable because of its this keyword. In arrow function
 *this keyword is lexical. So for the betterment we have to use the function()
 */


//Inner Function

let counter = 0;
const ff =()=>
{

    const plus=()=>{
        counter+=1;
    }
    plus();
    plus();
    plus();
    return counter;

}
console.log(ff());

