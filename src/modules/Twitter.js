const mongoose = require("mongoose")

const TwitterSchema = mongoose.Schema
    ({
        id: { type: Number },       
        created_date: { type: Map }, 
        user_screen_name: { type: String },
        state_name: { type: String },
        text: { type: Date },
        clean_text: { type: String },
        url: { type: String },
        location: {type: String},     
        hashtags: {type: String},
        user_mentions: {type: String}
    },
    {
        collection: "Twitter", //must match with the collection name from MongoDbAtlas
        timestamps: true
    })

const Twitter = mongoose.model("Twitter", TwitterSchema)
module.exports = Twitter

 
   
  