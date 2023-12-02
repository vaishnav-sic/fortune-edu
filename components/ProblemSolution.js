import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
const ProblemSolution = () => {
    return (
      <section className='main-page'>
        <div className="container">
          <div className="d-flex col-12 py-3 mt-5">
            <div className="col-12 col-lg-6 my-auto text-start">
              <div className="heading-text-start">Challenges ahead? <br /> We're here to help!</div>
              <div className="d-flex flex-wrap col-12 justify-content-between my-md-4 my-2">
                <div id="qna-faq" className="accordion accordion-flush col-12">
                  <div className="accordion-item mt-3 faq-container">
                      <div className="accordion-header-question" data-aos="fade-up-right" data-aos-duration="1000" ><h5>Confusion/Struggle in form filling and documentation.</h5>
                      <p>Stress-free & hassle-free support in completing forms.</p>
                      </div>
                  </div>
                  <div className="accordion-item mt-3 faq-container">
                      <div className="accordion-header-question"  data-aos="fade-up-right" data-aos-duration="1000"><h5>Choices influenced by misinformed friends and family.</h5>
                      <p>Expert guidance for parents and students based on data and insights.</p>
                    </div>
                  </div>
                  <div className="accordion-item mt-3 faq-container">
                      <div className="accordion-header-question"  data-aos="fade-up-right" data-aos-duration="1000"><h5>Challenges in selecting a college and prioritizing preferences.</h5>
                      <p>Personalized guidance for optimal college choices based on NEET score</p>
                    </div>
                  </div>
                  <div className="accordion-item mt-3 faq-container">
                      <div className="accordion-header-question" data-aos="fade-up-right" data-aos-duration="1000"><h5>Confused by numerous deadlines to manage.</h5>
                    <p>Receive important date alerts via WhatsApp and SMS.</p>
                  </div>
                  </div>
                  <div className="accordion-item mt-3 faq-container">
                      <div className="accordion-header-question" data-aos="fade-up-right" data-aos-duration="1000"><h5>Risk of falling victim to fraud under the name of donations.</h5>
                      <p>Open and straightforward admission process through authorized channels.</p>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 ps-4 d-lg-block d-none"  >
              {/* <img className="qna-faq-img"  data-aos="fade-up-left" data-aos-duration="2000" data-aos-offset="900px" src="/assets/images/faq-img-new.jpg" alt="faq-img" /> */}
              <img className="qna-faq-img"  data-aos="fade-up-left" data-aos-duration="2000" data-aos-offset="900px" src="/assets/images/Counselling.png" alt="faq-img" /> 
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default ProblemSolution;