import React, { useState } from 'react';
import { supabase } from "../lib/supabase";
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Journal.css';

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const MemoryPhoto = ({ imagePath, title }) => {

    if (!imagePath) return null;

    const { data } = supabase.storage
        .from("memory-images")
        .getPublicUrl(imagePath);

    return (
        <img
            src={data.publicUrl}
            alt={title}
            className="memory-photo"
        />
    );
};


const Journal = ({ onNavigate, memories }) => {
    const [selectedMonth, setSelectedMonth] = useState(null);

    const monthMemories = memories.filter(
        (memory) => memory.month === selectedMonth
    );

    return (
        <div className="journal-page">

            {/* Background Video */}
            <video
                className="journal-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/unseen_star_bg.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="journal-overlay"></div>

            {/* Page Content */}
            <div className="journal-content">

                <Header variant="journal" onNavigate={onNavigate} />

                <div className="journal-heading">
                    <h1>My Journal</h1>
                    <p>Twelve months, countless little memories.</p>
                </div>

                {selectedMonth ? (

                    <div className="selected-month">

                        <button
                            className="back-button"
                            onClick={() => setSelectedMonth(null)}
                        >
                            ← Back to Months
                        </button>

                        <h2>{selectedMonth}</h2>

                        {monthMemories.length === 0 ? (
                            <p>No memories here yet. Write your first letter ♡</p>
                        ) : (
                            <div className="memory-list">
                                {monthMemories.map((memory) => (
                                    <div className="memory-card" key={memory.id}>
                                        <h3>{memory.title}</h3>

                                        <MemoryPhoto
                                            imagePath={memory.image_path}
                                            title={memory.title}
                                        />

                                        <p>{memory.date}</p>

                                        <p className="memory-story">{memory.story}</p>

                                        {memory.feeling && (
                                            <p className="memory-feeling">{memory.feeling}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                ) : (

                    <div className="months-grid">
                        {months.map((month) => (
                            <div
                                className="month-card"
                                key={month}
                                onClick={() => setSelectedMonth(month)}
                            >
                                <div className="month-overlay">
                                    <h2>{month}</h2>
                                    <span>Explore memories →</span>
                                </div>
                            </div>
                        ))}
                    </div>

                )}

                <Footer />

            </div>
        </div>
    );
};

export default Journal;