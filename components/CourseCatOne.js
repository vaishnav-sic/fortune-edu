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
                    <h2 className="block-title__title">Challenges Ahead? We're here to Help!</h2>
                </div>

                <div className="problem-solution">
                    <h3 className='title'>Problems</h3>
                    <h3 className='title'>Solutions</h3>
                </div>
                <div className="main-container"> 
                        <div className="problem-solution_main">
                            <div className="problem-solution_shapes">
                                <div className="shapes-content">
                                    <p>Confusion/Struggle in form<br/> filling and documentation.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes">
                                <div className="shapes-content">
                                     <p>Choices influenced by <br/> misinformed friends and family.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes">
                                <div className="shapes-content">
                                    <p>Challenges in selecting a college<br/> and prioritizing preferences.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes">
                                <div className="shapes-content">
                                    <p>Confused by numerous <br/> deadlines to manage.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes">
                                <div className="shapes-content">
                                    <p>Risk of falling victim to fraud <br/> under the name of donations</p>
                                </div>
                            </div>
                        </div>
                        <div className="problem-solution_main-1">
                            <div className="problem-solution_shapes-1">
                                <div className="shapes-content-1">
                                    <p>Stress-free & hassle-free <br/> support in completing forms.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes-1">
                                <div className="shapes-content-1">
                                    <p>Expert guidance for parents and students<br/> based on data and insights.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes-1">
                                <div className="shapes-content-1">
                                    <p>Personalized guidance for optimal <br/>college choices based on Mock Test</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes-1">
                                <div className="shapes-content-1">
                                    <p>Receive important date alerts<br/> via WhatsApp and SMS.</p>
                                </div>
                            </div>
                            <div className="problem-solution_shapes-1">
                                <div className="shapes-content-1">
                                    <p>Open and straightforward admission<br/> process through authorized channels.</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default CourseCatOne;