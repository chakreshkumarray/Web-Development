//1.
let m = new Map([
  ["k1", "v1"],
  ["k2", "v2"],
  ["k3", "v3"]
]);
console.log(m);


//2.
let m2 = new Map();
m2.set("k1", "v1");
m2.set("k2", "v2");
m2.set("k3", "v3");
m2.set("k3", "v4");
console.log(m2);


let m3 = new Map();
m3.set("k1", "v1");
m3.set("k2", "v2");
m3.set("k3", "v3")
m3.set("k4", "v4")
m3.set("k5", "v5");
console.log("m has k4 ? " + m3.has("k4"));
console.log("m has k6 ? " + m3.has("k6"));
console.log("value for k4 " + m3.get("k4"));
console.log("value for k6 " + m3.get("k6"));
console.log("delete k4 " + m3.delete("k4"));
console.log("delete k6 " + m3.delete("k6"));
m3.clear();
console.log(m3);


//Creating and Using a Map
const company = new Map([
  ["name", "GFG"],
  ["no_of_employee", 200],
  ["category", "education"]]);
function print(key, values) {
  console.log(values + "=>" + key);
}
company.forEach(print);


//Iterating Over a Map Using forEach()
const company1 = new Map();
company1.set("name", "GFG");
company1.set("no_of_employee", 200);
company1.set("category", "education");
function print(key, values) {
    console.log(values + "=>" + key);
}
company1.forEach(print);