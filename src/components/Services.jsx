import React from "react";
import "../styles/Services.css";

import netflixLogo from "../assets/netflix.png";
import primeLogo from "../assets/prime.png";
import adobeLogo from "../assets/adobe.png";
import chatgptLogo from "../assets/chatgpt.png";
import midjourneyLogo from "../assets/midjourney.png";
import courseraLogo from "../assets/coursera.png";
import udemyLogo from "../assets/udemy.png";
import facebookLogo from "../assets/facebook.png";
import instagramLogo from "../assets/instagram.png";
import twitterLogo from "../assets/twitter.png";

function Services() {
    return (
        <div className="services-page">
            <header className="services-header">
                <h1>Our Services</h1>
                <p>
                    Explore our wide range of digital subscription categories.
                    From entertainment and AI tools to education and social media —
                    Service Hub brings everything together in one place.
                </p>
            </header>

            {/* Entertainment Category */}
            <section className="category">
                <h2>🎬 Entertainment</h2>
                <div className="service-grid">
                    <div className="service-card">
                        <img src={netflixLogo} alt="Netflix" />
                        <h3>Netflix</h3>
                        <p>Watch unlimited shows and movies with affordable shared plans.</p>
                        <span className="price">$4.99 / month</span>
                        <button className="details-btn">View Details</button>
                    </div>
                    <div className="service-card">
                        <img src={primeLogo} alt="Prime Video" />
                        <h3>Amazon Prime Video</h3>
                        <p>Enjoy exclusive originals and the latest blockbusters anytime.</p>
                        <span className="price">$3.99 / month</span>
                        <button className="details-btn">View Details</button>
                    </div>
                    <div className="service-card">
                        <img src={adobeLogo} alt="Adobe CC" />
                        <h3>Adobe Creative Cloud</h3>
                        <p>Access Photoshop, Illustrator, and more for creative professionals.</p>
                        <span className="price">$7.99 / month</span>
                        <button className="details-btn">View Details</button>
                    </div>
                </div>
            </section>

            {/* AI Tools Category */}
            <section className="category">
                <h2>🤖 AI Tools</h2>
                <div className="service-grid">
                    <div className="service-card">
                        <img src={chatgptLogo} alt="ChatGPT" />
                        <h3>ChatGPT Plus</h3>
                        <p>Get advanced AI assistance for writing, coding, and brainstorming.</p>
                        <span className="price">$6.99 / month</span>
                        <button className="details-btn">View Details</button>
                    </div>
                    <div className="service-card">
                        <img src={midjourneyLogo} alt="Midjourney" />
                        <h3>Midjourney</h3>
                        <p>Create stunning AI-generated images and artwork in minutes.</p>
                        <span className="price">$5.99 / month</span>
                        <button className="details-btn">View Details</button>
                    </div>
                </div>
            </section>

            {/* Education Category */}
            <section className="category">
                <h2>🎓 Education</h2>
                <div className="service-grid">
                    <div className="service-card">
                        <img src={courseraLogo} alt="Coursera" />
                        <h3>Coursera</h3>
                        <p>Access world-class online courses from top universities and companies.</p>
                        <span className="price">$2.99 / month</span>
                        <button className="details-btn">View Details</button>
                    </div>
                    <div className="service-card">
                        <img src={udemyLogo} alt="Udemy" />
                        <h3>Udemy</h3>
                        <p>Learn new skills anytime, anywhere — thousands of affordable courses.</p>
                        <span className="price">$1.99 / month</span>
                        <button className="details-btn">View Details</button>
                    </div>
                </div>
            </section>

            {/* Social Media Tools Category */}
            <section className="category">
                <h2>💬 Social Media</h2>
                <div className="service-grid">
                    <div className="service-card">
                        <img src={facebookLogo} alt="Facebook Ads" />
                        <h3>Facebook Ads</h3>
                        <p>Grow your business with targeted ad campaigns that convert.</p>
                        <span className="price">$3.49 / month</span>
                        <button className="details-btn">View Details</button>
                    </div>
                    <div className="service-card">
                        <img src={instagramLogo} alt="Instagram Tools" />
                        <h3>Instagram Tools</h3>
                        <p>Enhance engagement with advanced analytics and automation.</p>
                        <span className="price">$2.49 / month</span>
                        <button className="details-btn">View Details</button>
                    </div>
                    <div className="service-card">
                        <img src={twitterLogo} alt="X (Twitter) Tools" />
                        <h3>X (Twitter) Tools</h3>
                        <p>Schedule tweets, track engagement, and grow your online presence.</p>
                        <span className="price">$2.99 / month</span>
                        <button className="details-btn">View Details</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
