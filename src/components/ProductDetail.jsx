import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/ProductDetail.css";

// Import images
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

const ProductDetail = () => {
    const { id } = useParams();
    const productId = parseInt(id);

    const products = [
        { id: 1, name: "Netflix", category: "Entertainment", price: "$4.99 / month", img: netflixLogo, desc: "Enjoy unlimited movies, TV shows, and exclusive Netflix Originals with affordable shared plans. Stream in HD or 4K on multiple devices at once." },
        { id: 2, name: "Amazon Prime Video", category: "Entertainment", price: "$3.99 / month", img: primeLogo, desc: "Stream exclusive Amazon Originals, movies, and TV shows anytime, anywhere. Get ad-free access to thousands of titles." },
        { id: 3, name: "Adobe Creative Cloud", category: "Entertainment", price: "$7.99 / month", img: adobeLogo, desc: "Access industry-leading tools like Photoshop, Illustrator, and Premiere Pro — perfect for professionals and creatives." },
        { id: 4, name: "ChatGPT Plus", category: "AI Tools", price: "$6.99 / month", img: chatgptLogo, desc: "Unlock the advanced GPT-4 experience for faster, more accurate responses, ideal for work, study, and creative projects." },
        { id: 5, name: "Midjourney", category: "AI Tools", price: "$5.99 / month", img: midjourneyLogo, desc: "Create stunning AI-generated visuals in seconds. Explore your imagination through advanced text-to-image generation." },
        { id: 6, name: "Coursera", category: "Education", price: "$2.99 / month", img: courseraLogo, desc: "Learn from top universities and companies online. Earn certificates and gain skills to advance your career." },
        { id: 7, name: "Udemy", category: "Education", price: "$1.99 / month", img: udemyLogo, desc: "Explore thousands of online courses in tech, business, and lifestyle. Learn at your own pace from top instructors." },
        { id: 8, name: "Facebook Ads", category: "Social Media", price: "$3.49 / month", img: facebookLogo, desc: "Reach your audience and grow your business with precise ad targeting tools powered by Facebook’s marketing platform." },
        { id: 9, name: "Instagram Tools", category: "Social Media", price: "$2.49 / month", img: instagramLogo, desc: "Manage posts, schedule content, and track growth with smart automation for Instagram professionals." },
        { id: 10, name: "X (Twitter) Tools", category: "Social Media", price: "$2.99 / month", img: twitterLogo, desc: "Analyze trends, schedule posts, and grow your following using advanced Twitter management tools." },
    ];

    const product = products.find((p) => p.id === productId);

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product not found</h2>
                <Link to="/services" className="back-link">Go Back</Link>
            </div>
        );
    }

    // Find related (similar) products
    const relatedProducts = products.filter(
        (p) => p.category === product.category && p.id !== product.id
    );

    return (
        <div className="product-detail-page">
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <Link to="/">Home</Link> / <Link to="/services">Services</Link> / <span>{product.name}</span>
            </div>

            {/* Product Info Section */}
            <div className="product-container">
                <div className="product-image">
                    <img src={product.img} alt={product.name} />
                </div>

                <div className="product-info">
                    <h1>{product.name}</h1>
                    <p className="category">{product.category}</p>
                    <p className="description">{product.desc}</p>

                    <div className="price-section">
                        <h2>{product.price}</h2>
                        <button className="subscribe-btn">Subscribe Now</button>
                    </div>

                    <div className="extra-info">
                        <h3>Why choose this service?</h3>
                        <ul>
                            <li>✔ 100% genuine subscriptions from trusted vendors</li>
                            <li>✔ Affordable monthly and yearly plans</li>
                            <li>✔ Instant access after purchase</li>
                            <li>✔ 24/7 customer support</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ===== Similar Products Section ===== */}
            {relatedProducts.length > 0 && (
                <div className="similar-products">
                    <h2>Similar Products</h2>
                    <div className="similar-scroll">
                        {relatedProducts.map((rp) => (
                            <div key={rp.id} className="similar-card">
                                <img src={rp.img} alt={rp.name} />
                                <h3>{rp.name}</h3>
                                <p>{rp.price}</p>
                                <button onClick={() => (window.location.href = `/services/${rp.id}`)}>
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default ProductDetail;
