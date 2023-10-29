import React, { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import WorkExperienceCard from "../components/workexperiencecard";
import { useNavigate } from "react-router-dom";

function Experiences() {
  const navigate = useNavigate();
  const [pageOpen, setPageOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPageOpen(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, []);

  const handleArrowLeft = () => {
    navigate("/skills");
  };

  const handleArrowRight = () => {
    navigate("/projects");
  };

  const pageClass = pageOpen ? "open-page" : "closed-page";

  // Work experiences data
  const workExperiences = [
    {
      company: "Core Initiative Studio x Rakamin Academy",
      position: "Project Based Virtual Intern",
      startDate: "Sept 2023",
      endDate: "Sept 2023",
      tasks: [
        "Finishing various tasks related to frontend development using Vue.js, deployment and delivery (CI/CD) and unit testing using Jest",
      ],
    },
    {
      company: "SMK Negeri 1 Bandung",
      position: "Extracurricular Teacher Intern",
      startDate: "March 2021",
      endDate: "May 2021",
      tasks: [
        "Teaching Korean language for 10th grades using online learning method, compiled syllabus, plans and materials, handled assessment at the end of the semester",
      ],
    },
  ];

  return (
    <div className={`flex flex-col bg-my-background bg-center bg-cover md:w-screen md:h-screen sm:h-full p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 text-center text-white ${pageClass}`}>
      <div className={`transition-opacity duration-1000 ease-in-out ${pageOpen ? "opacity-100" : "opacity-0"}`}>
        <h1 className={`text-4xl font-bold mt-20 slide-in ${pageOpen ? "slide" : ""}`}>My Experiences</h1>
        <div className={`flex flex-col justify-center slide-in-thi ${pageOpen ? "slide-thi" : ""}`}>
          {workExperiences.map((experience, index) => (
            <WorkExperienceCard
              key={index}
              company={experience.company}
              position={experience.position}
              startDate={experience.startDate}
              endDate={experience.endDate}
              tasks={experience.tasks}
            />
          ))}
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

export default Experiences;
