import {
  Container,
  HeroContainer,
  HeroHeading,
  Icons,
  Section,
} from "../styles/Elements.style";
import { Link } from "react-router-dom";
import illustration from "../assets/desktop-illustration-hero.svg";
import { LiaGithub } from "react-icons/lia";
import { LiaPaperPlaneSolid} from "react-icons/lia";
import { IconContext } from "react-icons";
import Navigation from "./Navigation";

const HeroSection = ({homeRef}) => {
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
              <LiaPaperPlaneSolid />
            </Icons>
         
        </HeroHeading>
      </HeroContainer>
    </Container>
  );
};

export default HeroSection;
