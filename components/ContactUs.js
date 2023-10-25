import React from 'react';
import IMG from "../public/assets/images/clgpic.jpg"

const ContactUs = () => {
    return (
        <div>
     <div className='Branch__Main'>
    <div className='Branch__Main__In' >
        <div className='Branch__Main__In__Left'>

            <div className="container_Contact">
                                <h2 className="contact-info-one__title__main">MAIN BRANCH </h2>
                                <h2 className="contact-info-one__title__main1">PUNE </h2>
                                <p className="contact-info-one__text_main"><i class="fa fa-address-book"></i> 01,ABC,ABCDE. 
                                <br /><i class="fa fa-envelope"></i> ABC123@GMAIL.COM
                                <br /><i class='fas fa-phone-square-alt'></i> 00123456789
                                </p>

                                                            
            </div>

            <div className="contact-info-one__single">
                            
            <img  class="picture1"  src={IMG}
                                 alt="collage group photo" />                                       
            </div>
  </div>
   <div className='Branch__Main__In__Right'>
     <iframe
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3784.5259618328732!2d73.8218453!3d18.4598202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295fdd78f3cab%3A0x446ce3208e47a695!2sOMKAR%20NANDAN!5e0!3m2!1sen!2sin!4v1698170223555!5m2!1sen!2sin"
               className="google-map1" allowFullScreen=""></iframe>

   </div>
 

 </div>
</div>




                <div className="container_Contact">
                <div className="row">
                <div className="col-lg-4">
                        <div className="course-one__single">
                           <div className="course-one__content">
                                <div className="Branch_Details">
                                </div>
                                <h2 className="contact-info-one__title">MUMBAI (CITY) </h2>
                                <p className="contact-info-one__text_Branch"><i class="fa fa-address-book"></i> 01,ABC,ABCDE. 
                                <br /><i class="fa fa-envelope"></i> ABC123@GMAIL.COM
                                <br /><i class='fas fa-phone-square-alt'></i> 00123456789
                                <br /><a href="#" className="course-one__Direction">direction</a>
                                </p>
                                
                            </div>
                        </div>


                        
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="course-one__single">
                           
                            <div className="course-one__content">
                                <h2 className="contact-info-one__title">BARAMATI </h2>
                                <p className="contact-info-one__text"><i class="fa fa-address-book"></i> 01,ABC,ABCDE. 
                                <br /><i class="fa fa-envelope"></i> ABC123@GMAIL.COM
                                <br /><i class='fas fa-phone-square-alt'></i> 00123456789
                                <br /><a href="https://www.google.com/maps?authuser=0" className="course-one__Direction">direction</a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                           <div className="course-one__content">
                            <div className="Branch_Details">
                                </div>
                                <h2 className="contact-info-one__title">MANCHAR </h2>
                                <p className="contact-info-one__text"><i class="fa fa-address-book"></i> 01,ABC,ABCDE. 
                                <br /><i class="fa fa-envelope"></i> ABC123@GMAIL.COM
                                <br /><i class='fas fa-phone-square-alt'></i> 00123456789
                                <br /><a href="#" className="course-one__Direction">direction</a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="course-one__single">
                           <div className="course-one__content">
                                <div className="Branch_Details">
                                </div>
                                <h2 className="contact-info-one__title">KARAD </h2>
                                <p className="contact-info-one__text"><i class="fa fa-address-book"></i> 01,ABC,ABCDE. 
                                <br /><i class="fa fa-envelope"></i> ABC123@GMAIL.COM
                                <br /><i class='fas fa-phone-square-alt'></i> 00123456789
                                <br /><a href="#" className="course-one__Direction">direction</a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    
                                       
                   
                    <div className="col-lg-4">
                        <div className="course-one__single">
                           <div className="course-one__content">
                           <h2 className="contact-info-one__title">MUMBAI (KALYAN) </h2>
                                <p className="contact-info-one__text"><i class="fa fa-address-book"></i> 01,ABC,ABCDE. 
                                <br /><i class="fa fa-envelope"></i> ABC123@GMAIL.COM
                                <br /><i class='fas fa-phone-square-alt'></i> 00123456789
                                <br /><a href="#" className="course-one__Direction">direction</a>
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
                
        </div>
    );
};

export default ContactUs;
