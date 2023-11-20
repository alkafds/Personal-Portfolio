import React from "react";

function WorkExperienceCard({ company, position, startDate, endDate, tasks }) {
  return (
    <div className="glass-card bg-mint bg-blur bg-opacity-20 backdrop-blur-lg border flex w-full h-full border-mint text-white p-4 flex my-4 rounded-xl shadow-xl">
      <div className="text-2xl font-bold text-left w-[500px]">{company}</div>
      <div className="paragraph ml-10 w-[500px]">
        <p className="text-left">
          <span className="font-semibold text-left">Position:</span> {position}
        </p>
        <p className="text-left">
          <span className="font-semibold">Date:</span> {startDate} - {endDate}
        </p>
      </div>
      <div className="paragraph ml-10 w-full">
        <p className="font-semibold text-left">Tasks:</p>
        <p className="text-left">{tasks}</p>
      </div>
    </div>
  );
}

export default WorkExperienceCard;
