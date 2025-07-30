/*How to convert a 2D array to a comma-separated values (CSV) string in JavaScript */
/*
Input:
[ [ "a" , "b"] , [ "c" ,"d" ] ]
Output:
"a,b 
 c,d"
Input:
[ [ "1", "2"]
["3", "4"]
["5", "6"] ]
Output:
"1,2
3,4
5,6"  */
var array2D=[["a","2"],["c","d"]];
var csv=array2D.map((item)=>{
  var row=item;
  return row.join(",");
})
.join("\n");
console.log(csv);