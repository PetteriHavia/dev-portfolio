import {
  Container,
  HeroContainer,
  HeroHeading,
  Icons,
} from "../styles/Elements.style";
import { Link } from "react-router-dom";
import { LiaGithub } from "react-icons/lia";

const HeroSection = ({ homeRef }) => {
  return (
    <Container id="home" ref={homeRef}>
      <HeroContainer>
        <HeroHeading>
          <h1>
            Hi I'm <span>Petteri.</span>
            <br />
            Front-end focused developer
          </h1>
          <Icons>
            <Link to="https://github.com/PetteriHavia" target="_blank"><LiaGithub /></Link>
          </Icons>
        </HeroHeading>
      </HeroContainer>
    </Container>
  );
};

export default HeroSection;
