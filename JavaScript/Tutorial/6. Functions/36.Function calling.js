let employee={
  details:function(destingation,example)
  {
    return this.name
    +" "
    +id
    +destingation
    +experience;
  }
}
let emp1={
  name:"A",
  id="123",
}
let emp2={
  name:"B",
  id:"45",
}
let x=employee.details.call(emp2,"manager","4 years");
console.log(x);