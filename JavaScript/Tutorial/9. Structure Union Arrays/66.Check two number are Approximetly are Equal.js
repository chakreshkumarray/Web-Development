/*How to check two numbers are approximately equal in JavaScript*/
/*Input:  num1 = 10.3
          num2 = 10

Output:    true   */

const checkApprox=(num1,num2,epsilon)=>{
  return Math.abs(num1 - num2)<epsilon;
}
console.log(checkApprox(10.008,10.001,0.009));
