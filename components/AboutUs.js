import React, {Component} from 'react';
class CallToActionThree extends Component {
    render() {
        return (
            <section className="cta-three">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 clearfix">
                            <img src="/assets/images/cta-1.jpg" className="cta-three__image" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="cta-three__content">
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Benefits of learning
                                        with kipso</h2>
                                </div>
                                <p className="cta-three__text">Our mission is to facilitate your journey in achieving your goal of making a positive impact on the lives of others. Leveraging years of practical experience, we offer insightful and pragmatic solutions. <br></br> We possess comprehensive knowledge spanning across all educational domains, empowering us to guide students towards selecting the most suitable path. Our unwavering commitment is to stand by your side until you successfully secure admission to your dream college and realize your aspirations.</p>
                                <div className="cta-three__single-wrap">
                                    <div className="cta-three__single">
                                        <i className="kipso-icon-strategy"></i>
                                        <p className="cta-three__single-text">Professional
                                            Courses</p>
                                    </div>
                                    <div className="cta-three__single">
                                        <i className="kipso-icon-training"></i>
                                        <p className="cta-three__single-text">Live
                                            Learning</p>
                                    </div>
                                    <div className="cta-three__single">
                                        <i className="kipso-icon-human-resources"></i>
                                        <p className="cta-three__single-text">Expert
                                            Teachers</p>
                                    </div>
                                </div>
                                <a href="#" className="thm-btn">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default CallToActionThree;