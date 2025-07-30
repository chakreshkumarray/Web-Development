/*JavaScript – Create an Object From Two Arrays*/

const a1 = ['name', 'age', 'city'];
const a2 = ['Chakresh Kumar Ray', 25, 'Sultanpur UP'];
const res = {};
a1.forEach((key, index) => {
    res[key] = a2[index];
});
console.log(res);