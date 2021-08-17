"use strict"
// setTimeout(myDisplay,3000);
// function myDisplay()
// {
//     console.log("Set timeout works");
// }

const myClock=()=>{
    let d= new Date()
    console.log(d.getHours()+" "+d.getMinutes()+" "+d.getSeconds() );
}
setInterval(myClock,1000);