import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <StyledNavbar bg="light" expand="lg">
      <Container fluid>
        <StyledNavbar.Brand as={Link} to="/">Resume Generator</StyledNavbar.Brand>
        <StyledNavbar.Toggle aria-controls="navbarScroll" />
        <StyledNavbar.Collapse id="navbarScroll">
          <NavLinks>
            <StyledNavLink exact as={NavLink} to="/">Home</StyledNavLink>
            <StyledNavLink as={NavLink} to="/about">About</StyledNavLink>
            <StyledNavLink as={NavLink} to="/contact">Contact</StyledNavLink>
          </NavLinks>
        </StyledNavbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

const StyledNavbar = styled(Navbar)`
  padding: 1rem 2rem;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  color: #333;
  font-weight: 500;
  margin: 0 1rem;
  &:hover {
    color: #555;
    text-decoration: none;
  }
  &.active {
    color: #007bff;
    text-decoration: none;
    border-bottom: 2px solid #007bff;
  }
`;

export default Header;


// const StyledNavbar = styled(Navbar)`
//   padding: 1rem 2rem;
//   box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
//   background-color: #fff;
//   border-bottom: 1px solid #e4e4e4;
// `;

// const NavLinks = styled(Nav)`
//   display: flex;
//   align-items: center;
// `;

// const NavLink = styled(Nav.Link)`
//   color: #333;
//   font-weight: 500;
//   margin: 0 1rem;
//   &:hover {
//     color: #555;
//     text-decoration: none;
//   }
//   &.active {
//     color: #007bff;
//     text-decoration: none;
//     border-bottom: 2px solid #007bff;
//   }
// `;

// export default Header;
