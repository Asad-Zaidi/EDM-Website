import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
    return (
        <div style={{ padding: 20 }}>
            <h1>Admin Dashboard</h1>
            <nav>
                <Link to="/admin/products">Products</Link> | <Link to="/admin/products/new">Add Product</Link>
            </nav>
        </div>
    );
}
