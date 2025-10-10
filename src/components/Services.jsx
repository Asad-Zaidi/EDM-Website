// import React, { useState } from "react";
// import "../styles/Services.css";

// // Import logos
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

//     const services = [
//         // 🎬 Entertainment
//         {
//             id: 1,
//             name: "Netflix",
//             category: "Entertainment",
//             price: "Rs: 1500",
//             img: netflixLogo,
//             desc: "Watch unlimited shows and movies with affordable shared plans.",
//             plans: ["Monthly", "Yearly"],
//             type: ["Private", "Shared"],
//         },
//         {
//             id: 2,
//             name: "Amazon Prime Video",
//             category: "Entertainment",
//             price: "Rs: 1200",
//             img: primeLogo,
//             desc: "Enjoy exclusive originals and the latest blockbusters anytime.",
//             plans: ["Monthly", "Yearly"],
//             type: ["Private", "Shared"],
//         },
//         {
//             id: 3,
//             name: "Adobe Creative Cloud",
//             category: "Entertainment",
//             price: "Rs: 3500",
//             img: adobeLogo,
//             desc: "Access Photoshop, Illustrator, and more for creative professionals.",
//             plans: ["Monthly", "Yearly"],
//             type: ["Private", "Shared"],
//         },
//         // 🤖 AI Tools
//         {
//             id: 4,
//             name: "ChatGPT Plus",
//             category: "AI Tools",
//             price: "Rs: 4500",
//             img: chatgptLogo,
//             desc: "Get advanced AI assistance for writing, coding, and brainstorming.",
//             plans: ["Monthly", "Yearly"],
//             type: ["Private", "Shared"],
//         },
//         {
//             id: 5,
//             name: "Midjourney",
//             category: "AI Tools",
//             price: "Rs: 4000",
//             img: midjourneyLogo,
//             desc: "Create stunning AI-generated images and artwork in minutes.",
//             plans: ["Monthly", "Yearly"],
//             type: ["Private", "Shared"],
//         },
//         // 🎓 Education
//         {
//             id: 6,
//             name: "Coursera",
//             category: "Education",
//             price: "Rs: 2500",
//             img: courseraLogo,
//             desc: "Access world-class online courses from top universities and companies.",
//             plans: ["Monthly", "Yearly"],
//             type: ["Private", "Shared"],
//         },
//         {
//             id: 7,
//             name: "Udemy",
//             category: "Education",
//             price: "Rs: 1999",
//             img: udemyLogo,
//             desc: "Learn new skills anytime, anywhere — thousands of affordable courses.",
//             plans: ["Monthly", "Yearly"],
//             type: ["Private", "Shared"],
//         },
//         // 💬 Social Media
//         {
//             id: 8,
//             name: "Facebook Ads",
//             category: "Social Media",
//             price: "Rs: 999",
//             img: facebookLogo,
//             desc: "Grow your business with targeted ad campaigns that convert.",
//             plans: ["Monthly", "Yearly"],
//             type: ["Private", "Shared"],
//         },
//         {
//             id: 9,
//             name: "Instagram Tools",
//             category: "Social Media",
//             price: "Rs: 899",
//             img: instagramLogo,
//             desc: "Enhance engagement with advanced analytics and automation.",
//             plans: ["Monthly", "Yearly"],
//             type: ["Private", "Shared"],
//         },
//         {
//             id: 10,
//             name: "X (Twitter) Tools",
//             category: "Social Media",
//             price: "Rs: 950",
//             img: twitterLogo,
//             desc: "Schedule tweets, track engagement, and grow your online presence.",
//             plans: ["Monthly", "Yearly"],
//             type: ["Private", "Shared"],
//         },
//     ];

//     const filteredServices =
//         selectedCategory === "All"
//             ? services
//             : services.filter((s) => s.category === selectedCategory);

