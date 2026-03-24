
// Array
let arr = [5,8,7,9,5,4,5,1,4]
console.log(typeof arr); // Object , Resizeable

/* important interview
 Shallow copy --> A shallow copy of an object is a copy whose properties share the same references
                 (point to the same underlying values) as those of the source object from which the copy was made.
 deep copy --> A deep copy of an object is a copy whose properties do not share the same references 
               (point to the same underlying values) as those of the source object from which the copy was made 
*/

// array

const myArr1 = [0, 1, 2, 3, 4, 5]
const myHeors = ["Chakresh", "Ambreesh"]

const myArr = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6) // add elemet
myArr.push(7)
myArr.pop() // remove element

myArr.unshift(9)  // unshift() in JavaScript adds one or more elements to the beginning of an array and returns the new length., 
myArr.shift() // shift() in JavaScript removes and returns the first element of an array (modifying the original array)

console.log(myArr.includes(9));//JavaScript checks if an array or string contains a specified value and returns true or false.,
console.log(myArr.indexOf(3));//Find element on the given index

const newArr = myArr.join()

console.log(myArr);
console.log( newArr);


// slice, splice interview important

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // give interveral array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // -> manipulate original array
console.log("C ", myArr);
console.log(myn2);
  
