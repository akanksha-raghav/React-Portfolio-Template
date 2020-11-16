import React from 'react';
import Footer from './Footer';
import Col from 'react-bootstrap/Col';  
import SkillTable from './SkillTable';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import me from '../img/me.png';
function Home() {
    return (
        <div className="page">
            <section className="home">
                <div>
                <Image
                img className="rounded-circle" src= {me} alt="Akanksha Raghav"
                height={400}
                width={400}
                style={{ alignSelf:'center', border: '2px solid #7694B9'}}
                />
                <p></p>
                    <h1>Akanksha Raghav</h1>
                    <h3>| Full Stack Web Developer &#128513;|| VUI Developer || Python &#128149; |</h3>
                </div>
            </section>
            <section>
                <div className="section-title">
                    <h2>About Me</h2>
                </div>
                <div className="section-info">
                    <p>Hi there &#128075; <br></br> I am Akanksha,currently a junior at Galgotias University. &#x1f4da;
                    A technology enthusiast who loves to explore new technologies and leverage it to solve real-life problems.&#x1F469;&#x200D;&#x1F4BB;
                    I am deeply passionate about innovations and technologies.</p>
                    <p>When i am not exploring tech , I love exploring music and places! &#x1F6EB;</p>
                    </div>
            </section>
            <section>
                <Container>
                    <Row xs={1} md={2}>
                    <Col sm={6}>
                    <h2>My Skills</h2>
                <br />
                <SkillTable /></Col>
                <Col sm={6}>
                    <h2>Tech's I am Familiar with</h2>
                    <div class="row pt-5">
                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0 col-sm-6">
                        <div class="icon-box">
                            <img class="tech-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/600px-Python-logo-notext.svg.png"></img>
                            <h3>Python</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div class="icon-box">
                            <img class="tech-icon" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png"></img>
                            <h3>Java</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div class="icon-box">
                            <img class="tech-icon" src="https://cdn.iconscout.com/icon/free/png-512/c-programming-569564.png"></img>
                            <h3>C/C++</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div class="icon-box">
                            <img class="tech-icon" src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"></img>
                            <h3>Javascript</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div class="icon-box">
                            <img class="tech-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"></img>
                            <h3>React</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div class="icon-box">
                            <img class="tech-icon" src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"></img>
                            <h3>Node</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div class="icon-box">
                            <img class="tech-icon" src="https://i2.wp.com/adamed.es/wp-content/uploads/2019/03/dino-cobol.gif?w=1080&ssl=1"></img>
                            <h3>Cobol</h3>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
                        <div class="icon-box">
                            <img class="tech-icon" src="https://e7.pngegg.com/pngimages/252/959/png-clipart-mysql-database-server-microsoft-sql-server-others-text-logo.png"></img>
                            <h3>Databases</h3>
                        </div>
                    </div>
                    </div>
                    </Col>
                </Row>
                </Container>
            </section>
            <section style={{ marginTop: "30px", padding: 0 }}>
                <div className="section-title">
                    <h1><u>Experience/Volunteer</u></h1>
                </div>
                <div className="section-info">
                    <table className="table table-hover" style={{ color: "#13263E", textAlign: "center" }}>
                        <thead>
                            <tr>
                                <th scope="col">Duration</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>April 2020</td>
                                <td>Web Development Lead @ StudentCode-in<br></br>
                                I am currently as Web development team lead at StudentCode-in. At STUDENT Code-in we have strived to a system that supports and encourages you with varied quality of experiences offered by expert mentors who are the backbone of this initiative.</td>
                            </tr>
                            <tr>
                                <td>May 2020</td>
                                <td>Z Ambassador @ IBM<br></br>
                                I am working with IBM MTM group to:<br></br>
1. Build the IBM Z student community.<br></br>
2. Spread the word about Master and Mainframe (MTM) and other learning opportunities with members of their campus communities.</td>
                            </tr>
                            <tr>
                                <td>Aug 2020</td>
                                <td>Learn Student Ambassador @ Microsoft<br></br>
                                Learn Student Ambassadors are a global group of campus leaders who are eager to help fellow students, create robust tech communities, 
                                and develop technical and career skills for the future.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <Footer />
            </div>
    )
}

export default Home
