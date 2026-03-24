
function one(){
    const username = "Chakresh"

    function two(){
        const website = "Chakresh@Google.com"
        console.log(username);
    }
    console.log(website);

     two()

}

one()

if (true) {
    const username = "Ambreesh"
    if (username === "Ambreesh") {
        const website = "Ambreesh@Email.com"
        console.log(username + website);
    }
    console.log(website);
}

console.log(username);


// Important


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}