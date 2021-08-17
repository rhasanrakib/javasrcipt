async function myFunction(){
    return Promise.error("error");
}
myFunction().then(
    function(mgs){
        console.log("getting Error");
    },
    function(mgs){
        console.log("getting"+mgs);
    }
);