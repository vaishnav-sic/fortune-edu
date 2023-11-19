import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import NumberAni from "./NumberAni";
const EngineeringInfo = () => {
  
  return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        {/* <Swiper getSwiper={setSwiper}> */}
        <div className="banner-one__slide banner-one__slide-one">
          <div className="container">
            <div className="banner-one__bubble-1"></div>
            <div className="banner-one__bubble-2"></div>
            {/* <div className="banner-one__bubble-3"></div> */}
            <img
              src="/assets/images/Dr3.png"
              alt=""
              className="banner-one__scratch__mock"
            />
            <div className="row no-gutters">
              <div className="col-xl-12">
                <h3 className="banner-one__title banner-one__light-color">
                  Engineering.                 
                </h3>                
                <p className="banner-one__tag-line-one">
                 "Exploring the Vast World of Engineering Specializations! 🌟<br/> Engineering offers a diverse spectrum of specializations, from the evergreen Computer, Information
                  Technology, Artificial Intelligence to the dynamic fields like Mechanical, Civil, Electrical, and Electronics
                  Telecommunications, Chemical, and Instrumentation.
                  But the excitement doesn't end there! Discover lesser-known yet equally promising branches such as
                  Aeronautical, Automobile, Biomedical, Food Engineering and Technology, Oil Technology, and more for a truly
                  unique career path.
                  Your journey into the world of engineering starts here!"
                </p>
              </div>
            </div>
            <div className="examButtons">
              <button className="examButton">MHT-CET</button>
              <button className="examButton">JEE</button>
              <button className="examButton">BITSAT</button>
          </div>
          </div>
        </div>
      </section>     
    </div>
  );
};
export default EngineeringInfo;
