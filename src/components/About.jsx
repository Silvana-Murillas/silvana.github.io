import React from 'react';
import NavB from './NavB.jsx';
import Button from 'react-bootstrap/Button';
import './About.css';
import { useTranslation } from 'react-i18next';
function About() {
    const [t, i18n] = useTranslation('global');
    return (
        <div class="divs">
            <NavB />
            <div className="aboutContainer">
                <h1 class="aboutTitle">{t('about.about')}</h1>
                <div class="about">
                    <p>{t('about.about-me')}</p>
                    <div class="personal">
                        <ul className="personalinfo">
                            <li className="list">
                                {t('about.birthday')}{' '}
                                <span class="span">{t('about.date')}</span>{' '}
                            </li>
                            <li class="list">
                                {t('about.language')}{' '}
                                <span class="span">{t('about.info')}</span>{' '}
                            </li>
                            <li class="list">
                                {t('about.phone')}
                                <span class="span">+57 321-861-5549 </span>{' '}
                            </li>
                        </ul>
                        <ul class="personalinfo">
                            <li className="list">
                                {t('about.email')}{' '}
                                <span class="span">
                                    silvanamurillas@gmail.com{' '}
                                </span>{' '}
                            </li>
                            <li class="list">
                                {t('about.country')}{' '}
                                <span class="span">Colombia </span>{' '}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="skill">
                    <h1 class="skillsTitle">{t('about.skills')} </h1>
                    <div class="skills">
                        <img src="html-5.png" />
                        <img src="css-3.png" />
                        <img src="js.png" />
                        <img src="typescript.png" />
                        <img src="physics.png" />
                        <img src="icons8-redux-48.png" />
                        <img src="icons8-tailwindcss-48.png" />
                        <img src="icons8-material-ui-48.png" />
                        <img src="postgre.png" />
                        <img src="sequelize.png" />
                        <img src="icons8-mongodb-48.png" />
                        <img src="icons8-nodejs-48.png" />
                        <img src="icons8-express-js-50.png" />
                        {/* <div class="div2">
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
                        </div>+
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
                        </div> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
