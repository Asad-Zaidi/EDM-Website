// src/components/admin/ProductForm.jsx
import React, { useEffect, useState } from "react";
import api from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductForm() {
    const { id } = useParams(); // if editing
    const nav = useNavigate();
    const [form, setForm] = useState({ name: "", priceMonthly: "", description: "", category: "" });
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (id) {
            // load product data
            (async function load() {
                try {
                    const res = await api.get(`/products/${id}`);
                    setForm({
                        name: res.data.name || "",
                        priceMonthly: res.data.priceMonthly || "",
                        description: res.data.description || "",
                        category: res.data.category || "",
                    });
                } catch (err) {
                    console.error("Load failed", err);
                }
            })();
        }
    }, [id]);

    const submit = async (e) => {
        e.preventDefault();
        try {
            const fd = new FormData();
            fd.append("name", form.name);
            fd.append("priceMonthly", form.priceMonthly);
            fd.append("description", form.description);
            fd.append("category", form.category);
            if (file) fd.append("image", file);

            if (id) {
                await api.put(`/products/${id}`, fd, { headers: { "Content-Type": "multipart/form-data" } });
            } else {
                await api.post("/products", fd, { headers: { "Content-Type": "multipart/form-data" } });
            }
            nav("/admin/products");
        } catch (err) {
            console.error("Save failed", err);
            alert("Save failed");
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>{id ? "Edit" : "Add"} Product</h2>
            <form onSubmit={submit} style={{ display: "grid", gap: 10, maxWidth: 600 }}>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" required />
                <input value={form.priceMonthly} onChange={(e) => setForm({ ...form, priceMonthly: e.target.value })} placeholder="Monthly Price" required />
                <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Category" />
                <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Description" />
                <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
                <div style={{ display: "flex", gap: 8 }}>
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => nav("/admin/products")}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
