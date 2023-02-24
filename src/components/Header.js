import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

function Header() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <StyledHeader style={{ top: showNavbar ? 0 : '-100px' }}>
      <StyledNav>
        <StyledNavLink as={Link} to="/">Resume Generator</StyledNavLink>
        <StyledBurgerMenuIcon />
        <NavLinks>
          <StyledNavLink exact as={NavLink} to="/">Home</StyledNavLink>
          <StyledNavLink as={NavLink} to="/about">About</StyledNavLink>
          <StyledNavLink as={NavLink} to="/contact">Contact</StyledNavLink>
        </NavLinks>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #fff;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 1rem;
  position: fixed;
  width: 100%;
  transition: top 0.3s;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledNavLink = styled(Link)`
  color: #333;
  font-weight: 500;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #555;
  }
  &.active {
    color: #007bff;
    border-bottom: 2px solid #007bff;
  }
`;

const NavLinks = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
    align-items: center;
  }
`;

const StyledBurgerMenuIcon = styled.div`
  display: block;
  cursor: pointer;
  padding: 1rem;
  @media screen and (min-width: 600px) {
    display: none;
  }
  &:before,
  &:after,
  & div {
    background-color: #333;
    content: '';
    display: block;
    height: 2px;
    margin: 5px 0;
    transition: all 0.2s ease-in-out;
  }
  &:before {
    transform: translateY(-7px);
  }
  &:after {
    transform: translateY(5px);
  }
  & div {
    width: 25px;
  }
  &.open:before {
    transform: rotate(45deg) translate(5px, 5px);
  }
  &.open:after {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  &.open div {
    transform: scale(0);
  }
`;

export default Header;
