import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='fixed w-full h-[80px] flex items-center px-4 bg-transparent text-white font-semibold'>
      <div className='hidden md:flex justify-between items-center w-full'>
        <ul className='flex space-x-4 items-end'>
          <li onClick={handleHome} className='menu-item hover:bg-teal hover:text-black px-2 py-1 rounded'>Home</li>
          <li onClick={handleEdu} className='menu-item hover:bg-teal hover:text-black px-2 py-1 rounded'>Education</li>
          <li onClick={handleExperiences} className='menu-item hover:bg-teal hover:text-black px-2 py-1 rounded'>Skills and Experiences</li>
          <li onClick={handleProj} className='menu-item hover:bg-teal hover:text-black px-2 py-1 rounded'>Projects</li>
          <li onClick={handleCont} className='menu-item hover:bg-teal hover:text-black px-2 py-1 rounded'>Contact</li>
        </ul>
        <div className='flex-grow'></div>
      </div>

      <div className='md:hidden'>
        <FaBars onClick={toggleMenu} />
      </div>

      {isOpen && (
        <div className='md:hidden w-full absolute top-[80px] left-0 bg-black text-white'>
          <ul className='flex flex-col space-y-4 p-4'>
          <li onClick={handleHome}>Home</li>
          <li onClick={handleEdu}>Education</li>
          <li onClick={handleExperiences} className='menu-item hover:bg-teal hover:text-black px-2 py-1 rounded'>Skills and Experiences</li>
          <li onClick={handleProj}>Projects</li>
          <li onClick={handleCont}>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
}
