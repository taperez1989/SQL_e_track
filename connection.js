const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'Opti_20202',
    database: 'employee_tracker_db',
    port: 5432
},
    console.log("database Connected!")
);

module.exports = pool;