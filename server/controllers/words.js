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
//    console.log(newWord);
    try {
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
        console.log("uploadData", uploadData);
       const data = await Word.insertMany(uploadData);
       console.log("data insertMany",data);
       //res.status(200);
    }
    catch (err){
        res.status(409).json({message: err.message});
    }

    /*
    const jobQuerys = [];

const { category: categories, title, postDescription: description } = req.body;

// save category
categories.forEach(title => {
  const category = new Category({ title })
  jobQuerys.push(category.save());
});

// get all category was saved
const categoriesResult = await Promise.all(jobQuerys);

// category id temporary
const arrCategoryId = [];

// add category._id to arrCategoryId
categoriesResult.forEach(category => {
  arrCategoryId.push(category._id);
});

// save game with categoryId
const game = new Game({ title, description, category: arrCategoryId });
const result = await game.save();

// show result
console.log(result);

     */
}