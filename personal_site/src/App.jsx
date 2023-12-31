import React from "react";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from './components/Projects'
import Academic from './components/Academic'
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import CreateDiary from "./components/CreateDiary";
import BlogDetail from "./components/BlogDetail";
import Login from "./components/Login";
import ProjectUpload from "./components/ProjectUpload";
import Cerule from "./components/Cerule";
import { Routes, Route } from "react-router-dom";
import './App.css'
import { useRef } from 'react'



function App() {
  const containerRef = useRef(null);

  React.useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      // console.log("滚动事件触发了")
      const container = containerRef.current;
      container.scrollTop += e.deltaY;
    };

    const containerElement = containerRef.current;
    document.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, []);
  const homeRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const academicRef = useRef(null);
  const selfProjectsRef = useRef(null);
  const OtherExperienceRef = useRef(null);
  const refs = [
    { name: 'Biography', ref: homeRef },
    { name: 'Experience', ref: projectsRef },
    { name: 'Self Projects', ref: selfProjectsRef },
    { name: 'Other Experiences', ref: OtherExperienceRef },
    { name: 'Education', ref: educationRef },
    { name: 'Academic', ref: academicRef },

  ]

  return (
    <div className="root-container">
      <Header refs={refs} />
      <div className="container" >
        <div className="main-content" ref={containerRef}>
          <Routes>
            <Route path="/" element={<Home
              OtherExperienceRef={OtherExperienceRef}
              selfProjectsRef={selfProjectsRef}
              educationRef={educationRef}
              projectsRef={projectsRef}
              academicRef={academicRef}
              ref={homeRef}
            />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Academic" element={<Academic />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/CreateDiary" element={<CreateDiary />} />
            <Route path="/Blogs/:id" element={<BlogDetail />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ProjectUpload" element={<ProjectUpload />} />
            <Route path="/Cerule" element={<Cerule />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;