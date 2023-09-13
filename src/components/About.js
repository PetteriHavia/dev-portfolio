import {
  Container,
  Column,
  InnerContainerAbout,
  PageHeading,
} from "../styles/Elements.style";
import Row from "../assets/row.svg";
import coding from "../assets/desktop-illustration-hero.svg";

const About = ({ aboutSectionRef }) => {
  return (
    <Container id="about" ref={aboutSectionRef}>
      <InnerContainerAbout>
        <Column>
          <PageHeading>
            <h2>About</h2>
            <img src={Row} alt="circle illustration" />
          </PageHeading>
          <p>
            I am Petteri Havia, and I have recently completed my Bachelor's Degree
            Program in Business Information Technology. My studies primarily
            focused on the captivating realm of web development, with a
            particular interest in front-end. I enjoy creating
            new lines of code and have a strong desire for learning, and the field of web
            development offers plenty of opportunities for continuous growth
            and exploration.
          </p>
          <p>
            Apart from coding, I also have hobbies like gaming, maintaining
            an active lifestyle through exercise, and enjoying a wide variety of
            music.
          </p>
        </Column>
        <img className="illustration-pc" src={coding} alt="coding" />
      </InnerContainerAbout>
    </Container>
  );
};

export default About;
