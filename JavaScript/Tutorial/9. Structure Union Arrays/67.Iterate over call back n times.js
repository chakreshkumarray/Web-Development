/*How to iterate over a callback n times in JavaScript*/
function factor(n){
  if(n<=1){
    console.log("0" +n);
    return 0;
  }

let str="";
for(let i=1;i<=n;i++)
{
  str +=`0${i}`;
}
console.log(str);
return factor(n-1);
}

function test(n,callback){
  if(n==0){
    console.log("Please provide valuse n greater than 0");
    return 0;
  }
  let k=n;
  callback(k);
}
let t_number=4;
test(t_number,factor);
