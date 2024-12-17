const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 10000; 

app.use(cors());
app.use(bodyParser.json());

// Function to generate a unique transaction ID
function generateTransactionId() {
    return 'txn_' + Math.random().toString(36).substr(2, 9);
}

app.post('/process-payment', (req, res) => {
    const { amount, userId, cardNumber, expiryDate, cvv } = req.body;

    if (amount && userId && cardNumber && expiryDate && cvv) {
        // Generate a unique transaction ID
        const transactionId = generateTransactionId();

        // Respond with a success status and transaction ID
        res.status(200).json({ 
            message: 'Payment successful', 
            status: 'success', 
            transactionId: transactionId
        });
    } else {
        res.status(400).json({ 
            message: 'Payment failed: Missing fields', 
            status: 'failed' 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


