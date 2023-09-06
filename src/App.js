import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import {Routes, Route} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="projects/:id" element={<ProjectPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  );
}

export default App;
