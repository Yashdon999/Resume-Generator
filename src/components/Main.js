import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  font-Size: 16px;
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
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Button = styled.button`
  padding: 15px 35px;
  font-size: 20px;
  font-weight: bold;
  /* background-color: #10c479; */
  background-color: #021547;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 40px;

  &:hover {
    /* background-color: #30856a; */
    // background-color: #7a9cfd;
    // color: black;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;


const Button1 = styled.button`
  padding: 15px 35px;
  font-size: 20px;
  font-weight: bold;
  /* background-color: #10c479; */
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 60px;
  margin-bottom: 40px;

  &:hover {
    /* background-color: #30856a; */
    background-color: #00000087;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

// font-family: Garamond, serif;


const Img = styled.img`
width: 700px; 
height: 400px; 
object-fit: cover;
object-position: 25% 25%; 
@media (max-width: 768px) {
  width: 100%;
  height: auto;
}
`;



const ImageSection = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Main2 = styled.div`
  background-color: #eddbc5;
  color: black;
  display: flex;
  flex-direction: row;
  padding: 70px;
  @media (max-width: 768px) {
    padding: 30px;
   
  /* Hide the image when the screen size is less than or equal to 768px */
  ${ImageSection} {
   display: none;
  
}
  }
`;

const Rancho = styled.h1`
  margin-top: 75px;
  font-weight: bold;
  font-size: 50px;
  font-family: Garamond, serif;
  text-align-last: center;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 0;
  }
`;

const Pilo = styled.p`
  margin-top: 20px;
  text-align: left;
  flex: 1;
  text-align-last: center;
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 10px;
  }
  
`;

const Main3 = styled.div`
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const Rancho1 = styled.h1`
  font-weight: bold;
  font-size: 50px;
  font-family: Garamond, serif;
  text-align: center;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Pilo1 = styled.p`
  text-align: center;
  max-width: 800px;
  line-height: 1.5;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ImageSection1 = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

const Img1 = styled.img`
  /* width: 800px;
  height: 400px; */
  object-fit: cover;
  object-position: 25% 25%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
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
        <Img src="https://cdn-images.zety.com/pages/one_page_resume_templates_004.jpg" alt="Resume"/>
      </Main1>

      <Main2>
        <div>
          <Rancho>Use the best resume maker as your guide.</Rancho>
          <Pilo>
            Getting that dream job can seem like an impossible task. We’re here to change that. Give
            yourself a real advantage with the best online resume maker: created by experts, improved
            by data, trusted by millions of professionals
          </Pilo>
        </div>
        <ImageSection>
          <Img
            src="https://www.springboard.com/blog/wp-content/uploads/2018/09/Cyber-Security-Resume-Examples-and-Tips-to-Get-You-Hired-scaled.jpg"
            alt="Resume1"
          />
        </ImageSection>
      </Main2>
      <Main3>
      <Rancho1>Take your job search to the next level with our top-rated resume builder.</Rancho1>
          <Pilo1>
          Say goodbye to writer's block and endless formatting woes with our 3-step resume builder. Create a perfect resume in minutes that will catch employers' attention!
          </Pilo1>
            <Button1 onClick={handleClick}>Create Resume Now</Button1>
          <ImageSection1>
          <Img1
            src="https://resume-example.com/wp-content/uploads/2021/03/resumes-templates.png"
            alt="Resume2"
          />
        </ImageSection1>
      </Main3>
    </>
  );
};

export default Main;