import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

// export default class AboutTwo extends Component {
    const AboutTwo = () => {

     var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };
    // constructor(){
    //     super()
    //     this.state = {
    //         startCounter: false
    //     }
    // }

    // onVisibilityChange = isVisible => {
    //     if (isVisible) {
    //         this.setState({startCounter: true});
    //     }
    // }

    // render() {
        return (

            <div className='container-1'>
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
                                
                            </div>

            // <section className="about-two">
            //     <div className="container">
            //         <div className="row">
            //             <div className="col-xl-6">
            //                 <div className="about-two__content">
            //                     <div className="block-title text-left">
            //                         <h2 className="block-title__title">Welcome to online <br />
            //                             learning center</h2>
            //                     </div>
            //                     <p className="about-two__text">There are many variations of passages of lorem ipsum
            //                         available but the
            //                         majority have suffered alteration in some form by injected humour or randomised
            //                         words which
            //                         don't look.</p>
            //                     <div className="about-two__single-wrap">
            //                         <div className="about-two__single">
            //                             <div className="about-two__single-icon">
            //                                 <i className="kipso-icon-professor"></i>
            //                             </div>
            //                             <div className="about-two__single-content">
            //                                 <p className="about-two__single-text">Start learning from
            //                                     our experts</p>
            //                             </div>
            //                         </div>
            //                         <div className="about-two__single">
            //                             <div className="about-two__single-icon">
            //                                 <i className="kipso-icon-knowledge"></i>
            //                             </div>
            //                             <div className="about-two__single-content">
            //                                 <p className="about-two__single-text">Enhance your skills
            //                                     with us now</p>
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <a href="#" className="thm-btn">Learn More</a>
            //                 </div>
            //             </div>
            //             <div className="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
            //                 <div className="about-two__image">
            //                     <span className="about-two__image-dots"></span>
            //                     <img src="/assets/images/about-1-1.jpg" alt="" />
            //                         <div className="about-two__count">
            //                             <div className="about-two__count-text">Trusted by
            //                                 <span className="counter">
                                                // <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall><CountUp end={this.state.startCounter ? 4890 : 0} /></VisibilitySensor>
            //                                 </span></div>
            //                         </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </section>
        );
    // }
}
export default AboutTwo;