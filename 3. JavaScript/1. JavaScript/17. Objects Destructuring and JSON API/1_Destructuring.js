// Destructuring in JSON API

const course = {
  coursename: "JS in Hindi",
  price: "999",
  courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor} = course
// OR
const {courseInstructor: Instructor} = course

console.log(Instructor);

const navbar = ({company}) => {  // Object destructuring

}

navbar(company = "Chakresh")

// This is JSON format, it is not an object, it is a string
// JSON is same like Object
// {
//   "name": "Chakresh",
//   "coursename":"JS in hindi",
//   "price": "free"
// }

[
  {},
  {},
  {}
]

/* JSON vs Object
1. JSON is string format, Object is not.
2. JSON keys must be in double quotes, Object keys can be without quotes.
3. JSON does not support functions, Object can have functions as values.

🔹 JavaScript Object
A JavaScript object is a real data structure used inside JS code.
It can store data as key-value pairs.
Keys don’t need quotes, and values can be functions, undefined, etc.

✅ Example:

let obj = {
  name: "Chakresh",
  age: 22,
  greet: function() {
    return "Hello";
  }
};

✔️ Features:

Can contain functions (methods)
Keys can be without quotes
Used directly in JS programs


🔹 JSON (JavaScript Object Notation)
JSON is a string format, used to exchange data (API, server, etc.)
It looks like an object but is just text

✅ Example:

{
  "name": "Chakresh",
  "age": 22
}

✔️ Features:

Keys must be in double quotes
No functions allowed
Used for data transfer
🔄 Conversion between them

👉 Object → JSON

let jsonData = JSON.stringify(obj);

👉 JSON → Object

let newObj = JSON.parse(jsonData);
⚡ Key Differences
Feature	JavaScript Object	JSON
Type	Object	String
Functions	Allowed	Not allowed
Quotes	Optional keys	Mandatory (double quotes)
Usage	Inside JS	Data exchange
*/