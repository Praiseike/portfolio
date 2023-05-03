import 'animate.css';
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import { Landing, Contact, Projects, Skills, Nav } from './pages';



import bg from "./assets/images/ring.svg";
import gradient from "./assets/images/radial-gradient-2.svg";

function App() {
  return (
      <div className="h-screen w-screen bg-black m-0 px-12 overflow-hidden">
          <img src={gradient} className="w-[20rem] h-[20rem] left-0 top-0 absolute"/>
          <img src={bg} className="w-72 h-72 mx-auto mt-40 heartbeat-animation"/>
          <Router>
            <section className="fixed inset-0 w-full h-full md:lg:py-10 md:lg:px-20">
              <div className="border backdrop-blur-xl bg-[#61616122] border-[#ffffff22] md:lg:overflow-visible overflow-y-scroll sm:md:lg:rounded-[1rem] h-full py-4 px-5 md:px-10">
                <Nav/>
                <div className="">
                  <Routes>
                    <Route index path="/" element={<Landing/>}/>
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
