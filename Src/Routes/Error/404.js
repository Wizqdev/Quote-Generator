// Importing
const express = require('express');
const createError = require('http-errors');

// Initializing
const router = express.Router();

router.use((req, res, next) => {
    res.send((404, {Error:'The Requested URL Was Not Found!'}));
});

// Exporting Router
module.exports = router;
