//////////////////////////////////////////////
function Func1() {
  console.log('one');
  return 'one';
}
function Func2() {
  console.log('two');
  return 'two';
}
function Func3() {
  console.log('three');
  return 'three';
}
let x = (Func1(), Func2(), Func3());
console.log(x);

//////////////////////////////////////////////
for (let a = 0, b =5; a <= 5; a++, b--) {
  console.log(a, b);
}

/////////////////////////////////////////
let a = 1, b = 2, c = 3;
console.log("Initial values:");
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);

// Using comma operator to update multiple variables/////////////////
(a*=2), (b*=3), (c*=4);
console.log("Updated values:");
console.log("a:",a);
console.log("b:",b);
console.log("c:",c);