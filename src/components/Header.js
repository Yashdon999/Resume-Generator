import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

function Header() {
  return (
    <StyledNavbar bg="light" expand="lg">
      <Container fluid>
        <StyledNavbar.Brand href="#">Resume Generator</StyledNavbar.Brand>
        <StyledNavbar.Toggle aria-controls="navbarScroll" />
        <StyledNavbar.Collapse id="navbarScroll">
          <NavLinks navbarScroll>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavLinks>
        </StyledNavbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

const StyledNavbar = styled(Navbar)`
  padding: 1rem 2rem;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset; */
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

`;

const NavLinks = styled(Nav)`
  max-height: 100px;
  overflow-y: auto;
  @media (max-width: 768px) {
    max-height: none;
  }
`;

const NavLink = styled(Nav.Link)`
  color: #333;
  font-weight: bold;
  &:hover {
    color: #555;
  }
`;

export default Header;
