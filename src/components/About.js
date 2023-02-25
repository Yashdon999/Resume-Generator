import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';

const StyledCard = styled(Card)`
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(0.9);
    transform-origin: center;
  }
`;

const DeveloperCard = ({ developer }) => {
  const [showBio, setShowBio] = useState(false);

  return (
    <StyledCard
      onMouseEnter={() => setShowBio(true)}
      onMouseLeave={() => setShowBio(false)}
    >
      <Card.Img variant="top" src={developer.image} />
      {showBio ? (
        <Card.Body>
          <Card.Title>{developer.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{developer.role}</Card.Subtitle>
          <Card.Text>{developer.bio}</Card.Text>
        </Card.Body>
      ) : null}
    </StyledCard>
  );
};

const About = () => {
  const developers = [
    {
      id: 1,
      name: 'Harsh Baraliya',
      role: 'Full Stack Developer',
      image: 'https://avatars.githubusercontent.com/u/77793128?v=4',
      bio: 'I am a full stack developer with expertise in Node.js, React, and MongoDB.',
    },
    {
      id: 2,
      name: 'Khizar Shah',
      role: 'Front-end Developer',
      image: 'https://avatars.githubusercontent.com/u/109973520?v=4',
      bio: 'I specialize in building modern and responsive user interfaces using React and CSS frameworks like Bootstrap.',
    },
    {
      id: 3,
      name: 'Om Ingle',
      role: 'Back-end Developer',
      image: 'https://avatars.githubusercontent.com/u/109346115?v=4' ,
      bio: 'I am experienced in building scalable and performant back-end systems using Node.js and SQL/NoSQL databases.',
    },
    {
      id: 4,
      name: 'Shashwat Agrawal',
      role: 'UI/UX Designer',
      image: 'https://avatars.githubusercontent.com/u/72117025?v=4',
      bio: 'I am a creative UI/UX designer with a passion for building intuitive and visually appealing interfaces.',
    },
    {
      id: 5,
      name: 'Yash Vyavahare',
      role: 'Mobile App Developer',
      image: 'https://avatars.githubusercontent.com/u/104668751?v=4',
      bio: 'I specialize in building cross-platform mobile apps using React Native and other popular mobile frameworks.',
    },
  ];

  return (
    <body>
      <section id="about" className="py-5">
        <Container>
          <h2 className="text-center mt-4 fs-2 fw-bold">Our Team</h2>
          <Row className="d-flex justify-content-center align-items-center">
            {developers.map((developer) => (
              <Col md={4} key={developer.id}>
                <DeveloperCard developer={developer} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </body>
  );
};

export default About;
