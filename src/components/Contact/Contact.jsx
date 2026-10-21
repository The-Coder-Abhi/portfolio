import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("https://portfolio-backend-k8w4.onrender.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setStatusMessage(data.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage("Server error. Please ensure the backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h3 className="section-subtitle">GET IN TOUCH</h3>
        <h2 className="section-title">
          Let's <span className="highlight">Connect</span>
        </h2>
        <p className="section-description">
          Whether you have a question, a project proposal, or just want to say
          hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="contact-container">
        {/* Left Side: Contact Information */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-details">
              <h4>Location</h4>
              <p>Mumbai, Maharashtra, India</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-details">
              <h4>Email</h4>
              <a href="mailto:abhishekshelar2003@gmail.com">
                abhishekshelar2003@gmail.com
              </a>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>
            <div className="info-details">
              <h4>Phone</h4>
              <a href="tel:+917977014781">+91 7977014781</a>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-wrapper">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="6"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}{" "}
              <FaPaperPlane className="send-icon" />
            </button>

            {/* Add this block to show success/error messages */}
            {statusMessage && (
              <p style={{ marginTop: "1rem", color: "var(--accent-cyan)", fontWeight: "500", textAlign: "center" }}>
                {statusMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
