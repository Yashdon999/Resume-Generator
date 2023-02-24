import React from "react";
import styled from 'styled-components';

const AboutSection = styled.section`
 display:flex;
  margin: 20px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: var(--black);
  text-align: center;
`;

const Subtitle = styled.h3`
display: flex;
justify-content: center;
`;

const text = styled.h3`
  font-size: 24px;
  color: var(--black);
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width:96%;
  height: 10cm;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 2rem 9%;
  background-color: #c9c9c9a8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  gap: 1.5rem;
  &:hover{
    box-shadow: 0 0 15px rgb(0 8 9 / 47%);
  }
`;

const Img = styled.img`
  // width: 100%;
  // height: auto;
     width: 66px;
     height: 66px;
     border-radius: 50%;
     border-style: solid 2px;
     border-color: blue;
`;

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #666;
  }
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0rem 9%;
`;

const Column = styled.div`
  flex: 1;
  min-width: 300px;
`;



const About = () => {
  return (
    <>
          <AboutSection>
        <Title>About Us Page</Title>
        <text>
        <h3>
          We are a team of passionate developers who love building websites and
          applications. Our mission is to create user-friendly and effective
          solutions that help businesses succeed online.
  
        </h3>
        </text>
        
       
      </AboutSection>

      <Title>Our Team</Title>
      <Row>
        <Column>
          <Card>
            <Img src="https://avatars.githubusercontent.com/u/104668751?v=4" alt="yash" />
            <Container>
              <h2>Yash Vyavahare</h2>
              <Subtitle>CEO</Subtitle>
              <p>A Crazy developer & passionate Ethical Hacker</p>
              <p>yashvyavahare@gmail.com</p>
              <Button><a href="https://github.com/Yashdon999">Contact</a></Button>
            </Container>
          </Card>
        </Column>

        <Column>
          <Card>
            <Img src="https://avatars.githubusercontent.com/u/72117025?v=4" alt="shashwat"  />
            <Container>
              <h2>shashwat agarwal</h2>
              <Subtitle>Art Director</Subtitle>
              <p>A passionate developer & Ethical hacker</p>
              <p>shashwatagarawal20@gmail.com</p>
              <Button><a href="https://github.com/ShashwatAgrawal20">Contact</a></Button>
            </Container>
          </Card>
        </Column>

        <Column>
          <Card>
            <Img src="https://avatars.githubusercontent.com/u/109346115?v=4" alt="Om" />
            <Container>
              <h2>Om Ingle</h2>
              <Subtitle>Designer</Subtitle>
              <p>Passionate AI developer</p>
              <p>omingleop@gmail.com.com</p>
              <Button><a href="https://github.com/mr-pros">Contact</a></Button>
            </Container>
          </Card>
        </Column>
      </Row>

      <Row>
        <Column>
          <Card>
            <Img src="https://avatars.githubusercontent.com/u/77793128?v=4" alt="harsh"/>
            <Container>
              <h2>harsh baraliya</h2>
              <Subtitle>CEO & Founder</Subtitle>
              <p>A passionate frontend developer from India</p>
              <p>harshbaraliya@gmail.com</p>
              <Button><a href="https://github.com/MrCracker-OP">Contact</a></Button>
            </Container>
          </Card>
        </Column>
  

      
        <Column>
          <Card>
          <Img src="https://avatars.githubusercontent.com/u/109973520?v=4" alt="Khizar" />
            <Container>
              <h2>khizar shah</h2>
                <Subtitle>CEO & Founder</Subtitle>
                <p>Computer engineering student with a strong background in DSA, constantly seeking to improve and expand my knowledge in the field</p>
                <p>Khizar@gmail.com</p>
                <Button><a href="https://github.com/Khizarshah01">Contact</a></Button>
              
            </Container>
          </Card>
        </Column>
    </Row>
      </>
  );
};


export default About;
