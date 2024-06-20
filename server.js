const inquirer = require("inquirer");

inquirer
    .prompt([

        {
            type: 'input',
            message: 'What would you like to do?',
            choices: ['Add employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
            name: 'choices',
        },
    ])


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
