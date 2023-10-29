import { useState } from 'react';
import { FaBars, FaLinkedinIn, FaInstagram, FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase, } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaXTwitter, FaWhatsapp, FaPencil } from "react-icons/fa6"
import { GiSkills } from "react-icons/gi";

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleHome = () => {
    navigate("/")
  }

  const handleEdu = () => {
    navigate("/education")
  }

  const handleCont = () => {
    navigate("/contact")
  }

  const handleProj = () => {
    navigate("/projects")
  }

  const handleExperiences = () => {
    navigate("/experiences")
  }

  const handleBio = () => {
    navigate("/bio")
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSkills= () => {
    navigate("/skills")
  }

  return (
    <div className='fixed w-full h-[80px] flex items-center px-4 bg-transparent text-white font-semibold'>
      <div className='hidden md:flex justify-between items-center w-full'>
        <ul className='flex pl-4 space-x-10 items-end'>
        <li onClick={handleHome} className="menu-item hover:text-white rounded-2xl">
            <FaHome />
          </li>
          <li onClick={handleBio} className="menu-item hover:text-white  rounded-2xl">
            <FaUser />
          </li>
          <li onClick={handleEdu} className="menu-item hover:text-white  rounded-2xl">
            <FaGraduationCap />
          </li>
          <li onClick={handleSkills} className="menu-item hover:text-white rounded-2xl">
            <GiSkills />
          </li>
          <li onClick={handleExperiences} className="menu-item hover:text-white rounded-2xl">
            <FaBriefcase />
          </li>
          <li onClick={handleProj} className="menu-item hover:text-white rounded-2xl">
            <FaPencil />
          </li>
        </ul>
        <div className='flex-grow'></div>
        
        <ul className='flex space-x-4 items-end'>
          <li className="social-icons  hover:text-white px-2 py-1 rounded-2xl"><a href="mailto:fadillaalka@gmail.com"><AiOutlineMail /></a></li>
          <li className="social-icons  hover:text-white px-2 py-1 rounded-2xl"><a href="https://wa.me/62895400761896"><FaWhatsapp /></a></li>
          <li className="social-icons  hover:text-white px-2 py-1 rounded-2xl"><a href="https://www.linkedin.com/alka-fadilla/"><FaLinkedinIn /></a></li>
          <li className="social-icons  hover:text-white px-2 py-1 rounded-2xl"><a href="https://www.instagram.com/alkafds"><FaInstagram /></a></li>
          <li className="social-icons  hover:text-white px-2 py-1 rounded-2xl"><a href="https://www.twitter.com/alkafdsy"><FaXTwitter /></a></li>
        </ul>
      </div>

      <div className='md:hidden'>
        <FaBars onClick={toggleMenu} />
      </div>

      {isOpen && (
        <div className='md:hidden w-full bg-transparent absolute top-[80px] left-0 text-white'>
          <ul className='flex flex-col space-y-4 p-4'>
          <li onClick={handleHome}>Home</li>
          <li onClick={handleBio}>Bio</li>
          <li onClick={handleEdu}>Education</li>
          <li onClick={handleSkills}>Skills</li>
          <li onClick={handleExperiences}>Skills and Experiences</li>
          <li onClick={handleProj}>Projects</li>
          <li onClick={handleCont}>Contact</li>
          </ul>
        </div>
        
      )}
    </div>
  );
}
