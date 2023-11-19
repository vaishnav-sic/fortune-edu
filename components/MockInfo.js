import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import NumberAni from "./NumberAni";
const SliderOne = () => {
  const [swiper, setSwiper] = useState(null);
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
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
                  Mock Test                 
                </h3>                
                <p className="banner-one__tag-line-one">
                Master your admissions journey with our Mock Test. Our seasoned experts analyze your performance, providing personalized guidance and presenting top college options in Maharashtra and India—tailored to your budget. Simplify admissions and secure your spot effortlessly. Success begins with a click
                </p>
              </div>
            </div>
            <div className="examButtons">
              <button className="examButton">Hurry up! Take Mock test now</button>
              
            </div>
          </div>
        </div>
      </section>     
    </div>
  );
};
export default SliderOne;
