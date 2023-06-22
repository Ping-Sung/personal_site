import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Academic from "./components/Academic";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>

    </>
  );
}

export default App;