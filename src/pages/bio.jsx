import React, { useEffect, useState } from "react";
import profilepic from "../assets/profilepic.jpg";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaReact, FaNode, FaHtml5, FaCss3, FaJs } from "react-icons/fa"; // Import icons for example

function Bio() {
  const navigate = useNavigate();
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageOpen(true);
    }, 200); 
    return () => clearTimeout(timeout);
  }, []);

  const handleArrowDown = () => {
    navigate('/education');
  }

  const handleArrowUp = () => {
    navigate('/');
  }

  const heading = "My name is Alka Fadilla Syarief.";
  const summaryText =
    "I am a Korean Language Education graduate, a tech enthusiast, and a frontend developer.\n" +
    "Since middle school, I have been highly interested in tech. " +
    "Although, it diminished for a moment, but it grew again after graduating from university. " +
    "It influenced me to take a fullstack course in Rakamin Academy. \n" +
    "Carrying a bachelor degree in Korean Language Education and a web developer certificate, \n" +
    "I'm confident I can be a proficient web developer. ";

  // Replace \n with <br /> to format line breaks
  const formattedSummary = summaryText.split("\n").map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ));

  const pageClass = pageOpen ? "open-page" : "closed-page";

  return (
    <div className={`flex flex-col bg-navy w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center text-black ${pageClass}`}>
      <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2">
        <AiFillCaretUp className="icon" onClick={handleArrowUp} />
      </div>
      <div className="pt-[80px]">
        <div className={`flex flex-col items-center transition-opacity duration-1000 ease-in-out ${pageOpen ? "opacity-100" : "opacity-0"}`}>
          <div className="mb-6">
            <img
              src={profilepic}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 rounded-full"
            />
          </div>
          <div className="mb-6 text-left w-[900px]">
            <h1 className="md:text-3xl sm:text-xl text-center font-semibold text-white mb-4">{heading}</h1>
            <p className="md:text-lg text-center text-white">{formattedSummary}</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
        <AiFillCaretDown className="icon" onClick={handleArrowDown} />
      </div>
    </div>
  );
}

export default Bio;
