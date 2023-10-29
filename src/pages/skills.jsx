import React, { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { FaReact, FaNode, FaHtml5, FaCss3, FaJs, FaDocker, FaDatabase, FaGit } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoVuejs } from "react-icons/bi";
import { useNavigate } from "react-router-dom";


function Skills() {
  const navigate = useNavigate();
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageOpen(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  const handleArrowLeft = () => {
    navigate("/education");
  };

  const handleArrowRight = () => {
    navigate("/experiences");
  };

  const pageClass = pageOpen ? "open-page" : "closed-page";

  return (
    <div className={`flex flex-col bg-my-background bg-center bg-cover w-full h-full sm:h-screen p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center text-white ${pageClass}`}>
      <div className={`transition-opacity duration-1000`}>
      <h1 className={`text-4xl font-bold mt-20 slide-in ${pageOpen ? "slide" : ""} `}>My Skills</h1>
        <div className={`mt-4 flex flex-row justify-center space-x-[60px] duration-1000 slide-in-sec ${pageOpen ? "slide-sec" : ""}`}>
          <div className="icon-container">
            <FaReact className="skill-icon" />
            <div className="icon-text">React</div>
          </div>
          <div className="icon-container">
            <FaNode className="skill-icon" />
            <div className="icon-text">Node.js</div>
          </div>
          <div className="icon-container">
            <FaHtml5 className="skill-icon" />
            <div className="icon-text">HTML5</div>
          </div>
          <div className="icon-container">
            <FaCss3 className="skill-icon" />
            <div className="icon-text">CSS3</div>
          </div>
          <div className="icon-container">
            <BiLogoVuejs className="skill-icon" />
            <div className="icon-text">Vue.js</div>
          </div>
          </div>
          <div className={`mt-4 flex flex-row justify-center space-x-[60px] duration-1000 slide-in-thi ${pageOpen ? "slide-thi" : ""}`}>
          <div className="icon-container">
            <FaJs className="skill-icon" />
            <div className="icon-text">JavaScript</div>
          </div>
          <div className="icon-container">
            <FaDocker className="skill-icon" />
            <div className="icon-text">Docker</div>
          </div>
          <div className="icon-container">
            <BiLogoPostgresql className="skill-icon" />
            <div className="icon-text">PostgreSQL</div>
          </div>
          <div className="icon-container">
            <FaGit className="skill-icon" />
            <div className="icon-text">Git</div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-2">
        <AiOutlineCaretLeft className="icon" onClick={handleArrowLeft} /> 
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
          <AiOutlineCaretRight className="icon" onClick={handleArrowRight} />
        </div>
    </div>
  );
}

export default Skills;
