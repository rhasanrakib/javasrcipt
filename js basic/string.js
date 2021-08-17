let a= "";
if(a===2)
{
    console.log("Yes");
}
else{
    console.log("No");
}
a = Boolean(a)
console.log(a);

/**
 * In type conversion empty string will get as false in Boolean
 */
/**
 * Object cannot be compared
 */

 let str="Apple, Banana, Kiwi";
 
 //let aaa= str.padStart(4,0)

 /*for(let i=0;i<str.length;i++)
 {
     console.log(str.substr(0,i));
 }*/
 /*let text =
 `The quick
 brown ${str}
 jumps over
 the lazy dog`;
 console.log(text);
*/
let text="";
const cars = ["BMW", "Volvo", "Saab", "Ford"];
list: {
  text += cars[0] + "<br>";
  text += cars[1] + "<br>";
  
  text += cars[2] + "<br>";
  continue list;
  text += cars[3] + "<br>";
} 
console.log(text);