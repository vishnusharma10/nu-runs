const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    name:String,
    title: String,
    content: String,
    upvotes: Number,
    comments: [String],
    author: mongoose.Schema.Types.ObjectId
});

const Post = mongoose.model("Post",postSchema);

module.exports = Post;