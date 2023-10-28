import React from "react";

function WorkExperienceCard() {
  const company = ["Core Initiative x Rakamin Academy"];
  const position = ["Project-Based Virtual Intern"];
  const startDate = ["Sep 2023"];
  const endDate = ["Sep 2023"];
  const tasks = [
    "Frontend Development using Vue.js, Deployment (CI/CD) and Unit testing using Jest",
  ];

  return (
    <div className="bg-white text-navy p-4 flex border border-white my-10 rounded-xl shadow-xl">
      <div className="text-2xl font-bold text-left">{company}</div>
      <div className="border-t border-white my-2"></div>
      <div className="paragraph">
        <p className="text-left">
          <span className="font-semibold text-left">Position:</span> {position}
        </p>
        <p className="text-left">
          <span className="font-semibold">Date:</span> {startDate} - {endDate}
        </p>
      </div>
      <div className="border-t border-white my-2"></div>
      <div className="paragraph">
        <p className="font-semibold text-left">Tasks:</p>
        <p className="text-left">{tasks}</p>
      </div>
    </div>
  );
}

export default WorkExperienceCard;
