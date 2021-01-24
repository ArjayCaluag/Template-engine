const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
// Empty array to store inquirer responses
const teamArray = [];

addManager()

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your manager id?'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your email address? '
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: 'What is your office number?'
        }
    ]).then(res => {
        // Create new instance of Manager object
        const manager = new Manager(res.managerName, res.managerId, res.managerEmail,
            res.managerOffice)

        // push inquirer response to store in empty array
        teamArray.push(manager);
        addMember();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'What is your id?'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is your github username?'
        }
    ]).then(res => {
        // Create new instance of Engineer object
        const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.engineerGithub)
        // push inquirer response to store in empty array
        teamArray.push(engineer);
        addMember();

    })
}


function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is your id?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What School did you attend?'
        }
    ]).then(res => {
        // Create new instance of Intern object
        const intern = new Intern(res.internName, res.internId, res.internEmail, res.internSchool)
        // push inquirer response to store in empty array
        teamArray.push(intern);
        addMember();

    })
}

// This function is passed in at the end of the addManager, addEnginer, and addIntern function to prompt the user to add more engineers, interns, or build team.
function addMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of member would you like to add?',
            choices: ["Intern", "Engineer", "Done, build my team"]
        },

    // switch cases based on what user chooses from list. 
    // 'Engineer' returns addEngineer function, 'Intern' returns addIntern function, 'Done' finishes prompt and builds team html page.
    ]).then(res => {
        switch (res.addMember) {
            case 'Engineer':
                return addEngineer();

            case 'Intern':
                return addIntern();

            case 'Done, build my team':
                return buildTeam();

        }
    })
}

//  buildTeam function with writeFile method that uses outputPath as its data, renders the page with all of the inputs pushed into the team array.
function buildTeam(){
    fs.writeFileSync(outputPath,render(teamArray), 'utf8')
}


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
