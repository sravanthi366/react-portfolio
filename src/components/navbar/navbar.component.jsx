import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/icons/logo.JPG';
import  "./navbar.style.css";

const myNavbar = () => {
  return (
    <>
<Navbar 
fixed="top"
variant="dark"
expand="md"
className="animate-navbar nav-theme justify-content-between scroll-down">
  <Navbar.Brand href="#home">
  <img className="logo" src={Logo} alt="My Portfolio Logo"/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#education">Education</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    </>
  )
}

export default myNavbar

