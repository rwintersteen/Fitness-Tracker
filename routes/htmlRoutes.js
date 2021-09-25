const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/exercise.html'));
    res.status(200);
});

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/stats.html'));
    res.status(200);
});

router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    res.status(200);
})

module.exports = router;