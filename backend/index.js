require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// Main App
const app = express();

// Database File
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(morgan('dev'));

app.use(express.urlencoded({ extended : false }));
app.use(express.json());

// Routes
app.use('/api/fit', require('./routes/fit'));

//  Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Server
app.listen(app.get('port'), () => {
    console.log(`Server up on ${app.get('port')}`);
});

