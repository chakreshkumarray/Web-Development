function gfg1() { 
  let PMarks = 40
  let result = (PMarks > 39) ?
      "Pass" : "Fail";
  console.log(result);
}
gfg1();  


// Conditional operator
function gfg2() { 
  let age = 60
  let result1 = (age > 59) ?
      "Senior Citizen" : "Not a Senior Citizen";
  console.log(result1);
}
gfg2();


// multiple Conditional operators
function gfg3() {
  let marks = 95;
  let result2 = (marks < 40) ? "Unsatisfactory" :
      (marks < 70) ? "Average" :
          (marks < 80) ? "Good" : "Excellent";

  console.log(result2);
}
gfg3();   