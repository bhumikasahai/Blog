
import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Journal.css';

// Month names and their cover images in the public folder
const months = [
    { name: 'January', image: '/january.jpg' },
    { name: 'February', image: '/february.jpg' },
    { name: 'March', image: '/march.jpg' },
    { name: 'April', image: '/april.jpg' },
    { name: 'May', image: '/may.jpg' },
    { name: 'June', image: '/june.jpg' },
    { name: 'July', image: '/july.jpg' },
    { name: 'August', image: '/august.jpg' },
    { name: 'September', image: '/september.jpg' },
    { name: 'October', image: '/october.jpg' },
    { name: 'November', image: '/november.jpg' },
    { name: 'December', image: '/december.jpg' }
];

// Display an uploaded memory image from Supabase Storage
const MemoryPhoto = ({ imagePath, title }) => {
    if (!imagePath) return null;

    const { data } = supabase.storage
        .from('memory-images')
        .getPublicUrl(imagePath);

    return (
        <img
            src={data.publicUrl}
            alt={title || 'Memory photograph'}
            className="memory-photo"
            loading="lazy"
        />
    );
};

const Journal = ({ onNavigate, memories = [] }) => {
    const [selectedMonth, setSelectedMonth] = useState(null);

    // Get memories belonging to the selected month
    const monthMemories = memories
        .filter((memory) => memory.month === selectedMonth)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="journal-page">

            {/* Background video */}
            <video
                className="journal-video"
                autoPlay
                loop
                muted
                playsInline
                aria-hidden="true"
            >
                <source
                    src="/unseen_star_bg.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Dark overlay */}
            <div className="journal-overlay"></div>

            {/* Page content */}
            <div className="journal-content">

                <Header
                    variant="journal"
                    onNavigate={onNavigate}
                />

                {/* Page heading */}
                <div className="journal-heading">
                    <h1>My Journal</h1>
                    <p>Twelve months, countless little memories.</p>
                </div>

                {selectedMonth ? (
                    /* Selected month and its memories */
                    <section className="selected-month">

                        <button
                            type="button"
                            className="back-button"
                            onClick={() => setSelectedMonth(null)}
                        >
                            ← Back to Months
                        </button>

                        <h2>{selectedMonth}</h2>

                        {monthMemories.length === 0 ? (
                            <div className="empty-month">
                                <p>No memories here yet.</p>
                                <p>Write your first letter ♡</p>
                            </div>
                        ) : (
                            <div className="memory-list">
                                {monthMemories.map((memory) => (
                                    <article
                                        className="memory-card"
                                        key={memory.id}
                                    >
                                        <h3>{memory.title}</h3>

                                        <MemoryPhoto
                                            imagePath={memory.image_path}
                                            title={memory.title}
                                        />

                                        <p className="memory-date">
                                            {memory.date}
                                        </p>

                                        <p className="memory-story">
                                            {memory.story}
                                        </p>

                                        {memory.feeling && (
                                            <p className="memory-feeling">
                                                {memory.feeling}
                                            </p>
                                        )}
                                    </article>
                                ))}
                            </div>
                        )}
                    </section>
                ) : (
                    /* Twelve month cards */
                    <section
                        className="months-grid"
                        aria-label="Journal months"
                    >
                        {months.map((month) => (
                            <button
                                type="button"
                                className="month-card"
                                key={month.name}
                                onClick={() =>
                                    setSelectedMonth(month.name)
                                }
                                style={{
                                    backgroundImage: `url("${month.image}")`
                                }}
                                aria-label={`Explore ${month.name} memories`}
                            >
                                <span className="month-overlay">
                                    <span className="month-name">
                                        {month.name}
                                    </span>

                                    <span className="month-explore">
                                        Explore memories →
                                    </span>
                                </span>
                            </button>
                        ))}
                    </section>
                )}

                <Footer />
            </div>
        </div>
    );
};

export default Journal;
