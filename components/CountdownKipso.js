import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import { db } from '../firebaseConfig';
import { collection, getDocs, addDoc } from 'firebase/firestore';

const CountdownKipso = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    courseInterest: "Course",
    cityLiveIn: "",
    consultationCity: "City",
    coopenCode: "", // new field for CoopenCode
  });

  const [formErrors, setFormErrors] = useState({});
  const [countdownDate, setCountdownDate] = useState(Date.now() + 5000000000);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.firstName) {
      errors.firstName = 'First Name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last Name is required';
    }
    if (!formData.mobile || formData.mobile.length !== 10) {
      errors.mobile = 'Mobile number must be 10 digits';
    }
    if (!formData.email || !formData.email.includes('@gmail.com')) {
      errors.email = 'Please enter a valid Gmail address';
    }
    if (formData.coopenCode && formData.coopenCode.length !== 7) {
      errors.coopenCode = 'CoopenCode must be 7 digits';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      try {
        // Add the form data to the 'StudentInfo' collection
        const docRef = await addDoc(collection(db, 'StudentInfo'), formData);

        // Fetch and log data from 'StudentInfo' collection
        fetchDataFromFirestore('StudentInfo');

        // Fetch and log data from 'consultations' collection
        fetchDataFromFirestore('consultations');
      } catch (error) {
      }
    }
  };

  const fetchDataFromFirestore = async (collectionName) => {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      querySnapshot.forEach((doc) => {
      });
    } catch (error) {
    }
  };

  useEffect(() => {
    setCountdownDate(Date.now() + 5000);

    fetchDataFromFirestore('StudentInfo');
    fetchDataFromFirestore('consultations');
  }, []);

  return (
    <div id="registration1">
      <section className="countdown-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="countdown-one__content">
                <h2 className="countdown-one__title">Book Consultation! </h2>
                <p className="countdown-one__tag-line">
                  Expert in Hassle-free admission
                </p>
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
                    onChange={handleInputChange}
                  >
                    <option defaultValue="Select a Course" disabled >Course Interested In</option>
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
                    onChange={handleInputChange}
                  >
                    <option value="" disabled >Select a City</option>
                    <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Baramati">Baramati</option>
                    <option value="Manchar">Manchar</option>
                    <option value="Karad">Karad</option>
                  </select>
                  <input
                    className="form-field"
                    type="text"
                    placeholder="CoopenCode"
                    name="coopenCode"
                    value={formData.coopenCode}
                    onChange={handleInputChange}
                  />
                  {formErrors.coopenCode && (
                    <span className="error-message">{formErrors.coopenCode}</span>
                  )}
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
    </div>
  );
};

export default CountdownKipso;
