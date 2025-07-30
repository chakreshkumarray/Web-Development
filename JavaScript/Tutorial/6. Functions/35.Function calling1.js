function product(a,b)
{
  return a*b;
}
let result=product.call(this,20,5);
console.log(result);