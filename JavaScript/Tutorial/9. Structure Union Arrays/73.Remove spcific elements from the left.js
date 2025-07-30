/*How to remove specific elements from the left of a given array of elements using JavaScript*/
function fun(n){
 var arr=[2,4,5,3,6];
 var ind=arr.indexOf(n);
 if(ind!==-1){
  arr.splice(ind,1);
 }
 console.log("After removing elements:");
 console.log(arr);
}
fun(5);