import React from "react";

const EngineeringInfo = () => {
  return (
    <div className="e-medicalAdmissions">
      <div className="infoContainer">
        <p>
          To get admissions in a Engineering college, you need to clear certain
          exams, such as the Engineering College Admission Test (MHT-CET), JEE
          and BITSAT. These exams are essential for assessing your eligibility
          for Engineering college.
        </p>
      </div>
      <div className="examButtons">
        <button className="examButton">MHT-CET</button>
        <button className="examButton">JEE</button>
        <button className="examButton">BITSAT</button>
      </div>
    </div>
  );
};

export default EngineeringInfo;
