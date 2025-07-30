/*How to find out the caller function in JavaScript*/
function Foo(){
  console.log(Foo.caller.name);
}
function Chakresh(){
  Foo();
}
Chakresh();

function Kumar(){
  Foo();
}
Kumar();

function Ray(){
  Foo();
}
Ray();