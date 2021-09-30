
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 8000 || process.env.PORT;
const mongoose = require('mongoose');
const router = require('./routes');
const path = require('path');
const mongoURI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/workout'

app.use(express.json());
app.use(express.urlencoded( {extended: false } ));

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

mongoose.connect(process.env.mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}).then( () => {
    app.listen(PORT);
    console.log(`App is now listening at http://localhost:${PORT}!`);
});
