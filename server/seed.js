


import { Connection } from './db.js';  
import bcrypt from 'bcrypt';
import { adminModel } from './models/Admin.js';

async function AdminAccount() {
    try {
        await Connection();  

        const adminCount = await adminModel.countDocuments();

        if (adminCount === 0) {
            const hashPassword = await bcrypt.hash('adminpassword', 10);
            const newAdmin = new adminModel({
                username: 'admin',
                password: hashPassword,
            });
            await newAdmin.save();
            console.log("Admin account created successfully!");
        } else {
            console.log("Admin account already exists.");
        }
    } catch (err) {
        console.error("Error during admin account creation:", err);
    }
}

AdminAccount();
