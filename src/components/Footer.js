import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 1.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 27px 13px 0px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0;
    margin-bottom: 1rem;
  }
`;

const TeamMembersList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 0.5rem;
  }
`;

const TeamMember = styled.li`
  margin-left: 1.5rem;

  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

const TeamMemberProfile = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: #fbb600;
    transform: scale(1.1);
  }
`;

export default function Footer() {
  const teamMembers = [
    { name: "Harsh Baraliya", github: "https://github.com/MrCracker-OP" },
    { name: "Khizar Shah", github: "https://github.com/Khizarshah01" },
    { name: "Om Ingle", github: "https://github.com/mr-pros" },
    { name: "Shashwat Agrawal", github: "https://github.com/ShashwatAgrawal20" },
    { name: "Yash Vyavahare", github: "https://github.com/Yashdon999" },
  ];

  return (
    <FooterContainer>
      <LeftSide>Resume Generator &copy; 2023</LeftSide>
      <TeamMembersList>
        {teamMembers.map((teamMember, index) => (
          <TeamMember key={index}>
            <TeamMemberProfile href={teamMember.github} target="_blank" rel="noopener noreferrer">
              {teamMember.name}
            </TeamMemberProfile>
          </TeamMember>
        ))}
      </TeamMembersList>
    </FooterContainer>
  );
}