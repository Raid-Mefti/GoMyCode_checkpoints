import mongoose, { Schema, model } from "mongoose";

const movieSchema = new Schema(
    {
        title : {type: String, maxLength: 120, required: true},
        genre : {type: String, maxLength: 120, required: true},
        releaseYear: {
            type: Number, 
            required: true,
            min : 1900,
            max : new Date().getFullYear(),
        },
        reviews: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Review", 
            },    
        ],
    },
    {
        timestamps: true,
    }
)

movieSchema.index({title:1})

movieSchema.statics.findTopRated = async function(){
    return this.find({}).sort({reviews:-1});
}
/* 
Movies Collection:

Create a schema for movies with:
title (String, required).
genre (String, required).
releaseYear (Number, required).
reviews (Array of ObjectIds referencing reviews).
Add an index for title.
Add a static method to find top-rated movies. */