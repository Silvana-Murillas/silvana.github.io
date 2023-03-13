import React from 'react';
import NavB from './NavB.jsx';
import Button from 'react-bootstrap/Button';
import './Projects.css';

function Projects() {
    return (
        <div class="div">
            <NavB />
            <div class="divcont">
                <h1 class="title">My Projects </h1>
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
                        <h3
                            style={{
                                fontFamily: 'Poppins',
                                fontSize: '15px',
                                color: '#f4a261',
                                fontWeight: 'bold',
                                marginTop: 10,
                            }}
                        >
                            Technologies used:
                        </h3>
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
                    <div class="cards">
                        <a
                            target="_blank"
                            href="https://github.com/Silvana-Murillas/Movies-finder"
                        >
                            <div>
                                <img
                                    src="movies.png"
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
                            Movie finder (Single page application)
                        </h2>
                    </div>
                    <div class="cards">
                        <a
                            target="_blank"
                            href="https://github.com/Silvana-Murillas/Shopping-cart"
                        >
                            <div>
                                <img
                                    src="shopping.png"
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
                            Shoping cart (Single page application)
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
