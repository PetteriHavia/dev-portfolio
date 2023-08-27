import {
  Container,
  HeroContainer,
  HeroHeading,
  Icons,
  Section,
} from "../styles/Elements.style";
import illustration from "../assets/desktop-illustration-hero.svg";
import { LiaGithub } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import Navigation from "./Navigation";

const HeroSection = () => {
  return (
    <Section>
        <Navigation />
    <Container>
      <HeroContainer>
        <HeroHeading>
          <h1>Petteri Havia</h1>
          <h3>Front-end focused web developer based in Finland</h3>
          <IconContext.Provider value={{ size: 45, color: "white" }}>
            <Icons>
              <LiaGithub />
              <MdEmail />
            </Icons>
          </IconContext.Provider>
        </HeroHeading>
        <img src={illustration} alt="developer" />
      </HeroContainer>
    </Container>
    </Section>
  );
};

export default HeroSection;
