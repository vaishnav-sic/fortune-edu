import React, {useState} from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import NumberAni from './NumberAni';

const SliderOne = () => {

    // const counts = document.querySelectorAll('.count')
    //     const speed = 97
    //     counts.forEach((counter) => {
    //         function upData(){
    //             const target = Number(counter.getAttribute('data-target'))
    //             const count = Number(counter.innerText)
    //             const inc = target / speed
    //             if(count < target){
    //                 counter.innerText = Math.floor(inc + count)
    //                 setTimeout(upData, 1)
    //             }
    //             else
    //             {
    //                 counter.innerText = target
    //             }
    //         }
    //         upData()
    //     })

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //           initialSlide: 2
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1
    //         }
    //       }
    //     ]
    // }

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
                <Swiper getSwiper={setSwiper}>
                    <div className="banner-one__slide banner-one__slide-one">
                        <div className="container">
                            <div className="banner-one__bubble-1"></div>
                            <div className="banner-one__bubble-2"></div>
                            <div className="banner-one__bubble-3"></div>
                            <img src="/assets/images/doctor.png" alt="" className="banner-one__scratch" /> 
                           {/* <img src="/assets/images/Engineer.jpg" className="banner-one__person" alt="" /> */}
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <h3 className="banner-one__title banner-one__light-color">We Can <br />
                                        Teach You</h3>
                                    <p className="banner-one__tag-line">Are you ready to
                                        learn?</p>
                                        <p className="banner-one__tag-line-one">Medical and EngineeringCareer Counselling
                                           <br/>Trusted By Thousands Of <br/>Successful Doctors and Engineers</p>
                                   <button className='btn'><a href="#registration" className="thm-btn banner-one__btn">Registration</a></button> 
                                </div>                                
                            </div>

                            {/* <div className='container-1'>
                                <h2>Important News</h2>
                                <Slider {...settings}>
                                
                                <div className='news-cards'>
                                    <div className='head'><h5>All India AYUSH Round 2 Registration Started!</h5></div>
                                    <p>All India AYUSH Round 2 Registration is available till 05 December 2022 up to 3 PM and Choice Filling Deadline is 05 December 2022 till 11.55 PM</p>
                                </div >

                                <div className='news-cards'>
                                    <div className='head'><h5>Karnataka for Mop Up Round 1 Registration!</h5></div>
                                    <p>Mop up round 1 registration has started and deadline for form filling is 03 December 2022 till 11.55 pm, new registration facility is only available for Karnataka students. Document Verification...</p> 
                                </div>

                                <div className='news-cards'>
                                    <div className='head'><h5>All India Mop Up Round 1 Important Dates</h5></div>
                                    <p>All India Mop Up Round 1 Final result will be declared on 07 December 2022 and College Reporting is between 08 to 12 December 2022</p>
                                </div>

                                <div className='news-cards'>
                                    <div className='head'><h5>Maharashtra Pharmacy State and All India Merit List is now available!</h5></div>
                                    <p>Pharmacy State and All India Merit List is now available on www.mahacet.org, apply for grievances before 05 December 2022. Final Merit list will be published on 07 December 2022</p>
                                </div>
                                </Slider>
                                
                            </div> */}  
                        </div>
                    </div>
                    <div className="banner-one__slide banner-one__slide-two">
                        <div className="container">
                            <div className="banner-one__bubble-1"></div>
                            <div className="banner-one__bubble-2"></div>
                            <div className="banner-one__bubble-3"></div>
                            <img src="/assets/images/engineering-students.jpg" className="banner-one__person" alt="" />
                            {/* <img src="/assets/images/slider-1-person-2.png" className="banner-one__person" alt="" /> */} 
                            <div className="row no-gutters">
                                <div className="col-xl-12">
                                    <h3 className="banner-one__title banner-one__light-color">We Can <br />
                                        Teach You</h3>
                                    <p className="banner-one__tag-line">Education is the best key to success</p>
                                    {/* <a href="#" className="thm-btn banner-one__btn">Learn More</a> */}
                                </div>
                                <div className='about-two-main_count'>
                                <NumberAni num="16784" name = "Students Admitted"/>
                                <NumberAni num="25532" name = "Students Counselled"/> 
                                {/* <NumberAni num="3874" name = "Seminars Conducted"/> */}
                                <NumberAni num="20" name = "Years Of Experience"/>
                                </div>
                            </div>
                            {/* <div className='counter-wrapper'>
                                <div className='counter'>
                                    <h1 class="count" data-target = "732">0</h1>
                                    <p>Students Guided</p>
                                </div>
                                <div className='counter'>
                                    <h1 class="count" data-target = "1254">0</h1>
                                    <p>Students Counselled</p>
                                </div>
                                <div className='counter'>
                                    <h1 class="count" data-target = "1216">0</h1>
                                    <p>Seminars Conducted</p>
                                </div>
                                <div className='counter'>
                                    <h1 class="count" data-target = "1230">0</h1>
                                    <p>Years Of Experience</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </Swiper>
            </section>
            <div className="banner-carousel-btn">
                <div onClick={goPrev} className="banner-carousel-btn__left-btn banner-arrow"><i className="kipso-icon-left-arrow"></i></div>
                <div onClick={goNext} className="banner-carousel-btn__right-btn banner-arrow"><i className="kipso-icon-right-arrow"></i></div>
            </div>
            {/* <div className="banner-one__cta">
                <div className="banner-one__cta-icon">
                    <i className="kipso-icon-black-graduation-cap-tool-of-university-student-for-head"></i>
                </div> */}
                {/* <div className="banner-one__cta-title">
                    <h3 className="banner-one__cta-text"><a href="#">Read how we encourage our
                        students to learn</a></h3>
                </div> */}
                {/* <div className="banner-one__cta-link">
                    <a href="#"><i className="kipso-icon-right-arrow"></i></a>
                </div> */}
            {/* </div> */}
        </div>
    );
}
export default SliderOne;