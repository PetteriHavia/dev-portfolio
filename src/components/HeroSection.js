import {
  Container,
  HeroContainer,
  HeroHeading,
  Icons,
  Section,
} from "../styles/Elements.style";
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
          <IconContext.Provider value={{ size: 60, color:"#383873"}}>
            <Icons>
              <LiaGithub />
              <LiaPaperPlaneSolid />
            </Icons>
          </IconContext.Provider>
        </HeroHeading>
      </HeroContainer>
    </Container>
  );
};

export default HeroSection;
