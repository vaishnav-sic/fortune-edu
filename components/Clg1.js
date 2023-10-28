import React from 'react';
const CollegeList = ({ colleges }) => {
  const top3Colleges = colleges.slice(0, 3); // Get the top 3 colleges
  const otherColleges = colleges.slice(3); // Get the remaining colleges
  return (
    <div className="college-list">
      <h2>Top 10 Government Medical Colleges in Maharashtra</h2>
      <div className="top-colleges">
        {top3Colleges.map((college, index) => (
          <div className="college-card" key={index}>
            <img src={college.image} alt={college.name} />
            <h3>{college.name}</h3>
            <p>{college.location}</p>
          </div>
        ))}
      </div>
      <div className="other-colleges">
        <h3>Other Colleges</h3>
        <ul>
          {otherColleges.map((college, index) => (
            <li key={index}>
              {college.name} - {college.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default CollegeList;
