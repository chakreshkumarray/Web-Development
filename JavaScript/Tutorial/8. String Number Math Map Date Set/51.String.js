// Slice 
let a='geeks for geeks';
let b=a.slice(0,5);
let c=a.slice(6,9);
let d=a.slice(10);

console.log(b);
console.log(c);
console.log(d);

//SubString
let str="Mind,Power,Soul";
let part=str.substring(6,11);
console.log(part);

//substr
let k="Mind,Power,Soul";
let l=k.substr(6,5);
console.log(l);

//Replace
let m="Mind,Power,Soul";
let n=m.replace("Bower,Space");
console.log(n);

//Upper and Lower case
let i="GFG";
let j='chakresh kumar ray';
console.log(i.toLowerCase);
console.log(j.toUpperCase);

//Pad Start
let stone="Soul";
stone=stone.padStart(a,"Mind");
console.log(stone);
