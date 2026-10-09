import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = ({ onNavigate }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            name,
            email,
            message
        });

        alert("Your little note has been sent ♡");

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-page">

            {/* =========================
                BACKGROUND VIDEO
            ========================= */}

            <video
                className="contact-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source
                    src="/unseen_star_bg.mp4"
                    type="video/mp4"
                />
            </video>


            {/* =========================
                DARK OVERLAY
            ========================= */}

            <div className="contact-overlay"></div>


            {/* =========================
                PAGE CONTENT
            ========================= */}

            <div className="contact-content">

                <Header onNavigate={onNavigate} />


                {/* =========================
                    HEADING
                ========================= */}

                <section className="contact-heading">

                    <h1>Let's keep in touch.</h1>

                    <p>
                        Have something to say? Leave a little note.
                    </p>

                </section>


                {/* =========================
                    CONTACT SECTION
                ========================= */}

                <section className="contact-section">


                    {/* =========================
                        LEFT SIDE
                    ========================= */}

                    <div className="contact-message">

                        <h2>
                            A little space for your words.
                        </h2>

                        <p>
                            Sometimes the smallest messages become
                            the nicest memories.
                        </p>

                        <p>
                            If you've wandered this far into
                            FrameMyDay, I'd love to hear from you.
                        </p>


                        {/* =========================
                            SOCIAL LINKS
                        ========================= */}

                        <div className="contact-links">

                            {/* EMAIL */}

                            <a
                                href="mailto:yourmail@example.com"
                                className="contact-link"
                            >
                                <img
                                    src="/email_logo.png"
                                    alt="Email"
                                    className="contact-logo"
                                />

                                <span>Email</span>
                            </a>


                            {/* INSTAGRAM */}

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link"
                            >
                                <img
                                    src="/insta_logo.png"
                                    alt="Instagram"
                                    className="contact-logo"
                                />

                                <span>Instagram</span>
                            </a>


                            {/* GITHUB */}

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="contact-link"
                            >
                                <img
                                    src="/github_logo.png"
                                    alt="GitHub"
                                    className="contact-logo"
                                />

                                <span>GitHub</span>
                            </a>

                        </div>

                    </div>


                    {/* =========================
                        RIGHT SIDE - FORM
                    ========================= */}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        {/* NAME */}

                        <div className="contact-field">

                            <label htmlFor="name">
                                Your name
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                required
                            />

                        </div>


                        {/* EMAIL */}

                        <div className="contact-field">

                            <label htmlFor="email">
                                Your email
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                            />

                        </div>


                        {/* MESSAGE */}

                        <div className="contact-field">

                            <label htmlFor="message">
                                Your message
                            </label>

                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }
                                placeholder="Write something..."
                                required
                            />

                        </div>


                        {/* SUBMIT BUTTON */}

                        <button
                            type="submit"
                            className="contact-submit"
                        >
                            Send a little note

                            <span>♡</span>

                        </button>

                    </form>

                </section>


                {/* =========================
                    BOTTOM QUOTE
                ========================= */}

                <p className="contact-quote">
                    Until the next memory ♡
                </p>

            </div>


            {/* =========================
                FOOTER
            ========================= */}

            <Footer />

        </div>
    );
};

export default Contact;