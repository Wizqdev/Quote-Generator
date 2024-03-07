//Importing
const express = require('express');

// Initializing
const router = express.Router();
  



const Routes = require('./Routes/index');
router.use(Routes)


// Exporting Routers
module.exports = router;