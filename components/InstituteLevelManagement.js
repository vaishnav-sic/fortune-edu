import react from "react";
import pImg from "../public/assets/images/p-img.jpg";
import arrow from "../public/assets/images/arrow-service-icon.png";
const InstituteLevelManagement = () => {
  return (
    <>
      <div className="service-Main">
        <div className="service-in">
          <div className="service-in-heading" id="alt-long">
            <h3 className="Ser-head" data-aos="fade-in" data-aos-duration="800">
              Institute Level or Management Quota Admission
            </h3>
          </div>
          <div className="service-in-content">
            <div className="service-in-content-left">
              <li data-aos="fade-right" data-aos-duration="800">
                <img src={arrow} />
                <p>
                  Money alone won't secure you a seat, as Institute Level
                  Admissions now consider merit and rank.
                </p>
              </li>
              <li data-aos="fade-right" data-aos-duration="800">
                <img src={arrow} />
                <p>
                  For these specific seats, a distinct admission process is in
                  place. You'll need to register separately and complete a
                  different option form to secure admission.
                </p>
              </li>
              <li data-aos="fade-right" data-aos-duration="800">
                <img src={arrow} />
                <p>
                  While the fees for these seats are on the higher side, we'll
                  keep you well-informed about all the details.
                </p>
              </li>
              <li data-aos="fade-right" data-aos-duration="800">
                <img src={arrow} />
                <p>
                  We'll ensure you're up-to-date on seat availability at the
                  beginning and end of each round, so you don't miss any
                  opportunities.
                </p>
              </li>
              <li data-aos="fade-right" data-aos-duration="800">
                <img src={arrow} />
                <p>
                  We're here to support you through every step, right up to your
                  actual admission in Private and Deemed Colleges in
                  Maharashtra.
                </p>
              </li>
              <li data-aos="fade-right" data-aos-duration="800">
                <img src={arrow} />
                <p>
                  Initial rounds are conducted at the state level, with most
                  seats filled during college-level rounds that feature a
                  separate admission process implemented by the college. Count
                  on us for regular updates."
                </p>
              </li>
            </div>
            <div
              className="service-in-content-right"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="servinice-in-content-right-in">
                <div className="servinice-in-content-right-in-in">
                  <img src="assets/images/p-img1.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InstituteLevelManagement;
