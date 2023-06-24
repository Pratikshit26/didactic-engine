require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use('/', routes)

mongoose.connect(mongoString);

const database = mongoose.connection;

// Checking for DB connection

database.once('connected', (error,result) => {
    console.log('Database Connected');
 });

database.on('error', (error) => {
    console.log(error)
});


// Server listening to PORT*

app.listen("3000", () => {
    console.log(`Server Started at ${3000}`);
    
})