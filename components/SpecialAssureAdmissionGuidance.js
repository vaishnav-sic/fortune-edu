import React from "react";
import arrow from "../public/assets/images/arrow-service-icon.png";
const SpecialAssureAdmissionGuidance = () => {
  return (
    <div className="service-Main " id="alt-main">
      <div className="service-in">
        <div className="service-in-heading" id="alt">
          <h3 className="Ser-head">Special Assured Admission Guidance </h3>
        </div>
        <div className="service-in-content-alt">
          <div className="service-in-content-right">
            <div className="servinice-in-content-right-in">
              <div className="servinice-in-content-right-in-in">
                <img src="assets/images/RegistrationInfo.jpg" alt=""></img>
              </div>
            </div>
          </div>
          <div className="service-in-content-left">
            <h5>There are three different types of MBBS Admission Procedures which every Student has to follow.</h5>
            <li>
              <img src={arrow} />
              <p>
                In spite of less marks, if you are ready to take admission in any Private or Deemed University
                College in any type of seats in all India level, we will take special care of you.
              </p>
            </li>
            <li>
              <img src={arrow} />
              <p>
                In every State, Private College Admission Process Rules are different. Maharashtra
                students can participate in Admission Process of some States but not all States.
              </p>
            </li>
            <li>
              <img src={arrow} />
              <p>
                We will see that you will take part in every possible States Process.
              </p>
            </li>
            <li>
              <img src={arrow} />
              <p>
                We will guide you in Registration, Filling Option
                Form, and Documentation etc. as per the requirement of different State.
              </p>
            </li>
            <li>
              <img src={arrow} />
              <p>
                In each Admission Round, we will take important decision for you as whether to take Admission
                or not or to wait for next Round or for other options available in other States.
              </p>
            </li>
            <li>
              <img src={arrow} />
              <p>
                In this case, our responsibility is extended to Seats available in all States in
                Private and Deemed University Colleges.
              </p>
            </li>
            <li>
              <img src={arrow} />
              <p>
                We give services under this heading to only 20 Students on first come
                first basis. This number will not be increased for any reason.
              </p>
            </li>
            <li>
              <img src={arrow} />
              <p>
                Fees we charge for all above facilities (Mentioned in C) are Rs. 1,00,000. But if you don’t get admission in any
                College, we will refund your Rs. 90,000 on 15th October 2018.
              </p>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
};
export default SpecialAssureAdmissionGuidance;