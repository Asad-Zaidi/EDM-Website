import React, { useEffect, useState } from "react";
import api from "../../api/api";
import "./AdminContact.css";

function AdminContact() {
    const [form, setForm] = useState({
        companyName: "",
        address: "",
        email: "",
        phone: "",
        message: "",
        facebook: "",
        instagram: "",
        twitter: "",
        mapEmbedUrl: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchContact();
    }, []);

    const fetchContact = async () => {
        try {
            const res = await api.get("/contact");
            setForm(res.data);
            setLoading(false);
        } catch {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put("/contact", form);
            alert("Contact information updated successfully!");
        } catch (err) {
            alert("Failed to update contact information");
        }
    };

    if (loading) return <h2>Loading...</h2>;

    return (
        <div className="admin-contact">
            <h1>Manage Contact Page</h1>
            <form onSubmit={handleSubmit} className="contact-form-admin">
                <label>Company Name</label>
                <input name="companyName" value={form.companyName} onChange={handleChange} required />

                <label>Address</label>
                <input name="address" value={form.address} onChange={handleChange} required />

                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required />

                <label>Phone</label>
                <input name="phone" value={form.phone} onChange={handleChange} required />

                <label>Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} />

                <label>Facebook Link</label>
                <input name="facebook" value={form.facebook} onChange={handleChange} />

                <label>Instagram Link</label>
                <input name="instagram" value={form.instagram} onChange={handleChange} />

                <label>Twitter Link</label>
                <input name="twitter" value={form.twitter} onChange={handleChange} />

                <label>Google Map Embed URL</label>
                <textarea name="mapEmbedUrl" value={form.mapEmbedUrl} onChange={handleChange} />

                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default AdminContact;
