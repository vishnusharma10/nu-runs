const mongoose = require("mongoose");

const challengeSchema = mongoose.Schema({
    distance:Number,
    desc:String,
    challengeType:String,
    title: String,
    startingDate:Date,
    endingDate:Date,
    img:String,
    winners:[mongoose.Schema.Types.ObjectId],
    participants:[mongoose.Schema.Types.ObjectId]
});

const Challenge = mongoose.model("challenge",challengeSchema);

module.exports = Challenge;