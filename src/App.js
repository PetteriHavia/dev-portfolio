import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import {Routes, Route} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="projects/:id" element={<ProjectPage />} />
    </Routes>
    </>
  );
}

export default App;
