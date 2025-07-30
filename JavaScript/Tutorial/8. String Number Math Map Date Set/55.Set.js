let sample=new set()
sample.add("Hello");
sample.add("Geeks");
sample.add("How");
sample.add("are");
sample.add("You");
let data=sample.values();
for(let val of data)
{
  console.log(val);
}

//By Using iteration
let myset=new set()
myset.add(3);
myset.add(4);
myset.add(9);
myset.add(6);
console.log(myset);
let myarr=[];
for (let element of myset) {
  myarr.push(element);
}
console.log(myarr);
myarr.sort()
myset.clear()
for (let element of myarr) {
  myset.add(element);
}
console.log(myset);

//By using array from

let myset1=new set()
myset1.add(3);
myset1.add(5);
myset1.add(52);
myset1.add(67);

console.log(myset1);
let myarr1=[];
myArray=Array.from(myset1)
myArray.sort()
console.log(myArray)
myset1.clear()
myset=new set(myArray);
console.log(myset);

//Using Spread & Sort Method
let myset2=new set()
myset2.add(3);
myset2.add(5);
myset2.add(2);
myset2.add(8);
myset2.add(9);
console.log(myset2);
const sortedarray=[''.myset].sort();
const newset=new set(sortedarray);
console.log(newset);