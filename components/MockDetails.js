import React from "react";
import IMG from "../public/assets/images/Fortune-Edu-logo.png";
const MockDetails = () => {
  return (
    <div>
      <div className="cta-two">
        <div className="container-fluid">
          <div className="rows no-gutter">
            <div className="col-lg-66 thm-base-bgs">
              <div className="cta-two__single_mock">
                <div className="cta-two__icon">
                  <span>
                    <i className="kipso-icon-health"></i>
                  </span>
                </div>
                <div className="cta-two__content">
                  <h2 className="cta-two__title">
                    Assess your medical knowledge
                  </h2>
                  <p className="cta-two__text">
                    with precision – Take a mock test to gauge your preparedness
                    for the medical field.
                  </p>

                  <a href="#registration2" className="thm-btn cta-two__btn">
                    Take Mock Test
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-66 thm-base-bgs-22">
              <div className="cta-two__single_mock">
                <div className="cta-two__icon">
                  <span>
                    <i className="kipso-icon-training"></i>
                  </span>
                </div>
                <div className="cta-two__content">
                  <h2 className="cta-two__title">
                    Evaluate your engineering prowess
                  </h2>
                  <p className="cta-two__text">
                    Opt for a mock test to measure your readiness for the
                    engineering field
                  </p>
                  <a href="#registration2" className="thm-btn cta-two__btn">
                    Take Mock Test
                  </a>
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
