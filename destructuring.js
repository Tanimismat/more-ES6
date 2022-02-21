const fish = {
    id: 58,
    name: 'King Hilsha',
    dress: 'silver',
    price: 5000,
    address: 'Chandpur',
    phone: '0178888899',
}

const { price, name, address, id } = fish;

// console.log(price, id, address);

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
        framework: 'react'
    },
};
// const work = company.web.work

const { framework, work } = company.web;
const { food } = company.ceo
console.log(framework, work, food)
