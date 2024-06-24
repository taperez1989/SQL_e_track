const inquirer = require("inquirer");
const db = require('./connection');


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
                type: 'list',
                message: 'enter employees role?',
                choices: ['Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Leader', 'Lawyer'],
                name: 'role'
            },
            {
                type: 'confirm',
                message: 'Add another employee?',
                name: 'newEmployee'
            },
            // {
            // //     type: 'list',
            // //     message: 'Who is the employees manager?',
                    // choice: []
            // //     name: 'manager'
            // // },
        ])
        // call on DB inquierer docu look into 'options'
        .then((answers) => {
            console.log(answers.confirm);
    })
    
}

// adds role to database
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

// adds department to database
function addDepartment() {
    inquirer
        .prompt([

            {
                type: 'input',
                message: 'What is the name of the department?',
                name: 'addDepartment'
            },
        ])
        .then((data) => {
            console.log(data); 
           
        })

}

// this would be our ASYNC request to our database (for data)
// function departmentsDB() {
//     db.query("SELECT * FROM department;", function (error, data) {
//         if (error) {
//             console.log("error: ", error)
//         }

//         console.log("data: ", data)
//     })
// }

//     // views the role database
// function viewRoleDB() {
//     const query = 'SELECT * FROM role';
//     db.query(query, function (error, data) {
//         if (error) {
//             console.log("error: ", error)
//             db.end();
//         }

//         console.log("data: ", data)
//     });
// }

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
                case 'View All Departments':
                    // departmentsDB();
                        fetch('/api/departments', {
                            method: 'GET',
                        })
                            .then((res) => res.json())
                            .then((data) => data);
                    break;
                case 'View All Roles':
                    viewRoleDB();
                    break;
            }

    })
};

init();