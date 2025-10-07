import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have a question or need help with your subscription?
          We’d love to hear from you!
        </p>
      </section>

      {/* Contact Content */}
      <div className="contact-content">
        {/* Left: Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Reach out to our team for assistance with plans, payments, or any
            other inquiries.
          </p>

          <div className="info-item">
            <FiMail className="icon" />
            <span>support@servicehub.com</span>
          </div>

          <div className="info-item">
            <FiPhone className="icon" />
            <span>+92 300 1234567</span>
          </div>

          <div className="info-item">
            <FiMapPin className="icon" />
            <span>Lahore, Pakistan</span>
          </div>

          {/* Social Media Section */}
          <div className="social-links">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" placeholder="Type your message..." required></textarea>
          </div>

          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
