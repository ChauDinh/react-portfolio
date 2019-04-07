import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import './Header.style.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className="title">CHAU DINH</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="active" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About Me</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Side Projects
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Project 1
                  </DropdownItem>
                  <DropdownItem>
                    Project 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink target="_blank" href="https://github.com/ChauDinh">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contact
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Résume
                  </DropdownItem>
                  <DropdownItem>
                    Linkedin
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Phone: (+84) 932 872 764
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Header
