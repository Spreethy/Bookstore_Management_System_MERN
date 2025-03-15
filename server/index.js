import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { AdminRouter } from "./routes/auth.js";
import {studentRouter} from './routes/student.js'
import { bookRouter } from './routes/book.js';
import { adminModel } from './models/Admin.js';  
import { studentModel } from './models/Student.js';
import { bookModel } from './models/Book.js';  





const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));
app.use(cookieParser());

dotenv.config();

app.use('/auth', AdminRouter);
app.use('/student', studentRouter)
app.use('/book', bookRouter)

app.get('/dashboard', async (req,res) => {
    try{
        const student= await studentModel.countDocuments()
        const admin = await adminModel.countDocuments()
        const book= await bookModel.countDocuments()
        return res.json({ok: true, student,book,admin})
    }catch(err){
        return res.json(err)
    }
})

const Connection = async () => {
    try {
        console.log("Attempting to connect to MongoDB...");
        await mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,  
        });
        console.log("Successfully connected to MongoDB.");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err.message);
    }
};

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port", process.env.PORT || 5000);
    Connection(); 
});
