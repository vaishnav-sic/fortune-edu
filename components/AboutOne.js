import React, { Component } from 'react';
import { withRouter } from 'next/router';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
class AboutOne extends Component {
    constructor() {
        super()
        this.state = {
            startCounter: false
        }
    }
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({ startCounter: true });
        }
    }


    render() {
        return (
            <section className="about-one ">
                <img src="assets/images/circle-stripe.png" className="about-one__circle" alt="" />
                <div className="container text-center">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Let’s Secure Your Admission With <br />
                           Our Expert Guidance</h2>
                    </div>
                    <img
                        src="/assets/images/DrGroup.jpeg"
                        alt="Consultation Image"
                        className="consultation-image"
                    />
                    {/* <div className="about-one__img">
                        <div className="row">
                            
                        </div>
                        <div className="about-one__review">
                            <p className="about-one__review-count counter">
                                <VisibilitySensor onChange={this.onVisibilityChange} offset={{ top: 10 }} delayedCall><CountUp end={this.state.startCounter ? 11784 : 0} /></VisibilitySensor>
                            </p>
                            <div className="about-one__review-stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <p className="about-one__review-text">students loved us</p>
                        </div>
                    </div> */}
                    <p className="about-one__text">We firmly believe in the principle that every individual should have
                    <br/>the opportunity to pursue their dreams and passions unhindered.
                    <br/>It is disheartening to witness countless young aspiring minds facing various
                    <br/>complexities and uncertainties when it comes to choosing the right career path.
                    <br/>Drawing from our extensive personal experience, we assert confidently
                    <br/>that no one is better equipped to navigate this system than us.
                    </p>
                    <a href="/index#registration1" className="thm-btn about-one__btn">Book Counselling</a>
                </div>
            </section>
        );
    }
}
export default withRouter(AboutOne);