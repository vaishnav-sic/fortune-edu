import React from "react";
const CollegeListIconB = ({ colleges }) => {
  return (
    <div className="top-colleges-list">
      <h1>Top Semi-Government Medical Colleges in Maharashtra</h1>
      <ul className="list-icon">
        {colleges.map((college, index) => (
          <li key={index} className="college-item">
            <div className="college-logo">
              <img src={college.logo} alt={college.name} />
            </div>
            <div className="college-details">
              <h2>{college.name}</h2>
              <p>Ranking: #{college.ranking}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default CollegeListIconB;
