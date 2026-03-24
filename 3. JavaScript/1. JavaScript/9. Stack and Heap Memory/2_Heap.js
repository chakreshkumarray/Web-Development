// Heap - Run time -> Non Primitive type -> Array, Object, Functions
// FIFO -> First In First Out

let myName = "Chakresh"

let Name = myName
Name = "Chakresh Kumar Ray"

console.log(myName);
console.log(Name);


let user = {
  email: "ck@gmail.com",
  upi: "user@ybl"
}

let userTwo = user

userTwo.email = "ck@google.com"

console.log(user.email);
console.log(userTwo.email);