import {
  Container,
  Column,
  Skills,
  InnerContainerAbout,
  PageHeading,
  JustifyEndAboutHeading,
  Intrested
} from "../styles/Elements.style";
import Row from "../assets/row.svg";

const About = () => {
  return (
    <Container>
      <InnerContainerAbout>
        <Column>
          <PageHeading>
            <h2>About</h2>
            <img src={Row} alt="circle row" />
          </PageHeading>
          <p>
            Hey, my name is Petteri Havia, a recent graduate from Laurea's
            Bachelor's Degree Programme in Business Information Technology. I
            have passion and interest in web development especially front-end.
            The dynamic world of web development keeps me inspired and in the
            future i wanna keep on learning and challenging myself by creating
            interesting websites and applications.
          </p>
        </Column>
        <Column>
          <JustifyEndAboutHeading>
            <h2>My Skills</h2>
          </JustifyEndAboutHeading>
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
          <JustifyEndAboutHeading>
            <h2>Interested In</h2>
          </JustifyEndAboutHeading>
          <Intrested>
            <h3>Next.js</h3>
            <h3>AI</h3>
            <h3>Design</h3>
            <h3>Figma</h3>
            <h3>Animations</h3>
          </Intrested>
        </Column>
      </InnerContainerAbout>
    </Container>
  );
};

export default About;
