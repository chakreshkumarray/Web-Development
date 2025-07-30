let user={
"  firstname":'sam',
 "lastname":'kumar',
  "address":'bhabhot',
  "class":'B.Tech',
  "RollNo":'205423',
}
console.log(typeof(user));
console.log(user);


//Convert in string by using  JSON.stringify()
let ck=JSON.stringify(user);
console.log(typeof ck);
console.log(ck);

//Convert in Object by using JSON.parse()
let ak=JSON.parse(user);
console.log(typeof ak);
console.log(ak);

//Looping through JSON Object
let myOrder, a;
myOrder = {
    "product": "earbuds",
    "cost": "799",
    "warranty": "1 year"
};
for (a in myOrder) 
{
    console.log(myOrder[a]);
}

