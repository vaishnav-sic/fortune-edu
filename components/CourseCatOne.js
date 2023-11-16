import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
const CourseCatOne = () => {
    const params = {
        slidesPerView: 6,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            1024: {
                slidesPerView: 6
            },
            768: {
                slidesPerView: 4
            },
            640: {
                slidesPerView: 3
            },
            320: {
                slidesPerView: 2
            }
        }
    }
    return (
        <section className="thm-gray-bg course-category-one">
            <div className="container-fluid text-center">
                <div className="block-title text-center">
                    <h2 className="block-title__title">Have A Problem? We Has The Solution.</h2>
                </div>

                <div className="problem-solution">
                    <h3 className='title'>Problems</h3>
                    <h3 className='title'>Solutions</h3>
                </div>
                <div className="main-container"> 
                        <div className="problem-solution_main">
                            <div className="problem-solution_shapes">
                                <div className="shapes-content">
                                    <p>No clarity in form<br/> filling and documentation.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes">
                                <div className="shapes-content">
                                    <p>Too many deadlines<br/> to keep track of.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes">
                                <div className="shapes-content">
                                     <p>Decisions affected by <br/>uninformed friends and relatives.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes">
                                <div className="shapes-content">
                                    <p>Difficulty in choosing colleges<br/> and order of preference.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes">
                                <div className="shapes-content">
                                    <p>Danger of being defrauded <br/>in the name of donation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="problem-solution_main-1">
                            <div className="problem-solution_shapes-1">
                                <div className="shapes-content">
                                    <p>Thorough, stress-free <br />guidance in form filling.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes-1">
                                <div className="shapes-content">
                                    <p>WhatsApp and SMS<br/> alerts for critical dates.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes-1">
                                <div className="shapes-content">
                                    <p>Data-based parent and <br />student guidance by professionals.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes-1">
                                <div className="shapes-content">
                                    <p>Optimised college selection<br/> based onaptitude and goals.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes-1">
                                <div className="shapes-content">
                                    <p>Transparent admission <br/> process through official channels.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CourseCatOne;