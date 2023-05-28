import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar />
      <Container className="mb-4">
      <Routes>
        
          <Route path="/" element={<Home />} />
    
        ;
      </Routes>
      </Container>
    </>
  );
}

export default App;
