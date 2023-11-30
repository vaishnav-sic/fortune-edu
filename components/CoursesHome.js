import React from 'react';
const CoursesHome = () => {
    return (
        // <section className="cta-five">
        <section className="cta-one cta-one__home-one">
            <img src="/assets/images/MBBS.jpg" className="cta-five__members-1" alt="" />
            <img src="/assets/images/MBBS.jpg" className="cta-five__members-2" alt="" />
            <img src="/assets/images/MBBS.jpg" className="cta-five__members-3" alt="" />
            <img src="/assets/images/MBBS.jpg" className="cta-five__members-4" alt="" />
            <img src="/assets/images/MBBS.jpg" className="cta-five__members-5" alt="" />
            <img src="/assets/images/MBBS.jpg" className="cta-five__members-6" alt="" />
            {/* <div className="cta-five__bubble-1"><i className="fas fa-rocket"></i></div>
            <div className="cta-five__bubble-2"><i className="fas fa-bolt"></i></div> */}
            <div className="container text-center">
                <h2 className="cta-five__title">Experts in hassle-free admission! <br />
                   Turning dreams into reality</h2> <br />
                {/* <h4 className="cta-five__text"> Turning Dreams into Reality</h4> */}
                {/* <a href="#" className="thm-btn cta-five__btn">Learn More</a> */}
                <a href="/index#registration1" className="thm-btn cta-one__btn">Book Counselling</a>
            </div>
        </section>
    );
};
export default CoursesHome;
