// Object
// Singleton

// Object literals

const mySym = Symbol("key1") // interview important

const JsUser = {
  "Full name": "Chakresh Kumar",
  [mySym]: "mykey1",         // interview important      
  age: 23,
  location: "Pune",
  email: "chakresh@google.com",
  isLoggedIn: false,
  lastLoginDays:["Monday","Saturday"]
}

// Access
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["Full name"]);
console.log(JsUser.mySym);
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);   // interview important

// override value
JsUser.email = "ChakreshRay@gmail.com"
//Object.freeze(JsUser) // don't override value
JsUser.email = "Chakresh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());