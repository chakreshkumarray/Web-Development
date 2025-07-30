//Acessing the last element of an array
let a=["HTML","CSS","JS"];
let last=a[a.length-1];
console.log("last item is :",last );

//Modifying the array element
let a1=["HTML","CSS","JS"];
document.write(a1);
a1[0]="BootStrap";
document.write(a1);

//Adding Element to the array
let a2=["HTML","CSS","JS"];
a2.push("NodeJS");              // last add
a2.unshift("Web Development");  //front add
document.write(a2);

//Removing element from an array
let a3=["HTML","CSS","JS"];
document.write("Original array is:",a3);

let lst=a3.pop();
document.write("After removing the last",a3); //remove last

let fst =a3.shift()
document.write("After removing the first"+a3); 

a.splice(1,2);
document.write("After removing 2 elemnts starting index 1:"+a3);