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


        <Row style={{ justifyContent: "center", marginBottom: "3.1746031746031744vh" }}>
          <Col md={10}>
            <Card className="card-view">
              <Card.Body>
                <Row>
                <Col md={2} className="d-flex align-items-center justify-content-center">
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "1vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "10vh",
                        height: "10vh",
                      }}
                    >
                      <img
                        src={tamuLogo}
                        alt="Texas A&M"
                        style={{
                          width: "7.0vh",
                          height: "7.0vh",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Col>
          <Col md={10}>
                <Row>
                  <Col>
                    <Card.Title style={{fontSize: "x-large"}}>
                      <strong>Texas A&M University</strong>
                    </Card.Title>
                  </Col>
                  <Col className="purple" >
                    <strong>August 2024 - December 2025</strong>
                  </Col>
                </Row>

                <Row className="align-items-center">
                  <Col >
                    <Card.Subtitle>
                      MCS - Master of Computer Science
                    </Card.Subtitle>
                  </Col>
                  <Col className={"roboto-chars purple"}>
                    GPA: 4.00 
                  </Col>
                  
                </Row>
                </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center"}}>
          <Col md={10}>
            <Card className="card-view">
              <Card.Body>
                <Row>
                <Col md={2} className="d-flex align-items-center justify-content-center">
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "50%",
                        padding: "1vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "10.0vh",
                        height: "10vh",
                      }}
                    >
                      <img
                        src={tamuLogo}
                        alt="Texas A&M"
                        style={{
                          width: "7.0vh",
                          height: "7.0vh",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Col>
          <Col md={10}>
                <Row>
                  <Col>
                    <Card.Title style={{fontSize: "x-large"}}>
                      <strong>Texas A&M University</strong>
                    </Card.Title>
                  </Col>
                  <Col className="purple" >
                    <strong>August 2020 - May 2024</strong>
                  </Col>
                </Row>

                <Row className="align-items-center">
                  <Col>
                    <Card.Subtitle>
                      B.S. in Computer Engineering &nbsp; | &nbsp; Minor: Mathematics
                    </Card.Subtitle>
                  </Col>
                  
                  
                  <Col className={"roboto-chars purple"}>
                    GPA: 3.973
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Card.Text style={{ textAlign: "left", fontSize: "smaller"}}>
                      <ul>
                        <li>Engineering Honors, Dean's Honor Award</li>
                        
                      </ul>
                    </Card.Text>
                  </Col>
                </Row>
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
