import React from "react";
const AdmissionAlert = () => {
  return (
    <div className="service-Main" id="alt-main">
      <div className="service-in">
        <div
          className="service-in-heading"
          id="alt-long"
          data-aos="fade-in"
          data-aos-duration="800"
        >
          <h3>Admission Alert And News</h3>
        </div>
        <div className="service-in-content-alt">
          <div
            className="service-in-content-right"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="servinice-in-content-right-in">
              <div className="servinice-in-content-right-in-in">
                <img src="assets/images/p-img1.jpg" alt=""></img>
              </div>
            </div>
          </div>
          <div className="service-in-content-left">
            <h4
              data-aos="fade-left"
              data-aos-duration="800"
              style={{ color: "black", paddingBottom: "2rem" }}
            >
              {" "}
              "Stay Informed and Worry-Free with Our Support! 📱
            </h4>
            <p data-aos="fade-left" data-aos-duration="800">
              You’ll receive timely notifications and SMS alerts, ensuring you
              never miss an important deadline. Our system provides immediate
              updates on any changes in the admission process, so you're always
              in the know. Expect instant updates on results, seat matrix,
              allotment lists, and crucial notices to keep you informed. We'll
              also send you constant reminders about admission process
              deadlines, keeping you on track. Rest assured, our dedicated team
              is available around the clock, ensuring your child's safety and
              well-being. We provide parents with up-to-date information to
              ensure a smooth experience for students away from home."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdmissionAlert;
