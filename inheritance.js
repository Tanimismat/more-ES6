class TeamMember {
    name;
    designation = 'Support web dev';
    address;
    constructor(name, address) {
        this.name = name;
        this.address = address
    }
}


class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, this.address, 'start a support session')
    }
}

class StudentCare extends TeamMember {
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student)
    }
}
class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version)
    }
}


const amir = new Support('Amir Khan', 'BD', '10:00');
const salman = new Support('Solaiman Khan', 'USA');
const srk = new Support('SRK', 'Dubai');

const alia = new StudentCare('Alia Bhatt', 'Mumbai');

const malia = new NeptuneDev('Malia Hasan', 'China', 'Android Studio')
malia.releaseApp('1.4.5')
console.log(malia)
