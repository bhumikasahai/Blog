import React from 'react';
import './Header.css';

const Header = ({
    variant = "default",
    onNavigate,
    onLogout,
    showLogin = false,
    showLogout = false
}) => {
    return (
        <header
            className={`site-header ${
                variant === "journal" ? "journal-header" : ""
            }`}
        >
            <div className="logo-container">

                <img
                    src="/bg_logo_fs.png"
                    alt="FrameMyDay logo"
                    className="logo-image"
                />

                <div className="logo-name">
                    FrameMyDay
                </div>

            </div>

            <nav>

                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        onNavigate("home");
                    }}
                >
                    Home
                </a>

                <a
                    href="/journal"
                    onClick={(e) => {
                        e.preventDefault();
                        onNavigate("journal");
                    }}
                >
                    Journal
                </a>

                <a
                    href="/unsent-letter"
                    onClick={(e) => {
                        e.preventDefault();
                        onNavigate("unsent-letter");
                    }}
                >
                    Unsent Letter
                </a>

                <a
                    href="/contact"
                    onClick={(e) => {
                        e.preventDefault();
                        onNavigate("contact");
                    }}
                >
                    Contact
                </a>

                {/* Login - only shown on Unsent Letter */}
                {showLogin && (
                    <button
                        className="login-btn"
                        onClick={() => onNavigate("login")}
                    >
                        Login
                    </button>
                )}

                {/* Logout - only shown on Unsent Letter when logged in */}
                {showLogout && onLogout && (
                    <button
                        className="logout-btn"
                        onClick={onLogout}
                    >
                        Logout
                    </button>
                )}

            </nav>
        </header>
    );
};

export default Header;