require("dotenv").config();
import express, { response } from "express";
import bodyParser from "body-parser";
import {MongoClient} from "mongodb";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltrounds = 10;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    //0 for Trainer and 1 for Trainee
    userType:Number,
    //This will be used for email verfication
    active:Boolean
});

const User = new mongoose.model("User",userSchema);



const withDB =async(operations)=>{
    try{
        const client = await MongoClient.connect("mongodb://localhost:27017",{useNewUrlParser:true,useUnifiedTopology:true});
        const db = client.db("nuruns");
        await operations(db);
        }
     catch(err){
            res.status(500).json({message:"Error connecting to db",err});
        }
    
}

app.get("/login",function(req,res){
    res.send("Login Here");
});

app.post("/login",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    withDB((db)=>{
        db.collection("users").findOne({"username":username},function(err,foundUser){
            if(err) return console.log(err);
            else{
                if(foundUser){
                    bcrypt.compare(password,foundUser.password,function(err,result){
                        if(err) return console.log(err);
                        else if(result === true){
                            res.send("Hey you logged in recently")
                        }
                    });
                }
            }
        })
    })
    
});
app.get("/register",function(req,res){
    res.send("Register Here");
});

app.post("/register",function(req,res){
    const password = req.body.password;
    const username = req.body.username;
    withDB(async(db)=>{
        bcrypt.hash(password,saltrounds,async(err,hash)=>{
            const existingUser = await db.collection("users").findOne({username:username});
            const newUser = new User({username:username,password:hash,userType:1,active:false});
            console.log(newUser);
            if(!existingUser){
                db.collection("users").insertOne(newUser,function(err,data){
                    if(err) return console.log(err);
                    res.send("Registration Successful");
                });
            }
            else {
                res.send("User Already exists with that email")
            }
            
        });
    })
    
   
});

app.get("/api/articles/:name", async(req,res)=>{
    withDB(async(db)=>{
        const articleName = req.params.name;
        const articleInfo = await db.collection("articles").findOne({name:articleName}) ;
        res.status(200).send(articleInfo);
    })
    

});

app.post("/api/articles/:name/upvote",async(req,res)=>{

    withDB(async(db)=>{
        const articleName = req.params.name;

        const articleInfo = await db.collection("articles").findOne({name:articleName});
    
        await db.collection("articles").updateOne({name:articleName},{"$set":{
            upvotes:articleInfo.upvotes + 1,
        }});
        const updatedArticleInfo = await db.collection("articles").findOne({name:articleName});
        res.status(200).json(updatedArticleInfo);
    });
    
});

app.post("/api/articles/:name/comment",async(req,res)=>{

    withDB(async(db)=>{
        const articleName = req.params.name;
        const {name,text} = req.body;

        const articleInfo = await db.collection("articles").findOne({name:articleName});
        await db.collection("articles").updateOne({name:articleName},{"$set":{
            comments:articleInfo.comments.concat({name,text}),
        }});

        const updatedArticleInfo = await db.collection("articles").findOne({name:articleName});
        res.status(200).json(updatedArticleInfo);
    })
        
});

app.listen(8000,()=> console.log("Listening on port 8000"),);