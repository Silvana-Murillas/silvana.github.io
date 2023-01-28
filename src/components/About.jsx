import React from 'react';
import NavB from './NavB.jsx';
import Button from 'react-bootstrap/Button';
import './About.css';
function About() {
    return (
        <div id="divs">
            <NavB />
            <div style={{ marginTop: 90, fontFamily: 'Poppins' }}>
                <h1 class="aboutTitle">About me </h1>
                <div class="about">
                    <p>
                        Biomedical engineer and full stack web developer
                        graduated from henry's bootcamp, passionate about
                        programming world, I consider myself a person with
                        teamwork skills , committed and always with positive
                        attitude to learn new technologies, I love challenges
                        and solving problems.
                    </p>
                    <div class="personal">
                        <div class="personalinfo">
                            <li class="list">Age :{'  '}</li>
                            <span class="span">
                                {'   '}
                                28 years old{' '}
                            </span>
                            <li class="list">Birthday :</li>
                            <span class="span">25-October </span>{' '}
                            <li class="list">Language : </li>
                            <span class="span">Spanish, English(B2) </span>{' '}
                        </div>
                        <div class="personalinfo">
                            <li class="list">Phone : </li>
                            <span class="span">+57 321-861-5549 </span>{' '}
                            <li class="list">Email : </li>
                            <span class="span">
                                silvanamurillas@gmail.com{' '}
                            </span>{' '}
                            <li class="list">Country :</li>
                            <span class="span">Colombia </span>{' '}
                        </div>
                    </div>
                </div>
                <h1 class="skillsTitle">My skills </h1>
                <div class="skills">
                    <div class="div2">
                        <p class="p">HTML</p>
                        <div class="containers">
                            <div id="skillshtml">80%</div>
                        </div>
                        <p class="p">CSS</p>
                        <div class="containers">
                            <div id="skillscss">70%</div>
                        </div>
                        <p class="p">Javascript</p>
                        <div class="containers">
                            <div id="skillsjs">75%</div>
                        </div>
                        <p class="p">React</p>
                        <div class="containers">
                            <div id="skillsreact">80%</div>
                        </div>
                        <p class="p">Redux</p>
                        <div class="containers">
                            <div id="skillsredux">80%</div>
                        </div>
                        <p class="p">Express</p>
                        <div class="containers">
                            <div id="skillsexpress">80%</div>
                        </div>
                    </div>
                    <div class="div3">
                        <p class="p">Typescript</p>
                        <div class="containers">
                            <div id="skisllsts">70%</div>
                        </div>
                        <p class="p">Material UI</p>
                        <div class="containers">
                            <div id="skillsM">70%</div>
                        </div>
                        <p class="p">Sequalize</p>
                        <div class="containers">
                            <div id="skillsSq">75%</div>
                        </div>
                        <p class="p">PostgreSQL</p>
                        <div class="containers">
                            <div id="skillsP">75%</div>
                        </div>
                        <p class="p">MongoDB</p>
                        <div class="containers">
                            <div id="skillsMongo">70%</div>
                        </div>
                        <p class="p">Mongoose</p>
                        <div class="containers">
                            <div id="skillsMongoose">70%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
