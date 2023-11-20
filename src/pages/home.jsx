import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import {FaLinkedinIn, FaInstagram,
} from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { FaXTwitter, FaWhatsapp, FaPencil } from "react-icons/fa6"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import profilepic from "../assets/profilepic.jpg";
import MAIN from "../assets/MAIN.png";
import REG from "../assets/REG.png";
import LOG from "../assets/LOG.png";
import JOBS from "../assets/JOBS.png";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const summaryText =
    "Welcome to my Portfolio. \n" +
    "I am a web developer with background in Korean Language Education. " +
    "I went to Universitas Pendidikan Indonesia, " +
    "then shifted my career to be a programmer.";

  const formattedSummary = summaryText.split("\n").map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ))

  const devSummary =
    "I am a web developer with a focus primarily on Frontend Web Development. \n " +
    "I use Javascript in all of my projects, often with React and Vue. By nature, I'm a fullstack web developer, but working with database isn't my strongest suit. \n" +
    "My main server side language is NodeJS, often paired with PostgreSQL. Recently, I've been also expanding my skills into using PHP with Laravel too. \n" +
    "I primarily use VSCode for coding, and Git for all of my work. Check out my Github profile link in the 'Projects' section above. \n" +
    "Lastly, having a big interest in Tech (even winning a Computer Quiz Competition back in middle school), I can troubleshoot most problems and is decently versed in various operating systems such as Windows, Mac, and Linux, mainly Debian-based. ";

  const langSummary =
    "I am capable of speaking Korean, English and Indonesian. \n" +
    "I gained the ability to speak Korean from university. I took a TOPIK II test in 2022 and acquired the score of 125, which placed me in the Level 3 (intermediate level). \n" +
    "I can also confidently converse in English, though, I haven't took any TOEFL/IELTS tests yet. \n" +
    "I am a native Indonesian speaker, and have acquired a very high proficiency level/Sangat Tinggi in UKBI. ";

  const eduSummary =
    "As a graduate from the well-known education university in Indonesia, I also have the knowledge regarding educational fields in general. ";

  const formattedDevSum = devSummary.split("\n").map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ))

  const formattedlangSum = langSummary.split("\n").map((text, index) => (
    <React.Fragment key={index}>
      {text}
      <br />
    </React.Fragment>
  ))

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);


  return (
    <div className="bg-my-background bg-auto bg-center backdrop-blur-xl w-full h-full flex flex-col justify-center items-center">
      <div className="bg-black bg-opacity-20 flex flex-col items-center text-white" id="About">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1
            data-aos="fade-down-right"
            className="heading text-8xl font-bold font-playfair mt-[80px]"
          >
            ALKA FADILLA
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <p
            data-aos="fade-down-right"
            className="subheading sm:text-xl lg:text-2xl font-semibold font-mono mt-[30px]"
          >
            EDUCATION GRADUATE. KOREAN SPEAKER. WEB DEVELOPER.
          </p>
        </motion.div>
        <span className="border-b-[1px] border-white absolute top-[270px] transform w-[700px] z-0"></span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src={profilepic}
            alt="Profile"
            className="w-32 shadow-xl rounded-full sm:mx-[280px] lg:mx-[620px] mt-[80px]"
          />
          <p
            data-aos="fade-down-right"
            className="text-lg text-bold font-mono mt-[40px] lg:mx-[340px] text-center">
            {formattedSummary}
          </p>
        </motion.div>
        <span className="absolute border-b-[1px] border-white top-[650px] transform w-[700px] z-0"></span>
      </div>
      <div className="bg-black bg-opacity-20 w-full h-auto flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <h1 className="font-bold font-playfair text-5xl mt-[100px] text-center text-white" id="Projects">
              LATEST PROJECT
            </h1>
            <div data-aos="fade-down">
              <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                className="carousel-container sm:ml-[130px] lg:ml-[330px] mt-[80px] justify-center items-center self-center"
              >
                <div>
                  <img src={MAIN} alt="MAIN" className="sm:w-64 lg:h-41 lg:w-128 lg:h-105" />
                </div>
                <div>
                  <img src={REG} alt="REG" className="sm:w-64 lg:h-41 lg:w-128 lg:h-105" />
                </div>
                <div>
                  <img src={LOG} alt="LOG" className="sm:w-64 lg:h-41 lg:w-128 lg:h-105" />
                </div>
                <div>
                  <img src={JOBS} alt="JOBS" className="sm:w-64 lg:h-41 lg:w-128 lg:h-105" />
                </div>
              </Carousel>
            </div>
            <div className="w-full h-full flex justify-center">
              <p
                className="text-xl font-bold font-mono mt-[10px] text-left text-white underline underline-offset-4">
                <a href="https://github.com/Bakat-Lacak">
                  Website
                </a>
              </p>
              <p
                className="text-xl font-bold font-mono mt-[10px] sm:pl-[400px] lg:pl-[500px] text-center text-white">
                July 2023
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-4xl text-white mt-[40px] mx-[330px] text-justify text-white font-playfair font-bold">
                BakatLacak
              </h2>
              <p
                data-aos="fade-down-right"
                className="text-lg text-bold font-mono mt-[20px] sm:mx-[130px] lg:mx-[330px] text-justify text-white">
                Jobseeker website made using NodeJS and ReactJS for final project
                in Rakamin Academy bootcamp.
              </p>
              <button class="view-projects bg-teal text-black font-bold font-mono py-4 px-6 rounded-full mt-[50px]">
                <a href="https://www.github.com/alkafds">
                  View All Projects
                </a>
              </button>
              <span className="absolute border-b-[1px] border-white mt-[350px] w-[700px] z-0"></span>
            </div>
        </motion.div>
        <div className="flex flex-col items-center text-white">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div id="Experience">
              <h1 className="font-bold font-playfair text-5xl mt-[100px] mb-[20px] text-center text-white">
                EXPERIENCE
              </h1>
              <h2 className="font-bold font-mono text-2xl mt-[10px] mb-[20px] text-center text-white">
                ORGANIZATIONAL AND EMPLOYMENT
              </h2>
            </div>
          </motion.div>
          <span className="border-b-[1px] border-white absolute top-[270px] transform w-[700px] z-0"></span>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-2xl font-bold font-mono mt-[60px] text-center">
              Himpunan Mahasiswa Bahasa Korea (HIMABARA)
            </h2>
            <h3 className="text-2xl font-mono mt-[20px] text-center">
              March 2019 - March 2020
            </h3>
            <h4 className="text-xl font-mono font-semibold mt-[20px] text-center">
              Media and Information Division Lead
            </h4>
            <p
              data-aos="fade-down-right"
              className="text-lg text-bold font-mono mt-[40px] mx-[100px] text-center">
              Teamwork | Creativity | Time Management | Event Organizing
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-2xl font-bold font-mono mt-[60px] text-center">
              SMK Negeri 1 Bandung
            </h2>
            <h3 className="text-2xl font-mono mt-[20px] text-center">
              March 2021 - May 2021
            </h3>
            <h4 className="text-xl font-mono font-semibold mt-[20px] text-center">
              Korean Extracurricular Teacher Intern
            </h4>
            <p
              data-aos="fade-down-right"
              className="text-lg text-bold font-mono mt-[40px] mx-[100px] text-center">
              Lesson plan preparation | Syllabus creation  Teaching | Assessment
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h2 className="text-2xl font-bold font-mono mt-[80px] text-center">
              Core Initiative x  Rakamin Academy
            </h2>
            <h3 className="text-2xl font-mono mt-[20px] text-center">
              September 2023
            </h3>
            <h4 className="text-xl font-mono font-semibold mt-[20px] text-center">
              Project-Based Frontend Web Developer Intern
            </h4>
            <p
              data-aos="fade-down-right"
              className="text-lg text-bold font-mono mt-[40px] mx-[100px] text-center">
              Frontend Web Development | Unit Testing | Deployment
            </p>
          </motion.div>

        </div>


        <span className="border-b-[1px] border-white absolute top-[2600px] transform w-[700px] z-0"></span>
      </div>
      <div className="bg-black bg-opacity-20 flex flex-col items-center text-white mb-[100px]">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <h1 className="font-bold font-playfair text-5xl mt-[120px] mb-[20px] text-center text-white" id="Skills">
              SKILLS
            </h1>
        </motion.div>
        <span className="border-b-[1px] border-white absolute top-[270px] transform w-[700px] z-0"></span>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-semibold font-mono mt-[60px] text-center">
            Development
          </h2>
          <p
            data-aos="fade-down-right"
            className="text-lg text-bold font-mono mt-[40px] sm:mx-[100px] lg:mx-[330px] text-justify">
            {formattedDevSum}
          </p>

          <h2 className="text-2xl font-semibold font-mono mt-[60px] text-center">
            Language
          </h2>
          <p
            data-aos="fade-down-right"
            className="text-lg text-bold font-mono mt-[40px] sm:mx-[100px] lg:mx-[330px] text-justify">
            {formattedlangSum}
          </p>
          <h2 className="text-2xl font-semibold font-mono mt-[60px] text-center">
            Education
          </h2>
          <p
            data-aos="fade-down-right"
            className="text-lg text-bold font-mono mt-[40px] sm:mx-[100px] lg:mx-[330px] text-justify">
            {eduSummary}
          </p>
        </motion.div>
      </div>
      <span className="border-b-[1px] border-white absolute sm:top-[4200px] lg:top-[3900px] transform w-[700px] z-0"></span>
      <div className="bg-black bg-opacity-20 flex flex-col items-center text-white w-full h-full ">
          <h1 className="font-bold font-playfair text-5xl mt-[20px] mb-[20px] mx-[400px] text-center text-white" id="Education">
            EDUCATION
          </h1>
        <h2 className="text-2xl font-bold font-mono mt-[60px] text-center">
          Universitas Pendidikan Indonesia
        </h2>
        <h3 className="text-2xl font-mono mt-[20px] text-center">
          September 2017 - December 2022
        </h3>
        <div className="flex flex-col">
          <h4 className="text-3xl font-mono font-semibold mt-[20px]  text-center">
            B.Ed in Korean Language Education
          </h4>
        </div>
        <p
          data-aos="fade-down-right"
          className="text-lg text-bold font-mono mt-[20px] lg:mx-[300px] text-center">
          Korean for Specific Purposes (Education, Business, STEM, Administration and Tourism)
        </p>
        <br></br>
        <h2 className="text-2xl font-bold font-mono mt-[60px] text-center">
          Rakamin Academy
        </h2>
        <h3 className="text-2xl font-mono mt-[20px] text-center">
          February 2023 - August 2023
        </h3>
        <h4 className="text-3xl font-mono font-semibold mt-[20px] text-center">
          Fullstack Web Development
        </h4>
        <p
          data-aos="fade-down-right"
          className="text-lg text-bold font-mono mt-[20px] lg:mx-[300px] text-center">
          HTML5 & CSS3 | NodeJS | ExpressJS | PostgreSQL | ReactJS | NextJS | CI/CD Pipeline | Git
        </p>

        <span className="border-b-[1px] border-white absolute sm:top-[4950px] lg:top-[4680px] transform w-[700px] z-0 justi"></span>
      </div>
      <div className="bg-black bg-opacity-20 flex flex-col justify-center items-center text-white mb-[20px] w-full h-full" >
      <h1 className="font-bold font-playfair text-5xl justify-center items-center text-white mt-[110px]" id="Contact">
            CONTACT ME
          </h1>
        <ul className='flex space-x-4 mt-[50px] mb-[20px]'>
          <li className="social-icons bg-teal px-2 py-2 rounded-full"><a href="mailto:fadillaalka@gmail.com"><AiOutlineMail /></a></li>
          <li className="social-icons bg-teal px-2 py-2 rounded-full"><a href="https://wa.me/62895400761896"><FaWhatsapp /></a></li>
          <li className="social-icons bg-teal  px-2 py-2 rounded-full"><a href="https://www.linkedin.com/alka-fadilla/"><FaLinkedinIn /></a></li>
          <li className="social-icons bg-teal  px-2 py-2 rounded-full"><a href="https://www.instagram.com/alkafds"><FaInstagram /></a></li>
          <li className="social-icons bg-teal  px-2 py-2 rounded-full"><a href="https://www.twitter.com/alkafdsy"><FaXTwitter /></a></li>
        </ul>
        <p
          data-aos="fade-down-right"
          className="text-lg text-bold text-navy font-mono mt-[30px] mx-[100px] text-center">
          © 2023 Alka Fadilla, All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Home;
