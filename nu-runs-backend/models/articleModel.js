const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
    "name": String,
    title: String,
    content: String,
    upvotes: Number,
    comments: [String],
    author: String
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;