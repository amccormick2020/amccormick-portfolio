import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {AiFillGithub} from "react-icons/ai";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          This page is under construction. For now, explore my projects here
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md="4" className="footer-body">

                        <a
                          href="https://github.com/amccormick2020"
                          style={{ color: "#68187a", fontSize: '80px'}}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <AiFillGithub />
                        </a>

                  </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
