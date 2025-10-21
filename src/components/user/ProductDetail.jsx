import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(
                    `https://edm-website-backend-production.up.railway.app/api/products/${id}`
                );
                setProduct(res.data);
            } catch (err) {
                console.error("Failed to fetch product:", err);
                setError("Product not found");
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;
    if (error) return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

    return (
        <div className="product-detail" style={{ textAlign: "center", padding: "40px" }}>
            <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: "250px", borderRadius: "10px" }}
            />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3 style={{ color: "#135bec" }}>Price: Rs {product.priceMonthly}</h3>
            <p>Category: {product.category}</p>
        </div>
    );
};

export default ProductDetail;
