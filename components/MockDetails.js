import React from 'react';
import IMG from "../public/assets/images/Fortune-Edu-logo.png"
const MockDetails = () => {
    return (
        <div>
            <div className="cta-two">
                <div className="container-fluid">
                    <div className="row no-gutters">
                        <div className="col-lg-6 thm-base-bg">
                            <div className="cta-two__single_mock">
                                <div className="cta-two__icon">
                                    <span><i className="kipso-icon-professor"></i></span>
                                </div>
                                <div className="cta-two__content">
                                    <h2 className="cta-two__title">Assess your medical knowledge</h2>
                                    <p className="cta-two__text"><br/>with precision – Take a mock test to gauge
                                    <br/>your preparedness for the medical field.
                                    </p>
                                   
                                    <a href="#" className="thm-btn cta-two__btn">Run Mock Test</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 thm-base-bg-2">
                            <div className="cta-two__single_mock">
                                <div className="cta-two__icon">
                                    <span><i className="kipso-icon-knowledge"></i></span>
                                </div>
                                <div className="cta-two__content">
                                    <h2 className="cta-two__title">Evaluate your engineering prowess</h2>
                                    <p className="cta-two__text">
                                    <br/>Opt for a mock test to measure your
                                    <br/>readiness for the engineering field
                                    </p>
                                    <a href="#" className="thm-btn cta-two__btn">Run Mock Test</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MockDetails;
