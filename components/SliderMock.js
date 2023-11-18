import React, { useState } from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import NumberAni from "./NumberAni";
const SliderMock = () => {
  const [swiper, setSwiper] = useState(null);
    return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        {/* <Swiper getSwiper={setSwiper}> */}
        <div className="banner-one__slide banner-one__slide-one">
          <div className="container">
            <div className="banner-one__bubble-1"></div>
            <div className="banner-one__bubble-2"></div>
            <div className="banner-one__bubble-3"></div>
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
                <p className="banner-one__tag-line">
                  in medical & engineering{" "}
                </p>
                <p className="banner-one__tag-line-one">
                  We Provide Many Choice for Admission in Various Colleges!
                </p>
                {/* <button className="btn">
                  <a
                    href="#registration1"
                    className="thm-btn banner-one__btn"
                  >
                    Book Consultation
                  </a>
                </button> */}
              </div>
            </div>
          </div>
        </div>
              </section>
     
    </div>
  );
};
export default SliderMock;
