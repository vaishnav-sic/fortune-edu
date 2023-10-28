import React, { Component } from "react";
import Link from "next/link";
class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    //Mobile Menu
    this.mobileMenu();
    //Search Toggle
    this.serachButton();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };
  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");
    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display != "block" ? "block" : "none";
    });
  };
  serachButton = () => {
    let searchToggle = document.querySelector(".search-toggle");
    let searchPopup = document.querySelector(".search-popup");
    let searchClose = document.querySelector(".cancel");
    let searchOverlay = document.querySelector(".search-overlay");
    searchToggle.addEventListener("click", function () {
      searchPopup.classList.add("active");
    });
    searchClose.addEventListener("click", function () {
      searchPopup.classList.remove("active");
    });
    searchOverlay.addEventListener("click", function () {
      searchPopup.classList.remove("active");
    });
  };
  render() {
    return (
      <header className="site-header site-header__header-one ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${this.state.sticky ? "stricked-menu stricky-fixed" : ""
            }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/assets/images/Fortune-Edu-logo-right.png"
                    className="main-logo"
                    width="200px"
                    alt="Awesome Image"
                  />
                </a>
              </Link>
              <div className="header__social">
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
                {/* <a href="#"><i className="fab fa-pinterest-p"></i></a> */}
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              <button className="menu-toggler">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" navigation-box">
                <li>
                  <a href="/Service">SERVICES</a>
                  {/* <ul className="sub-menu">
                                        <li><Link href="/admission-guidance"><a>Admission Guidance</a></Link></li>
                                        <li><Link href="/registration"><a>Registration</a></Link></li>
                                        <li><Link href="/documentation"><a>Documentation</a></Link></li>
                                        <li><Link href="/admission-form-filling"><a>Admission Form Filling</a></Link></li>
                                        <li><Link href="/neet-score-analysis"><a>NEET Score Analysis</a></Link></li>
                                        <li><Link href="/college Choice Preferences"><a>College Choice Preferences</a></Link></li>
                                        <li><Link href="/one-to-one-counselling"><a>One to One Counselling</a></Link></li>
                                        <li><Link href="/admission-notifications-and-alerts"><a>Admission Notifications & Alerts</a></Link></li>
                                        <li><Link href="/nri-documentation-and-guidance"><a>NRI Documentation & Guidance</a></Link></li>
                                    </ul> */}
                </li>
                <li>
                  <a >COUNSELLING</a>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/medical">
                        <a>Medical</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/engineering">
                        <a>Engineering</a>
                      </Link>
                    </li>
                    {/* <li><Link href="/courses"><a>Courses</a></Link></li>
                                        <li><Link href="/course-details"><a>Courses Details</a></Link></li> */}
                  </ul>
                </li>
                {/* <li>
                                    <Link href="/teachers"><a>Teachers</a></Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/teachers"><a>Teachers</a></Link></li>
                                        <li><Link href="/teacher-details"><a>Teachers Details</a></Link></li>
                                        <li><Link href="/become-teacher"><a>Become Teacher</a></Link></li>
                                    </ul>
                                </li> */}
                <li>
                  <Link href="/MockTest">
                    <a>MOCK TEST</a>
                  </Link>
                  {/* <ul className="sub-menu">
                    <li>
                      <Link href="/medical">
                        <a>Medical</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/engineering">
                        <a>Engineering</a>
                      </Link>
                    </li>
                    <li><Link href="/news"><a>News Page</a></Link></li>
                                        <li><Link href="/news-details"><a>News Details</a></Link></li>
                  </ul> */}
                </li>
                <li>
                  <Link href="/about">
                    <a>ABOUT US</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>CONTACT US</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <a
                className="header__search-btn search-popup__toggler search-toggle"
                href="#"
              >
                <i className="kipso-icon-magnifying-glass"></i>
              </a>
            </div>
          </div>
        </nav>
        <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default NavOne;
/* start  */
