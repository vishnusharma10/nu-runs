import React from "react";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/lastsection.css";

const LastSection = ()=>{
    return <>
    <Jumbotron className="signupjumbo">
        <h1 style={{color:"white"}}>Sign Up For Free Today</h1>
<Link to="/get-started"> <button>Get Started</button></Link>       
    </Jumbotron>
    </>;

}
export default LastSection;
