const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10)
const smallNumbers2 = numbers.find(number => number < 10)
console.log(smallNumbers);
console.log(smallNumbers2);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky notes', price: 30, color: 'lime' },
    { name: 'water glass', price: 3, color: 'black' },
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive)
const black = products.filter(product => product.color == 'black');
// console.log(black)
