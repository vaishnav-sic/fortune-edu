import react from "react";
import pImg from "../public/assets/images/p-img.jpg";
const Admissionguidance = () => {
  return (
    <>
      <div className="service-Main">
        <div className="service-in">
          <div className="service-in-heading" id="alt-long">
            <h3 data-aos="fade-in" data-aos-duration="800">
              Admission Guidance
            </h3>
          </div>
          <div className="service-in-content" id="AG">
            <div className="service-in-content-left">
              <h4
                data-aos="fade-right"
                data-aos-duration="800"
                style={{ color: "black", paddingBottom: "2rem" }}
              >
                "Streamlined College Admission Assistance for Your Peace of
                Mind! 🎓
              </h4>
              <p data-aos="fade-right" data-aos-duration="800">
                At different colleges and universities, the admission procedures
                can vary widely. That's why we offer a comprehensive
                step-by-step admission guidance to ensure a smooth and efficient
                process. No more time wasted in document confusion and endless
                back-and-forth! Our services include providing detailed
                information on a college-by-college basis, covering vital
                aspects like fee structure, location, ranking, facilities, and
                more. We'll be your trusty guide in assembling a compelling
                application package, including a well-crafted statement of
                purpose, convincing recommendation letters, undergraduate
                transcripts, and any additional requirements specific to your
                chosen course and institution. Furthermore, we take the burden
                of monitoring your application status off your shoulders. We
                proactively follow up with the universities you've applied to,
                ensuring a positive and timely response. Your journey to college
                success starts with us!"
              </p>
            </div>
            <div
              className="service-in-content-right"
              data-aos="fade-left"
              data-aos-duration="800"
            >
              <div className="servinice-in-content-right-in">
                <div className="servinice-in-content-right-in-in">
                  <img src="assets/images/Dr2.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Admissionguidance;
