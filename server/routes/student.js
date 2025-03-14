import express from 'express';
import { studentModel } from '../models/Student.js'; 
import bcrypt from 'bcrypt';
const router = express.Router();
import {verifyAdmin} from './auth.js';

router.post('/register', verifyAdmin, async (req, res) => { 
    try {
        const { username, password, grade, roll } = req.body;  
        const student = await studentModel.findOne({ username });  

        if (student) {
            return res.json({ message: "Student is already registered" });  
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newStudent = new studentModel({
            username,
            password: hashPassword,
            roll,  
            grade
        });

        await newStudent.save();

        return res.json({ registered: true });
    } catch (err) {
        return res.json({ message: "Error in registering student", error: err });
    }
});

export { router as studentRouter };
