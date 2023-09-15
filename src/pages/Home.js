import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/SkillSection";
import Footer from "../components/Footer";

const Home = ({ aboutRef, homeRef, projectRef }) => {
  return (
    <>
      <HeroSection homeRef={homeRef} />
      <About aboutSectionRef={aboutRef} />
      <Skills />
      <Projects projectSectionRef={projectRef} />
      <Footer />
    </>
  );
};

export default Home;
