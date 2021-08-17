"use strict"
class Test{
    constructor(){
        this._name ="Rakib";
        this._age = "25";
    }
    getFullDetails(){
        return this._name + " " +this._age;
    }
    get name(){
        return this._name
    }

}
const t = new Test();
const b = t.getFullDetails();
const c= t.name;
console.log(c);