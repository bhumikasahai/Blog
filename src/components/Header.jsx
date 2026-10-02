import React from 'react';
import './Header.css';

const Header = ({ variant = "default", onNavigate }) => {
    return (
        <header className={`site-header ${variant === "journal" ? "journal-header" : ""}`}>
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
                <a href="/" onClick={(e) => {
                    e.preventDefault();
                    onNavigate("home");
                }}>
                    Home
                </a>

                <a href="/journal" onClick={(e) => {
                    e.preventDefault();
                    onNavigate("journal");
                }}>
                    Journal
                </a>

                <a href="/unsent-letter" onClick={(e) => {
                    e.preventDefault();
                    onNavigate("unsent-letter");
                }}>
                    Unsent Letter
                </a>

                <a href="/contact" onClick={(e) => {
                    e.preventDefault();
                    onNavigate("contact");
                }}>
                    Contact
                </a>
            </nav>
        </header>
    );
};

export default Header;