import React, { useState, useEffect } from "react";
import { db, auth } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const BookCounselling = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    courseInterest: "Course",
    cityLiveIn: "",
    consultationCity: "City",
    CouponCode: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [countdownDate, setCountdownDate] = useState(Date.now() + 5000000000);
  const [inputFocused, setInputFocused] = useState(false);
  const [appliedDateTime, setAppliedDateTime] = useState(null);
  const [otp, setOtp] = useState("");
  const [confirmation, setConfirmation] = useState(null);
  const [enterOtp, setEnterOtp] = useState(true);
  const [apply, setApply] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

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
    if (apply && isOtpVerified) {
      // Validation logic
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
      if (!formData.consultationCity || formData.consultationCity === "City") {
        errors.consultationCity = "Please select a city";
      }
      if (formData.CouponCode && formData.CouponCode.length !== 7) {
        errors.CouponCode = "CouponCode must be 7 digits";
      }

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
      } else {
        setFormErrors({});
        try {
          const appliedDateTime = new Date().toLocaleString();
          const docRef = await addDoc(collection(db, "StudentInfo"), {
            ...formData,
            appliedDateTime,
          });

          fetchDataFromFirestore("StudentInfo");
          fetchDataFromFirestore("consultations");
          setAppliedDateTime(appliedDateTime);

          // Reset form data to empty values
          setFormData({
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            courseInterest: "Course",
            cityLiveIn: "",
            consultationCity: "City",
            CouponCode: "",
          });
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      }
    }
  };

  useEffect(() => {
    setCountdownDate(Date.now() + 5000);
    fetchDataFromFirestore("StudentInfo");
    fetchDataFromFirestore("consultations");
  }, []);

  const sendOtp = async () => {
    window.RecaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
    console.log(window.RecaptchaVerifier);
    await signInWithPhoneNumber(
      auth,
      "+91" + formData.mobile,
      window.RecaptchaVerifier
    )
      .then((confirmationResult) => {
        setConfirmation(confirmationResult);
        setApply(true);
        setEnterOtp(true);
        console.log(confirmationResult);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const checkOtp = async () => {
    await confirmation
      .confirm(otp)
      .then((result) => {
        setIsOtpVerified(true);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setOtpp = (element) => {
    setOtp(element.target.value);
  };

  return (
    <div id="registration1">
      <section className="countdown-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="countdown-one__content">
                <h2 className="countdown-one__title">Book Counselling! </h2>
                <p className="countdown-one__tag-line">
                  Experts in hassle-free admission
                </p>
              </div>
              <img
                src="/assets/images/DrGroup.jpeg"
                alt="Consultation Image"
                className="consultation-image"
              />
            </div>
            <div className="col-lg-6">
              <div className="become-teacher__form">
                <div className="become-teacher__form-top">
                  <h2 className="become-teacher__form-title">
                    Book Counselling
                  </h2>
                </div>
                <form
                  action="#"
                  method="POST"
                  className="become-teacher__form-content contact-form-validated"
                  onSubmit={handleFormSubmit}
                >
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
                    onBlur={handleInputBlur}
                  >
                    <option value="" disabled selected>
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

                  <select
                    className="form-field"
                    name="consultationCity"
                    value={formData.consultationCity}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  >
                    <option value="" disabled selected>
                      Select a city
                    </option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Karad">Karad</option>
                    <option value="Baramati">Baramati</option>
                    <option value="Manchar">Manchar</option>
                  </select>
                  {formErrors.consultationCity && (
                    <span className="error-message">
                      {formErrors.consultationCity}
                    </span>
                  )}
                  <input
                    className="form-field"
                    type="text"
                    placeholder="CouponCode"
                    name="CouponCode"
                    value={formData.CouponCode}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
                  {formErrors.CouponCode && (
                    <span className="error-message">
                      {formErrors.CouponCode}
                    </span>
                  )}
                  {enterOtp ? (
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
                      >
                        Verify
                      </button>
                    </div>
                  ) : null}
                  <div className="d-flex flex-column">
                    {!apply ? (
                      <button
                        onClick={sendOtp}
                        className="thm-btn become-teacher__form-btn"
                        disabled={!formData.mobile}
                      >
                        Get Otp
                      </button>
                    ) : null}
                    {apply ? (
                      <button
                        type="submit"
                        className="thm-btn become-teacher__form-btn"
                        disabled={!isOtpVerified}
                      >
                        Apply for it
                      </button>
                    ) : null}
                  </div>
                </form>
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

export default BookCounselling;
