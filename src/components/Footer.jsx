import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h2>FrameMyDay</h2>

                <p>A little corner of memories, moments & stories.</p>
                <br />

                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/journal">Journal</a>
                    <a href="/unsent-letter">Unsent Letter</a>
                    <a href="/contact">Contact</a>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 FrameMyDay. All memories reserved.</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
