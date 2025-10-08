import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";

function CredentialCard({
  logoNode,
  title,
  issuer,
  issueDate,
  credentialHref,
  credentialLabel = "Show credential",
  logoCircleSizeVh = 10,
}) {
  return (
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
                width: `${logoCircleSizeVh}vh`,
                height: `${logoCircleSizeVh}vh`,
              }}
            >
              {logoNode}
            </div>
          </Col>

          <Col md={10}>
            <Row>
              <Card.Title style={{ fontSize: "x-large" }}>
                <strong>{title}</strong>
              </Card.Title>
            </Row>

            <Row className="align-items-center" style={{ marginTop: "1vh" }}>
              <Col>
                <Card.Subtitle>Issuer: {issuer}</Card.Subtitle>
              </Col>
              <Col className="roboto-chars purple">Issue Date: {issueDate}</Col>
              <Col>
                <a
                  href={credentialHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="show-credential-button"
                >
                  {credentialLabel}&nbsp;
                  <FiExternalLink size={16} />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

CredentialCard.propTypes = {
  logoNode: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  issuer: PropTypes.string.isRequired,
  issueDate: PropTypes.string.isRequired,
  credentialHref: PropTypes.string.isRequired,
  credentialLabel: PropTypes.string,
  logoCircleSizeVh: PropTypes.number,
};

export default CredentialCard;
