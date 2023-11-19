import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import NumberAni from "./NumberAni";
const MedicalInfo = () => {
  
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
                  Medical                 
                </h3>                
                <p className="banner-one__tag-line-one">
                Unlock Your Path to Success with Our Comprehensive College and Medical Branch Counselling Services! 🚀<br/> We offer expert guidance for all stages of your academic journey, from helping you navigate the selection of
                the ideal college to specialized counselling for medical fields like MBBS, BAMS, BHMS, and physiotherapy.
                Our wealth of knowledge spans across government, private, and deemed medical colleges, detailing available
                seats in each institution and in-depth information about their fee structures and infrastructure and much more.
                Your path to a successful future starts here!
                </p>
              </div>
            </div>
            <div className="examButtons">
              <button className="examButton">NEET</button>
              <button className="examButton">AIIMS</button>
              <button className="examButton">JIPMER</button>
          </div>
          </div>
        </div>
      </section>     
    </div>
  );
};
export default MedicalInfo;
