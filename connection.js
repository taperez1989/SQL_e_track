const express = require('express');
const { Pool } = require('pg');

const PORT = process.env.PORT || 5432;
const app = express();

const pool = new Pool({
    host: 'loccalhost',
    user: 'postgres',
    password: 'Opti_20202',
    database: 'employee_tracker_db',
    port: 5432
},
    console.log("database Connected!")
);

const connection = pool.connect();

// Read list of all reviews and associated movie name using LEFT JOIN
app.get('/api/department', (req, res) => {
    const sql = ("SELECT * FROM department;");
    pool.query(sql, (err, { rows }) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = connection;