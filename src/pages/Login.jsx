import React, { useState } from "react";
import { supabase } from "../lib/supabase";

import "./Login.css";

const Login = ({ onNavigate }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setMessage("");

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                setMessage(error.message);
            } else {
                setMessage("Login successful!");

                setTimeout(() => {
                    onNavigate("unsent-letter");
                }, 500);
            }
        } catch (error) {
            setMessage("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-card">

                <h1 className="login-logo">
                    FrameMyDay
                </h1>

                <p className="login-subtitle">
                    Every picture holds a story.
                </p>

                <h2>
                    Welcome Back
                </h2>

                <p className="login-description">
                    Sign in to revisit your memories.
                </p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        disabled={isLoading}
                    >
                        {isLoading
                            ? "Signing in..."
                            : "Enter Your Journal →"}
                    </button>

                </form>

                {message && (
                    <p className="login-message">
                        {message}
                    </p>
                )}

            </div>
        </div>
    );
};

export default Login;