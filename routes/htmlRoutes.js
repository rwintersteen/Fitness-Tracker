const path = require('path');

module.exports = function(app) {

app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/exercise.html'));
    res.status(200);
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/stats.html'));
    res.status(200);
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    res.status(200);
})

};