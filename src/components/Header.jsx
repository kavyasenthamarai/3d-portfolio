import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #FF1493;  /* Pink background color */
  color: #ffffff;  /* White text color */
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    color: #ffffff; /* White text color for KAVYA K */
  }
`;

const LogoImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;

const NavLinks = styled.nav`
  display: flex;
`;

const NavLink = styled.a`
  color: #ffffff;  /* White link color */
  text-decoration: none;
  margin: 0 1rem;
  cursor: pointer;

  &:hover {
    color: #00bfff;  /* Blue hover color */
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoImg src={process.env.PUBLIC_URL + '/images/kavya.jpg'} alt="img" />
        <h1>KAVYA K</h1>
      </LogoContainer>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#education">Education</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
