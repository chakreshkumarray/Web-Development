  // document.getElementById('owl').onclick = function(){
  //   alert("Owl clicked")
  // }

  document.getElementById('owl').addEventListener('click', function(){
    alert("Owl Clicked ")
  }, false)

  // attachEvent()
  // JQuery - on
document.getElementById('owl').addEventListener('click', function(e) {
  console.log(e)
}, false)

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altKey, ctrlKey, shiftKey, KeyCode
document.getElementById('images').addEventListener('click', function(e) {
  console.log("Clicked again on ul"); // bubbling and events
}, true)

document.getElementById('owl').addEventListener('click', function(e) {
  console.log("Owl Clicked"); // bubbling and events
  e.stopPropagation()
}, true)

document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
    e.stopPropagation()
    console.log("google clicked");
}, false)


document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    
})

//removeIt.parentNode.removeChild(removeIt)