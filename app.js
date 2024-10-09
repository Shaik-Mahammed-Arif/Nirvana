// const express = require('express');
// const bodyParser = require('body-parser');
// const clientRoutes = require('./routes/client_detailsRoutes');
// const contactRoutes = require('./routes/contact_detailsRoutes');
// const app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Use the client and contact routes
// app.use(clientRoutes);
// app.use(contactRoutes);

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const clientRoutes = require('./routes/client_detailsRoutes'); // Ensure the path is correct

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Routes
app.use('/api', clientRoutes); // Prefix API routes

// Serve the client HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/client.html'); // Adjust the path based on where your client.html is located
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

