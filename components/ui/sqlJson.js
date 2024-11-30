const fs = require('fs');
const mysql = require('mysql2');

// Read JSON data
const jsonData = JSON.parse(fs.readFileSync('data.json'));

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'your_database'
});

// Connect to the database
connection.connect(err => {
    if (err) throw err;
    console.log('Connected to the database.');

    // Insert data
    jsonData.forEach(item => {
        const query = 'INSERT INTO my_table (name, age) VALUES (?, ?)';
        connection.query(query, [item.name, item.age], (err, results) => {
            if (err) throw err;
            console.log(`Inserted: ${item.name}`);
        });
    });

    // Close the connection
    connection.end();
});