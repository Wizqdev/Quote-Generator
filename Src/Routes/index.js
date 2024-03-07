// Importing
const express = require('express');

// Initializing
const router = express.Router();

// Importing Routes
    // Error Routes
    const errorHandler404 = require('./Error/404');
    const quoteRoutes = require('./quote');

// Setting Router
    // Error Router
    router.use("/", quoteRoutes);
    router.use("*", errorHandler404);


// Exporting Router
module.exports = router;
