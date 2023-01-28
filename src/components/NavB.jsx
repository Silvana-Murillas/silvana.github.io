import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavB() {
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
                style={{
                    background: '#f5cac3',
                    fontFamily: 'Poppins',
                }}
            >
                <Container>
                    <Navbar.Brand>
                        {' '}
                        <Link
                            to="/"
                            style={{ textDecoration: 'none', color: '#6d6875' }}
                        >
                            Home
                        </Link>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link
                                to="/about"
                                style={{
                                    textDecoration: 'none',
                                    color: '#6d6875',
                                }}
                            >
                                About me
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            {' '}
                            <Link
                                to="/projects"
                                style={{
                                    textDecoration: 'none',
                                    color: '#6d6875',
                                }}
                            >
                                Projects
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                to="/contact"
                                style={{
                                    textDecoration: 'none',
                                    color: '#6d6875',
                                }}
                            >
                                Contact me
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavB;
