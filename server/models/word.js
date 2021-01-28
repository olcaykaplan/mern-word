import mongoose from "mongoose";

const wordSchema = mongoose.Schema({
    name: String,
    description: String,
    examples:[String],
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
});

const Word = mongoose.model("Words",wordSchema);

export default  Word;