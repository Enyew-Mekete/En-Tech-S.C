
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection Pool - Using environment variables is recommended in production
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '@yagg2121',
    database: process.env.DB_NAME || 'entech_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test Connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error('CRITICAL: Error connecting to MySQL:', err.message);
        return;
    }
    console.log('SUCCESS: Connected to MySQL database "entech_db".');
    connection.release();
});

// API endpoint for contact form submissions
app.post('/api/contact', (req, res) => {
    const { name, email, phone, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields: name, email, and message are mandatory.' });
    }

    const query = 'INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)';
    
    pool.query(query, [name, email, phone, message], (err, results) => {
        if (err) {
            console.error('Database Insertion Error:', err);
            return res.status(500).json({ error: 'Internal Server Error: Failed to save contact information.' });
        }
        res.status(200).json({ 
            success: true, 
            message: 'Message received successfully!', 
            referenceId: results.insertId 
        });
    });
});

// API endpoint for fetching live stats
app.get('/api/stats', (req, res) => {
    const query = 'SELECT label, stat_value as value FROM company_stats ORDER BY id ASC';
    
    pool.query(query, (err, results) => {
        if (err) {
            // If DB fails, return fallback mock data
            return res.json([
                { label: 'Happy Clients', value: 1240 },
                { label: 'Project Success', value: 98 },
                { label: 'Tech Experts', value: 85 },
                { label: 'Cities Covered', value: 12 },
            ]);
        }
        res.json(results);
    });
});

// Health Check
app.get('/health', (req, res) => {
    res.status(200).send('Server is healthy');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`En-Tech API Server is running on port ${PORT}`);
});
