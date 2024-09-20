import React, { useState } from "react";
import "./BookRepair.css"; // Make sure this file is in the same folder
import Footer from "../Footer/Footer"; // Adjust the import path as needed

const BookRepair = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phoneModel, setPhoneModel] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] = useState("Functional");
  const [diagnostic, setDiagnostic] = useState("");
  const [contactMethod, setContactMethod] = useState("phone");
  const [customStatus, setCustomStatus] = useState("");
  const [customIssue, setCustomIssue] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // Function to validate phone number
  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10,14}$/; // Adjust for your required format
    return phoneRegex.test(number);
  };

  // Function to validate email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Custom validation function
  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = "Name is required";
    if (!phoneModel) newErrors.phoneModel = "Phone model is required";
    if (!issue) newErrors.issue = "Please select an issue";
    
    if (contactMethod === "phone" && !validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }

    if (contactMethod === "email" && !validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setMessage("Your repair request has been submitted!");
    } else {
      setMessage(""); // Clear the message if validation fails
    }
  };

  return (
    <>
      <div className="book-repair-container">
        <h1>Book a Repair</h1>
        <p>
          Fill out the form below to book a repair for your phone. We will get
          in touch with you shortly. If you have any questions about filling out
          the form, please see the explanations provided for each field.
        </p>

        <form onSubmit={handleSubmit} className="repair-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone-model">Phone Model:</label>
              <input
                type="text"
                id="phone-model"
                value={phoneModel}
                onChange={(e) => setPhoneModel(e.target.value)}
                required
                placeholder="Enter the phone model"
              />
              {errors.phoneModel && <span className="error-message">{errors.phoneModel}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="issue">Issue Description:</label>
              <select
                id="issue"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                required
              >
                <option value="">Select the issue</option>
                <option value="Hardware Issues">Hardware Issues</option>
                <option value="Software Issues">Software Issues</option>
                <option value="Water Damage">Water Damage</option>
                <option value="Charging Issues">Charging Issues</option>
                <option value="Network Issues">Network Issues</option>
                <option value="Other">Other (please specify)</option>
              </select>
              {errors.issue && <span className="error-message">{errors.issue}</span>}
              {issue === "Other" && (
                <input
                  type="text"
                  placeholder="Please specify"
                  value={customIssue}
                  onChange={(e) => setCustomIssue(e.target.value)}
                />
              )}
            </div>

            <div className="form-group">
              <label htmlFor="status">Phone Condition Status:</label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Functional">Functional</option>
                <option value="Non-Functional">Non-Functional</option>
                <option value="Cosmetic Damage">Cosmetic Damage</option>
                <option value="Water Damage">Water Damage</option>
                <option value="Other">Other (please specify)</option>
              </select>
              {status === "Other" && (
                <input
                  type="text"
                  placeholder="Please specify"
                  value={customStatus}
                  onChange={(e) => setCustomStatus(e.target.value)}
                />
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="diagnostic">Diagnostic Information:</label>
              <select
                id="diagnostic"
                value={diagnostic}
                onChange={(e) => setDiagnostic(e.target.value)}
              >
                <option value="">Select Diagnostic Information</option>
                <option value="Diagnostic Report">Diagnostic Report</option>
                <option value="Repair History">Repair History</option>
                <option value="None">None</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="contact-method">Preferred Contact Method:</label>
              <select
                id="contact-method"
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value)}
              >
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </div>

            {contactMethod === "phone" && (
              <div className="form-group">
                <label htmlFor="phone-number">Phone Number:</label>
                <input
                  type="tel"
                  id="phone-number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required={contactMethod === "phone"}
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && (
                  <span className="error-message">{errors.phoneNumber}</span>
                )}
              </div>
            )}

            {contactMethod === "email" && (
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={contactMethod === "email"}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="additional-details">Additional Details:</label>
              <textarea
                id="additional-details"
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                placeholder="Provide any additional information here..."
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        {message && <p className="success-message">{message}</p>}
      </div>
      <Footer />
    </>
  );
};

export default BookRepair;
