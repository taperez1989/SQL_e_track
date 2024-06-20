DROP DATABASE IF EXISTS employee_tracker_db;
-- Creates the "employee_tracker_db" database --
CREATE DATABASE employee_tracker_db;

-- Use the employee_tracker_db --
\c employee_tracker_db;

-- Creates the table "department" within employee_tracker_db --
CREATE TABLE department (
  -- Creates a numeric column called "id" --
  id  SERIAL PRIMARY KEY,
  -- holds department name --
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  -- Creates a numeric column called "id" --
  id  SERIAL PRIMARY KEY,
-- role title
  title VARCHAR(30) UNIQUE NOT NULL,
-- hold role salaru
  salary DECIMAL NOT NULL,
  -- to hold referenceto department role belongs to --
  department_id INTEGER NOT NULL
);

CREATE TABLE employee (
  -- Creates a numeric column called "id" --
  id  SERIAL PRIMARY KEY,
-- hold employee first name
  first_name VARCHAR(30) NOT NULL,
-- hold employee last name
  last_name VARCHAR(30) NOT NULL,
-- hold reference to employee role
  role_id INTEGER NOT NULL,
-- hold reference to another employee that is the manager of the current employee(null if the employee has no manager)
  manager_id INTEGER
);