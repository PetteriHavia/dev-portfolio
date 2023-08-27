import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </>
  );
}

export default App;
