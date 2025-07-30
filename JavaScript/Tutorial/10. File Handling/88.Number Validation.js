/*Number Validation in JavaScript*/
const isNum=n=>
  typeof n==='number'&& !isNaN(n);
console.log(isNum(42));
console.log(isNum('42'));
console.log(isNum(NaN));