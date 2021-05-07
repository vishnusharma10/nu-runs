const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

//register

router.post("/register", async (req, res) => {
  try {
    const {
      email,
      password,
      passwordVerify,
      firstname,
      lastname,
      userType
    } = req.body;

    //validataion


    if (!email || !password || !passwordVerify || !firstname || !lastname || !userType) {
      return res.status(400).json({
        errorMessage: "Please enter all the details",
      });
    }
    if (password.length < 6) {
      return res.status(400).json({
        errorMessage: "Please Enter password atleast 6 characters",
      });
    }
    if (password !== passwordVerify) {
      return res.status(400).json({
        errorMessage: "Passwords didn't match",
      });
    }
    const exisitingUser = await User.findOne({
      email,
    });

    if (exisitingUser) {
      return res.status(400).json({
        errorMessage: "Account already exists",
      });
    }


    //hash the password

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    //save a new user Account to the database

    const newUser = new User({
      email,
      firstname,
      lastname,
      userType,
      passwordHash: hashedPassword,
    });
    const savedUser = await newUser.save();

    //sign the token

    const token = jwt.sign({
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );
    console.log(token);

    //send the token in http-only cookie

    res
      .cookie("token", token, {
        maxAge: 60 * 60 * 1000 * 24 * 10,
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

//log in
router.post("/login", async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;

    //validataion
    if (!email || !password) {
      return res.status(400).json({
        errorMessage: "Please enter all the details",
      });
    }

    const exisitingUser = await User.findOne({
      email
    });

    if (!exisitingUser) {
      return res.status(401).json({
        errorMessage: "Wrong email or password",
      });
    }

    const passwordCorrect = await bcrypt.compare(password, exisitingUser.passwordHash);

    if (!passwordCorrect) {
      return res.status(401).json({
        errorMessage: "Wrong email or password",
      });
    }

    //sign the token

    const token = jwt.sign({
        user: exisitingUser._id,
        firstname: exisitingUser.firstname
      },
      process.env.JWT_SECRET
    );
    console.log(token);

    //send the token in http-only cookie

    res
      .cookie("token", token, {
        maxAge: 60 * 60 * 1000 * 24 * 10,
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .json({
        token: token,
        user: exisitingUser._id
      });

  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

//Delete

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

//check if token is valid
router.post("/tokenisvalid", async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) return res.json(false);

    const user = await User.findById(verified.user);
    if (!user) return res.json(false);
    return res.json(true);
  } catch (err) {
    console.log(err);
  }
})

router.get("/logout", async (req, res) => {
  res.cookie("token", "", {
    maxAge: new Date(0),
  }).send();
});

router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    token: req.cookies.token,
    id: user._id,
  });
})

module.exports = router;