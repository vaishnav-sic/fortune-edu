import React, { useState, Component } from "react";
import Countdown from "react-countdown";

const CountdownKipso = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    courseInterest: "Course",
    cityLiveIn: "",
    consultationCity: "City",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });
  //Rushikesh

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const errors = {};
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
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      console.log(formData);
    }
  };
  return (
    <section className="countdown-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="countdown-one__content">
              <h2 className="countdown-one__title">Register now </h2>
              <p className="countdown-one__tag-line">
                get premium online courses for free!
              </p>
              <p className="countdown-one__text">
                Lorem ipsum gravida nibh vel velit auctor aliquetnean
                sollicitudin.
              </p>
              <div className="countdown-one__list list-unstyled">
                <Countdown date={Date.now() + 5000000000} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="become-teacher__form">
              <div className="become-teacher__form-top">
                <h2 className="become-teacher__form-title">
                  Book Consultation
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
                />
                {formErrors.firstName && (
                  <span className="error-message">{formErrors.firstName}</span>
                )}

                <input
                  className="form-field"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {formErrors.lastName && (
                  <span className="error-message">{formErrors.lastName}</span>
                )}

                <input
                  className="form-field"
                  type="text"
                  placeholder="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
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
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}

                <select
                  className="form-field"
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleInputChange}
                >
                  <option value="Medical">Medical</option>
                  <option value="Engineering">Engineering</option>
                </select>

                <input
                  className="form-field"
                  type="text"
                  placeholder="City you Live in"
                  name="cityLiveIn"
                  value={formData.cityLiveIn}
                  onChange={handleInputChange}
                />
    
                <select
                  className="form-field"
                  name="consultationCity"
                  value={formData.consultationCity}
                  onChange={handleInputChange}
                >
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Baramati">Baramati</option>
                  <option value="Manchar">Manchar</option>
                  <option value="Karad">Karad</option>
                </select>

                <button
                  type="submit"
                  className="thm-btn become-teacher__form-btn"
                >
                  Apply For It
                </button>
              </form>
              <div className="result text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CountdownKipso;
// start
