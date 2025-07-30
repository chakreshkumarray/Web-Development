/*How to Parse JSON Data in JavaScript*/

const jsonS = '{"name": "Chakresh Kumar Ray", "age": 23, "city": "Sultanpur"}';


const obj = JSON.parse(jsonS);



console.log(obj.name);