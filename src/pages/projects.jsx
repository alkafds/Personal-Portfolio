import React, { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import MAIN from "../assets/MAIN.png";
import REG from "../assets/REG.png";
import LOG from "../assets/LOG.png";
import JOBS from "../assets/JOBS.png";
import { FaReact, FaNode } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTailwindCss, BiLogoGithub } from "react-icons/bi";
import { SiExpress, SiSequelize, SiAxios, SiChakraui, SiJsonwebtokens } from "react-icons/si"

function Projects() {
  const navigate = useNavigate();
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageOpen(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  const handleArrowUp = () => {
    navigate("/experiences");
  };

  const handleArrowDown = () => {
    navigate("/projects");
  };

  const pageClass = pageOpen ? "open-page" : "closed-page";

  return (
    <div
      className={`flex flex-col bg-navy w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center text-white ${pageClass}`}
    >
      <div
        className={`transition-opacity duration-1000 ease-in-out ${
          pageOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl font-bold mt-20">My Projects</h1>
        <div className="mt-20 flex flex-row">
        <div className="mt-4 flex flex-col">
        
          <div className="w-50 px-4">
            <h2 className="text-2xl font-bold text-left">BakatLacak</h2>
            <p className="text-md text-left">
              Jobseeker website made for final project during Rakamin Academy
              Fullstack Development Bootcamp
            </p>
          </div>
          <div className="bg-transparent text-white p-4 flex flex-col">
            <div className="grid grid-cols-4 gap-2">
              <p className="text-left">
                <span className="font-semibold text-left mr-[150px]">Date:</span>
              </p>
              <p className="text-left">
                June 2023 - July 2023
              </p>
              <p className="text-left">
                <span className="font-semibold text-left mr-[150px]">Repository:</span>
              </p>
              <p className="text-left mx-0">
                <a href="https://github.com/Bakat-Lacak" className="underline underline-offset-4 text-teal">Click here</a>
              </p>
            </div>
            <div className="border-t border-white my-6"></div>
              <p className="font-semibold text-left">Stacks used:</p>
              <div className="text-left ml-[25px] grid grid-cols-5 gap-4">
                <FaNode className="proj-icon"/>
                <SiExpress className="proj-icon"/>
                <SiJsonwebtokens className="proj-icon"/>
                <BiLogoPostgresql className="proj-icon"/>
                <SiSequelize className="proj-icon"/>
                <FaReact className="proj-icon"/>
                <SiAxios className="proj-icon"/>
                <SiChakraui className="proj-icon"/>
                <BiLogoTailwindCss className="proj-icon"/>
                <BiLogoGithub className="proj-icon"/>
              </div>
          </div>
          </div>
          <div className="w-1/2 p-4">
            <Carousel
              showArrows={true}
              showThumbs={false}
              width="600px" // Adjust the width as needed
              infiniteLoop={true} // Prevent looping to the first slide
              
            >
              <div>
                <img src={MAIN} alt="MAIN" className="w-128 h-105" />
              </div>
              <div>
                <img src={REG} alt="REG" className="w-128 h-105" />
              </div>
              <div>
                <img src={LOG} alt="LOG" className="w-128 h-105" />
              </div>
              <div>
                <img src={JOBS} alt="JOBS" className="w-128 h-105" />
              </div>
            </Carousel>
          </div>
        </div>
        
      </div>
      <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2">
        <AiFillCaretUp className="icon" onClick={handleArrowUp} />
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 translate-y-[70px] mb-[10px]">
        <AiFillCaretDown className="icon" onClick={handleArrowDown} />
      </div>
    </div>
  );
}

export default Projects;
