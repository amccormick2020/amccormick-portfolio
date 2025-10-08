import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import EducationCard from "./EducationCard";
import CredentialCard from "./CredentialCard";
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
            <EducationCard
              logoNode={
                <img
                  src={tamuLogo}
                  alt="Texas A&M"
                  style={{ width: "7.0vh", height: "7.0vh", objectFit: "contain" }}
                />
              }
              title="Texas A&M University"
              timeframe="August 2024 - December 2025"
              subtitle="MCS - Master of Computer Science"
              gpaText="GPA: 4.00"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", marginBottom: "3.1746031746031744vh" }}>
          <Col md={10}>
            <EducationCard
              logoNode={
                <img
                  src={tamuLogo}
                  alt="Texas A&M"
                  style={{ width: "7.0vh", height: "7.0vh", objectFit: "contain" }}
                />
              }
              title="Texas A&M University"
              timeframe="August 2020 - May 2024"
              subtitle="B.S. in Computer Engineering | Minor in Mathematics"
              gpaText="GPA: 3.973"
              bullets={["Engineering Honors, Dean's Honor Award"]}
            />
          </Col>
        </Row>

        <h1 className="project-heading" style={{ marginTop: "5vh" }}>
          My <strong className="purple">Certifications</strong>
        </h1>

        <Row style={{ justifyContent: "center", marginBottom: "3.1746031746031744vh" }}>
          <Col md={10}>
            <CredentialCard
              logoNode={<SiOracle size={95} color="#C74634" />}
              title="Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate"
              issuer="Oracle"
              issueDate="August 2024"
              credentialHref="https://catalog-education.oracle.com/ords/certview/sharebadge?id=C105B7E49569E53C3336C537FD02AA90CAACB9044759AB74C6BFEDF98B79ECBB"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", marginBottom: "3.1746031746031744vh" }}>
          <Col md={10}>
            <CredentialCard
              logoNode={<SiOracle size={95} color="#C74634" />}
              title="Oracle Cloud Infrastructure 2024 Certified Foundations Associate"
              issuer="Oracle"
              issueDate="July 2024"
              credentialHref="https://catalog-education.oracle.com/ords/certview/sharebadge?id=723F246D7682245B0AC8EBB08B84CD7565BDCBB701EB292AF9B9507AF86AF13B"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
