import {
  Container,
  InnerContainer,
  NavLinks,
  NavLogo,
  NavigationContainer,
} from "../styles/Elements.style";
import { Link } from "react-router-dom";

const Navigation = ({aboutRef, projectRef, homeRef}) => {

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavigationContainer>
      <InnerContainer>
        <NavLogo>
          <h1>Logo</h1>
        </NavLogo>
        <NavLinks>
          <Link to="/#home" onClick={() => scrollToSection(homeRef)}><p>&gt; HOME</p></Link>
          <Link to="/#about" onClick={() => scrollToSection(aboutRef)}><p>&gt; ABOUT</p></Link>
          <Link to="/#projects" onClick={() => scrollToSection(projectRef)}><p>&gt; PROJECTS</p></Link>
          <Link to="/#contact"><p>&gt; CONTACT</p></Link>
        </NavLinks>
      </InnerContainer>
    </NavigationContainer>
  );
};

export default Navigation;
