// client_detailsController.js

const db = require('../config/db'); // Make sure this is the correct path to your db file

exports.enrollClient = (req, res) => {
    const { name, gender, age, email } = req.body;

    // Simple validation
    if (!name || !gender || !age || !email) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Assuming you have a function to insert data into your database
    const query = 'INSERT INTO client_details (name, gender, age, email) VALUES (?, ?, ?, ?)';
    db.query(query, [name, gender, age, email], (error, results) => {
        if (error) {
            console.error('Database error:', error); // Log the error for debugging
            return res.status(500).json({ message: 'An error occurred while enrolling the client.' });
        }

        res.status(201).json({ message: 'Client enrolled successfully!', id: results.insertId });
    });
};
