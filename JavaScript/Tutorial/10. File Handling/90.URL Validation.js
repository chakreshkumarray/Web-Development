/*URL Validation*/

function isValid(url) {
  const pattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;
  return pattern.test(url);
}

console.log(isValid("https://www.example.com"));
console.log(isValid("http://example.com"));  
console.log(isValid("www.example.com"));   
console.log(isValid("invalid-url"));     
