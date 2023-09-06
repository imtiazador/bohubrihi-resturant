import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleHandler = () => {
    setIsNavOpen(!isNavOpen);
  };
  const toggleClose = () => {
    setIsNavOpen(false);
  };
  return (
    <Navbar color="dark" dark expand="sm">
      <NavbarToggler onClick={toggleHandler} />
      <NavbarBrand to="/">Imtiaz Resturant</NavbarBrand>
      <Collapse isOpen={isNavOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/" className="nav-link" onClick={toggleClose}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/menu" className="nav-link" onClick={toggleClose}>
              Menu
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/about" className="nav-link" onClick={toggleClose}>
              About
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" className="nav-link" onClick={toggleClose}>
              Contact
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
