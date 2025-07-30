// How to check whether a passed string is palindrome or not in JavaScript

/* Input: "race"
Output: passed string is not a palindrome
Explanation: if we write "race" in reverse that is "ecar" it not 
matches with first string so it is not a palindrome.
Input: "hellolleh"
Output: passed string is palindrome.*/
/*using split reverse join method */

let palindrome=(string) => {
  return string===string.split("").reverse().join("");
};
console.log("Is Palinfrome? :"+palindrome("noon"));
console.log("Is Palinfrome? :"+palindrome("apple"));
