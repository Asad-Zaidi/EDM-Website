// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import Services from "./components/Services";
// import ProductDetail from "./components/ProductDetail";

// import About from "./components/About";
// import Contact from "./components/Contact";
// import Auth from "./components/Auth";

// function AppContent() {
//   const location = useLocation();
//   const hideFooter = location.pathname === "/login" || location.pathname === "/register";

//   return (
//     <>
//       <Header />
//       <main style={{ minHeight: "80vh" }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/services/:id" element={<ProductDetail />} />


//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Auth />} />
//           <Route path="/register" element={<Auth />} />
//         </Routes>
//       </main>
//       {!hideFooter && <Footer />}
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// export default App;

// src/App.js
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import ProductDetail from "./components/ProductDetail";
import About from "./components/About";
import Contact from "./components/Contact";
import Auth from "./components/Auth";

// Admin Imports
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProductList from "./components/admin/ProductList";
import ProductForm from "./components/admin/ProductForm";
import RequireAdmin from "./components/admin/RequireAdmin";

// API Helper
import { setAuthToken } from "./api/api";

// -----------------------------
// Component: AppContent
// -----------------------------
function AppContent() {
  const location = useLocation();

  // Hide footer only on auth pages
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/register";

  // Automatically set token for admin routes
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
        </Routes>
      </main>

      {/* Hide footer on auth screens */}
      {!hideFooter && <Footer />}
    </>
  );
}

// -----------------------------
// Root Component
// -----------------------------
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
