
// Arrow functions are a more concise syntax for writing function expressions in JavaScript. 

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwo1 = (num1, num2) =>  num1 + num2

const addTwo2 = (num1, num2) => ( num1 + num2 )

const addTwo3 = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


const myArray = [2, 5, 3, 7, 8]

myArray.forEach()