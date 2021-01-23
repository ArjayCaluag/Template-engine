// TODO: Write code to define and export the Employee class

// Parent class that will be shared with engineer, intern, and manager js files.
class Employee {
    constructor(name, id, email) {
        this.name = name,
            this.id = id,
            this.email = email
    }

    // get functions to retrn
    getName() {
        return this.name;
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }

}

// Export making available to other files.
module.exports = Employee;