import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import {AiFillGithub} from "react-icons/ai";
import portfolio from "../../Assets/projects/thumbnail.png";

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

        <Row style={{ justifyContent: "center", paddingBottom: "1vh" }}>
          <Col md="4">
          <ProjectCard
            timestamp="October 2025"
            imgPath={portfolio}
            title="React-Based Portfolio"
            description="This is the website you are currently visiting! I wanted to create an interactive and consolidated way to showcase my qualifications and works. I developed this portfolio using React, and it is deployed on an AWS EC2 instance."
            ghLink="https://github.com/amccormick2020/amccormick-portfolio"
            tags={["React.js", "Node.js", "JavaScript", "Web Development", "AWS"]}
          />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
