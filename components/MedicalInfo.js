import React from "react";

const MedicalInfo = () => {
  return (
    <div className="medicalAdmissions">
      <div className="infoContainer">
        <p>
          To get admissions in a medical college, you need to clear certain
          exams, such as the Medical College Admission Test (MCAT), Biology
          Olympiad, and Chemistry Test. These exams are essential for assessing
          your eligibility for medical school.
        </p>
      </div>
      <div className="examButtons">
        <button className="examButton">NEET</button>
        <button className="examButton">AIIMS</button>
        <button className="examButton">JIPMER</button>
      </div>
    </div>
  );
};

export default MedicalInfo;
