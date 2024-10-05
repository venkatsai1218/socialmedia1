const express = require('express');
const router = express.Router();

// User profile route
router.get('/profile', (req, res) => {
    res.send('<h1>User Profile Page</h1><p>Here is the user profile information.</p>');
});

module.exports = router;
