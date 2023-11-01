import React from "react";
import arrow from "../public/assets/images/arrow-service-icon.png";
const AdmissionInMaharashtraStateAndCenterQuota = () => {
  return (
    <div className="service-Main " id="alt-main">
      <div className="service-in">
        <div className="service-in-heading" id="alt">
          <h3 className="Ser-head" data-aos="fade-in" data-aos-duration="800">
            Admission in Maharashtra or all over India
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
              Understanding the Three MBBS Admission Routes 🏥
            </h5>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                1. MBBS Admission Procedure in Maharashtra for Govt. and Private
                Colleges (85% Seats).
              </p>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                2. MBBS Admission Procedure in Govt. Colleges Across India (15%
                Seats).
              </p>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                MBBS Admission Procedure in Deemed University Colleges Across
                India, including Maharashtra.
              </p>
            </li>
            <h5 data-aos="fade-left" data-aos-duration="800">
              {" "}
              To navigate these diverse procedures, we're here to support you
              every step of the way:
            </h5>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                Each procedure is unique and conducted online through separate
                websites. You'll need to complete separate registrations and
                fill out distinct option/preference forms.
              </p>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                We provide you with the latest information about college names,
                available seats, teaching staff, infrastructure, and more.
              </p>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                Our guidance extends to helping you with the online or offline
                application form process.
              </p>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                Filling out online option forms can be challenging, but we've
                got you covered. We design a list of colleges tailored to your
                requirements, increasing your chances of securing a good
                college. We also offer advice on whether to accept admission in
                a particular round or wait for the next one, along with
                exploring other options.
              </p>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                Any doubts or issues related to documentation will be resolved.
              </p>
            </li>
            <li data-aos="fade-left" data-aos-duration="800">
              <img src={arrow} />
              <p>
                You'll have access to the fee structures of all private and
                deemed university colleges."
              </p>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdmissionInMaharashtraStateAndCenterQuota;
