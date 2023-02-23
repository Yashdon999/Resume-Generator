import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 5px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 27px 13px 0px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    font-size: 16px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 0;
    margin-bottom: 20px;
  }
`;

const TeamMembersList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0px 30px 0px 0px;

  @media (max-width: 768px) {
    justify-content: center;
    padding-right: 0;
    margin-bottom: 0;
  }
`;

const TeamMember = styled.li`
  margin-left: 20px;

  @media (max-width: 768px) {
    margin: 0px 10px;
    margin-bottom: 10px;
  }
`;

const TeamMemberProfile = styled.a`
  color: rgb(255, 255, 255);
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    color: #fbb600;
    transform: scale(1.1);
  }
`;

export default function Footer() {
  const teamMembers = [    { name: "Harsh Baraliya", github: "https://github.com/MrCracker-OP" },    { name: "Khizar Shah", github: "https://github.com/Khizarshah01" },    { name: "Om Ingle", github: "https://github.com/mr-pros" },    { name: "Shashwat Agrawal", github: "https://github.com/ShashwatAgrawal20" },    { name: "Yash Vyavahare", github: "https://github.com/Yashdon999" },  ];

  const [currentTeamMemberIndex, setCurrentTeamMemberIndex] = useState(0);

  useEffect(() => {
    // Rotate team members every 5 seconds if screen size is greater than 768px
    const intervalId = setInterval(() => {
      if (window.innerWidth < 768) {
        setCurrentTeamMemberIndex((currentTeamMemberIndex + 1) % teamMembers.length);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentTeamMemberIndex, teamMembers.length]);

  return (
    <FooterContainer>
      <LeftSide>Resume Generator &copy; 2023</LeftSide>
      <TeamMembersList>
        <TeamMember>
          <TeamMemberProfile href={teamMembers[currentTeamMemberIndex].github} target="_blank" rel="noopener noreferrer">
            {teamMembers[currentTeamMemberIndex].name}
          </TeamMemberProfile>
        </TeamMember>
      </TeamMembersList>
    </FooterContainer>
  );
}