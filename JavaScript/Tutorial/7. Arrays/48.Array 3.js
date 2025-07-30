//find & find index
let a=[1,2,3,4,5,6,7];
let find=a.find(function(elem)
{
  return elem>4
}
);
console.log(find);

let val=a.findindex(function(elem)
{
  return elem>=4
}
);
console.log(val);

// Increase and decrease the array length
let a1=["HTML","CSS","JS"] ;
a1.length=7;
console.log("After Increasing length :"+a1);

a1.length=2;
console.log("After decreasing length :"+a1);

// Array Iteration
let a1=["HTML","CSS","JS"] ;
for(let i=0;i<a.length;i++)
{
  console.log(a1[i]);
}