INSERT INTO department (id, name )
VALUES (001, 'Sales'),
       (002, 'Engineering'),
       (003, 'Finance'),
       (004, 'Legal');
       

INSERT INTO role (id, title, salary, department_id)
VALUES
       (003, 'Lead Engineer', 150000, 2),
       (004, 'Software Engineer', 120000, 2),
       (005, 'Account Manager', 160000, 3),
       (006, 'Accountant', 125000, 3),
       (007, 'Legal Team Leader', 250000, 4),
       (008, 'Lawyer', 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id)
VALUES (001, 'John', 'Doe', 1),
       (002, 'Mike', 'Chan', 1),
       (003, 'Danny', 'Bueno', 2),
       (004, 'David', 'Rodriguez', 2),
       (005, 'Kevin', 'Dominguez', 3),
       (006, 'Joel', 'Pare', 3),
       (007, 'Christian', 'Chavez', 4),
       (008, 'Jeana', 'Chavez', 4);