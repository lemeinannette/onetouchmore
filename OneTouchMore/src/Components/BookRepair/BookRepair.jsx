import React, { useState } from "react";
import "./BookRepair.css";
import Footer from "../Footer/Footer";
const BookRepair = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneModel, setPhoneModel] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] = useState("Functional");
  const [diagnostic, setDiagnostic] = useState("");
  const [contactMethod, setContactMethod] = useState("email");
  const [customStatus, setCustomStatus] = useState("");
  const [customIssue, setCustomIssue] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to an API or email)
    setMessage("Your repair request has been submitted!");
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
              <small className="form-explanation">
                This is your name as it appears on your ID or any official
                document.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="phone-number">Phone Number:</label>
              <input
                type="tel"
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                placeholder="Enter your phone number"
              />
              <small className="form-explanation">
                Please provide a valid phone number where we can reach you.
              </small>
            </div>
          </div>

          <div className="form-row">
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
              <small className="form-explanation">
                Specify the model of the phone you are bringing in for repair.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="issue">Issue Description:</label>
              <select
                id="issue"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
              >
                <option value="">Select the issue</option>
                <option value="Hardware Issues">Hardware Issues</option>
                <option value="Software Issues">Software Issues</option>
                <option value="Water Damage">Water Damage</option>
                <option value="Charging Issues">Charging Issues</option>
                <option value="Network Issues">Network Issues</option>
                <option value="Other">Other (please specify)</option>
              </select>
              {issue === "Other" && (
                <input
                  type="text"
                  placeholder="Please specify"
                  value={customIssue}
                  onChange={(e) => setCustomIssue(e.target.value)}
                />
              )}
              <small className="form-explanation">
                Describe the problem you are experiencing with your phone.
                Choose 'Other' if none of the listed options fit.
              </small>
            </div>
          </div>

          <div className="form-row">
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
              <small className="form-explanation">
                Select the condition of your phone. If 'Water Damage' or
                'Other', please provide additional details.
              </small>
            </div>

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
              <small className="form-explanation">
                Provide any diagnostic information you have or select 'None' if
                you don't have a diagnostic report.
              </small>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contact-method">Preferred Contact Method:</label>
              <select
                id="contact-method"
                value={contactMethod}
                onChange={(e) => setContactMethod(e.target.value)}
              >
                <option value="email">Email</option>
                <option value="phone">Phone</option>
              </select>
              <small className="form-explanation">
                Choose how you would prefer to be contacted regarding your
                repair status and updates.
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="additional-details">Additional Details:</label>
              <textarea
                id="additional-details"
                value={additionalDetails}
                onChange={(e) => setAdditionalDetails(e.target.value)}
                placeholder="Provide any additional information here..."
              />
              <small className="form-explanation">
                Use this section to provide any other details that may help us
                understand the issue better.
              </small>
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
