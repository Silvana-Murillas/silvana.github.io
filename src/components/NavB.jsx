import Button from 'react-bootstrap/Button';
import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { ThemeContext } from '../App';
import './NavB.css';

function NavB() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [t, i18n] = useTranslation('global');

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
            <Navbar bg="ligth" variant="light" fixed="top" className="navBar">
                <Container style={{ marginLeft: 0 }}>
                    <Nav className="me-auto nav">
                        <Nav.Link>
                            {' '}
                            <Link
                                to="/"
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
                                {t('nav.home')}
                            </Link>
                        </Nav.Link>
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
                                {t('nav.about')}
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
                                {t('nav.projects')}
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
                                {t('nav.contact')}
                            </Link>
                        </Nav.Link>
                        <DarkModeSwitch
                            style={{ marginLeft: '1rem' }}
                            checked={theme === 'light' ? false : true}
                            onChange={toggleTheme}
                            size={30}
                        />
                        <Button
                            size="sm"
                            style={
                                theme === 'light'
                                    ? {
                                          marginLeft: '1rem',
                                          background: '#f28482',
                                          fontFamily: 'Poppins',
                                          border: 'none',
                                      }
                                    : {
                                          marginLeft: '1rem',
                                          background: '#3b4752',
                                          fontFamily: 'Poppins',
                                      }
                            }
                            className="btn"
                            onClick={() => i18n.changeLanguage('en')}
                        >
                            EN
                        </Button>
                        <Button
                            size="sm"
                            style={
                                theme === 'light'
                                    ? {
                                          background: '#f28482',
                                          fontFamily: 'Poppins',
                                          border: 'none',
                                      }
                                    : {
                                          background: '#3b4752',
                                          fontFamily: 'Poppins',
                                      }
                            }
                            className="btn"
                            onClick={() => i18n.changeLanguage('es')}
                        >
                            ES
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavB;
