const accountId = 144553 
let accountEmail = "ckray550@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

//accountId = 2 // error not able to change
console.log(accountId);

accountEmail = "hc@hc.com"
accountCity = "Lucknow"

console.log(accountEmail);
console.log(accountPassword);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// scope
{

}

/*
const - no changeable
let - changeable, Block-scoped { },acessable with in the scope
var - don't follow scope, accessable out of the scope, Function-scoped (not block-scoped), Can be redeclared and updated
*/

function test() {

  // VAR
  if (true) {
    var a = 10;
  }
  console.log("var a:", a); // ✅ 10 (not block scoped)
    // LET
    if (true) {
      let b = 20;
      console.log("let b inside:", b); // ✅ 20
    }
    // console.log("let b outside:", b); ❌ ERROR (block scoped)

    // CONST
    const c = 30;
    // c = 40; ❌ ERROR (cannot reassign)

  console.log("const c:", c); // ✅ 30
}

test();