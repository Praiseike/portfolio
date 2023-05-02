import 'animate.css';
import { useState } from 'react'

import Landing from './pages/landing'
import Contact from './pages/contact'
import Projects from './pages/projects'
import Skills from './pages/skills'
import Nav from './components/nav/nav';

import './App.css'

import bg from "./assets/images/ring.svg";
import gradient from "./assets/images/radial-gradient-2.svg";



import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
function App() {
  return (
      <div className="h-screen w-screen bg-black m-0 px-12 overflow-hidden">
        <img src={gradient} className="w-[20rem] h-[20rem] left-0 top-0 absolute"/>
        <img src={bg} className="w-72 h-72 mx-auto mt-40 heartbeat-animation"/>
        <Router>
          <section className="absolute inset-0 w-full h-full py-10 px-20">
            <div className="border backdrop-blur-xl bg-[#61616122] border-[#ffffff22] rounded-[1rem] h-full py-4 px-10">
              <Nav/>
              <div className="">
                <Routes>
                  <Route path="/" element={<Landing/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/projects" element={<Projects/>}/>
                  <Route path="/skills" element={<Skills/>}/>
                </Routes>
              </div>
            </div>
          </section>
        </Router>
      </div>      
  )
}

export default App
