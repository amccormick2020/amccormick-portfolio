import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import tamuLogo from "../../Assets/Texas_A&M_University_logo.svg";

function Education() {
  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
<h1 className="project-heading">
          My <strong className="purple">Education</strong>
        </h1>


        <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
          <Col md={10}>
            <Card className="card-view">
              <Card.Body>
                <Row>
                <Col md={2} className="d-flex align-items-start justify-content-center">
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "125px",
                        height: "125px",
                      }}
                    >
                      <img
                        src={tamuLogo}
                        alt="Texas A&M"
                        style={{
                          width: "90px",
                          height: "90px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Col>
          <Col md={10}>
                <Card.Title>
                  <strong>Texas A&M University</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Master of Computer Science
                </Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Expected Graduation: December 2025</li>
                    <li>GPA: 4.00</li>
                  </ul>
                </Card.Text>
                </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", marginBottom: "30px" }}>
          <Col md={10}>
            <Card className="card-view">
              <Card.Body>
                <Row>
                <Col md={2} className="d-flex align-items-start justify-content-center">
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "125px",
                        height: "125px",
                      }}
                    >
                      <img
                        src={tamuLogo}
                        alt="Texas A&M"
                        style={{
                          width: "90px",
                          height: "90px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Col>
          <Col md={10}>
                <Card.Title>
                  <strong>Texas A&M University</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Bachelor of Science in Computer Engineering <br />
                  Minor: Mathematics
                </Card.Subtitle>
                <Card.Text>
                  <ul>
                    <li>Graduated: May 2024</li>
                    <li>Engineering Honors, Dean's Honor Award</li>
                    <li>GPA: 3.973</li>
                  </ul>
                </Card.Text>
                </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
