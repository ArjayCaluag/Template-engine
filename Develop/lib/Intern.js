// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//Requiring Employee.js file
const Employee = require("./Employee")

// Extension of parent class Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        //  super used to call the Employee constructor function
        super(name, id, email)
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;