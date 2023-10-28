import React, { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaReact, FaNode, FaHtml5, FaCss3, FaJs, FaDocker, FaDatabase, FaGit } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoVuejs } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import WorkExperienceCard from "../components/workexperiencecard"


function Experiences() {
  const navigate = useNavigate();
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageOpen(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  const handleArrowUp = () => {
    navigate("/bio");
  };

  const handleArrowDown = () => {
    navigate("/projects");
  };

  const pageClass = pageOpen ? "open-page" : "closed-page";

  return (
    <div className={`flex flex-col bg-gradient-to-t from-navy from-45% to-teal w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center text-white ${pageClass}`}>
      <div className={`transition-opacity duration-1000 ease-in-out ${pageOpen ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-4xl font-bold mt-20">My Skills</h1>
        <div className="mt-4 flex flex-row justify-center space-x-[60px]">
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
          <div className="mt-4 flex flex-row justify-center space-x-[60px]">
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
        <div className="border-t border-white mt-20"></div>
        <h1 className="text-4xl font-bold mt-20">My Experiences</h1>
        <div className="mt-4 flex flex-row justify-center space-x-[60px]">
        <WorkExperienceCard
/>

        </div>
      </div>
      <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2">
        <AiFillCaretUp className="icon" onClick={handleArrowUp} />
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-[400px] mb-[10px]">
        <AiFillCaretDown className="icon" onClick={handleArrowDown} />
      </div>
    </div>
  );
}

export default Experiences;
