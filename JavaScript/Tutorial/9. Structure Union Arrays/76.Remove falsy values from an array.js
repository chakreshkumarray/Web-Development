/*How to remove falsy values from an array in JavaScript*/
/*
Input: [23, 0, “gfg”, false, true, NaN, 12, “hi”, undefined, [], “”] 
Output: [23, “gfg”, true, 12, “hi”, []]
Input: [“”, 0, false, undefined, NaN, null] 
Output: []
*/

let arr = [23, 0, "gfg", false, true, NaN, 12, "hi", undefined, [], ""];
function removeFalsey(arr) {
    let newArr = [];
    arr.forEach((k) => {
        if (k) {
            newArr.push(k);
        }
    });
    return newArr;
}
console.log(removeFalsey(arr));
