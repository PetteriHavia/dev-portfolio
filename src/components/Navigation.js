import {
  Container,
  InnerContainer,
  NavLinks,
  NavLogo,

} from "../styles/Elements.style";

const Navigation = () => {
  return (
    <Container>
      <InnerContainer>
        <NavLogo>
          <h1>Cool Logo Here</h1>
        </NavLogo>
        <NavLinks>
          <p>&gt; HOME</p>
          <p>&gt; ABOUT</p>
          <p>&gt; PROJECTS</p>
          <p>&gt; CONTACT</p>
        </NavLinks>
      </InnerContainer>
    </Container>
  );
};

export default Navigation;
