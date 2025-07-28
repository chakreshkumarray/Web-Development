//Logical AND (&&) Operator
let i=0, j=2, k=3, l=8;
console.log(Boolean(i && j));
console.log(Boolean(j && k && l));

// Logical OR (||) Operator
let i1 =1;
let j1 =null;
let k1 =undefined;
let l1 =0;
console.log(Boolean(j || k));
console.log(Boolean(i || l));

// Logical NOT (!) operator
let i2 = 0;
console.log(!i2);
console.log(!!i2);

//Nullish Coalescing (??) Operator
let username = null;
let defaultName = "Chakresh";
let displayName = username ?? defaultName;
console.log(displayName);