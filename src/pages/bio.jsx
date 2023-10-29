import React, { useEffect, useState } from "react";
import profilepic from "../assets/profilepic.jpg";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai"; // Updated icons
import { useNavigate } from "react-router-dom";

function Bio() {
  const navigate = useNavigate();
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageOpen(true);
    }, 200); 
    return () => clearTimeout(timeout);
  }, []);

  const handleArrowRight = () => {
    navigate('/education');
  }

  const handleArrowLeft = () => {
    navigate('/');
  }

  const heading = "About Me";
  const summaryText =
    "I am a Korean Language Education graduate, a tech enthusiast, and a frontend developer.\n" +
    "Since middle school, I have been highly interested in tech. " +
    "Although, it diminished for a moment, but it grew again after graduating from university. " +
    "It influenced me to take a fullstack course in Rakamin Academy. \n" +
    "Carrying a bachelor degree in Korean Language Education and a web developer certificate, \n" +
    "I'm confident I can be a proficient web developer. ";

  const formattedSummary = summaryText.split("\n").map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ));

  const pageClass = pageOpen ? "open-page" : "closed-page";

  return (
    <div className={`flex flex-col bg-my-background bg-cover bg-center w-screen h-screen p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center text-black ${pageClass}`}>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
        <AiOutlineCaretLeft className="icon" onClick={handleArrowLeft} /> 
      </div>
      <div className="pt-[80px]">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <img
              src={profilepic}
              alt="Profile"
              className={`w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 shadow-xl rounded-full slide-in ${pageOpen ? "slide" : ""} `}
            />
          </div>
          <div className="mb-6 text-left w-[900px]">
            <h1 className={`md:text-3xl sm:text-xl text-center font-semibold text-white mb-4 slide-in-sec ${pageOpen ? "slide-sec" : ""}`}>{heading}</h1>
            <p className={`bg-mint bg-opacity-20 backdrop-blur-lg rounded-2xl border border-mint p-4 shadow-2xl md:text-lg text-center text-white slide-in-thi ${pageOpen ? "slide-thi" : ""}`}>{formattedSummary}</p>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
        <AiOutlineCaretRight className="icon" onClick={handleArrowRight} /> {/* Updated arrow icon */}
      </div>
    </div>
  );
}

export default Bio;
