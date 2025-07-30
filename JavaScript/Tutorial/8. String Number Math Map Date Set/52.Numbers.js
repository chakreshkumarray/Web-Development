//only Numbers
//Scientific Notation
let a=156e5;
let b=156e-5;
console.log(a);
console.log(b);

//Integer Precision
let c=999999999999999999;
let d=99999999999999999999999;
console.log(a);
console.log(b);

//Floating Point Precision
let e=0.22+0.12;
let f=(0.22*10+0.12*10)/10;
console.log(e);
console.log(f);

//Adding Number String
let x=10;
let y=15;
let z=x+y;
console.log(z);

let p="10";
let q="30";
let r=p+q;
console.log(r);

//Numeric String
let h="100"/"10";
let i="100"*"10";
let j="100"-"10";
console.log(h);
console.log(i);
console.log(j);

//Octal Numbers
let s='0562';
console.log(s);

//Binary Numbers
let t=0b11;
let u=0B0111;
console.log(t);
console.log(u);

//hexadecimal
let v=0xfff;
console.log(x);

//Reference
function func()
{
  let a=true;
  let value=Number(a);
  console.log(value);
}
func();