 //Object refrence
 let a=5;
 let b=a;
 console.log(`a=${a},b=${b}`);
 a=10;
 console.log(`a=${a},b=${b}`);

 let x={num:5};
 let y=x;
 console.log(`x =${x.num},y=${x.num}`);
 x.num=12;
 console.log(`x=${x.num},y=${y.num}`);

 //De-Structuring

 let product={
  company:"Levi's",
  itemName:'t-shirt Pant',
  Price:2000,
  rating:{
    star:4.5,
    review:500,
  }
}
let{company,Price}=product;
console.log(company);
console.log(Price);

  // Property shorthand
  let price=2000;
  let product1={
    company:"Jio",
    itemName:'Rocky-tshirt',
    price:price
  };

  // Method Shorthand
  let product3={
    company:'shoe',
    itemName:'jocky',
    displayPrice()
    {
      return`$${this.price.toFixed(2)}`;
    }
   }

   // Local Storage
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
  localStorage.clear(); // clear item
  localStorage.removeItem('class');  //remove item
