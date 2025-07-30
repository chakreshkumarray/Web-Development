/*How to send a JSON object to a server using Javascript*/


function sendJSON(){
              
  let result = document.querySelector('.result');
  let name = document.querySelector('#name');
  let email = document.querySelector('#email');
    

  let xhr = new XMLHttpRequest();
  let url = "submit.php";


  xhr.open("POST", url, true);

  
  xhr.setRequestHeader("Content-Type", "application/json");


  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {

      
          result.innerHTML = this.responseText;

      }
  };


  var data = JSON.stringify({ "name": name.value, "email": email.value });


  xhr.send(data);
}