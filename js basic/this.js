
const person ={
    firstName : "Jhon",
    lastName : "Doe",
    id : "CE-11111",
    fullName : function(){
        return this.firstName+" "+this.lastName;
    }
};

//console.log(person.fullName());
let aa = this
console.log(aa);

function fun()
{
    return this;
}
let a = fun();
//console.log(a);