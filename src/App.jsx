import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css';
import Navbar from "./components/Navbar"
import Home from "./pages/home";
import Education from "./pages/education";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Bio from "./pages/bio";
import Experiences from "./pages/experiences";

function App() {

  return (
  <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/education" element={<Education />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/bio" element={<Bio />} />
    <Route path="/experiences" element={<Experiences />} />
  </Routes>
  </Router>
  )
}

export default App
