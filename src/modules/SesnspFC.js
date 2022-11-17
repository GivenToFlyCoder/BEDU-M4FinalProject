const mongoose = require("mongoose")

const SesnspFcSchema = mongoose.Schema
    ({
        year: { type: Number },
        key_entity: { type: Number },
        state_name: { type: String },
        affected: { type: String },
        crime: { type: String },
        subcrime: { type: String },
        modality: { type: String }
    },
        {
            collection: "SESNSN_FueroComunEstatal", //must match with the collection name from MongoDbAtlas
            timestamps: true
        })

const SesnspFc = mongoose.model("SESNSN_FueroComunEstatal", SesnspFcSchema)
module.exports = SesnspFc





