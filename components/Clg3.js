// CollegeList15.js
import React from 'react';
const CollegeList15 = ({ colleges1 }) => {
  return (
    <div className="college-list-15-1">
      <h2>Top 15 Colleges</h2>
      <div className="college-cards-1">
        {colleges1.map((college, index) => (
          <div className="college-card-1" key={index}>
            <img src={college.image} alt={college.name} />
            <h3>{college.name}</h3>
            <p>{college.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CollegeList15;
