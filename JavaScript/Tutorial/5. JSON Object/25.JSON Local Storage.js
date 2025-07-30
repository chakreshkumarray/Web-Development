
// GetItem and SetItem

let user={
  firstname:'sam',
  lastname:'kumar',
  address:'bhabhot',
  class:'B.Tech',
  RollNo:'205423',
}
console.log(user)

localStorage.setItem('Name','chakresh');
localStorage.setItem('Class','B.tech');

console.log(localStorage.getItem('Name'));
localStorage.setItem('user',JSON.stringify(user));
let user2=JSON.parse(localStorage.getItem('user'));

console.log(user2);

// clear item
localStorage.clear(); 

//remove item
localStorage.removeItem('class');  