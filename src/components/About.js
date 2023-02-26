import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;

`;


const About = () => {
  const developers = [
    {
      id: 1,
      name: 'Harsh Baraliya',
      role: 'CEO & Founder',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 2,
      name: 'Khizar Shah',
      role: 'Full Stack Developer',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 3,
      name: 'Om Ingle',
      role: 'The (quality) tester',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 4,
      name: 'Shashwat Agrawal',
      role: 'Back-end Developer',
      image: 'https://via.placeholder.com/250',
    },
    {
      id: 5,
      name: 'Yash Vyavahare',
      role: 'UI/UX Designer',
      image: 'https://via.placeholder.com/250',
    },
  ];

  const teamHeader = "Our Team";
  const teamDescription = "Meet the amazing people who make it all possible!";

  return (
    <>
    {/* <section id="aim" className="py-5">
    <Container className="mt-5">
<h2 className="text-center mt-4 fs-2 fw-bold">Our Aim</h2>
<p className="text-center">At our core, we aim to assist individuals seeking employment in advancing their careers. We derive immense satisfaction from aiding job seekers in distinguishing themselves during their job hunt and securing employment more expeditiously.</p>
      </Container>
    </section> */}
      <section id="about" className="py-5">
        <Container>
        <h2 className="text-center mt-4 fs-2 fw-bold">{teamHeader}</h2>
  <p className="text-center">{teamDescription}</p>
  <Row 
  // style={{ margin: "20px"}}
  >
            {developers.map((developer) => (
              <Col md={4} key={developer.id}>
                <StyledCard>
                  <Card.Img variant="top" src={developer.image} style={{ width: "150px", height: "150px", borderRadius: "50%", objectFit: "cover" }} />
                  <Card.Body>
                    <Card.Title>{developer.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{developer.role}</Card.Subtitle>
                  </Card.Body>
                </StyledCard>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
