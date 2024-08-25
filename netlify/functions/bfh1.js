const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "soumyojyoti_saha_29122001";
    const email = "soumyojyotisaha2001offic@gmail.com";
    const roll_number = "21BCE4007";

    let numbers = [];
    let alphabets = [];
    let highest_lowercase = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (/[a-z]/.test(item) && item > highest_lowercase) {
                highest_lowercase = item;
            }
        }
    });

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: roll_number,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highest_lowercase ? [highest_lowercase] : []
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Export the serverless function
module.exports.handler = serverless(app);
