const mongoose = require("mongoose")

const SesnspFfSchema = mongoose.Schema
    ({       
        state_name: { type: String },
        law: { type: String },
        concept: { type: String },
        description: { type: String },
        year: { type : Number},
        inegi: { type : Number}
    },
    {
        collection: "SESNSP_FueroFederal_2012-2022", //must match with the collection name from MongoDbAtlas
        timestamps: true
    })

const SesnspFf = mongoose.model("SESNSP_FueroFederal_2012-2022", SesnspFfSchema)
module.exports = SesnspFf

 
   
  