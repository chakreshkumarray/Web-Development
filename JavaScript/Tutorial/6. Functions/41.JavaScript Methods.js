let employee={
  name:"Chakresh",
  Department:"IT",
  details:function(){
    return this.name+"work with department"+this.Department;
  }
};
console.log(employee.details());