import React from "react";
import {Nav,Navbar} from "react-bootstrap";
import "../css/authentication.css";
import AuthOptions from "./Auth/AuthOptions";
import {Link} from "react-router-dom";
import "../css/navbar.css";
import logo from "../assets/img/nuruns.png";
const NavigationBar = ()=>(
  <>
    <Navbar variant="light" expand="lg" className="xplaineranav justify-content-center">
    <Link to="/"><div className="center-cropped"><img alt ="logo"src={logo}></img></div></Link>
        <Nav variant="outline-dark">
    <Nav.Item>
        <Link className="link" to="/">Home</Link>
        </Nav.Item>
        <Nav.Item>
        <Link className="link" to="/about">About Us</Link>
        </Nav.Item>
        <Nav.Item>
      <Link className="link" to="/articles-list">Articles</Link>
        </Nav.Item>
        <Nav.Item>
        <Link className="link" to="/profile">Profile</Link>
        </Nav.Item>
        <Nav.Item>
      <Link className="link" to="/courses">Courses</Link>
        </Nav.Item>
        <Nav.Item>
      <Link className="link" to="/challenges">Challenges</Link>
        </Nav.Item>
        </Nav>

     <AuthOptions></AuthOptions>
  </Navbar>
    </>
    

);
export default NavigationBar;