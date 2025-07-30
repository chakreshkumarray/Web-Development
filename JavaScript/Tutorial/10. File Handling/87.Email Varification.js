/*JavaScript – How to Validate Email Address using RegExp*/
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let mail = "test@example.com";
if (regex.test(mail)) {
    console.log("Valid Email address");
} else {
    console.log("Invalid Email address");
}
