// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

//Requiring Employee.js file
const Employee = require("./Employee")

// Extension of parent class Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //  super used to call the Employee constructor function
        super(name, id, email)
        this.github = github
    }

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;
