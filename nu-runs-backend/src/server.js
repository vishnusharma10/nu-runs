require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ObjectId } from "mongodb";
import multer from "multer";
import { listenerCount } from "../models/userModel";
var fs = require("fs");
var path = require("path");
var assert = require("assert");
const User = require("../models/userModel");
const Course = require("../models/courseModel");
const Article = require("../models/articleModel");
const Challenge = require("../models/challengeModel");
const UserData = require("../models/userDataModel");
//Creating a basic express server
const app = express();

//declaring port number
const port = process.env.PORT || 8000;

//This will parse body to req.body

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//this will parse to cookies to req.cookies
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//connection with mongodb databaase
mongoose.connect(process.env.MDB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/auth", require("../routers/userRouter"));

//setting up multer to upload the image to the database

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, file.fieldname + "-" + Date.now() + "." + ext);
  },
});

var upload = multer({
  storage: storage,
});

app.get("/api/all-articles", async (req, res) => {
  await db
    .collection("articles")
    .find({})
    .toArray()
    .then((ans) => {
      let articles = {};
      const key = "all-articles";
      articles[key] = [];
      console.log(ans);
      articles[key] = articles[key].concat(ans);
      return res.status(200).json({
        success: true,
        code: 200,
        data: articles,
      });
    });
});

app.get("/api/all-articles/:name", async (req, res) => {
  const articleName = req.params.name;
  const articleInfo = await db.collection("articles").findOne({
    name: articleName,
  });
  console.log(articleInfo);
  res.status(200).send(articleInfo);
});

app.post("/api/all-articles/:name/upvote", async (req, res) => {
  const articleName = req.params.name;

  const articleInfo = await db.collection("articles").findOne({
    name: articleName,
  });

  await db.collection("articles").updateOne(
    {
      name: articleName,
    },
    {
      $set: {
        upvotes: articleInfo.upvotes + 1,
      },
    }
  );
  const updatedArticleInfo = await db.collection("articles").findOne({
    name: articleName,
  });
  res.status(200).json(updatedArticleInfo);
});

app.post("/api/all-articles/:name/comment", async (req, res) => {
  const articleName = req.params.name;
  const { readerName, comment } = req.body;

  const articleInfo = await db.collection("articles").findOne({
    name: articleName,
  });
  await db.collection("articles").updateOne(
    {
      name: articleName,
    },
    {
      $set: {
        comments: articleInfo.comments.concat({
          readerName,
          comment,
        }),
      },
    }
  );

  const updatedArticleInfo = await db.collection("articles").findOne({
    name: articleName,
  });
  res.status(200).json(updatedArticleInfo);
});

app.post("/api/all-articles/create", async (req, res) => {
  const articleTitle = req.body.title;
  const articleContnet = req.body.content;
  const articleComments = req.body.comments;
  const articleUpvotes = req.body.upvotes;
  const articleAuthor = req.body.author;
  const articleName = req.body.name;

  const newArticle = new Article({
    title: articleTitle,
    content: articleContnet,
    comments: articleComments,
    upvotes: articleUpvotes,
    author: articleAuthor,
    name: articleName,
  });

  await db.collection("articles").insertOne(newArticle, (err, article) => {
    if (err) return console.log(err);
    res.send("Article Inserted");
  });
});

app.post("/api/profile", async (req, res) => {
  const userId = req.body.id;
  console.log(userId);

  const user = await User.findById({
    _id: ObjectId(userId),
  });

  if (user) {
    return res.json({
      userInfo: user,
    });
  } else return res.send("No user with that id");
});

//giving permission to the users add their own courses

app.post("/api/courses/add-course", async (req, res) => {
  const title = req.body.title;
  const coursesUrls = req.body.coursesUrls;
  const workoutCount = req.body.count;
  const participants = req.body.participants;

  const newCourse = new Course({
    title: title,
    coursesUrls: coursesUrls,
    workoutCount: workoutCount,
    participants: participants,
  });

  await db.collection("courses").insertOne(newCourse, (err, course) => {
    if (err) return console.log(err);
    res.send("Course Inserted");
  });
});

