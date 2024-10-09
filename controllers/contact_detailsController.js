const db = require('../config/db');

// Contact form submission
exports.submitContact = (req, res) => {
    const { firstName, lastName, contactNumber, contactEmail } = req.body;
    const query = 'INSERT INTO contacts (firstName, lastName, contactNumber, contactEmail) VALUES (?, ?, ?, ?)';
    db.query(query, [firstName, lastName, contactNumber, contactEmail], (err, result) => {
        if (err) {
            console.log('Error:', err);
            res.status(500).send('Error submitting contact');
        } else {
            res.status(200).send('Contact submitted successfully');
        }
    });
};
