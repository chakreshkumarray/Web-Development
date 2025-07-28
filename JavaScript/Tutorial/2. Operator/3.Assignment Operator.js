//Addition Assignment Operator 
let a = 2;
const b = 3;
console.log(a);
console.log(a = b + 1);

//Subtraction Assignment Operator
let yoo = 4;
console.log(foo = yoo - 1);

//Multiplication Assignment Operator
let yoo1 = 4;
console.log(foo = yoo1 - 1); 

//Division Assignment Operator
let yoo2 = 10;
const moo = 2;
console.log(yoo2 = yoo2 / moo);  
console.log(yoo2 /= 0);

//Remainder Assignment Operator
let yoo3 = 50;
console.log(yoo3 %= 10);

//Exponentiation Assignment Operator
let yoo4 = 5;
console.log(yoo4 **= 4);

//Left Shift Assignment Operator
let yoo5 = 5;
console.log(yoo5 <<= 2);

//Right Shift Assignment Operator
let yoo6 = 5;
console.log(yoo6 >>= 2); 

//Bitwise AND Assignment Operator
let yoo7 = 5;
console.log(yoo7 &= 2);

//Btwise OR Assignment Operator
let yoo8=5;
console.log(yoo8|=2);

//Bitwise XOR Assignment Operator
let y1 = 5;
console.log(y1 ^= 2);

//Logical AND Assignment Operator
let my = {
  firstName: "Chakresh",
  lastName: "Ray",
};
console.log(my.firstName); 
my.firstName &&= "kumar";
console.log(my.firstName);
console.log(my.lastName);
my.lastName &&= "CK";
console.log(my.lastName); 

//Logical OR Assignment Operator
let ck = {
  firstName: "Ambreesh",
  lastName: "Kumar",
};
console.log(ck.firstName);
ck.firstName ||= "Ray";
console.log(ck.firstName);
console.log(ck.lastName);
ck.lastName ||= "AK";
console.log(ck.lastName); 

//Nullish coalescing Assignment Operator
let x = 12;
let y = null;
let z = 13; 
x ??= z;
y ??= z;
console.log(x) 
console.log(y)