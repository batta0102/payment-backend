const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/process-payment', (req, res) => {
    const { amount, userId, cardNumber, expiryDate, cvv } = req.body;
    if (amount && userId && cardNumber && expiryDate && cvv) {
        res.status(200).json({ message: 'Payment successful', status: 'success' });
    } else {
        res.status(400).json({ message: 'Payment failed: Missing fields', status: 'failed' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

