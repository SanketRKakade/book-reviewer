const mongoose = require('mongoose');
const dotenv = require('dotenv');
const e = require('express');
dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URI, 
        )
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;