  import { useState, useEffect } from "react"
  import { Navbar, Nav,Container } from "react-bootstrap"
  import * as React from "react";
  import * as ReactDOM from "react-dom";
  import navicon1 from '../assets/img/git.svg'
  import navicon2 from '../assets/img/linked2.svg'
  import navicon3 from '../assets/img/insta1.svg'
  // import {link} from "react-router"
  import logo from '../assets/img/logo.png'
  import { HashLink } from 'react-router-hash-link';
  import {
    BrowserRouter as Router
  } from "react-router-dom";

  export default function NavBar() {
    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,sescrolled]=useState(false);
    useEffect(()=>{
      if(window.scrolly>50){
        sescrolled(true)
      }
      window.addEventListener("scroll",onscroll);
      return()=>window.removeEventListener("scroll",onscroll)
    },[])

      const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
      }
    return (
      
      <div>
        <Navbar expand="lg" className={scrolled?"scrolled":""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{width:50,height:50}}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"  className={activeLink==='home'?'active navbar-link':'navbar-link' } onClick={()=>onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-link':'navbar-link' } onClick={()=>onUpdateActiveLink('home')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-link':'navbar-link' } onClick={()=>onUpdateActiveLink('home')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/rajat-28"><img src={navicon1} alt=""></img></a>
                <a href="https://www.linkedin.com/in/rajat-garg-856282228"><img src={navicon2} alt=""></img></a>
                <a href="#"><img src={navicon3} alt=""></img></a>
              </div>
              {/* <link to="#contact"> */}
              <button className="vvd" onClick={()=>{document.getElementById('contact').scrollIntoView({behavior:'smooth'})}}>Let’s Connect</button>
              {/* </link> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    )
  }
