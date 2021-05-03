const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
    title: String,
    coursesUrls:[Object],
    workoutCount:Number,
    participants:[mongoose.Schema.Types.ObjectId]
});

const Course = mongoose.model("Course",courseSchema);

module.exports = Course;