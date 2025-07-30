/*Deserializing a JSON into a JavaScript object*/


let jsonString = '{"name": "Chakresh Kumar Ray", "age": 23, "city": "U.P."}';

let user = JSON.parse(jsonString);

console.log("Name:", user.name); 
console.log("Age:", user.age);    
console.log("City:", user.city); 
