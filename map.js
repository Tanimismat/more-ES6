const numbers = [4, 6, 8, 10];
// double the elements of array and put them in another array
const output2 = [];

/* function doubleOld(number) {
    return number * 2;
} */

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number)
    output2.push(result);
}
console.log('output using loop', output2)

// const output = numbers.map(doubleIt);
const output = numbers.map(number => number * 2);
console.log('using map', output)

const squares = numbers.map(x => x * x);
console.log('squares', squares)

