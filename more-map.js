const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brand', 'Tom Solaiman'];
const fLengths = friends.map(f => f.length);
console.log(fLengths);
friends.forEach(f => console.log(f.length));


const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky notes', price: 30, color: 'lime' },
    { name: 'water glass', price: 3, color: 'whites' },
]
const productName = products.map(product => product.name);
// console.log(productName)
// products.map(product => console.log(product))