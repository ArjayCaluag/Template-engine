// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//Requiring Employee.js file
const Employee = require("./Employee")

// Extension of parent class Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        
        //  super used to call the Employee constructor function
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    officeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager;
