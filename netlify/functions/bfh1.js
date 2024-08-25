const express = require('express');
const app = express();

app.use(express.json());

// POST /bfhl route
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const user_id = "soumyojyoti_saha_29122001";
    const email = "soumyojyotisaha2001offic@gmail.com";
    const roll_number = "21BCE4007";
    let numbers = [];
    let alphabets = [];
    let highestLowercase = "";

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string') {
            alphabets.push(item);
            if (item >= 'a' && item <= 'z' && item > highestLowercase) {
                highestLowercase = item;
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
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    });
});

// GET /bfhl route
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
