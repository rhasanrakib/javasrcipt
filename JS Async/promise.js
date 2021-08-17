let promise = new Promise((resolve,reject)=>{
    //resolve("done");
    let a = 2+1+5;
    if(a%2==0){
        resolve("Even");
    }
    else{
        reject("Odd")
    }
});
promise.then(
    function(message){
        console.log("Hello There "+message)
    }
).catch(function(error){
    console.log(error);
});