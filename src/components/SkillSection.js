import {
    Container,
    InnerContainerSkills,
    Column,
    Skills,
    AboutHeading,
    Intrested,
  } from "../styles/Elements.style";
  
  const SkillSection = () => {
    return (
      <Container>
        <InnerContainerSkills>
          <Column>
            <AboutHeading className="skill-heading">
              <h2>Skills</h2>
            </AboutHeading>
            <Skills>
              <h3>HTML</h3>
              <h3>CSS</h3>
              <h3>SASS</h3>
              <h3>JavaScript</h3>
              <h3>GitHub</h3>
              <h3>Responsive Design</h3>
              <h3>React</h3>
              <h3>Styled Components</h3>
            </Skills>
          </Column>
          <Column>
            <AboutHeading className="intrested-heading">
              <h2>Interested</h2>
            </AboutHeading>
            <Intrested>
              <h3>Next.js</h3>
              <h3>Svelte</h3>
              <h3>Minimalist Design</h3>
              <h3>Gatsby</h3>
              <h3>Animations</h3>
            </Intrested>
          </Column>
        </InnerContainerSkills>
      </Container>
    );
  };
  
  export default SkillSection;
  