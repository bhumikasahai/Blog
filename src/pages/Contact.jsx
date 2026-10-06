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

            {/* Background Video */}

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

            {/* Dark Overlay */}

            <div className="contact-overlay"></div>


            {/* Page Content */}

            <div className="contact-content">

                <Header onNavigate={onNavigate} />


                {/* Heading */}

                <section className="contact-heading">

                    <h1>Let's keep in touch.</h1>

                    <p>
                        Have something to say? Leave a little note.
                    </p>

                </section>


                {/* Contact Area */}

                <section className="contact-section">

                    {/* Left Side */}

                    <div className="contact-message">

                        <h2>A little space for your words.</h2>

                        <p>
                            Sometimes the smallest messages become
                            the nicest memories.
                        </p>

                        <p>
                            If you've wandered this far into
                            FrameMyDay, I'd love to hear from you.
                        </p>


                        <div className="contact-links">

                            <a href="mailto:yourmail@example.com">
                                Email
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Instagram
                            </a>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                        </div>

                    </div>


                    {/* Right Side - Form */}

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="contact-field">

                            <label>Your name</label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    setName(e.target.value)
                                }
                                required
                            />

                        </div>


                        <div className="contact-field">

                            <label>Your email</label>

                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                            />

                        </div>


                        <div className="contact-field">

                            <label>Your message</label>

                            <textarea
                                value={message}
                                onChange={(e) =>
                                    setMessage(e.target.value)
                                }
                                placeholder="Write something..."
                                required
                            />

                        </div>


                        <button
                            type="submit"
                            className="contact-submit"
                        >
                            Send a little note
                            <span>→</span>
                        </button>

                    </form>

                </section>


                {/* Bottom Quote */}

                <p className="contact-quote">
                    Until the next memory ♡
                </p>

            </div>


            <Footer />

        </div>
    );
};

export default Contact;