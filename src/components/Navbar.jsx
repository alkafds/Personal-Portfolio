import { useState } from 'react';
import { FaBars, FaLinkedinIn, FaInstagram, FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase, } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaXTwitter, FaWhatsapp, FaPencil } from "react-icons/fa6"
import { GiSkills } from "react-icons/gi";
import { Link } from 'react-scroll';

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

  return (
    <div className='fixed w-full h-[50px] flex justify-center items-center bg-black text-white font-mono font-semibold shadow-xl z-40'>
      <div className='hidden md:flex'>
        <ul className='flex pl-4 space-x-10 items-end'>
        <li>
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
          </li>
          <li>
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            Projects
          </Link>
          </li>
          <li>
          <Link
            to="Experience"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            Experience
          </Link>
          </li>
          <li>
          <Link
            to="Skills"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            Skills
          </Link>
          </li>
          <li>
          <Link
            to="Education"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            Education
          </Link>
          </li>
          <li>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
          </li>
        </ul>
        <div className='flex-grow'></div>
      </div>

      <div className='md:hidden'>
        <FaBars onClick={toggleMenu} className="cursor-pointer mr-[220px]"/>
      </div>

      {isOpen && (
        <div className='md:hidden w-full bg-navy absolute top-[50px] left-0 text-white'>
          <ul className='flex flex-col space-y-4 p-4'>
          <li>
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
          </li>
          <li>
          <Link
            to="Projects"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            Projects
          </Link>
          </li>
          <li>
          <Link
            to="Experience"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            Experience
          </Link>
          </li>
          <li>
          <Link
            to="Skills"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            Skills
          </Link>
          </li>
          <li>
          <Link
            to="Education"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            Education
          </Link>
          </li>
          <li>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70} // Adjust this value based on your layout
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
          </li>
          </ul>
        </div>
        
      )}
    </div>
  );
}
