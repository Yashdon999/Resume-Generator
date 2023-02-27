import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const teamMembers = [
  { name: "Harsh Baraliya", github: "https://github.com/MrCracker-OP" },
  { name: "Khizar Shah", github: "https://github.com/Khizarshah01" },
  { name: "Om Ingle", github: "https://github.com/mr-pros" },
  { name: "Shashwat Agrawal", github: "https://github.com/ShashwatAgrawal20" },
  { name: "Yash Vyavahare", github: "https://github.com/Yashdon999" },
];

const Footer = () => {
  const GoldHoverLink = styled.a`
    &:hover {
      color: #ffc107;
    }
  `;

  return (
    <footer className="bg-dark text-light py-3 mt-auto">
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={6}>
            <p className="text-center text-md-start m-0">
              Resume Generator © {new Date().getFullYear()}
            </p>
          </Col>
          <Col xs={12} md={6}>
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end align-items-center m-0">
              {teamMembers.map((member, index) => (
                <li key={index} className="mx-2">
                  <GoldHoverLink
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {member.name}
                  </GoldHoverLink>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
