/*
Array,
Objects,
Functions,

*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // Reference Check


const heroes = ["shaktiman", "naagraj","doga"];

let myObj = {
  name: "Chakresh",
  age: 23
}

const myFunction =  function(){
  console.log("Hello Chakresh");
}

console.log(typeof id);

console.log(typeof myFunction);
