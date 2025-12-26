const express = require('express');
const path = require('path');
const rateLimit = require('express-rate-limit');
const app = express();

// Set the port from environment variable or default to 3000
const PORT = process.env.PORT || 3000;

// Rate limiting middleware
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

// Apply rate limiting to all routes
app.use(limiter);

// List of allowed files to serve
const allowedFiles = ['index.html', 'styles.css', 'script.js'];

// Serve specific static files only
allowedFiles.forEach(file => {
    app.get(`/${file}`, (req, res) => {
        res.sendFile(path.join(__dirname, file));
    });
});

// Route to serve index.html as the root
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler for any other routes
app.use((req, res) => {
    res.status(404).send('Not Found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`📚 Story Time server is running on port ${PORT}`);
    console.log(`🌐 Visit http://localhost:${PORT} to view the application`);
});
