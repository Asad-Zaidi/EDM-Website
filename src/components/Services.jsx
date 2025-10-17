// import React, { useState } from "react";
// import "../styles/Services.css";

// import netflixLogo from "../assets/netflix.png";
// import primeLogo from "../assets/prime.png";
// import adobeLogo from "../assets/adobe.png";
// import chatgptLogo from "../assets/chatgpt.png";
// import midjourneyLogo from "../assets/midjourney.png";
// import courseraLogo from "../assets/coursera.png";
// import udemyLogo from "../assets/udemy.png";
// import facebookLogo from "../assets/facebook.png";
// import instagramLogo from "../assets/instagram.png";
// import twitterLogo from "../assets/twitter.png";

// const Services = () => {
//     const [selectedCategory, setSelectedCategory] = useState("All");

//     const categories = ["All", "Entertainment", "AI Tools", "Education", "Social Media"];

//     const baseServices = [
//         { id: 1, name: "Netflix", category: "Entertainment", price: 1500, img: netflixLogo, desc: "Watch unlimited shows and movies with affordable shared plans." },
//         { id: 2, name: "Prime Video", category: "Entertainment", price: 1200, img: primeLogo, desc: "Enjoy exclusive originals and the latest blockbusters anytime." },
//         { id: 3, name: "Adobe Creative Cloud", category: "Entertainment", price: 2500, img: adobeLogo, desc: "Access Photoshop, Illustrator, and more for creative professionals." },
//         { id: 4, name: "ChatGPT Plus", category: "AI Tools", price: 4500, img: chatgptLogo, desc: "Get advanced AI assistance for writing, coding, and brainstorming." },
//         { id: 5, name: "Midjourney", category: "AI Tools", price: 4000, img: midjourneyLogo, desc: "Create stunning AI-generated images and artwork in minutes." },
//         { id: 6, name: "Coursera", category: "Education", price: 999, img: courseraLogo, desc: "Access world-class online courses from top universities and companies." },
//         { id: 7, name: "Udemy", category: "Education", price: 899, img: udemyLogo, desc: "Learn new skills anytime, anywhere — thousands of affordable courses." },
//         { id: 8, name: "Facebook Ads", category: "Social Media", price: 1999, img: facebookLogo, desc: "Grow your business with targeted ad campaigns that convert." },
//         { id: 9, name: "Instagram Tools", category: "Social Media", price: 1499, img: instagramLogo, desc: "Enhance engagement with advanced analytics and automation." },
//         { id: 10, name: "X (Twitter) Tools", category: "Social Media", price: 1399, img: twitterLogo, desc: "Schedule tweets, track engagement, and grow your online presence." },
//     ];

//     const filteredServices =
//         selectedCategory === "All"
//             ? baseServices
//             : baseServices.filter((s) => s.category === selectedCategory);

//     return (
//         <div className="services-page">
//             <header className="services-header">
//                 <h1>Our Services</h1>
//                 <p>
//                     Explore our wide range of digital subscriptions — from entertainment to
//                     AI tools, education, and social media.
//                 </p>
//             </header>

//             {/* Category Filter */}
//             <div className="filter-bar">
//                 {categories.map((cat) => (
//                     <button
//                         key={cat}
//                         className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
//                         onClick={() => setSelectedCategory(cat)}
//                     >
//                         {cat}
//                     </button>
//                 ))}
//             </div>

//             {/* Cards */}
//             <div className="service-grid">
//                 {filteredServices.map((service) => (
//                     <ServiceCard key={service.id} service={service} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// // ✅ Separate Card Component
// const ServiceCard = ({ service }) => {
//     const [plan, setPlan] = useState("Monthly");
//     const [type, setType] = useState("Private");

//     const getPrice = () => {
//         let price = service.price;
//         // Shared = 20% discount
//         if (type === "Shared") price *= 0.8;
//         // Yearly = 10 months price (2 months discount)
//         if (plan === "Yearly") price *= 10;
//         return Math.round(price);
//     };

//     return (
//         <div className="modern-service-card">
//             <div className="card-top">
//                 <img src={service.img} alt={service.name} />
//             </div>

