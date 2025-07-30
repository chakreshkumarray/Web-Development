/*How to Flatten a Given Array up to Specified Depth in JavaScript*/

let arr= [1,[2,[3,[4,5],6],7,8],9,10];
console.log("Original Array:",arr);

let flatarrOne = arr.flat();

console.log("Array flattened to depth of 1:" + flatArrOne);

let flatArrTwo = arr.flat(2);

console.log("Array flattened to depth of 2:" + flatArrTwo);

let flatArrThree = arr.flat(Infinity);

console.log("Array flattened completely:" + flatArrThree);