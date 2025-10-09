import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCard";
import portfolio from "../../Assets/Projects/thumbnail.png";
import workout from "../../Assets/Projects/workout.png";
import roadsign from "../../Assets/Projects/roadsign.png"; 
import loading from "../../Assets/Projects/loading.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <Row style={{ justifyContent: "center", marginBottom: "3.1746031746031744vh" }}>
          <Col md={4}>
          <ProjectCard
            timestamp="October 2025"
            imgPath={portfolio}
            title="React-Based Portfolio"
            description="This is the website you are currently visiting! I wanted to create an interactive and consolidated way to showcase my qualifications and works. I developed this portfolio using React, and it is deployed on an AWS EC2 instance."
            ghLink="https://github.com/amccormick2020/amccormick-portfolio"
            tags={["React.js", "Node.js", "JavaScript", "HTML", "CSS", "AWS"]}
          />
          </Col>

          <Col md={4}>
          <ProjectCard
            timestamp="April 2025"
            imgPath={workout}
            title="Exercise Plan Recommender"
            description="Workout assistant leveraging large language models and ranked retrieval to recommend relevant exercises or generate a workout plan based on user input, saved user preferences, and the user's history."
            ghLink="https://github.com/amccormick2020/Buff-Aggie"
            tags={["Python", "LangGraph", "SQLite", "Streamlit", "AI", "LLMs", "Information Retrieval"]}
          />
          </Col>

          <Col md={4}>
          <ProjectCard
            timestamp="November 2024"
            imgPath={roadsign}
            title="RoadSign Detector"
            description="Detects and classifies stop signs using heuristics and sketch recognition techniques rather than a deep learning model for faster computations and lower memory requirements."
            ghLink="https://github.com/amccormick2020/RoadSign-Detector"
            tags={["Python", "OpenCV", "Ngrok", "Steamlit", "Image Processing"]}
          />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", marginBottom: "3.1746031746031744vh" }}>
          <Col md={4}>
          <ProjectCard
            timestamp="NA"
            imgPath={loading}
            title="In Progress"
            description="In the process of adding more projects! View the rest of my public projects on my GitHub page."
            ghLink="https://github.com/amccormick2020/"
            
          />

          </Col>
          <Col md={4}>
          </Col>

          <Col md={4}>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
