import React from 'react';
import '../styling/navbar.css';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <>
      <Container>
        <Navbar className="navbar-custom" variant="light">
          <LinkContainer to="/">
            <Navbar.Brand>Inhale</Navbar.Brand>
          </LinkContainer>
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
              {/* <LinkContainer to="/"> */}
              {/* <Nav.Link>three-six-nine</Nav.Link> */}
              {/* </LinkContainer> */}
              <NavDropdown title="How are you feeling?" id="basic-nav-dropdown">
                <NavDropdown.Item href="/anxious">Anxious</NavDropdown.Item>
                <NavDropdown.Item href="/tired">Tired</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sad</NavDropdown.Item>
                <NavDropdown.Item href="/disconnected">
                  Disconnected
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Mood Calendar
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Navbar.Text>Welcome, Hannah</Navbar.Text> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default NavBar;
