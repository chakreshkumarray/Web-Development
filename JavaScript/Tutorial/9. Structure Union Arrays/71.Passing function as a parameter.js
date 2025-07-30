/*Passing a function as a parameter in JavaScript */

function ck(value){
  return 'Hello Chakresh Kumar Ray....!';
}
function ak(func){
  console.log(ck());
}
ak(ck);