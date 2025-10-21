// import React from "react";
// import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import "../styles/Contact.css";

// function Contact() {
//   return (
//     <div className="contact-container">
//       {/* Hero Section */}
//       <section className="contact-hero">
//         <h1>Contact Us</h1>
//         <p>
//           Have a question or need help with your subscription?
//           We’d love to hear from you!
//         </p>
//       </section>

//       {/* Contact Content */}
//       <div className="contact-content">
//         {/* Left: Contact Info */}
//         <div className="contact-info">
//           <h2>Get in Touch</h2>
//           <p>
//             Reach out to our team for assistance with plans, payments, or any
//             other inquiries.
//           </p>

//           <div className="info-item">
//             <FiMail className="icon" />
//             <span>support@servicehub.com</span>
//           </div>

//           <div className="info-item">
//             <FiPhone className="icon" />
//             <span>+92 300 1234567</span>
//           </div>

//           <div className="info-item">
//             <FiMapPin className="icon" />
//             <span>Lahore, Pakistan</span>
//           </div>

//           {/* Social Media Section */}
//           <div className="social-links">
//             <h3>Follow Us</h3>
//             <div className="social-icons">
//               <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
//                 <FaFacebookF />
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
//                 <FaInstagram />
//               </a>
//               <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
//                 <FaTwitter />
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
//                 <FaLinkedinIn />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right: Contact Form */}
//         <form className="contact-form">
//           <h2>Send Us a Message</h2>
//           <div className="form-group">
//             <label htmlFor="name">Full Name</label>
//             <input type="text" id="name" placeholder="Enter your full name" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email Address</label>
//             <input type="email" id="email" placeholder="Enter your email" required />
//           </div>

//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea id="message" rows="4" placeholder="Type your message..." required></textarea>
//           </div>

//           <button type="submit" className="send-btn">Send Message</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React, { useEffect, useState } from "react";
import api from "../../api/api";
import "../styles/Contact.css";

function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await api.get("/contact");
        setContact(res.data);
      } catch (err) {
        console.error("Error loading contact:", err);
      }
    };
    fetchContact();
  }, []);

  if (!contact) return <h2>Loading...</h2>;

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>{contact.message}</p>

      <div className="contact-info">
        <p><strong>Company:</strong> {contact.companyName}</p>
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Address:</strong> {contact.address}</p>
      </div>

      <div className="social-links">
        {contact.facebook && <a href={contact.facebook}>Facebook</a>}
        {contact.instagram && <a href={contact.instagram}>Instagram</a>}
        {contact.twitter && <a href={contact.twitter}>Twitter</a>}
      </div>

      {contact.mapEmbedUrl && (
        <iframe
          src={contact.mapEmbedUrl}
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      )}
    </div>
  );
}

export default Contact;
