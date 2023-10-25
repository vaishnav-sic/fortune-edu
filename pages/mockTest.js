import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Courses from "../components/Courses";

const MockTest = () => {
    return (
        <Layout pageTitle="Fortune | Mock">
            <NavOne />


            <div className="col-lg-4">
                        <div className="course-one__single">
                           <div className="course-one__content">
                                <p className="contact-info-one__text"> MEDICAL 
                                <br /> Take Test
                                <br /> Now 
                                <br /><a href="#" className="course-one__Direction">Mock</a>
                                </p>
                                
                            </div>
                        </div>
                    
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                           <div className="course-one__content">
                                <p className="contact-info-one__text"> ENGINEERING 
                                <br />Take Test
                                <br /> Now
                                <br /><a href="#" className="course-one__Direction">Mock</a>
                                </p>
                                
                            </div>
                        </div>



                    
                    </div>

            <Footer />
        </Layout>
    );
};

export default MockTest;
