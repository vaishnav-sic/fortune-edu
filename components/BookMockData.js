import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import ReCAPTCHA from "react-google-recaptcha";

const BookMockData = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    collegeName: "",
    courseInterest: "Course",
    cityLiveIn: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [countdownDate, setCountdownDate] = useState(Date.now() + 5000000000);
  const [inputFocused, setInputFocused] = useState(false);
  const [appliedDateTime, setAppliedDateTime] = useState(null);
  const [otp, setOtp] = useState("");
  let [randomOtp, setRandomOtp] = useState("");
  const [enableVerify, setEnableVerify] = useState(false);
  const [enterOtp, setEnterOtp] = useState(false);
  const [apply, setApply] = useState(false);
  const [getOtp, setGetOtp] = useState(true);
  const [isOtpValid, setIsOtpValid] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isMobileExists, setIsMobileExists] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [mobileVerificationStatus, setMobileVerificationStatus] = useState("");
  const [mobileVerificationMessage, setMobileVerificationMessage] =
    useState("");
  const handleCaptchaChange = (value) => {
    setIsCaptchaVerified(true);
  };
  const handleApplyNewLink = () => {
    if (apply && !isMobileExists && isOtpVerified && isCaptchaVerified) {
      window.open("https://admissiongateway.co.in/mocktest", "_blank");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const fetchDataFromFirestore = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      querySnapshot.forEach((doc) => {});
    } catch (error) {}
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!isCaptchaVerified) {
      return;
    }

    if (!formData.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!formData.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!formData.mobile || formData.mobile.length !== 10) {
      errors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.email || !formData.email.includes("@gmail.com")) {
      errors.email = "Please enter a valid Gmail address";
    }
    if (!formData.courseInterest || formData.courseInterest === "Course") {
      errors.courseInterest = "Please select a course";
    }
    if (!formData.cityLiveIn) {
      errors.cityLiveIn = "City you Live in is required";
    }

    if (!formData.collegeName) {
      errors.collegeName = "College Name is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      try {
        if (apply && isOtpVerified) {
          const appliedDateTime = new Date().toLocaleString();
          const docRef = await addDoc(collection(db, "MockInfo"), {
            ...formData,
            appliedDateTime,
          });

          fetchDataFromFirestore("MockInfo");
          fetchDataFromFirestore("consultations");
          setAppliedDateTime(appliedDateTime);

          setFormData({
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            courseInterest: "Course",
            cityLiveIn: "",
            collegeName: "",
          });
          setApply(false);
          // randomOtp = "";
          setGetOtp(true);
        }
        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  useEffect(() => {
    setCountdownDate(Date.now() + 5000);
    fetchDataFromFirestore("StudentInfo");
    fetchDataFromFirestore("consultations");
    checkMobileExists(formData.mobile);
  }, [formData.mobile]);

  const sendOtp = async () => {
    const mobileExists = await checkMobileExists(formData.mobile);
    if (mobileExists) {
      setApply(true);
      setEnterOtp(false);
      setIsOtpVerified(true);
      setIsOtpValid(true);
    } else {
      if (
        formData.mobile &&
        formData.cityLiveIn &&
        formData.courseInterest &&
        formData.email &&
        formData.firstName &&
        formData.lastName &&
        formData.collegeName
      ) {
        randomOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setRandomOtp(randomOtp);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append(
          "Authorization",
          "Basic OHJPdWpzaHgybEhPUldKeXl2WFU6bTc1U29DVXFsU2tOWndvaFhSMmZWWnFSdW41NXJZSlBCRFZscFVYMA=="
        );

        var raw = JSON.stringify({
          Text:
            randomOtp +
            " is the OTP to verify your mobile number at FORTUNE EDUCATION. It is valid for 10 mins. OTPs are CONFIDENTIAL. DO NOT disclose it to anyone.",
          Number: "91" + formData.mobile,
          SenderId: "FRTEDU",
          DRNotifyUrl: "https://www.domainname.com/notifyurl",
          DRNotifyHttpMethod: "POST",
          Tool: "API",
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };

        const response = await fetch(
          "https://restapi.smscountry.com/v0.1/Accounts/8rOujshx2lHORWJyyvXU/SMSes/",
          requestOptions
        );
        console.log("Response from SMS API:", response);

        if (response.ok) {
          setEnterOtp(true);
          setGetOtp(false);
        } else {
          console.error("Error sending OTP:", response.statusText);
        }
      }
    }
  };
  const checkMobileExists = async (mobile) => {
    try {
      const querySnapshot = await getDocs(collection(db, "StudentInfo"));
      const mobileExists = querySnapshot.docs.some(
        (doc) => doc.data().mobile === mobile
      );
      const mockQuerySnapshot = await getDocs(collection(db, "MockInfo"));
      const mockMobileExists = mockQuerySnapshot.docs.some(
        (doc) => doc.data().mobile === mobile
      );
      if (mobileExists) {
        setMobileVerificationStatus("verified");
        setMobileVerificationMessage("Mobile verified");
      } else {
        setMobileVerificationStatus("not-verified");
        setMobileVerificationMessage("");
      }
      return mobileExists || mockMobileExists;
    } catch (error) {
      console.error("Error checking if mobile exists:", error);
      return false;
    }
  };

  const checkOtp = async () => {
    if (randomOtp == otp) {
      setApply(true);
      setEnterOtp(false);
      setIsOtpVerified(true);
      setIsOtpValid(true);
    } else {
      setIsOtpValid(false);
      setApply(false);
    }
  };

  const setOtpp = (element) => {
    setOtp(element.target.value);
    if (element.target.value.length == 6) {
      setEnableVerify(true);
    } else setEnableVerify(false);
  };

  return (
    <div id="registration2">
      <section className="countdown-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="countdown-one__content">
                <h2 className="countdown-one__title">
                  Register for your mock{" "}
                </h2>
                <p className="countdown-one__tag-line">Easy Apply</p>
              </div>
              <img
                src="/assets/images/mockRegister.jpg"
                alt="Consultation Image"
                className="consultation-image"
              />
            </div>
            <div className="col-lg-6">
              <div className="become-teacher__form">
                <div className="become-teacher__form-top">
                  <h2 className="become-teacher__form-title">Register</h2>
                </div>
                <form
                  action="#"
                  method="POST"
                  className="become-teacher__form-content contact-form-validated"
                  onSubmit={handleFormSubmit}>
                  <input
                    className="form-field"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {formErrors.firstName && (
                    <span className="error-message">
                      {formErrors.firstName}
                    </span>
                  )}
                  <input
                    className="form-field"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {formErrors.lastName && (
                    <span className="error-message">{formErrors.lastName}</span>
                  )}

                  <input
                    className="form-field"
                    type="text"
                    placeholder="Email-Id"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {formErrors.email && (
                    <span className="error-message">{formErrors.email}</span>
                  )}
                  <select
                    className="form-field"
                    name="courseInterest"
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}>
                    <option value="Course interested in" selected disabled>
                      Course interested in
                    </option>
                    <option value="Medical">Medical</option>
                    <option value="Engineering">Engineering</option>
                  </select>
                  {formErrors.courseInterest && (
                    <span className="error-message">
                      {formErrors.courseInterest}
                    </span>
                  )}
                  <input
                    className="form-field"
                    type="text"
                    placeholder="Type Your City Name"
                    name="cityLiveIn"
                    value={formData.cityLiveIn}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {formErrors.cityLiveIn && (
                    <span className="error-message">
                      {formErrors.cityLiveIn}
                    </span>
                  )}

                  <input
                    className="form-field"
                    type="text"
                    placeholder="College Name"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {formErrors.collegeName && (
                    <span className="error-message">
                      {formErrors.collegeName}
                    </span>
                  )}
                  <input
                    className="form-field"
                    type="text"
                    placeholder="Mobile"
                    name="mobile"
                    id="recaptcha-container"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {formErrors.mobile && (
                    <span className="error-message">{formErrors.mobile}</span>
                  )}
                  {mobileVerificationStatus === "verified" && (
                    <span
                      className="success-message"
                      style={{ color: "green" }}>
                      {mobileVerificationMessage}
                    </span>
                  )}
                  <ReCAPTCHA
                    sitekey="6Lf_UjQpAAAAABjk_oc5AueXsKCZCFULM0-VF4Rl"
                    onChange={handleCaptchaChange}
                  />
                  {enterOtp ? (
                    <div className="d-flex flex-column">
                      <div className="d-flex flex-row">
                        <input
                          className="form-field"
                          type="text"
                          placeholder="Enter Otp"
                          name="otp"
                          value={otp}
                          onChange={setOtpp}
                        />

                        <button
                          style={{
                            width: "5rem",
                            height: "2.2rem",
                            marginTop: "6px",
                            marginLeft: "1rem",
                            display: "flex",
                            alignItems: "center",
                          }}
                          onClick={checkOtp}
                          disabled={!enableVerify}>
                          Verify
                        </button>
                      </div>
                      {!isOtpValid && (
                        <span className="error-message">
                          Please enter valid otp
                        </span>
                      )}
                    </div>
                  ) : null}

                  <div className="d-flex flex-column">
                    {!isMobileExists && getOtp ? (
                      <button
                        onClick={sendOtp}
                        className="thm-btn become-teacher__form-btn"
                        disabled={!isCaptchaVerified}>
                        Get Otp
                      </button>
                    ) : null}
                    {apply && !isMobileExists ? (
                      <button
                        type="submit"
                        className="thm-btn become-teacher__form-btn"
                        disabled={!isOtpVerified || !isCaptchaVerified}
                        onClick={handleApplyNewLink}>
                        Apply for it
                      </button>
                    ) : null}
                  </div>
                </form>
                {showPopup && isOtpVerified && isMobileExists && (
                  <div className="popup">
                    <p>We will get back to you shortly.</p>

                    <img
                      src="../assets/images/logo/FortunePopUpLogo.png"
                      alt="Fortune"
                      className="trophy-image"
                    />

                    <div className="green-line"></div>
                  </div>
                )}
                {appliedDateTime && (
                  <div className="applied-datetime">
                    Applied on: {appliedDateTime}
                  </div>
                )}
                <div className="result text-center"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookMockData;
