import React, { useState } from "react";
import "../styles/Auth.css";

function Auth() {
    const [isLogin, setIsLogin] = useState(true);

    // Toggle form mode
    const toggleMode = () => {
        setIsLogin(!isLogin);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`${isLogin ? "Login" : "Register"} form submitted`);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>{isLogin ? "Login to Service Hub" : "Create an Account"}</h2>

                <form className="auth-form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name" required />
                        </div>
                    )}

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Enter your password" required />
                    </div>

                    {!isLogin && (
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                    )}

                    <button type="submit" className="auth-btn">
                        {isLogin ? "Login" : "Register"}
                    </button>
                </form>

                <p className="toggle-text">
                    {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
                    <button type="button" className="toggle-btn" onClick={toggleMode}>
                        {isLogin ? "Register here" : "Login here"}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Auth;
