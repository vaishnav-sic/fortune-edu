import React, { useState } from "react";
import "swiper/css/swiper.css";
const MainPage = () => {
  const [swiper, setSwiper] = useState(null);
 
  return (
    // <div className="banner-wrapper">
    //   <section className="banner-one banner-carousel__one no-dots">
    //     <div className="banner-one__slide banner-one__slide-one">
    //       <div className="container">
          <div className="main-img">
            <img
              src="/assets/images/MainPage.svg"
              alt=""
              className="banner-one__scratch"
            />
          </div>
    //     </div>
    //   </section>
    // </div>
  );
};
export default MainPage;
