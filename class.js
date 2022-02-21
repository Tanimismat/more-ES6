// creating class to construct object
class Support {
    instructorName;
    designation = 'Support web dev';
    address;
    constructor(name, address) {
        this.instructorName = name;
        this.address = address
    }
    startSession() {
        console.log(this.instructorName, this.address, 'start a support session')
    }
}
const amir = new Support('Amir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'USA');
amir.startSession();
salman.startSession();
// console.log(amir)
// console.log(salman)