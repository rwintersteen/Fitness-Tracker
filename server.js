const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "", { useNewUrlParser: true });

app.listen(PORT, () => 
    console.log(`App is now listening at http://localhost:${PORT}!`))