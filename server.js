const inquirer = require("inquirer");
const db = require('./connection');
// const prompts = new Rx.Subject();
// inquirer.prompt(prompts);
function addEmployeeDB() {
    inquirer
        .prompt([

            {
                type: 'input',
                message: 'enter first name?',
                name: 'firstName'
            },
            {
                type: 'input',
                message: 'enter last name?',
                name: 'lastName'
            },
            {
                type: 'input',
                message: 'enter role id?',
                name: 'role'
            },
            {
                type: 'confirm',
                message: 'Add another employee?',
                name: 'newEmployee'
            },
            // {
            // //     type: 'input',
            // //     message: 'enter first name?',
            // //     name: 'name'
            // // },
        ])
        // call on DB inquierer docu look into 'options'
        .then((answers) => {
            console.log(answers.confirm);
    })
    
}

function addRoleDB() {
      inquirer
        .prompt([

            {
                type: 'input',
                message: 'what is the name of the role?',
                name: 'role'
            },
            {
                type: 'input',
                message: 'enter the salary of the role?',
                name: 'salary'
            },
            {
                type: 'list',
                message: 'What department does the role belong to?',
                choices: ['Engineering', 'Finance', 'Legal', 'Sales', 'Service'],
                name: 'departmentName'
            },
            {
                type: 'confirm',
                message: 'Add new role?',
                name: 'newRole'
            },
        ])
        .then((answers) => {
            console.log(answers);
        })

}

function addDepartment() {
    inquirer
        .prompt([

            {
                type: 'input',
                message: 'What is the name of the department?',
                name: 'addDepartment'
            },
        ])
        .then((answers) => {
            console.log(answers);  // { addDepartment: "Test" }
            // this would be our ASYNC request to our database (for data)
            db.query("SELECT * FROM department;", function (error, data) {
                if (error) {
                    console.log("error: ", error)
                }

                console.log("data: ", data)
            })
        })

}
function init() {
    inquirer
        .prompt([

            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ['Add employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
                name: 'choices',
            },
        ])
        .then((answers) => {
            console.log(answers.choices);
            
            const userResponse = answers.choices;

            switch (userResponse) {
                case 'Add employee':
                    addEmployeeDB();
                    break;
                case 'Add Role':
                    addRoleDB();
                    break;
                case 'Add Department':
                    addDepartment();
                    break;
            }

    })
};

// // index.js
// const inquirer = require('inquirer');

// // Define your questions
// const questions = [
//     {
//         type: 'list',
//         name: 'choice',
//         message: 'What do you want to do?',
//         choices: [
//             'Option 1',
//             'Option 2',
//             'Option 3'
//         ]
//     },
//     {
//         type: 'input',
//         name: 'inputValue',
//         message: 'Enter something:',
//         when: answers => answers.choice === 'Option 1'  // Show this question only if Option 1 is selected
//     },
//     {
//         type: 'confirm',
//         name: 'confirmValue',
//         message: 'Are you sure?',
//         when: answers => answers.choice === 'Option 2'  // Show this question only if Option 2 is selected
//     }
// ];

// // Function to start prompting
// function startPrompt() {
//     inquirer.prompt(questions)
//         .then(answers => {
//             console.log('Answers:', answers);
//             // Handle answers here based on your logic
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

// // Start prompting
// startPrompt();




// function startPrompt() {
//     inquirer.prompt(questions)
//         .then(answers => {
//             console.log('Answers:', answers);
//             // Handle answers here based on your logic
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }
init();