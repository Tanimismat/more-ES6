// destructuring array
const [p, q] = [45, 87, 66, 21, 43];
// console.log(q, p)

// destructuring object
const { sky, color } = { sky: 'blue', soil: 'matti', color: 'red', money: 50 };
// console.log('color:', color)

// chaining
const company = {
    name: 'GP',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'pizza'
    },
    web: {
        work: 'web dev',
        employee: 2,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'JS'
        },
    },
};
// console.log(company.web.tech.first)
console.log(company?.backend?.tech.first)