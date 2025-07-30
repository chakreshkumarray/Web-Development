function person(name,age){
  this.name=name;
  this.age=age;
}
let person=new person("Chakresh",25)
console.log(person.name);
console.log(person.age);