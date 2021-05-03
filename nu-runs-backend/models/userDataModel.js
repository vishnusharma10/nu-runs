const mongoose = require("mongoose");
const userDataSchema = new mongoose.Schema({
    email:String,
    userId: mongoose.Schema.Types.ObjectId,
    articlesWritten:[mongoose.Schema.Types.ObjectId],
    articlesLiked:[mongoose.Schema.Types.ObjectId],
    enrolledChallenges:[mongoose.Schema.Types.ObjectId],
    enrolledCourses:[mongoose.Schema.Types.ObjectId],
    completedChallenges:[mongoose.Schema.Types.ObjectId],
    completedCourses:[mongoose.Schema.Types.ObjectId],


});

const UserData = mongoose.model("userData",userDataSchema);

module.exports = UserData;