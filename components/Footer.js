import React from "react";
const Footer = () => {
    function scrollTop() {
        window.scrollTo(0, 0);
    }
    return (
        <div>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__contact">
                                    <h2 className="footer-widget__title">Experts</h2>
                                    <ul className="list-unstyled footer-widget__course-list">
                                        <li>
                                            <h2>
                                                    CEO
                                            </h2>
                                            <p>Dhairyasheel More</p>
                                        </li>
                                        <li>
                                            <h2>
                                                  CTO
                                            </h2>
                                            <p>Asif Patel</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__link">
                                    <h2 className="footer-widget__title">Explore</h2>
                                    <div className="footer-widget__link-wrap">
                                        <ul className="list-unstyled footer-widget__link-list">
                                            <li>
                                                <a href="#">About</a>
                                            </li>
                                            <li>
                                                <a href="#">Overview</a>
                                            </li>
                                            <li>
                                                <a href="#">Teachers</a>
                                            </li>
                                            <li>
                                                <a href="#">Join Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Our News</a>
                                            </li>
                                        </ul>
                                        <ul className="list-unstyled footer-widget__link-list">
                                            <li>
                                                <a href="#">Help </a>
                                            </li>
                                            <li>
                                                <a href="#">Contact</a>
                                            </li>
                                            <li>
                                                <a href="#">Register Now</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

{/* ------------------------------------------------------comented code as per changes -------------------------- */}

                            {/* <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__gallery">
                                    <h2 className="footer-widget__title">Gallery</h2>
                                    <ul className="list-unstyled footer-widget__gallery-list">
                                        <li>
                                            <a href="#">
                                                <img src="/assets/images/footer-1-1.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/assets/images/footer-1-2.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/assets/images/footer-1-3.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/assets/images/footer-1-4.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/assets/images/footer-1-5.png" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src="/assets/images/footer-1-6.png" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div> */}


{/* ---------------------------------------------------------------------------------------------- */}
                            <div className="col-xl-3 col-lg-6 col-sm-12">
                                <div className="footer-widget footer-widget__about">
                                    <h2 className="footer-widget__title">About</h2>
                                    <p className="footer-widget__text">20+ Years of Excellence: Your Trusted Source
                                    for Assured Medical and Engineering Admissions
                                    Recommended by thousands of doctors and engineers
                                    </p>
                                    <div className="footer-widget__btn-block">
                                        <a href="#" className="thm-btn">
                                            Contact
                                        </a>
                                        <a href="#" className="thm-btn">
                                            Purchase
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <p className="site-footer__copy">
                            &copy; Copyright 2023{" "}
                            <a href="#">SIC द्वारे ❤ प्रेमपूर्वक विकसित</a>
                        </p>
                        <div className="site-footer__social">
                            <div
                                onClick={scrollTop}
                                className="scroll-to-target site-footer__scroll-top"
                            >
                                <i className="kipso-icon-top-arrow"></i>
                            </div>
                            <a href="#">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-facebook-square"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                            <a href="#">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="search-popup">
                <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
                <div className="search-popup__inner">
                    <form action="#" className="search-popup__form">
                        <input
                            type="text"
                            name="search"
                            placeholder="Type here to Search...."
                        />
                        <button type="submit">
                            <i className="kipso-icon-magnifying-glass"></i>
                        </button>
                        <div className="cancel">
                            <i className="fas fa-times-circle"></i>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Footer;
