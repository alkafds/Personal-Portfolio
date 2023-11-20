import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css';
import Navbar from "./components/Navbar"
import Home from "./pages/home";

function App() {

  return (
  <Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
  </Router>
  )
}

export default App
