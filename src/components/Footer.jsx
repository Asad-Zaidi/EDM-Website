import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png"; // adjust path if needed

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section: Logo and About */}
                <div className="footer-logo">
                    <img src={logo} alt="Service Hub Logo" className="footer-logo-img" />
                    <p className="footer-description">
                        Service Hub provides reliable access to your favorite digital
                        subscriptions — affordable, secure, and hassle-free.
                    </p>
                </div>

                {/* Center Section: Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Right Section: Contact Info */}
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: <a href="mailto:support@servicehub.com">support@servicehub.com</a></p>
                    <p>Phone: +92 300 1234567</p>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Service Hub. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
