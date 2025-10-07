// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi"; // icons from react-icons
// import "../styles/Header.css";
// import logo from "../assets/logo.png";

// function Header() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => setMenuOpen(!menuOpen);
//     const closeMenu = () => setMenuOpen(false);

//     return (
//         <header className="header">
//             {/* Left: Logo */}
//             <div className="header-left">
//                 <NavLink to="/" onClick={closeMenu}>
//                     <img src={logo} alt="Service Hub Logo" className="logo-img" />
//                 </NavLink>
//             </div>

//             {/* Center: Nav Links */}
//             <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
//                 <NavLink to="/" end onClick={closeMenu}>
//                     Home
//                 </NavLink>
//                 <NavLink to="/services" onClick={closeMenu}>
//                     Services
//                 </NavLink>
//                 <NavLink to="/about" onClick={closeMenu}>
//                     About
//                 </NavLink>
//                 <NavLink to="/contact" onClick={closeMenu}>
//                     Contact
//                 </NavLink>

//                 {/* Buttons in mobile menu */}
//                 <div className="mobile-buttons">
//                     <NavLink to="/login" onClick={closeMenu}>
//                         <button className="btn-login">Login</button>
//                     </NavLink>
//                     <NavLink to="/register" onClick={closeMenu}>
//                         <button className="btn-start">Get Started</button>
//                     </NavLink>
//                 </div>
//             </nav>

//             {/* Right: Buttons (Desktop Only) */}
//             <div className="header-right">
//                 <NavLink to="/login" className="nav-btn">
//                     <button className="btn-login">Login</button>
//                 </NavLink>
//                 <NavLink to="/register" className="nav-btn">
//                     <button className="btn-start">Get Started</button>
//                 </NavLink>
//             </div>

//             {/* Hamburger Icon */}
//             <div className="menu-toggle" onClick={toggleMenu}>
//                 {menuOpen ? (
//                     <FiX className="menu-icon" />
//                 ) : (
//                     <FiMenu className="menu-icon" />
//                 )}
//             </div>
//         </header>
//     );
// }

// export default Header;
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/Header.css";
import logo from "../assets/logo.png";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("menu-open");
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.classList.remove("menu-open");
    };


    // 🧠 Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="header">
            {/* Left: Logo */}
            <div className="header-left">
                <NavLink to="/" onClick={closeMenu}>
                    <img src={logo} alt="Service Hub Logo" className="logo-img" />
                </NavLink>
            </div>

            {/* Center: Nav Links */}
            <nav
                ref={menuRef}
                className={`nav-links ${menuOpen ? "open" : ""}`}
            >
                <NavLink to="/" end onClick={closeMenu}>
                    Home
                </NavLink>
                <NavLink to="/services" onClick={closeMenu}>
                    Services
                </NavLink>
                <NavLink to="/about" onClick={closeMenu}>
                    About
                </NavLink>
                <NavLink to="/contact" onClick={closeMenu}>
                    Contact
                </NavLink>

                {/* Buttons in Mobile Menu */}
                <div className="mobile-buttons">
                    <NavLink to="/login" onClick={closeMenu}>
                        <button className="btn-login">Login</button>
                    </NavLink>
                    <NavLink to="/register" onClick={closeMenu}>
                        <button className="btn-start">Get Started</button>
                    </NavLink>
                </div>
            </nav>

            {/* Right Buttons (Desktop) */}
            <div className="header-right">
                <NavLink to="/login" className="nav-btn">
                    <button className="btn-login">Login</button>
                </NavLink>
                <NavLink to="/register" className="nav-btn">
                    <button className="btn-start">Get Started</button>
                </NavLink>
            </div>

            {/* Hamburger Icon */}
            <div className="menu-toggle" onClick={toggleMenu}>
                {menuOpen ? (
                    <FiX className="menu-icon" />
                ) : (
                    <FiMenu className="menu-icon" />
                )}
            </div>
        </header>
    );
}

export default Header;
