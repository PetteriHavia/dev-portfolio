import {
  Container,
  Column,
  InnerContainerAbout,
  PageHeading
} from "../styles/Elements.style";
import Row from "../assets/row.svg";
import coding from "../assets/desktop-illustration-hero.svg";


const About = ({aboutSectionRef}) => {
  return (
      <Container id="about" ref={aboutSectionRef}>
        <InnerContainerAbout>
          <Column>
            <PageHeading>
              <h2>About</h2>
              <img src={Row} alt="circle illustration" />
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
            <img className="illustration-pc" src={coding } alt="coding" />
        </InnerContainerAbout>
      </Container>
  );
};

export default About;
