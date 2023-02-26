
  import React from 'react';
  import { Container, Row, Col, Card } from 'react-bootstrap';
  import styled from 'styled-components';
  
  const StyledCard = styled(Card)`
    background-color: #f8f9fa;
    border-radius: 10px;
    // box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    margin: 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding-top: 8px;
    padding-top: 5px;

    &:hover{
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
      background-color: grey;
      color: white;
      // border: 5px solid black;
      //Sham ko 7 baje badalta color
    }
  `;
  
  const Background = styled.div`
    //  background-image: url('https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1625166167/1625166166.jpg');
    //  background-repeat: no-repeat;
    //  width:30cm;
    //  height: 30cm;
    // background-size: cover;
    // background-repeat: no-repeat;
    // min-height: 500px;
    // display: flex;
    // align-items: center;
    background-color:  #b5b1ace0;
  `;
  
  const About = () => {
    const developers = [
      {
            id: 1,
            name: 'Harsh Baraliya',
            role: 'CEO & Founder',
            image: 'https://avatars.githubusercontent.com/u/77793128?v=4',
            
          },
          {
            id: 2,
            name: 'Khizar Shah',
            role: 'Backend Developer',
            image: 'https://avatars.githubusercontent.com/u/109973520?v=4',
          },
          {
            id: 3,
            name: 'Om Ingle',
            role: 'The (quality) tester',
            image: 'https://avatars.githubusercontent.com/u/109346115?v=4',
          },
          {
            id: 4,
            name: 'Shashwat Agrawal',
            role: 'Full Stack Web Developer',
            image: 'https://avatars.githubusercontent.com/u/72117025?v=4',
          },
          {
            id: 5,
            name: 'Yash Vyavahare',
            role: 'UI/UX Designer',
            image: 'https://avatars.githubusercontent.com/u/104668751?v=4',
          },
    ];
  
    const teamHeader = 'Our Team';
    const teamDescription = 'Meet the amazing people who make it all possible!';
  
    return (
      <>
        <Background>
          <Container 
          style={{padding: '3px',}}
          >
            <h2 className="text-center mt-4 fs-2 fw-bold">{teamHeader}</h2>
            <p className="text-center">{teamDescription}</p>
            <Row>
              {developers.map((developer) => (
                <Col md={4} key={developer.id}>
                  <StyledCard>
                    <Card.Img
                      variant="top"
                      src={developer.image}
                      style={{
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                      }}
                    />
                    <Card.Body>
                      <Card.Title>{developer.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {developer.role}
                      </Card.Subtitle>
                    </Card.Body>
                  </StyledCard>
                </Col>
              ))}
            </Row>
          </Container>
        </Background>
      </>
    );
  };
  
  export default About;
  