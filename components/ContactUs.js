import React from 'react';
const ContactUs = () => {
    return (
        <div>
            <div className='Branch__Main'>
                <div className='Branch__Main__In' >
                    <div className='Branch__Main__In__Left'>
                        <div className="contact-info-one__single">
                            {/* <img className="picture1" src={IMG} alt="collage group photo" /> */}
                            <img
                                src="/assets/images/logo/FES_LogoName.svg"
                                className="main-logo"
                                width="300px"
                                alt="Awesome Image"
                            />
                        </div>
                        <div className="container_Contact_main">
                            <h2 className="contact-info-one__title__main">HEAD OFFICE </h2>
                            <h2 className="contact-info-one__title__main1">PUNE </h2>
                            <p className="contact-info-one__text_main"><i className="fa fa-address-book"></i> A2, 601, Omkar Nandan, Navale Bridge,
                                <br /> Next to Hotel Deccan Pavilion, Vadgaon Bk,
                                <br /> Pune,  Maharashtra 411041
                                <br /><i className="fa fa-envelope"></i> support@fortuneeduservices.com
                                <br /><i className='fas fa-phone-square-alt'></i> +91 9607450555
                                <br /><i className='fas fa-phone-square-alt'></i> +91 7798950555
                            </p>
                        </div>
                    </div>
                    <div className='Branch__Main__In__Right'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3784.5259618328732!2d73.8218453!3d18.4598202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295fdd78f3cab%3A0x446ce3208e47a695!2sOMKAR%20NANDAN!5e0!3m2!1sen!2sin!4v1698170223555!5m2!1sen!2sin"
                            className="google-map1" allowFullScreen=""></iframe>
                    </div>
                </div>
            </div>
            <div className="container_Contact">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="course-one__single">
                            <div className="course-one__content_mumbai">
                                <div className="Branch_Details">
                                </div>
                                <h2 className="contact-info-one__title">MUMBAI</h2>
                                <p className="contact-info-one__text_sub"><i className="fa fa-address-book"></i> Office no. 1003,
                                10th floor, Kailash Corporate Lounge, Veer Savarkar Road, Vikhroli West, Mumbai 400079

                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="course-one__single">
                            <div className="course-one__content_manchar">
                                <div className="Branch_Details">
                                </div>
                                <h2 className="contact-info-one__title">KALYAN </h2>
                                <p className="contact-info-one__text_sub"><i className="fa fa-address-book"></i> 302, 3rd floor, Shreeji
                                Tandle Arcade, Above Waman Hari Pethe Jewellers, Shivaji Chowk, Kalyan(W) - 421301
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="course-one__single">
                            <div className="course-one__content_karad">
                                <div className="Branch_Details">
                                </div>
                                <h2 className="contact-info-one__title">KARAD </h2>
                                <p className="contact-info-one__text_sub"><i className="fa fa-address-book"></i> Office no 6, Dipak Plaza,
                                Vita-Karad road, Opposite Hotel Surya Palace, Near Krishna Canal, Saidapur, Karad - 415124
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="course-one__single">
                            <div className="course-one__content_baramati">
                            <div className="Branch_Details">
                                </div>
                                <h2 className="contact-info-one__title">BARAMATI </h2>
                                <p className="contact-info-one__text_sub"><i className="fa fa-address-book"></i> Plot No P-33 Snehdip,
                                Bhigwan Road Next To Bank of Maharashtra, Opposite Ladkat Science Academy, MIDC, Baramati-413133
                                </p>
                              
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="course-one__single">
                            <div className="course-one__content_manchar">
                                <div className="Branch_Details">
                                </div>
                                <h2 className="contact-info-one__title">MANCHAR </h2>
                                <p className="contact-info-one__text_sub"><i className="fa fa-address-book"></i> Gurukul Engineering Academy,
                                Near Gov. Girls Hostel, Gov. College of Engg., Awasari (Kh), Manchar - 412405
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__content">
                                <h2 className="contact-info-one__title">MUMBAI (KALYAN) </h2>
                                <p className="contact-info-one__text"><i className="fa fa-address-book"></i> 01,ABC,ABCDE.
                                    <br /><i className="fa fa-envelope"></i> ABC123@GMAIL.COM
                                    <br /><i className='fas fa-phone-square-alt'></i> 00123456789
                                    <br /><a href="#" className="course-one__Direction">direction</a>
                                </p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};
export default ContactUs;
