import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import {Routes, Route} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import PageNotFound from "./pages/PageNotFound";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Theme";
import Navigation from "./components/Navigation";
import { useRef } from "react";

function App() {

  const [ theme, setTheme ] = useState();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);


  return (
        <ThemeProvider light={lightTheme} dark={darkTheme} theme={theme ? darkTheme: lightTheme }>
          <GlobalStyle />
          <Navigation homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef} theme={theme} setTheme={setTheme}/>
          <Routes>
            <Route path="/" element={<Home homeRef={homeRef} aboutRef={aboutRef} projectRef={projectRef}/> }/>
            <Route path="projects/:id" element={<ProjectPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ThemeProvider>
  );
}

export default App;
