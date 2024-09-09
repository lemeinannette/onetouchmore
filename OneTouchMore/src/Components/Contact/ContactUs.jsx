import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="text-xl font-bold mb-4">Contact Information</h2>
          <p className="mb-4 text-gray-200">
            Say something to start a live chat!
          </p>
          <ul className="space-y-2">
            <li className="flex items-center text-gray-200">
              <i className="fas fa-phone mr-2"></i> +1012 3456 789
            </li>
            <li className="flex items-center text-gray-200">
              <i className="fas fa-envelope mr-2"></i> demo@gmail.com
            </li>
            <li className="flex items-center text-gray-200">
              <i className="fas fa-map-marker-alt mr-2"></i> 132 Dartmouth
              Street, Boston, MA 02156
            </li>
          </ul>
          <div className="social-icons mt-4 flex space-x-4">
            <a href="#" className="text-gray-200 hover:text-white">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" className="text-gray-200 hover:text-white">
              <i className="fab fa-discord text-xl"></i>
            </a>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="form-row">
              <div className="form-item">
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                />
              </div>
              <div className="form-item">
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-field"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field"
                />
              </div>
              <div className="form-item">
                <label className="block mb-2">Phone Number</label>
                <input
                  type="text"
                  placeholder="+1 012 3456 789"
                  className="input-field"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-item">
                <label className="block mb-2">Subject</label>
                <select className="dropdown-field">
                  <option value="">Select a Subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-row full-width">
              <label className="block mb-2">Message</label>
              <textarea
                placeholder="Write your message.."
                className="textarea-field"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2002.8650138624323!2d36.706714!3d-1.261568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178ab0035c6b4b61%3A0x9b36b722b4749a14!2sMas+Lab%2C+Kitale!5e0!3m2!1sen!2sin!4v1694091413298!5m2!1sen!2sin&dir_action=navigate&daddr=Mas+Lab%2C+Kitale"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactUs;
