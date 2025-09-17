/*How to check if a value is object-like in JavaScript*/
let k = {
   Name: 'Chakresh KUmar Ray',
   Class: 'B.Tech(IT)',
   RollNo: '205423',
   Country: 'India'
   };

let k0 = new Set()
let k1 = [1, 2, 3];
let k2 = "hello";
let k3 = null;
let k4 = undefined;

console.log(typeof k);
console.log(typeof k0);
console.log(typeof k1);
console.log(typeof k2);
console.log(typeof k3);
console.log(typeof k4);
