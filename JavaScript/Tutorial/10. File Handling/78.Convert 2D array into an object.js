/*JavaScript – Convert Two-Dimensional Array Into an Object*/

const a = [['name', 'Chakresh'], ['age', 25], ['city', 'Sultanpur UP']];
const obj = {};
for (let i = 0; i < a.length; i++) {
    const [key, val] = a[i];
    obj[key] = val;
}
console.log(obj);