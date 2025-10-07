import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import {AiFillGithub, AiOutlineGoogle} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section className="home-section">
      <Container id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Austin McCormick</strong>
              </h1>
              <div className="type-font">
                <Type />
              </div>
              <p className="home-about-body">
                Take a look at what I have been up to.
                <br />
                
                <br />
                I am interested in leveraging&nbsp;
                
                <b className="purple">AI</b> and <b className="purple">ML </b>
                to enhance existing <b className="purple">software</b> and turn ideas into reality. I am actively seeking full-time Software Engineering Roles starting as early as 
                 <b className="purple"> January 2026</b> .
              </p>

              
            </Col>

            <Col md={5}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid home-logo"
              />
            </Col>
          </Row>
          <Row>
                    <Col md={12} className="home-about-social">
                      <p>
                        Feel free to <span className="purple">connect </span>with me
                      </p>
                      <ul className="home-about-social-links">
                        <li className="social-icons">
                          <a
                            href="https://github.com/amccormick2020"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <AiFillGithub />
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="https://www.linkedin.com/in/austin-mccormick-148044248/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <FaLinkedinIn/>
                          </a>
                        </li>
                        <li className="social-icons">
                          <a
                            href="mailto:amccormick2020@tamu.edu"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="icon-colour  home-social-icons"
                          >
                            <AiOutlineGoogle />
                          </a>
                        </li>
                      </ul>
                    </Col>
                  </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
