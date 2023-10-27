import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const BlogTwo = () => {

    const params = {
        slidesPerView : 3,
        loop: true,
        speed: 1000,
        spaceBetween : 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Responsive breakpoints
        breakpoints: {
            1024:{
                slidesPerView : 3
            },
            768:{
                slidesPerView : 2
            },
            640:{
                slidesPerView : 1

            },
            320:{
                slidesPerView : 1
            }
        }
    }

    return (
        <section className="blog-two">
            <div className="container">
                <div className="block-title text-center">
                    <h2 className="block-title__title">Our latest news <br />
                        & articles</h2>
                </div>
                <div className="blog-two__carousel">
                    <Swiper {...params}>
                    <div className="item">
                        <div className="blog-two__single">
                            <div className="blog-two__inner">
                                <div className="blog-two__date">
                                    <span>25</span>
                                    Latest
                                </div>
                                {/* <div className="blog-two__meta">
                                    <a href="#">by Admin</a>
                                    <a href="#">3 Comments</a>
                                </div> */}
                                <h3 className="blog-two__title">
                                <p>All India AYUSH Round 2 Registration is available till 05 December 2022 up to 3 PM and Choice Filling Deadline is 05 December 2023 till 11.55 PM</p>
                                    {/* <a href="news-details.html">Summer high school journalism camp</a> */}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-two__single">
                            <div className="blog-two__inner">
                                <div className="blog-two__date">
                                    <span>25</span>
                                    Important
                                </div>
                                {/* <div className="blog-two__meta">
                                    <a href="#">by Admin</a>
                                    <a href="#">3 Comments</a>
                                </div> */}
                                <h3 className="blog-two__title">
                                <p>Mop up round 1 registration has started and deadline for form filling is 03 December 2023 till 11.55 pm, new registration facility is only available for Karnataka students. Document Verification...</p>
                                    {/* <a href="news-details.html">Get a tips to develop a quality education</a> */}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="blog-two__single">
                            <div className="blog-two__inner">
                                <div className="blog-two__date">
                                    <span>25</span>
                                    Updated
                                </div>
                                {/* <div className="blog-two__meta">
                                    <a href="#">by Admin</a>
                                    <a href="#">3 Comments</a>
                                </div> */}
                                <h3 className="blog-two__title">
                                <p>All India Mop Up Round 1 Final result will be declared on 07 December 2023 and College Reporting is between 08 to 12 December 2022</p>
                                    {/* <a href="news-details.html">Learn variety of programs and courses</a> */}
                                </h3>
                            </div>
                        </div>
                    </div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};
export default BlogTwo;
