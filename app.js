// db username = piyush-jobportal
// p/w = jobportal
// mongodb+srv://piyush-jobportal:jobportal@cluster0.0pdtyn8.mongodb.net/jobportal

const express = require('express'); //common js
// import express from 'express'; //module.js
// import dotenv from 'dotenv'
// dotenv.config()

require('express-async-errors');
const connectDB = require('./config/db');
connectDB();

const cors = require('cors');
const morgan = require('morgan');

//routes import
const testRoutes = require('./routes/testRoutes');
const authRoutes = require('./routes/authRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');


const app = express();

//middleware - 

app.use(express.json());
//this m/w used when we are dealing with json data and tell  about json data to application
app.use(require('body-parser').json()); 

app.use(cors());
app.use(morgan('dev'));

const port=process.env.PORT || 8080;

// app.get('/', (req,res)=>{
//     res.send("Welcome to JOB PORTAL!");
// })

app.use('/api/v1/test', testRoutes);
app.use('/api/v1/auth', authRoutes);

//validation middleware

app.use(errorMiddleware)

app.listen(port, ()=>{
    console.log(`server running on port no ${port}`);
})