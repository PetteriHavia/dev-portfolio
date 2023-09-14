import {
  Container,
  InnerContainer,
  NavLinkList,
  NavLogo,
  NavigationContainer,
  StyledLink,
  NightMode,
} from "../styles/Elements.style";
import { useState } from "react";
import {FiMenu, FiX} from 'react-icons/fi';
import {BsSun, BsMoon} from 'react-icons/bs';

const Navigation = ({aboutRef, projectRef, homeRef}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(false);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    {isOpen ? setIsOpen(false) : setIsOpen(true)}
  }

  const toggleNighMode = () => {
    {mode ? setMode(false) : setMode(true)}
  }

  return (
    <NavigationContainer>
      <InnerContainer>
        <NavLogo>
          <h1>Logo</h1>
        </NavLogo>
        <NavLinkList $isOpen={isOpen} className = {isOpen ? "mobileMenu" : ""}>
          <StyledLink to="/#home" onClick={() => scrollToSection(homeRef)}>&gt; HOME</StyledLink>
          <StyledLink to="/#about" onClick={() => scrollToSection(aboutRef)}>&gt; ABOUT</StyledLink>
          <StyledLink to="/#projects" onClick={() => scrollToSection(projectRef)}>&gt; PROJECTS</StyledLink>
          <StyledLink to="/#contact">&gt; CONTACT</StyledLink>
          <NightMode>
            {mode ? <BsMoon onClick={toggleNighMode}/> : <BsSun onClick={toggleNighMode}/>}
          </NightMode>
        </NavLinkList>
        {isOpen ? <FiX className="menu-icon" onClick={toggleMenu}/> : <FiMenu className="menu-icon" onClick={toggleMenu}/>}
      </InnerContainer>
    </NavigationContainer>
  );
};

export default Navigation;
