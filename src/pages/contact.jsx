import React, { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6"
function Contact() {
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
    navigate("/contact");
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
        <h1 className="text-4xl font-bold mt-20">Contact Me</h1>
        <div className="mt-20 flex justify-center items-center">
            <div className="mr-4 flex flex-row space-x-6">
                
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

export default Contact;
