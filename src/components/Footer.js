import React from 'react';
import { Container } from 'react-bootstrap';

const teamMembers = [
  { name: 'Harsh Baraliya', github: 'https://github.com/MrCracker-OP' },
  { name: 'Khizar Shah', github: 'https://github.com/Khizarshah01' },
  { name: 'Om Ingle', github: 'https://github.com/mr-pros' },
  { name: 'Shashwat Agrawal', github: 'https://github.com/ShashwatAgrawal20' },
  { name: 'Yash Vyavahare', github: 'https://github.com/Yashdon999' },
];

const Footer = () => {
  return (
    <footer className='bg-dark text-light py-3 mt-auto'> 
      <Container className='d-flex justify-content-between align-items-center'>
        <div>
          <p className='m-0'>
            Resume Generator © {new Date().getFullYear()}
          </p>
        </div>
        <div>
          <ul className='list-unstyled d-flex align-items-center m-0'>
            {teamMembers.map((member, index) => (
              <li key={index} className='mx-2'> 
                <a href={member.github} className='text-light'  target="_blank" rel="noopener noreferrer">
                  {member.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;