//             <div className="card-content">
//                 <div className="card-header">
//                     <h3>{service.name}</h3>
//                     <div className="price-tags">
//                         <span className="price">Rs: {getPrice()}</span>

//                         <div className="tag-group">
//                             <span
//                                 className={`tag ${plan === "Monthly" ? "active" : ""}`}
//                                 onClick={() => setPlan("Monthly")}
//                             >
//                                 Monthly
//                             </span>
//                             <span
//                                 className={`tag ${plan === "Yearly" ? "active" : ""}`}
//                                 onClick={() => setPlan("Yearly")}
//                             >
//                                 Yearly
//                             </span>

//                             <span
//                                 className={`tag ${type === "Private" ? "active" : ""}`}
//                                 onClick={() => setType("Private")}
//                             >
//                                 Private
//                             </span>
//                             <span
//                                 className={`tag ${type === "Shared" ? "active" : ""}`}
//                                 onClick={() => setType("Shared")}
//                             >
//                                 Shared
//                             </span>
//                         </div>
//                     </div>
//                 </div>

//                 <p className="desc">{service.desc}</p>

//                 <a href={`/services/${service.id}`} className="more-detail">
//                     More Detail →
//                 </a>

//                 <div className="buy-center">
//                     <button className="buy-now">Buy Now</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Services;

import React, { useState, useEffect } from "react";
import "../styles/Services.css";
import api from "../api/api"; // ✅ Import our axios instance

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const categories = ["All", "Entertainment", "AI Tools", "Education", "Social Media"];

    // ✅ Fetch products from backend
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await api.get("/products");
                setServices(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to load services. Please try again later.");
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    // ✅ Filter by category
    const filteredServices =
        selectedCategory === "All"
            ? services
            : services.filter((s) => s.category === selectedCategory);

    if (loading) {
        return (
            <div className="services-page">
                <h2 style={{ textAlign: "center", color: "#135bec" }}>Loading services...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="services-page">
                <h2 style={{ textAlign: "center", color: "red" }}>{error}</h2>
            </div>
        );
    }

    return (
        <div className="services-page">
            <header className="services-header">
                <h1>Our Services</h1>
                <p>
                    Explore our wide range of digital subscriptions — from entertainment to
                    AI tools, education, and social media.
                </p>
            </header>

            {/* Category Filter */}
            <div className="filter-bar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="service-grid">
                {filteredServices.length === 0 ? (
                    <p style={{ textAlign: "center", color: "#666" }}>No products found.</p>
                ) : (
                    filteredServices.map((service) => (
                        <ServiceCard key={service._id} service={service} />
                    ))
                )}
            </div>
        </div>
    );
};

// ✅ Card Component (same design)
const ServiceCard = ({ service }) => {
    const [plan, setPlan] = useState("Monthly");
    const [type, setType] = useState("Private");

    const getPrice = () => {
        let price = service.price;
        if (type === "Shared") price *= 0.8;
        if (plan === "Yearly") price *= 10;
        return Math.round(price);
    };

    return (
        <div className="modern-service-card">
            <div className="card-top">
                <img src={service.imageUrl} alt={service.name} />
            </div>

            <div className="card-content">
                <div className="card-header">
                    <h3>{service.name}</h3>
                    <div className="price-tags">
                        <span className="price">Rs: {getPrice()}</span>

                        <div className="tag-group">
                            <span
                                className={`tag ${plan === "Monthly" ? "active" : ""}`}
                                onClick={() => setPlan("Monthly")}
                            >
                                Monthly
                            </span>
                            <span
                                className={`tag ${plan === "Yearly" ? "active" : ""}`}
                                onClick={() => setPlan("Yearly")}
                            >
                                Yearly
                            </span>

                            <span
                                className={`tag ${type === "Private" ? "active" : ""}`}
                                onClick={() => setType("Private")}
                            >
                                Private
                            </span>
                            <span
                                className={`tag ${type === "Shared" ? "active" : ""}`}
                                onClick={() => setType("Shared")}
                            >
                                Shared
                            </span>
                        </div>
                    </div>
                </div>

                <p className="desc">{service.description}</p>

                <a href={`/services/${service._id}`} className="more-detail">
                    More Detail →
                </a>

                <div className="buy-center">
                    <button className="buy-now">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
