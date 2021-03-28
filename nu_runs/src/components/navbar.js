import React from "react";
import {Nav,Navbar,Form} from "react-bootstrap";
import "../css/authentication.css";
import AuthOptions from "./Auth/AuthOptions";

const NavigationBar = ()=>(
  <Navbar style={{"color":"white"}}>
    <Navbar.Brand href="#home">Nu Runs</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href ="/">Home</Nav.Link>
      <Nav.Link href ="/about">About</Nav.Link>
      <Nav.Link href ="/articles-list">Articles</Nav.Link>
    </Nav>
    <AuthOptions></AuthOptions>
  </Navbar>

);
export default NavigationBar;