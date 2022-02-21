// 2. default parameter
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
// const myArray = [2, 4, 6, 7, 54, 9];
const myMax = maxNumber()
console.log(myMax)