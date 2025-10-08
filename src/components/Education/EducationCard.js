import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Card } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";

function EducationCard({
  logoNode,
  title,
  timeframe,
  subtitle,
  gpaText,
  bullets,
  logoCircleSizeVh = 10,
}) {
  return (
    <Card className="card-view">
      <Card.Body style={{ position: "relative" }}>
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
              <Col>
                <Card.Title style={{ fontSize: "x-large" }}>
                  <strong>{title}</strong>
                </Card.Title>
              </Col>
              {timeframe && (
                <Col className="purple">
                  <strong>{timeframe}</strong>
                </Col>
              )}
            </Row>

            {(subtitle || gpaText) && (
              <Row className="align-items-center" style={{ marginTop: "1vh" }}>
                <Col>
                  {subtitle && <Card.Subtitle>{subtitle}</Card.Subtitle>}
                </Col>
                {gpaText && <Col className={"roboto-chars purple"}>{gpaText}</Col>}
              </Row>
            )}

            {bullets?.length > 0 && (
              <Row>
                <Col>
                  <Card.Text style={{ textAlign: "left", fontSize: "smaller" }}>
                    <ul>
                      {bullets.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </Card.Text>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

EducationCard.propTypes = {
  logoNode: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  timeframe: PropTypes.string,
  subtitle: PropTypes.string,
  gpaText: PropTypes.string,
  bullets: PropTypes.arrayOf(PropTypes.string),
  logoCircleSizeVh: PropTypes.number,
};

export default EducationCard;
