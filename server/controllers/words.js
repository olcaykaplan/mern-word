import mongoose from "mongoose";
import Word from '../models/word.js';

export const getWords = async (req, res) => {
    try {
        const words = await Word.find();
        res.status(200).json(words);
    }
    catch (error) {
        console.log(error);
    }
}

export const createWord = async (req, res) => {
    const wordData = req.body;
    const newWord = new Word(wordData);
    try {
        if(!req.userId) return res.json({message: "Unauthenticated!"});
        await newWord.save();
        res.status(200).json(wordData);
    }
    catch (e){
        res.status(409).json({message: error.message});
    }
}

export const uploadWordsCollectively = async (req, res) => {
    const uploadData = req.body;
    // NAME WILL BE CHECKED IT IS EXIST IN DB OR NOT
    try{
        if(!req.userId) return res.json({message: "Unauthenticated!"})
        console.log("uploadData", uploadData);
       const data = await Word.insertMany(uploadData);
       console.log("data insertMany",data);
       //res.status(200);
    }
    catch (err){
        res.status(409).json({message: err.message});
    }
}

//LIKE wil be here