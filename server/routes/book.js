import express from 'express';
import { bookModel } from '../models/Book.js'; 
const router = express.Router();
import {verifyAdmin} from './auth.js';

router.post('/add', verifyAdmin, async (req, res) => { 
    try {
        const { name, author, imageUrl} = req.body;  

        

        const newbook = new bookModel({
            name,
            author,
            imageUrl
        
        });

        await newbook.save();

        return res.json({ added: true });
    } catch (err) {
        return res.json({ message: "Error in adding book", error: err });
    }
});

router.get('/books', async (req,res) => {
    try{
        const books = await bookModel.find()
        return res.json(books)
    }catch(err){
        return res.json(err)
    }
})

router.get('/book/:id', async (req,res) =>{
    
    try{
        const id = req.params.id;
        const book = await bookModel.findById({_id: id});
        return res.json(book)
    }catch(err){
        return res.json(err)
    }
})

router.put('/book/:id', async (req,res) =>{
    
    try{
        const id = req.params.id;
        const book = await bookModel.findByIdAndUpdate({_id: id}, req.body)
        return res.json({updated: true, book})
    }catch(err){
        return res.json(err)
    }
})

router.delete('/book/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const book = await bookModel.findByIdAndDelete({_id:id})
        return res.json({deleted: true, book})
    }catch(err){
        return res.json(err)
    }
})

export { router as bookRouter };
