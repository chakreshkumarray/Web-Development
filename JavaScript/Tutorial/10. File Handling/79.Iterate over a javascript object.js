/*How to iterate over a JavaScript object*/

function iterateObject() {
  let exampleObj = {
      book: "Merchant of Venice",
      author: "William Shekspeare",
      genre: "Love and Romance"
  };
  for (let key in exampleObj) {
      if (exampleObj.hasOwnProperty(key)) {
          value = exampleObj[key];
          console.log(key, value);
      }
  }
}
iterateObject();