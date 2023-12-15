import React from 'react';
const CoursesHome = () => {
    return (
        // <section className="cta-five">
        <section className="cta-one cta-one__home-one">
            <img src="/assets/images/MBBS.jpg" className="cta-five__members-1" alt="" />
            <img src="/assets/images/BDS.jpg" className="cta-five__members-2" alt="" />
            <img src="/assets/images/BAMS.jpg" className="cta-five__members-3" alt="" />
            <img src="/assets/images/CS-IT.jpg" className="cta-five__members-4" alt="" />
            <img src="/assets/images/BHMS.jpg" className="cta-five__members-5" alt="" />
            <img src="/assets/images/BPTH.jpg" className="cta-five__members-6" alt="" />
            {/* <div className="cta-five__bubble-1"><i className="fas fa-rocket"></i></div>
            <div className="cta-five__bubble-2"><i className="fas fa-bolt"></i></div> */}
            <div className="container text-center">
                <h2 className="cta-five__title">Counselling service at no cost to individuals holding <br />
                D1/D2/D3: Ex-servicemen certificate /actual service certificate</h2> <br />
                {/* <h4 className="cta-five__text"> Turning Dreams into Reality</h4> */}
                {/* <a href="#" className="thm-btn cta-five__btn">Learn More</a> */}
                <a href="/index#registration1" className="thm-btn cta-one__btn">Book Counselling</a>
            </div>
        </section>
    );
};
export default CoursesHome;
