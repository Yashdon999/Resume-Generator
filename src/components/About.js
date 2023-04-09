import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styled from "styled-components";

const Demo = styled.div`
  font-family: Garamond, serif;
`;

const StyledCard = styled(Card)`
  background-color: #90c2ff;
  border-radius: 10px;
  margin: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  border: none;
  font-weight: bold;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: #7bb6ff;
    border: none;
  }
`;

const Background = styled.div`
  background-color: #d2ebf7;
`;

const About = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/Yashdon999/Resume-Generator/contributors"
    )
      .then((response) => response.json())
      .then((data) => setContributors(data))
      .catch((error) => console.log(error));
  }, []);

  const teamHeader = "Our Team";
  const teamDescription = "Meet the amazing people who make it all possible!";

  return (
    <Demo>
      <Background>
        <Container style={{ padding: "3px" }}>
          <h2 className="text-center mt-4 fs-2 fw-bold">{teamHeader}</h2>
          <p className="text-center">{teamDescription}</p>
          <h2 className="text-center mt-4 fs-2 fw-bold">Contributors</h2>
          <p className="text-center">Thanks to the following contributors:</p>
          <Row className="d-flex align-items-center justify-content-center">
            {contributors.map((contributor) => (
              <Col md={4} key={contributor.id}>
                <StyledCard>
                  <Card.Img
                    variant="top"
                    src={contributor.avatar_url}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>
                      <a
                        href={contributor.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <strong>
                          {contributor.name
                            ? contributor.name
                            : contributor.login}
                        </strong>
                      </a>
                    </Card.Title>
                    <Card.Subtitle className="mb-2">
                      <strong>Contributor</strong>
                    </Card.Subtitle>
                  </Card.Body>
                </StyledCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Background>
    </Demo>
  );
};
export default About;
