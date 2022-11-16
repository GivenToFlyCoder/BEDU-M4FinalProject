//we declare schema and model for every collection in MongoDB Atlas
const mongoose = require("mongoose")
const UniqueValidator = require("mongoose-unique-validator")

const FacebookSchema = mongoose.Schema
    ({
        id: { type: Number, unique: true },
        username: { type: String },
        text: { type: String },
        post_text: { type: String },
        shared_text: { type: String },
        created_date: { type: String },
        likes: { type: Number },
        comments: { type: Number },
        shares: { type: Number },
        user_id: { type: Number },
        user_url: { type: String },
        post_url: { type: String },
        clean_text: { type: String },
        link: { type: String },
        image: { type: String },
        images_description: { type: String },
        images_lowquality: { type: String },
        state_name: { type: String }
    },
        {
            collection: "Facebook", //must match with the collection name from MongoDbAtlas
            timestamps: true
        })

FacebookSchema.plugin(UniqueValidator, { message: "Id already exist!" })
const Facebook = mongoose.model("Facebook", FacebookSchema)

module.exports = Facebook