import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from '../App';

function NavB() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            {/* <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar> */}

            {/* <br /> */}
            <Navbar
                bg="ligth"
                variant="light"
                fixed="top"
                style={
                    theme === 'light'
                        ? {
                              background: '#f5cac3',
                              fontFamily: 'Poppins',
                          }
                        : { background: '#457d8b', fontFamily: 'Poppins' }
                }
            >
                <Container>
                    <Navbar.Brand>
                        {' '}
                        <Link
                            to="/"
                            style={
                                theme === 'light'
                                    ? {
                                          textDecoration: 'none',
                                          color: '#6d6875',
                                      }
                                    : { textDecoration: 'none', color: 'white' }
                            }
                        >
                            Home
                        </Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link
                                to="/about"
                                style={
                                    theme === 'light'
                                        ? {
                                              textDecoration: 'none',
                                              color: '#6d6875',
                                          }
                                        : {
                                              textDecoration: 'none',
                                              color: 'white',
                                          }
                                }
                            >
                                About me
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            {' '}
                            <Link
                                to="/projects"
                                style={
                                    theme === 'light'
                                        ? {
                                              textDecoration: 'none',
                                              color: '#6d6875',
                                          }
                                        : {
                                              textDecoration: 'none',
                                              color: 'white',
                                          }
                                }
                            >
                                Projects
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                to="/contact"
                                style={
                                    theme === 'light'
                                        ? {
                                              textDecoration: 'none',
                                              color: '#6d6875',
                                          }
                                        : {
                                              textDecoration: 'none',
                                              color: 'white',
                                          }
                                }
                            >
                                Contact me
                            </Link>
                        </Nav.Link>
                        <DarkModeSwitch
                            style={{ marginLeft: '1rem' }}
                            checked={theme === 'light' ? false : true}
                            onChange={toggleTheme}
                            size={30}
                        />
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavB;
