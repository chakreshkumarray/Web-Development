// const insert = document.getElementById('insert');

// window.addEventListener('keydown', (e) => {
//   insert.innerHTML = `
//     <div class='color'>
//     <table>
//     <tr>
//       <th>Key</th>
//       <th>Keycode</th> 
//       <th>Code</th>
//     </tr>
//     <tr>
//       <td>${e.key === ' ' ? 'Space' : e.key}</td>
//       <td>${e.keyCode}</td> 
//       <td>${e.code}</td>
//     </tr>
    
//   </table>
//     </div>
//   `;
// });


const sayChakresh = function(){
    console.log("Chakresh");
}
const changeText = function(){
    document.querySelector('h1').innerHTML = "best JS series"
}

const changeMe = setTimeout(changeText, 2000)

document.querySelector('#stop').addEventListener('click', function(){
    clearTimeout(changeMe)
    console.log("STOPPED")
})

