const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql'); // Import the MySQL package
const userRoutes = require('./routes/user');

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost', // or your MySQL host
    user: 'root', // your MySQL username
    password: 'Sai@1812', // your MySQL password
    database: 'yourdatabase' // your MySQL database name
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database!');
});

// Middleware to serve static files from "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Basic route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Query to check user credentials in the database
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.send('<h1>An error occurred. Please try again later.</h1>');
            return;
        }

        // If a user is found
        if (results.length > 0) {
            res.send('<h1>Login successful!</h1>');
        } else {
            res.send('<h1>Login failed. Please try again.</h1>');
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
