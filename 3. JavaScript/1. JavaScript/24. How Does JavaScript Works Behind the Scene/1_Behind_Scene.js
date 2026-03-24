
/*
JavaScript Excecution Context

{} -> Global Execution Context -> this -> window -> globalThis
 
Global Execution Context
Function Execution Context
Eval Execution Context

|--------|
|  {}    | Code run in two phase
|--------|

Pahse 1 -> Memory creation Phase
Pahse 2 -> Execution Phase

// code


*/
let val1 = 10
let val2 = 5

function addSum(num1, num2){
  let total = num1 + num2
  return total
}

let result1 = addSum(val1, val2)
let result2 = addSum(20, 30)

console.log(result1)

/*
Execution of this code
1. Global Execution
-> this
2. Memory phase
val1 -> undefined
val2 -> undefined
addSum -> function addSum(num1, num2){
  let total = num1 + num2
  return total
} 
  result1 -> undefined
  result2 -> undefined

  3. Execution phase
  val1 -> 10
  val2 -> 5
  addSum -> function addSum(num1, num2){
  let total = num1 + num2
  return total
}

new variable is created in memory and assigned value


  result1 -> 15
  result2 -> 50

4. Memory Phase
val1 -> undefined
val2 -> undefined
addSum -> undefined
result1 -> undefined
result2 -> undefined

5. Execution Phase
val1 -> 10
val2 -> 5
addSum -> 15
result1 -> 15
result2 -> 50

6. return ->
Global Execution Context

7. NVE + thread is destroyed

8. Memory Cleanup(Phase)

9. Execution Context is destroyed
------------------------------------------------------------------------

Call Stack
one
two
thre
LIFO -> Last In First Out -> push and pop
*/

function one(){
    console.log("one")
}
function two(){
    console.log("two")
}
function three(){
    console.log("three")
}

one()
two()
three()