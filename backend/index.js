const express = require('express');
const app = express();
const connectDB = require('./src/config/db')
require('dotenv').config();

connectDB();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/', require('./src/routes/index'))
app.use('/api', require('./src/routes/urls'))

const defaultPort = 4000

app.listen(defaultPort, ()=> {
    console.log(`Server is running at ${defaultPort}`)
})