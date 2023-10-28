import React, { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
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

  const handleArrowUp = () => {
    navigate("/bio");
  };

  const handleArrowDown = () => {
    navigate("/experiences");
  };

  const pageClass = pageOpen ? "open-page" : "closed-page";

  return (
    <div className={`flex flex-col bg-gradient-to-b from-navy from-45% to-teal w-full h-screen  p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center text-white ${pageClass}`}>
      <div className={`transition-opacity duration-1000 ease-in-out ${pageOpen ? "opacity-100" : "opacity-0"}`}>
        <h1 className="text-4xl font-bold mt-20">My Education</h1>
        <div className="mt-[100px] flex flex-row justify-center">
          <ul className="list-none flex flex-row md:space-x-[190px] sm:space-x-[150px]">
            <li className="card ">
              <LuSchool className="icon" />
            </li>
            <li className="card">
              <LuSchool2 className="icon" />
            </li>
            <li className="card">
              <FaTools className="icon" />
            </li>
          </ul>
        </div>
        <div className="mt-4 flex flex-row justify-center">
          <ul className="list-none flex flex-row md:space-x-[85px] sm:space-x-[85px]">
            <li className="info">
              <p className="text-white text-center font-bold">SMA Alfa Centauri</p>
            </li>
            <li className="info">
              <p className="text-white text-center font-bold">Universitas Pendidikan Indonesia</p>
            </li>
            <li className="info">
              <p className="text-white text-center font-bold">Rakamin Academy</p>
            </li>
          </ul>
        </div>
        <div className="mt-4 flex flex-row justify-center">
          <ul className="list-none flex flex-row md:space-x-[90px] sm:space-x-[80px]">
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
        <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2">
          <AiFillCaretUp className="icon" onClick={handleArrowUp} />
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <AiFillCaretDown className="icon" onClick={handleArrowDown} />
        </div>
      </div>
    </div>
  );
}

export default Education;
