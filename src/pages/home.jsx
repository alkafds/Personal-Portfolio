import React, {useState, useEffect} from "react";
import { AiOutlineCaretRight } from "react-icons/ai";
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

    const handleArrowRight = () => {
        navigate('/bio')
    }

    const pageClass = pageOpen ? "open-page" : "closed-page";

  return (
    <div className={`bg-my-background bg-cover bg-center w-full h-screen relative${pageClass}`}>
    <div className={`transition-opacity duration-1000 ease-in-out ${pageOpen ? "opacity-100" : "opacity-0"}`}>
      <div className="w-full h-screen flex flex-col justify-center items-center text-white">
        <h1 className={`heading text-6xl font-bold slide-in ${pageOpen ? "slide" : ""} `}>Alka Fadilla.</h1>
        <p className={`subheading text-2xl mb-4 mt-5 slide-in-thi ${pageOpen ? "slide-thi" : ""} `}>That is my name. I'm a web developer (in the future)</p>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
        <AiOutlineCaretRight className="icon" onClick={handleArrowRight} /> {/* Updated arrow icon */}
      </div>
    </div>
    </div>
  );
}

export default Home;
