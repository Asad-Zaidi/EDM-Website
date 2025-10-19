
// import React, { useEffect, useState } from "react";
// import api from "../../api/api";
// import { useNavigate, useParams } from "react-router-dom";

// export default function ProductForm() {
//     const { id } = useParams();
//     const nav = useNavigate();
//     const [form, setForm] = useState({ name: "", priceMonthly: "", description: "", category: "" });
//     const [file, setFile] = useState(null);

//     useEffect(() => {
//         if (id) {

//             (async function load() {
//                 try {
//                     const res = await api.get(`/products/${id}`);
//                     setForm({
//                         name: res.data.name || "",
//                         priceMonthly: res.data.priceMonthly || "",
//                         description: res.data.description || "",
//                         category: res.data.category || "",
//                     });
//                 } catch (err) {
//                     console.error("Load failed", err);
//                 }
//             })();
//         }
//     }, [id]);

//     const submit = async (e) => {
//         e.preventDefault();
//         try {
//             const fd = new FormData();
//             fd.append("name", form.name);
//             fd.append("priceMonthly", form.priceMonthly);
//             fd.append("description", form.description);
//             fd.append("category", form.category);
//             if (file) fd.append("image", file);

//             if (id) {
//                 await api.put(`/products/${id}`, fd, { headers: { "Content-Type": "multipart/form-data" } });
//             } else {
//                 await api.post("/products", fd, { headers: { "Content-Type": "multipart/form-data" } });
//             }
//             nav("/admin/products");
//         } catch (err) {
//             console.error("Save failed", err);
//             alert("Save failed");
//         }
//     };

//     return (
//         <div style={{ padding: 20 }}>
//             <h2>{id ? "Edit" : "Add"} Product</h2>
//             <form onSubmit={submit} style={{ display: "grid", gap: 10, maxWidth: 600 }}>
//                 <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" required />
//                 <input value={form.priceMonthly} onChange={(e) => setForm({ ...form, priceMonthly: e.target.value })} placeholder="Monthly Price" required />
//                 <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Category" />
//                 <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Description" />
//                 <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
//                 <div style={{ display: "flex", gap: 8 }}>
//                     <button type="submit">Save</button>
//                     <button type="button" onClick={() => nav("/admin/products")}>Cancel</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/api";
import "./ProductForm.css";

const ProductForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isEditing = Boolean(id);

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        category: "",
        priceMonthly: "",
        priceYearly: "",
        priceShared: "",
        pricePrivate: "",
        image: null,
    });

    const [enableMonthly, setEnableMonthly] = useState(true);
    const [enableYearly, setEnableYearly] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);

    const categories = [
        "Entertainment",
        "AI Tools",
        "Education",
        "Social Media",
        "Productivity",
        "Other",
    ];

    // ✅ Fetch product if editing
    useEffect(() => {
        if (isEditing) {
            api.get(`/products/${id}`).then((res) => {
                const data = res.data;
                setFormData({
                    name: data.name,
                    description: data.description,
                    category: data.category,
                    priceMonthly: data.priceMonthly || "",
                    priceYearly: data.priceYearly || "",
                    priceShared: data.priceShared || "",
                    pricePrivate: data.pricePrivate || "",
                    image: null,
                });
                setEnableMonthly(Boolean(data.priceMonthly));
                setEnableYearly(Boolean(data.priceYearly));
                setImagePreview(data.imageUrl);
            });
        }
    }, [id, isEditing]);

    // ✅ Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // ✅ Handle image upload
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prev) => ({ ...prev, image: file }));
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => setImagePreview(ev.target.result);
            reader.readAsDataURL(file);
        }
    };

    // ✅ Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (value !== "" && value !== null) data.append(key, value);
            });

            if (!enableMonthly) data.delete("priceMonthly");
            if (!enableYearly) data.delete("priceYearly");

            if (isEditing) {
                await api.put(`/products/${id}`, data);
                alert("✅ Product updated successfully!");
            } else {
                await api.post("/products", data);
                alert("✅ Product added successfully!");
            }
            navigate("/admin/products");
        } catch (err) {
            console.error("Error saving product:", err);
            alert("❌ Error saving product!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-form-container">
            <h2>{isEditing ? "Edit Product" : "Add New Product"}</h2>
            <form className="product-form" onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        name="description"
                        rows="3"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} required>
                        <option value="">-- Select Category --</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="price-section">
                    <label>
                        <input
                            type="checkbox"
                            checked={enableMonthly}
                            onChange={() => setEnableMonthly(!enableMonthly)}
                        />{" "}
                        Enable Monthly Price
                    </label>
                    {enableMonthly && (
                        <input
                            type="number"
                            name="priceMonthly"
                            placeholder="Enter Monthly Price"
                            value={formData.priceMonthly}
                            onChange={handleChange}
                        />
                    )}

                    <label>
                        <input
                            type="checkbox"
                            checked={enableYearly}
                            onChange={() => setEnableYearly(!enableYearly)}
                        />{" "}
                        Enable Yearly Price
                    </label>
                    {enableYearly && (
                        <input
                            type="number"
                            name="priceYearly"
                            placeholder="Enter Yearly Price"
                            value={formData.priceYearly}
                            onChange={handleChange}
                        />
                    )}
                </div>

                <div className="form-group dual-prices">
                    <div>
                        <label>Shared Price</label>
                        <input
                            type="number"
                            name="priceShared"
                            placeholder="e.g. 999"
                            value={formData.priceShared}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Private Price</label>
                        <input
                            type="number"
                            name="pricePrivate"
                            placeholder="e.g. 1999"
                            value={formData.pricePrivate}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Product Image</label>
                    <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
                    {imagePreview && (
                        <div className="image-preview">
                            <img src={imagePreview} alt="Preview" />
                        </div>
                    )}
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? "Saving..." : isEditing ? "Update Product" : "Add Product"}
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
