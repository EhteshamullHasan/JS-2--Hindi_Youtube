// primitive data types
//1.String 2.Number 3.Boolean 4.Symbol 5.BigInt 6.Undefined 7.Null

const score = 100;
const scoreValue = 10.3;

let isLoggedIn = false;
let isOutsideTemp = null;
let myName;


const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id);
console.log(id == anotherId);

//non primitive or reference

//arrays,objects,functions

const heros = ["Shaktiman","Ehtesham","Abdus samad","Abdul aziz"];

let myObj = {
    name:"Hasan",
    age : 21,

}
// console.log(myObj);

const myFunc = function(){
    console.log("Hello world");
}
console.log( typeof myFunc);

console.log(typeof heros);
