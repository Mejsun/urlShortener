require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./config/db')
connectDB()

const defaultPort = process.env.BASE || 5000

app.listen(()=> {
    console.log(`Server is running on ${defaultPort}`)
})