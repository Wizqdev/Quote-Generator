const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs'); // Corrected import

// Initializing
const router = express.Router();

// Getting Quotes Directory 
const quotesFilePath = "./Src/Quotes";

// Getting All The .txt Files
const Quotes = readQuotesFromFiles(quotesFilePath);

// Function
function readQuotesFromFiles(directory) {
    const files = fs.readdirSync(directory);
    let allQuotes = [];

    files.forEach(file => {
        const filePath = path.join(directory, file);
        if (path.extname(filePath) === '.txt') {
            const fileQuotes = fs.readFileSync(filePath, 'utf-8').split('\n').map(line => line.trim());
            allQuotes = allQuotes.concat(fileQuotes);
        }
    });

    return allQuotes;
}

// Getting The App
router.get('/api/get/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    const randomQuote = Quotes[randomIndex];
    res.json({ Quote: randomQuote });
});

router.get('/api/get/quotes', (req, res) => {
    res.json({ Quotes });
});

// Posting The App
router.post('/api/post/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    const randomQuote = Quotes[randomIndex];
    res.json({ Quote: randomQuote });
});

router.post('/api/post/quotes', (req, res) => {
    res.json({ Quotes });
});


// Exporting Router
module.exports = router;