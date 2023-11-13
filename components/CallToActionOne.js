import React from 'react';
const CallToActionOne = () => {
    return (
        <section className="cta-one cta-one__home-one" style={{ backgroundImage: `url(assets/images/cta-bg-1-1.jpg)` }}>
            <div className="container">
                <h2 className="cta-one__title">Experts in hassle-free admissions! <br />
                    Turning Dreams into Reality</h2>
                <div className="cta-one__btn-block">
                    <a href="/index#registration1" className="thm-btn cta-one__btn">Book Consultation</a>
                </div>
            </div>
        </section>
    );
};
export default CallToActionOne;
