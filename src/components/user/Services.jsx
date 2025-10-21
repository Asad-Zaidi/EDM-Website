import React, { useState, useEffect } from "react";
import "../styles/Services.css";
import api from "../../api/api"; // ✅ Import our axios instance

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
        let price = plan === "Yearly" ? service.priceYearly : service.priceMonthly;
        if (type === "Shared") price *= 0.8;
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
