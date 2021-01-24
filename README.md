# Template Engine

This project consists of utilizing object oriented programming to create a template engine for managers to use in order to render a team page. We were tasked to create a parent Employee object and export them to our engineer, intern, and manager classes. The code written to export each class must be able to pass the jest test given in our starter files. After the test pass, we are to create our app.js page with a series of inquirer prompts, node methods, and OOP.

<br><br>

![image](https://user-images.githubusercontent.com/52800632/105619905-0c79d080-5dac-11eb-844c-fa2c5a9040cf.png)

# **Installation**
Install required dependencies
```html
npm install 
```

Track changes and push onto your own Github Repository.

```html
git add .
```
```bash
git commit -m "message"
```
```bash
git push origin main
```

# **Built With**

<ul>
    <li> Node.js - Open-source back-end javascript runetime environment that executes Javascript code out a web broswer</li>
    <li> Inquirer.js - A collection of common interactive command line user interfaces </li>
    <li> Javascript - text based programming languages used both on client-side and server-side</li>
</ul>

# **Code Snippet**

```js 
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
```

```js
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
```
# **Demo Video Link**

https://drive.google.com/file/d/1fdI0F7K8aXg2d9uED1VHvQL_ST2DMADd/view

# **Author**

Ron-Arjay Caluag

[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)
<br>
[Github](https://github.com/ArjayCaluag)

# **License**

The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
