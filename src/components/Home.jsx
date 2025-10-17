import React from "react";
import "../styles/Home.css";

import logo from "../assets/logo.png";
import netflixLogo from "../assets/netflix.png";
import primeLogo from "../assets/prime.png";
import adobeLogo from "../assets/adobe.png";
import officeLogo from "../assets/365.png";

function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="fade-in-up">All Your Subscriptions in One Place</h1>
                    <p className="fade-in-up delay-1">
                        Manage, share, and save on premium subscriptions like Netflix, Prime,
                        Adobe CC, and AWS — all through Service Hub. Get access at affordable
                        prices with one simple platform.
                    </p>
                    <button className="hero-btn fade-in-up delay-2">Get Started</button>
                </div>
                <div className="hero-image float">
                    <img src={logo} alt="Service Hub" />
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <h2>Why Choose Service Hub?</h2>
                <p>
                    We simplify your digital experience by providing access to top-tier
                    services under one roof. Our goal is to make premium digital products
                    accessible and affordable for everyone.
                </p>
            </section>

            {/* Services Section */}
            <section className="services">
                <h2>Popular Services</h2>
                <div className="service-cards">
                    <div className="card">
                        <img src={netflixLogo} alt="Netflix" className="service-icon" />
                        <h3>Netflix</h3>
                        <p>
                            Enjoy your favorite shows and movies with premium shared plans at
                            affordable prices.
                        </p>
                    </div>
                    <div className="card">
                        <img src={primeLogo} alt="Prime Video" className="service-icon" />
                        <h3>Prime Video</h3>
                        <p>
                            Stream exclusive Amazon Originals and hit series anytime, anywhere.
                        </p>
                    </div>
                    <div className="card">
                        <img src={adobeLogo} alt="Adobe CC" className="service-icon" />
                        <h3>Adobe Creative Cloud</h3>
                        <p>
                            Access tools like Photoshop, Illustrator, and Premiere Pro — all in
                            one affordable subscription.
                        </p>
                    </div>
                    <div className="card">
                        <img src={officeLogo} alt="Microsoft 365" className="service-icon" />
                        <h3>Microsoft 365</h3>
                        <p>
                            Access essential productivity tools like Word, Excel, PowerPoint, and OneDrive —
                            all in one subscription to boost your personal and business efficiency.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing / Subscription CTA */}
            <section className="pricing-cta">
                <h2>Affordable Plans for Everyone</h2>
                <p>
                    Whether you’re a student, professional, or small business — Service Hub
                    gives you the flexibility to choose the services you need, without the
                    heavy cost.
                </p>
                <button className="cta-btn">View Plans</button>
            </section>
        </div>
    );
}

export default Home;
