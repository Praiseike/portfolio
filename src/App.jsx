import 'animate.css';
import './App.css'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import { Landing, Contact, Projects, Skills, Nav } from './pages';



import bg from "./assets/images/ring.svg";
import gradient from "./assets/images/radial-gradient-2.svg";

function App1() {
  return (
      <div className="h-screen w-screen bg-black m-0 px-12 overflow-hidden">
          <img src={gradient} className="w-[20rem] h-[20rem] left-0 top-0 absolute"/>
          <img src={bg} className="w-72 h-72 mx-auto mt-40 heartbeat-animation"/>
          <Router>
            <section className="fixed inset-0 w-full h-full md:lg:py-3 md:lg:px-20">
              <div 
                  className="border backdrop-blur-xl bg-[#61616122] border-[#ffffff22] 
                           sm:md:lg:rounded-[1rem]
                             h-full py-4 px-5 md:px-10 overflow-hidden"
              >
                <Nav/>
                <div className="border border-orange-600">
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




function App(){
  return (
    <>
      <section className="fixed h-screen w-screen bg-black m-0 px-12">
          {/*<img src={gradient} className="w-[20rem] h-[20rem] left-0 top-0 absolute"/>*/}
          <img src={bg} className="w-72 h-72 mx-auto mt-40 heartbeat-animation"/>
      </section>
      <section className="fixed inset-0 w-full h-full sm:md:px-40">
        <div className="border-x overflow-y-auto backdrop-blur-xl bg-[#61616122] border-[#ffffff22] h-full py-4 px-5 md:px-10 overflow-hidden pb-10">
          <Router>
            <Nav/>
            <Routes>
              <Route index path="/" element={<Landing/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/skills" element={<Skills/>}/>
            </Routes>
          </Router>
        </div>
      </section>
    </>
  );
}




export default App