//     return (
//         <div className="services-page">
//             <header className="services-header">
//                 <h1>Our Services</h1>
//                 <p>
//                     Explore our wide range of digital subscriptions — from entertainment and AI tools
//                     to education and social media.
//                 </p>
//             </header>

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

//             <div className="service-grid">
//                 {filteredServices.map((s) => (
//                     <div key={s.id} className="modern-service-card">
//                         <div className="card-top">
//                             <img src={s.img} alt={s.name} />
//                         </div>

//                         <div className="card-content">
//                             <div className="card-header">
//                                 <h3>{s.name}</h3>
//                                 <div className="price-tags">
//                                     <span className="price">{s.price}</span>
//                                     <div className="tag-group">
//                                         {s.plans.map((p, i) => (
//                                             <span key={i} className={`tag ${i === 0 ? "active" : ""}`}>{p}</span>
//                                         ))}
//                                         {s.type.map((t, i) => (
//                                             <span key={i} className={`tag ${i === 0 ? "active" : ""}`}>{t}</span>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>

//                             <p className="desc">{s.desc}</p>

//                             <a href={`/services/${s.id}`} className="more-detail">
//                                 More Detail →
//                             </a>

//                             <div className="buy-center">
//                                 <button className="buy-now">Buy Now</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;

import React, { useState } from "react";
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

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Entertainment", "AI Tools", "Education", "Social Media"];

    const baseServices = [
        { id: 1, name: "Netflix", category: "Entertainment", price: 1500, img: netflixLogo, desc: "Watch unlimited shows and movies with affordable shared plans." },
        { id: 2, name: "Prime Video", category: "Entertainment", price: 1200, img: primeLogo, desc: "Enjoy exclusive originals and the latest blockbusters anytime." },
        { id: 3, name: "Adobe Creative Cloud", category: "Entertainment", price: 2500, img: adobeLogo, desc: "Access Photoshop, Illustrator, and more for creative professionals." },
        { id: 4, name: "ChatGPT Plus", category: "AI Tools", price: 4500, img: chatgptLogo, desc: "Get advanced AI assistance for writing, coding, and brainstorming." },
        { id: 5, name: "Midjourney", category: "AI Tools", price: 4000, img: midjourneyLogo, desc: "Create stunning AI-generated images and artwork in minutes." },
        { id: 6, name: "Coursera", category: "Education", price: 999, img: courseraLogo, desc: "Access world-class online courses from top universities and companies." },
        { id: 7, name: "Udemy", category: "Education", price: 899, img: udemyLogo, desc: "Learn new skills anytime, anywhere — thousands of affordable courses." },
        { id: 8, name: "Facebook Ads", category: "Social Media", price: 1999, img: facebookLogo, desc: "Grow your business with targeted ad campaigns that convert." },
        { id: 9, name: "Instagram Tools", category: "Social Media", price: 1499, img: instagramLogo, desc: "Enhance engagement with advanced analytics and automation." },
        { id: 10, name: "X (Twitter) Tools", category: "Social Media", price: 1399, img: twitterLogo, desc: "Schedule tweets, track engagement, and grow your online presence." },
    ];

    const filteredServices =
        selectedCategory === "All"
            ? baseServices
            : baseServices.filter((s) => s.category === selectedCategory);

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
                {filteredServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
};

// ✅ Separate Card Component
const ServiceCard = ({ service }) => {
    const [plan, setPlan] = useState("Monthly");
    const [type, setType] = useState("Private");

    const getPrice = () => {
        let price = service.price;
        // Shared = 20% discount
        if (type === "Shared") price *= 0.8;
        // Yearly = 10 months price (2 months discount)
        if (plan === "Yearly") price *= 10;
        return Math.round(price);
    };

    return (
        <div className="modern-service-card">
            <div className="card-top">
                <img src={service.img} alt={service.name} />
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

                <p className="desc">{service.desc}</p>

                <a href={`/services/${service.id}`} className="more-detail">
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
