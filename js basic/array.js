let a =[1,2,2,2,2,5];
for(let i of a){
    console.log(i);
} 
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// Concatenate (join) myGirls and myBoys
const myChildren = myGirls.concat(myBoys,"hello");  
console.log(myChildren);

const numarr = [100,25,302,4]

function comparefn(a,b)
{
    return a-b;
}
const res = numarr.sort(function(a,b){return a-b});
console.log(res);

const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  console.log(`j value= ${j}`);
  let k = points[i]
  points[i] = points[j]
  points[j] = k
} 
console.log(points);