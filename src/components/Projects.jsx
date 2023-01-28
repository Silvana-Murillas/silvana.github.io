import React from 'react';
import NavB from './NavB.jsx';
import Button from 'react-bootstrap/Button';
import './Projects.css';

function Projects() {
    return (
        <div class="div">
            <NavB />
            <div
                style={{
                    marginTop: 100,
                    background: '#F7EDE2',
                }}
            >
                <h1
                    style={{
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat',
                        color: '#F28482',
                    }}
                >
                    My Projects{' '}
                </h1>
                <div class="projects">
                    <div class="cards">
                        <a target="_blank" href="https://nabijash.vercel.app/">
                            <div>
                                <img
                                    src="nabijash.png"
                                    style={{ width: '100%' }}
                                    alt="nabijash"
                                ></img>
                            </div>
                        </a>
                        <h2
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                color: '#f4a261',
                                fontWeight: 'bold',
                                marginTop: 10,
                            }}
                        >
                            {' '}
                            NABIJASH (final project)
                        </h2>
                    </div>
                    <div class="cards">
                        <a
                            target="_blank"
                            href="https://github.com/Silvana-Murillas/Proyecto-individual"
                        >
                            <div>
                                <img
                                    src="PIFOOD.png"
                                    style={{ width: '100%' }}
                                    alt="food pi"
                                ></img>
                            </div>
                        </a>
                        <h2
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '20px',
                                color: '#f4a261',
                                fontWeight: 'bold',
                                marginTop: 10,
                            }}
                        >
                            {' '}
                            Food individual Project (Single page application)
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
