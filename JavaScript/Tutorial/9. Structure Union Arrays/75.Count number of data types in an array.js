/*How to count number of data types in an array in JavaScript*/
/*
Input: [1, true, "hello", [], {}, undefined, function(){}] 
Output: { 
    boolean: 1, 
    function: 1, 
    number: 1, 
    object: 2, 
    string: 1, 
    undefined: 1 
}
Input: [function(){}, new Object(), [], {}, 
        NaN, Infinity, undefined, null, 0] 
Output: { 
    function: 1, 
    number: 3, 
    object: 4, 
    undefined: 1 
}   */
let countDtypes=(arr)=>{
  return arr.reduce((acc,curr)=>{
    if(acc[typeof curr]){
      acc[typeof curr]++;
    }else{
      acc[typeof curr]=1
    }
    return acc
  }, {})
}
let arr=[function () {},new Object(),[],{},NaN,Infinity,undefined,null,0];
console.log(countDtypes(arr));