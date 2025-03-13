import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    roll: {type: String},
    username: {type: String, reuired: true, unique:true},
    password:{type: String, required: true},
    grade:{type:String}
})

const studentModel = mongoose.model('Student', studentSchema)
export {studentModel}