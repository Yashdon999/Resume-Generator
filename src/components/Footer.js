import React from "react";
import "../components/Css/Footer.css";

export default function Footer() {
  const teamMembers = [
    {
      name: "Harsh Baraliya",
      github: "https://github.com/MrCracker-OP",
    },
    {
      name: "Khizar Shah",
      github: "https://github.com/Khizarshah01",
    },
    {
      name: "Om Ingle",
      github: "https://github.com/mr-pros",
    },
    {
      name: "Shashwat Agrawal",
      github: "https://github.com/ShashwatAgrawal20",
    },
    {
      name: "Yash Vyavahare",
      github: "https://github.com/Yashdon999",
    },
  ];

  return (
    <footer className="footer">
      <div className="left-side">
        Resume Generator &copy; 2023
      </div>
      <ul className="team-members">
        {teamMembers.map((member) => (
          <li key={member.name} className="team-member">
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="team-member-profile"
            >
              {member.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}