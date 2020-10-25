import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  import logo from '../../images/logo.png';

const NavComponents = () => {
 
    return (
        <div>
            <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src={logo} width="120px" alt=""/></NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mr-2">
              <NavLink href="/news">News</NavLink>
            </NavItem>
            <NavItem className="mr-2">
              <NavLink href="/destinations">Destinations</NavLink>
            </NavItem>
            <NavItem className="mr-2">
              <NavLink href="/destinations">Blog</NavLink>
            </NavItem>
            <NavItem className="mr-2">
              <NavLink href="/destinations">Contact</NavLink>
            </NavItem>
            <Button color="warning" className="btn-lg mr-2">Login</Button>
            
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    );
};

export default NavComponents;