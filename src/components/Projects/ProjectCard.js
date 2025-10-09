import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function Projectcard(props) {
  return (
    <Card className="card-view">

      {/* Project Image */}
      <Card.Img src={props.imgPath} alt="card-img" />
      <Card.Body>

        {/* Project Title */}
        <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{props.title}</Card.Title>

        {/* Project Tags */}
        <div style={{ marginTop: "1.5vh", marginBottom: "1.5vh" }}>
            {props.tags?.map((tag, index) => (
              <Badge
                key={index}
                pill
                bg="dark"
                style={{
                  marginRight: "0.5vh",
                  marginBottom: "0.5vh",
                  fontSize: "0.9rem",
                  color: "#c770f0"
                }}
              >
                {tag}
              </Badge>
              ))}
            </div>

        {/* Project Description */}
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Row>
        {/* Project Timestamp */}
        <Col className="d-flex align-items-center">
          <span className="roboto-chars purple" style={{ fontSize: "1.2rem" }}>
            {props.timestamp}
          </span>
        </Col>
        {/* Project Links */}
        <Col>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
export default Projectcard;