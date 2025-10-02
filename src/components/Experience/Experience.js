import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import {SiOracle} from "react-icons/si";
import tamuLogo from "../../Assets/Texas_A&M_University_logo.svg";
function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Experience</strong>
        </h1>

        {/* Oracle Internship #1 */}
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
                      <SiOracle size={95} color="#C74634" />
                    </div>
                  </Col>
                  <Col md={10}>
                    <Card.Title>
                      <strong>Oracle</strong>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Software Engineering Intern | May 2025 - August 2025
                    </Card.Subtitle>
                    <Card.Text>
                      <ul style={{ textAlign: "left" }}>
                        <li>Second internship with the Sustaining Engineering team at Oracle</li>
                        <li>Replaced 1,423 deprecated ADF (Application DevelopmentFramework) classes in Managed Beans and JSF Fragments for 183 Oracle Access Manager UI components.</li>
                        <li>Wrote Confluence documentation mapping UI components to corresponding file paths.</li>
                        <li>Fixed 2 UI navigation bugs and 17 recently broken unit tests in Oracle Access Manager.</li>
                      </ul>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Oracle Internship #2 */}
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
                      <SiOracle size={95} color="#C74634" />
                    </div>
                  </Col>
                  <Col md={10}>
                    <Card.Title>
                      <strong>Oracle</strong>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Software Engineering Intern | May 2024 - August 2024
                    </Card.Subtitle>
                    <Card.Text>
                      <ul style={{ textAlign: "left" }}>
                        <li>Fixed 300 broken Oracle Access Manager Unit Tests caused by upgrading from Java 8 to Java 17.</li>
                        <li>Ensured high code coverage in unit tests.</li>
                        <li>Wrote documentation for porting unit tests from Junit4 and from PowerMockito to Junit5 and Mockito.</li>
                        <li>Exercised professional version control practices, held code reviews for each transaction.</li>
                        <li>Utilized Agile methodologies through daily stand-ups.</li>
                      </ul>
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Texas A&M Student Worker */}
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
                          width: "75px",
                          height: "75px",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </Col>
                  <Col md={10}>
                    <Card.Title>
                      <strong>Institute for Engineering Education and Innovation</strong>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Student Worker | May 2022 - June 2023
                    </Card.Subtitle>
                    <Card.Text>
                      <ul style={{ textAlign: "left" }}>
                        <li>Led Website development and management</li>
                        <li>Performed data entry and analytics to support faculty initiatives.</li>
                        <li>Collaborated on event management and outreach efforts.</li>
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

export default Experience;
