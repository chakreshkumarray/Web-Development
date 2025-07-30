/*How to filter values from an array for which the comparator function does not return true in JavaScript*/
let arr=[1,2,3,4,5,6,7,8,9,10];
let filterdArr=[];
const myFilter =(value)=>{
  return Boolean(value%2);
};
arr.filter((Element)=>{
  if(myFilter(Element)==false){
  filterdArr.push(Element);
  }
});
console.log(filterdArr);