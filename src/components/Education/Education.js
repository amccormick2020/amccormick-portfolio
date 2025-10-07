import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import {SiOracle} from "react-icons/si";
import tamuLogo from "../../Assets/Texas_A&M_University_logo.svg";
import { FiExternalLink } from "react-icons/fi";

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

                <Row className="align-items-center" style={{marginTop: "1vh"}}>
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

                <Row className="align-items-center" style={{marginTop: "1vh"}}>
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

        <h1 className="project-heading" style={{ marginTop: "5vh" }}>
          My <strong className="purple">Certifications</strong>
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
                      <SiOracle size={95} color="#C74634" />
                    </div>
                  </Col>
          <Col md={10}>
                <Row>
                  
                    <Card.Title style={{fontSize: "x-large"}}>
                      <strong>Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate</strong>
                    </Card.Title>
                  
                  
                </Row>

                <Row className="align-items-center" style={{marginTop: "1vh"}}>
                  <Col >
                    <Card.Subtitle>
                      Issuer: Oracle
                    </Card.Subtitle>
                  </Col>
                  <Col className={"roboto-chars purple"}>
                    Issue Date: August 2024
                  </Col>
                  
                </Row>
                </Col>
                </Row>
                <a
              href={"https://catalog-education.oracle.com/ords/certview/sharebadge?id=C105B7E49569E53C3336C537FD02AA90CAACB9044759AB74C6BFEDF98B79ECBB"}
              target="_blank"
              rel="noopener noreferrer"
              className="show-credential-button"
            >
              Show credential&nbsp;
              <FiExternalLink size={16} />
              </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

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
                      <SiOracle size={95} color="#C74634" />
                    </div>
                  </Col>
          <Col md={10}>
                <Row>
                  
                    <Card.Title style={{fontSize: "x-large"}}>
                      <strong>Oracle Cloud Infrastructure 2024 Certified Foundations Associate</strong>
                    </Card.Title>
                  
                  
                </Row>

                <Row className="align-items-center" style={{marginTop: "1vh"}}>
                  <Col >
                    <Card.Subtitle>
                      Issuer: Oracle
                    </Card.Subtitle>
                  </Col>
                  <Col className={"roboto-chars purple"}>
                    Issue Date: July 2024
                  </Col>
                  
                </Row>
                </Col>
                
                </Row>
                <a
              href={"https://catalog-education.oracle.com/ords/certview/sharebadge?id=723F246D7682245B0AC8EBB08B84CD7565BDCBB701EB292AF9B9507AF86AF13B"}
              target="_blank"
              rel="noopener noreferrer"
              className="show-credential-button"
            >
              Show credential&nbsp;
              <FiExternalLink size={16} />
              </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
