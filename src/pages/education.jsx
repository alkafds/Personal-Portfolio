import React, { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { LuSchool, LuSchool2 } from "react-icons/lu";
import { FaTools } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Education() {
  const navigate = useNavigate();
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageOpen(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  const handleArrowLeft = () => {
    navigate("/bio");
  };

  const handleArrowRight = () => {
    navigate("/skills");
  };

  const pageClass = pageOpen ? "open-page" : "closed-page";

  return (
    <div className={`flex flex-col bg-my-background bg-cover bg-center w-screen h-screen p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center text-white ${pageClass}`}>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
        <AiOutlineCaretLeft className="icon" onClick={handleArrowLeft} /> 
      </div>
      <div className={`duration-1000`}>
        <h1 className={`text-4xl font-bold mt-20 slide-in ${pageOpen ? "slide" : ""} `}>My Education</h1>
        <div className="mt-[100px] flex flex-row justify-center">
          <ul className="list-none flex flex-row md:space-x-[190px] sm:space-x-[150px]">
            <li className={`card bg-white bg-opacity-30 backdrop-blur-lg border border-mint shadow-xl duration-1000 slide-in-sec ${pageOpen ? "slide-sec" : ""}`}>
              <LuSchool className="icon" />
            </li>
            <li className={`card bg-white bg-opacity-30 backdrop-blur-lg border border-mint shadow-xl duration-1000 slide-in-sec ${pageOpen ? "slide-sec" : ""}`}>
              <LuSchool2 className="icon" />
            </li>
            <li className={`card bg-white bg-opacity-30 backdrop-blur-lg border border-mint shadow-xl duration-1000 slide-in-sec ${pageOpen ? "slide-sec" : ""}`}>
              <FaTools className="icon" />
            </li>
          </ul>
        </div>
        <div className="mt-4 flex flex-row justify-center">
          <ul className={`list-none flex flex-row md:space-x-[55px] sm:space-x-[85px] slide-in-thi ${pageOpen ? "slide-thi" : ""} `}>
            <li className="info">
              <p className="text-white text-center font-bold text-lg">SMA Alfa Centauri</p>
            </li>
            <li className="info">
              <p className="text-white text-center font-bold text-lg">Universitas Pendidikan Indonesia</p>
            </li>
            <li className="info">
              <p className="text-white text-center font-bold text-lg">Rakamin Academy</p>
            </li>
          </ul>
        </div>
        <div className="mt-2 flex flex-row justify-center">
          <ul className={`list-none flex flex-row md:space-x-[90px] sm:space-x-[80px] slide-in-thi ${pageOpen ? "slide-thi" : ""} `}>
            <li className="info">
              <p className="text-white text-center italic md:ml-12 sm:ml-6">Social Science</p>
            </li>
            <li className="info">
              <p className="text-white text-center italic md:ml-12 sm:ml-[80px]">Korean Language Education</p>
            </li>
            <li className="info">
              <p className="text-white text-center italic md:ml-0 sm:ml-12">Fullstack Web Development</p>
            </li>
          </ul>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
          <AiOutlineCaretRight className="icon" onClick={handleArrowRight} />
        </div>
      </div>
    </div>
  );
}

export default Education;
