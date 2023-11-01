import React from "react";
import arrow from "../public/assets/images/arrow-service-icon.png";
const SpecialAssureAdmissionGuidance = () => {
  return (
    <div className="service-Main " id="alt-main">
      <div className="service-in">
        <div className="service-in-heading" id="alt">
          <h3 className="Ser-head" data-aos="fade-in" data-aos-duration="800">
            Guaranteed Path to Admission Success{" "}
          </h3>
        </div>
        <div className="service-in-content-alt">
          <div
            className="service-in-content-right"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="servinice-in-content-right-in">
              <div className="servinice-in-content-right-in-in">
                <img src="assets/images/RegistrationInfo.jpg" alt=""></img>
              </div>
            </div>
          </div>
          <div className="service-in-content-left">
            <h5 data-aos="fade-left" data-aos-duration="800">
              Discover Three Medical Admission Paths to Your Dream College 🎓
            </h5>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                Even with lower marks, if you're eager to secure a seat in a
                Private or Deemed University College anywhere in India, we've
                got your back.
              </p>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                Throughout each admission round, we'll make crucial decisions
                for you – whether to secure your admission, wait for the next
                round, or explore options in different states.
              </p>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                In this scenario, our responsibility extends to securing seats
                in Private and Deemed University Colleges across all states."
              </p>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                Private college admission procedures vary from state to state.
                If you're a student from Maharashtra, you can join the admission
                process in some states, although not all.
              </p>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                We'll ensure you're part of the admission process in as many
                states as possible. We'll guide you through registration, form
                filling, and documentation, tailored to each state's
                requirements.
              </p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecialAssureAdmissionGuidance;
