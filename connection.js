const { Pool } = require('pg');

const pool = new Pool({
    host: 'loccalhost',
    user: 'postgres',
    password: '',
    database: 'employee_tracker_db',
    port: 5432
},
    console.log("database Connected!")
);

const connection = pool.connect();

module.exports = connection;