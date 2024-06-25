const inquirer = require("inquirer");
const db = require('./connection');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5432;

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
            init();
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
            init();
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
            init();
           
        })

}

// this would be our ASYNC request to our database (for data)
function getAllDepartmentsDB() {
    const sql = "SELECT * FROM department;";

    db.query(sql, (err, { rows }) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.table(rows);
        init();

    });
};

    // views the role database
function viewRoleDB() {
    const query = 'SELECT * FROM role;';
    db.query(query, (err, { rows }) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.table(rows);
        init();
    });
}
// views the employee database
function viewAllEmployees() {
    const query = 'SELECT * FROM employee;';
    db.query(query, (err, { rows }) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.table(rows);
        init();
    });
}

function updateEmployee() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'which employees role do you want to update?',
                choices: ['John Doe', 'Mike Chan', 'Danny Bueno', 'David Rodriguez', 'Kevin Dominguez', 'Joel Pare', 'Christian Chavez', 'Jeana Chavez'],
                name: 'updateEmp'
            },
            {
                type: 'list',
                message: 'which role do you want to assign the selected employee?',
                choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'],
            }
        ])
        .then(() => {
            init();
        });

    const query = 'SELECT first_name FROM employee;';
    db.query(query, (err, { rows }) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.table(rows)
    });
}


function init() {
    inquirer
        .prompt([

            {
                type: 'list',
                message: 'What would you like to do?',
                choices: ['Add employee', 'View All Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'exit'],
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
                    getAllDepartmentsDB();
                    break;
                case 'View All Roles':
                    viewRoleDB();
                    break;
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'Update Employee Role':
                    updateEmployee();
                    break;
                case 'exit':
                    process.exit();
                    break;
            }
            
        });
};

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    init();
    
});
