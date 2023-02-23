import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/resume");
  };

  return (
    <Mains>
      <Heading>ONLINE RESUME BUILDER</Heading>
      <MainSection className="main">
        <Button onClick={handleClick}>Create My Resume</Button>
      </MainSection>
    </Mains>
  );
};

export default Main;

const Mains = styled.div`
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fbb600;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 30px;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
    margin-top: 20px;
    position: absolute;
    bottom: 30px;
  }
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

const Heading = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;