//Find all the courses uploaded in the database

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find({});
    res.send(courses);
  } catch (err) {
    res.status(400).send("Error while getting challenges");
  }
});

app.get("/api/profile/:userId/user-data", (req, res) => {
  const userId = req.params.userId;
});

app.post("/api/profile/:userId/user-data", (req, res) => {
  const userId = req.params.userId;
});

app.post("/api/profile/:userId/upload-profile", (req, res) => {
  const userId = req.params.userId;
});

//get enrolled in course
app.post("/api/profile/course-enroll/:userId/:courseId", async (req, res) => {
  const userId = req.params.userId;
  const courseId = req.params.courseId;

  let newUserData = await db
    .collection("userdata")
    .findOne({ userId: ObjectId(userId) });

  if (newUserData) {
    await db.collection("userdata").updateOne(
      { userId: ObjectId(userId) },
      {
        $set: {
          enrolledCourses: newUserData.enrolledCourses.concat([
            ObjectId(courseId),
          ]),
        },
      }
    );
  } else {
    newUserData = new UserData({
      userId: ObjectId(userId),
    });
    newUserData["enrolledCourses"] = [];
    newUserData["enrolledCourses"].push(ObjectId(courseId));

    await db.collection("userdata").insertOne(newUserData, (err, data) => {
      if (err) return console.log(err);
      res.json(newUserData);
    });
  }
});

//get enrolled in challenges
app.post(
  "/api/profile/challenge-enroll/:userId/:challengeId",
  async (req, res) => {
    const userId = req.params.userId;
    const challengeId = req.params.challengeId;

    let newUserData = await db
      .collection("userdata")
      .findOne({ userId: ObjectId(userId) });
    console.log(newUserData);
    if (newUserData) {
      await db.collection("userdata").updateOne(
        { userId: ObjectId(userId) },
        {
          $set: {
            enrolledChallenges: newUserData.enrolledChallenges.concat([
              ObjectId(challengeId),
            ]),
          },
        }
      );

    } else {
      newUserData = new UserData({
        userId: ObjectId(userId),
      });
      newUserData["enrolledChallenges"] = [];
      newUserData["enrolledChallenges"].push(ObjectId(challengeId));

      await db.collection("userdata").insertOne(newUserData, (err, data) => {
        if (err) return console.log(err);
        res.json(newUserData);
      });
    
    }

    let challenges = await db.collection("challenges").find({});
    for (let i = 0; i < challenges.length; i++) {
      console.log(challenges[i]);
    }
  }
);

app.get("/api/challenges/challenge-img/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await Challenge.findById({ _id: ObjectId(req.params.id) });
    res.set("Content-Type", "image/png");
    const image = path.join(__dirname, "..", result.img);
    res.sendFile(image);
  } catch (error) {
    res.status(400).send({ get_error: "Error while getting photo." });
  }
});
app.get("/api/challenges", async (req, res) => {
  const newChallenges = [];
  try {
    const challenges = await Challenge.find({});

    challenges.map((challenge, key) => {
      challenge["img"] = path.join(__dirname, "..", challenge["img"]);
      newChallenges.push(challenge);
    });

    res.send(newChallenges);
  } catch (err) {
    res.status(400).send("Error while getting challenges");
  }
});

// Step 8 - the POST handler for processing the uploaded file

app.post(
  "/api/challenges/add-challenge",
  upload.single("challenge"),
  async (req, res) => {
    const { path, mimetype } = req.file;
    var obj = new Challenge({
      title: req.body.title,
      desc: req.body.desc,
      img: path,
      distance: req.body.distance,
      challengeType: req.body.challengeType,
      startingDate: req.body.startingDate,
      endingDate: req.body.endingDate,
      winners: req.body.winners,
      participants: req.body.participants,
    });
    console.log(obj);

    await db.collection("challenges").insertOne(obj, (err, result) => {
      assert.equal(err, null);
      res.json({
        message: "File uploaded successfully",
      });
    });
  }
);

// Step 7 - the GET request handler that provides the HTML UI

//listening to the port
app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "../../nu_runs/public/index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));
