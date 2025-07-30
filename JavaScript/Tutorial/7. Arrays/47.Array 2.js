// Array length
let a=["HTML","CSS","JS"];
let len=a.length
document.write(len);

// Slice and Splice Method
let a1=[1,2,3,4,5,6,7,8,9];
document.write(a1);
let Slice=a1.slice(0,2);
document.write("Slice array is :"+Slice);
document.write("original array is :"+a1);

let Splice=a1.slice(0,3);
document.write("Splice array is :"+Splice);
document.write("original array is :"+a1);

//Some and Every
let a2=[1,2,3,4,5];
let n1=a2.every(
  function(elem)
  {
    return elem>0
  }
);
let n2=a2.some(
  function(elem)
  {
    return elem<0
  }
);
console.log(n1);
console.log(n2);