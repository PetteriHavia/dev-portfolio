import {
  Container,
  InnerContainer,
  NavLinkList,
  NavLogo,
  NavigationContainer,
  StyledLink,
} from "../styles/Elements.style";
import { useState } from "react";
import {FiMenu, FiX} from 'react-icons/fi';

const Navigation = ({aboutRef, projectRef, homeRef}) => {

  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    {isOpen ? setIsOpen(false) : setIsOpen(true)}
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
        </NavLinkList>
        {isOpen ? <FiX onClick={toggleMenu}/> : <FiMenu onClick={toggleMenu}/>}
      </InnerContainer>
    </NavigationContainer>
  );
};

export default Navigation;
