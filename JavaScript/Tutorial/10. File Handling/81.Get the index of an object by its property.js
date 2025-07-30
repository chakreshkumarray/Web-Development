/*JavaScript Get the index of an object by its property*/


let arrayObj = [{
  prop1: 'ck',
  prop2: 'ak',
  prop3: 'sk'
}, {
  prop1: 'ach',
  prop2: 'sum',
  prop3: 'ram'
}];

function Fun() {
  let prop = 'prop2';
  let val = 'ak';
  console.log("Index of prop = "
      + prop + " val = " + val +
      " is = " +
      arrayObj.map(function (e) {
          return e.prop2;
      }).indexOf(val));
}

Fun();