// import React from "react";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from './components/Projects'
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import CreateDiary from "./components/CreateDiary";
import BlogDetail from "./components/BlogDetail";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import './App.css'


function App() {

  return (
    <>
      <Header />
      <div className="container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/CreateDiary" element={<CreateDiary />} />
            <Route path="/Blogs/:id" element={<BlogDetail />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>

      </div>

    </>
  );
}

export default App;