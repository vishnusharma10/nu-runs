import React, { useContext, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import {GoogleLogin} from "react-google-login";
import { useHistory } from "react-router";
import userContext from "../../context/userContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://nuruns.com">
        Nu Runs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [error,setError] = useState();
  const {userData, setUserData} = useContext(userContext);
  const history = useHistory();

  const registerUser = async (
    firstname,
    lastname,
    email,
    password,
    passwordVerify
  ) => {
    const result = await axios.post("http://localhost:8000/auth/register", {
      email: email,
      password: password,
      passwordVerify: passwordVerify,
      firstname: firstname,
      lastname: lastname,
    });
    const loginResponse = await axios.post("http://localhost:8000/auth/login",{email,password});
    setUserData({
      token:loginResponse.data.token,
      user:loginResponse.data.user
    });
    history.push("/profile");
    if (result.data.isthere === "exists") {
      setMessageColor("red");
      console.log(messageColor);
    } else {
      setMessageColor("green");
      console.log(messageColor);
    }

    setMessage(result.data.message);

    setemail("");
    setPassword("");
    setPasswordVerify("");
    setFirstName("");
    setLastName("");
  };

  const googleSuccess = (res)=>{
    const result = res?.profileObj;
    const token = res?.tokenId;

    try{
      
    }
    catch(err){
      console.log(err);
    }
  }
  const googleFailure = ()=>{
    console.log("Try again later")
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} style={{ backgroundColor: "#3c6e71" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                value={firstname}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                value={lastname}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passwordVerify"
                label="PasswordVerify"
                type="password"
                id="passwordVerify"
                value={passwordVerify}
                onChange={(e) => {
                  setPasswordVerify(e.target.value);
                }}
                autoComplete="current-password"
              />
            </Grid>
           {/*  <Grid item xs={12}sm={6}>
              <div style={{display:"inline-block"}} onChange={(event)=>{
                setUserType(event.target.value);
              }}>
                <label htmlFor="trainer">
                Trainer
                <input type="radio" id="trainer"value="Trainer" name="user" /> 
                </label>
                
                <label htmlFor="trainee">
                Trainee
                   <input type="radio" id="trainee"value="Trainee" name="user" /></label>
               
              </div>
            </Grid> */}
          </Grid>
          
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => registerUser(firstname, lastname, email, password,passwordVerify)}
            style={{ backgroundColor: "#3c6e71" }}
          >
            Sign Up
          </Button>

          <GoogleLogin
          clientId="605706934227-49n0kgd5ps1uurbfiaoqh6tkfstibqr0.apps.googleusercontent.com"
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
          ></GoogleLogin>

          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
              <Grid item>
                <p
                  style={{ color: `${messageColor}` }}
                  href="/login"
                  variant="body2"
                >
                  {message}
                </p>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
