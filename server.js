const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files like CSS, JS, images
app.use(express.static(path.join(__dirname)));

// Hardcoded users data
const users = {
    "YASH": { password: "yash123", role: "student" },
    "SAMIRON": { password: "samiron123", role: "student" },
    "GORGE": { password: "gorge123", role: "teacher" },
    "MICHEL": { password: "michel123", role: "teacher" }
};

// Serve login.html as the default page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Route for handling login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users[username];

    if (user && user.password === password) {
        // Redirect based on role
        if (user.role === "student") {
            res.redirect('/student');
        } else if (user.role === "teacher") {
            res.redirect('/teacher');
        }
    } else {
        res.status(401).send('Invalid username or password');
    }
});

// Route for student dashboard
app.get('/student', (req, res) => {
    res.sendFile(path.join(__dirname, 'student.html'));
});

// Route for teacher dashboard
app.get('/teacher', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
