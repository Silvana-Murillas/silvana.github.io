import React, { useContext } from 'react';
import NavB from './NavB.jsx';
import Button from 'react-bootstrap/Button';
import './Home.css';
import { ThemeContext } from '../App.js';

function Home() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div class="divContainer">
            <NavB />
            <div class="divComplete">
                <img
                    src={
                        theme === 'light'
                            ? '20221219_163610-removebg-preview.png'
                            : '20221219_163610-removebg-preview (2).png'
                    }
                    class="img"
                    alt="silvana"
                />
                <div class="divContain">
                    <h1 style={{ fontFamily: 'Poppins' }}>Hi, my name is </h1>
                    <h1
                        style={{ fontWeight: 'bold', fontFamily: 'Montserrat' }}
                    >
                        {' '}
                        Silvana Murillas
                    </h1>
                    <hr />
                    <h2 style={{ fontFamily: 'Poppins' }}>
                        {' '}
                        Passionate full stack web developer from Colombia
                    </h2>
                    <p style={{ fontSize: 20, fontFamily: 'Poppins' }}>
                        {' '}
                        In this space you can know more about me{' '}
                    </p>
                    <div>
                        <Button
                            variant="primary"
                            size="lg"
                            style={
                                theme === 'light'
                                    ? {
                                          background: '#f28482',
                                          border: 'transparent',
                                          fontFamily: 'Poppins',
                                      }
                                    : {
                                          background: '#457d8b',
                                          border: 'transparent',
                                          fontFamily: 'Poppins',
                                      }
                            }
                        >
                            <a
                                href="English _CV_Silvana.pdf"
                                download
                                style={{
                                    color: 'white',
                                    textDecoration: 'none',
                                }}
                            >
                                ⭳ Resume
                            </a>
                        </Button>

                        <a
                            href="https://github.com/Silvana-Murillas/"
                            target="_blank"
                            class="color githubs"
                        >
                            <img
                                src="github.png"
                                style={{ width: '30px', height: '30px' }}
                            />
                        </a>

                        <a
                            href="http://www.linkedin.com/in/silvana-carolina-murillas-bedoya-616b88148"
                            target="_blank"
                            class="color linkedins"
                        >
                            <img
                                src="linkedin.png"
                                style={{ width: '30px', height: '30px' }}
                            />
                        </a>
                    </div>{' '}
                </div>
            </div>
        </div>
    );
}

export default Home;
