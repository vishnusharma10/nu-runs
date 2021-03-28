const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email:{type:String,required:true},
    firstname:{type:String},
    lastname:{type:String},
    userType:{type:String},
    passwordHash:{type:String,required:true}
});

const User = mongoose.model("user",userSchema);

module.exports = User;