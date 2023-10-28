import React, {useState, useEffect} from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Navbar from "./../components/Navbar";
import { useNavigate } from "react-router-dom";


function Home() {
    const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setPageOpen(true);
    }, 200); 

    return () => clearTimeout(timeout);
  }, []);

    const navigate = useNavigate();

    const handleArrow = () => {
        navigate('/bio')
    }

    const pageClass = pageOpen ? "open-page" : "closed-page";

  return (
    <div className={`bg-gradient-to-b from-black from-45% to-navy w-full h-screen relative${pageClass}`}>
    <Navbar />
    <div className={`transition-opacity duration-1000 ease-in-out ${pageOpen ? "opacity-100" : "opacity-0"}`}>
      <div className="w-full h-screen flex flex-col justify-center items-center text-white">
        <h1 className="heading text-6xl font-bold">My name is Alka.</h1>
        <p className="subheading text-2xl mb-4 mt-5">I am a Web Developer (in the future)</p>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <AiFillCaretDown className="icon" onClick={handleArrow} />
      </div>
    </div>
    </div>
  );
}

export default Home;
