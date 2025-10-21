import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Public Routes
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Services from "./components/Services";
// import ProductDetail from "./components/ProductDetail";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Auth from "./components/Auth";

import Header from "./components/user/Header";
import Footer from "./components/user/Footer";
import Home from "./components/user/Home";
import Services from "./components/user/Services";
import ProductDetail from "./components/user/ProductDetail";
import About from "./components/user/About";
import Contact from "./components/user/Contact";
import Auth from "./components/user/Auth";

// Admin Routes
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProductList from "./components/admin/ProductList";
import ProductForm from "./components/admin/ProductForm";
import RequireAdmin from "./components/admin/RequireAdmin";
import AdminContact from "./components/admin/AdminContact";


import { setAuthToken } from "./api/api";


function AppContent() {
  const location = useLocation();

  const hideFooter =
    location.pathname === "/login" || location.pathname === "/register";

  
  const token = localStorage.getItem("adminToken");
  if (token) setAuthToken(token);

  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <RequireAdmin>
                <AdminDashboard />
              </RequireAdmin>
            }
          />
          <Route
            path="/admin/products"
            element={
              <RequireAdmin>
                <ProductList />
              </RequireAdmin>
            }
          />
          <Route
            path="/admin/products/new"
            element={
              <RequireAdmin>
                <ProductForm />
              </RequireAdmin>
            }
          />
          <Route
            path="/admin/products/edit/:id"
            element={
              <RequireAdmin>
                <ProductForm />
              </RequireAdmin>
            }
          />
          <Route path="/admin/contact" element={<RequireAdmin><AdminContact /></RequireAdmin>} />

        </Routes>
      </main>

      {/* Hide footer on auth screens */}
      {!hideFooter && <Footer />}
    </>
  );
}




function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
