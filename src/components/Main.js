import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// const Mains = styled.div`
//   min-height: calc(100vh - 100px);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;
const Main1 = styled.div`
  background-color: #cff2ff;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding-top: 70px;
  padding-bottom: 0px;
`;

const Rap = styled.p`
  fontSize: 16px;
  margin-top: 10px;
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 50px;
  margin-top: 10px;
  font-family: Garamond, serif;
`;

const MainSection = styled.div`
  width: 80%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
`;

const Button = styled.button`
  padding: 15px 35px;
  font-size: 20px;
  font-weight: bold;
  background-color: #10c479;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 40px;

  &:hover {
    background-color: #0476bd;
    color: black;
  }
`;

// font-family: Garamond, serif;


const Img = styled.img`
width: 700px; 
height: 400px; 
object-fit: cover;
object-position: 25% 25%; 
`;



const ImageSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Main2 = styled.div`
  background-color: #f0dbbf;
  color: black;
  display: flex;
  flex-direction: row;
  padding: 70px;
`;

const Rancho = styled.h1`
  font-weight: bold;
  font-size: 50px;
  margin-top: 0;
  font-family: Garamond, serif;
`;

const Pilo = styled.p`
  margin-top: 20px;
  text-align: left;
  flex: 1;
`;


const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/resume");
  };

  return (<>
    
    <Main1>
        <Rap >
        ONLINE RESUME BUILDER
        </Rap>
        <Heading>You have the skills, now make your resume reflect them. Be one of the chosen 2%.</Heading>
        <MainSection className="main">
          <Button onClick={handleClick}>Create My Resume</Button>
        </MainSection>
        <Img src="https://i.pinimg.com/originals/f7/a2/7d/f7a27d2c8ec6d60ac851a8455d912c50.png" alt="Resume"/>
      </Main1>

      <Main2>
        <div>
          <Rancho>Use the best resume maker as your guide</Rancho>
          <Pilo><p>
            Getting that dream job can seem like an impossible task. We’re here to change that. Give
            yourself a real advantage with the best online resume maker: created by experts, improved
            by data, trusted by millions of professionals</p>
          </Pilo>
        </div>
        <ImageSection>
          <Img
            src="https://www.springboard.com/blog/wp-content/uploads/2018/09/Cyber-Security-Resume-Examples-and-Tips-to-Get-You-Hired-scaled.jpg"
            alt="Resume1"
          />
        </ImageSection>
      </Main2>
    </>
  );
};

export default Main;