import HeroSection from "../components/HeroSection";
import Navigation from "../components/Navigation";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/SkillSection";
import Footer from "../components/Footer";
import { useRef } from "react";

const Home = () => {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);

  return (
    <>
      <Navigation aboutRef={aboutRef} projectRef={projectRef} homeRef={homeRef}/>
      <HeroSection homeRef={homeRef}/>
      <About aboutSectionRef={aboutRef}/>
      <Skills />
      <Projects projectSectionRef={projectRef}/>
      <Footer />
    </>
  );
};

export default Home;
