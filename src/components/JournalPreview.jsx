
import React, { useEffect, useRef, useState } from 'react';
import './JournalPreview.css';

const journalCards = [
    {
        month: "January",
        caption: "A little beginning.",
        image: "/january.jpg"
    },
    {
        month: "February",
        caption: "Moments worth keeping.",
        image: "/february.jpg"
    },
    {
        month: "March",
        caption: "A day to remember.",
        image: "/march.jpg"
    },
    {
        month: "April",
        caption: "Little things, big memories.",
        image: "/april.jpg"
    },
    {
        month: "May",
        caption: "A memory in the making.",
        image: "/may.jpg"
    },
    {
        month: "June",
        caption: "Somewhere between then and now.",
        image: "/june.jpg"
    },
    {
        month: "July",
        caption: "A moment frozen in time.",
        image: "/july.jpg"
    },
    {
        month: "August",
        caption: "The days worth remembering.",
        image: "/august.jpg"
    },
    {
        month: "September",
        caption: "Another little story.",
        image: "/september.jpg"
    },
    {
        month: "October",
        caption: "A beautiful chapter.",
        image: "/october.jpg"
    }
];

const JournalPreview = ({ onNavigate }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(section);
                }
            },
            {
                threshold: 0.2
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="second-section"
            ref={sectionRef}
        >
            <div className="journal-preview-container">

                {/* JOURNAL PREVIEW HEADING */}

                <h2>Journal Preview</h2>

                <p>
                    Here's a glimpse of your latest journal entries.
                </p>


                {/* =========================
                    INFINITE MEMORY SLIDESHOW
                ========================= */}

                <div className="journal-slider">

                    <div
                        className={`journal-track ${
                            isVisible ? "slide-active" : ""
                        }`}
                    >

                        {/* First set of cards */}

                        <div className="journal-slide-set">

                            {journalCards.map((card) => (
                                <div
                                    className="journal-card"
                                    key={`first-${card.month}`}
                                >
                                    <img
                                        src={card.image}
                                        alt={`${card.month} memory`}
                                        loading="lazy"
                                    />

                                    <div className="journal-card-info">
                                        <h3>{card.month}</h3>
                                        <p>{card.caption}</p>
                                    </div>
                                </div>
                            ))}

                        </div>


                        {/* Duplicate set for seamless looping */}

                        <div
                            className="journal-slide-set"
                            aria-hidden="true"
                        >
                            {journalCards.map((card) => (
                                <div
                                    className="journal-card"
                                    key={`second-${card.month}`}
                                >
                                    <img
                                        src={card.image}
                                        alt=""
                                        loading="lazy"
                                    />

                                    <div className="journal-card-info">
                                        <h3>{card.month}</h3>
                                        <p>{card.caption}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>


                {/* =========================
                    JOURNAL GUIDE
                ========================= */}

                <div className="journal-guide">

                    <h2>Every month holds a story.</h2>

                    <p className="guide-description">
                        A little space to collect the moments that matter.
                    </p>

                    <div className="guide-grid">

                        <div className="guide-card">
                            <h3>01. Choose a Month 📆</h3>
                            <p>
                                Travel through your memories,
                                one month at a time.
                            </p>
                        </div>

                        <div className="guide-card">
                            <h3>02. Add Photographs 📷</h3>
                            <p>
                                Keep the pictures that hold
                                your favourite moments.
                            </p>
                        </div>

                        <div className="guide-card">
                            <h3>03. Write Your Story 📝</h3>
                            <p>
                                Add captions, feelings and little
                                details behind each picture.
                            </p>
                        </div>

                        <div className="guide-card">
                            <h3>04. Keep It Forever 🕒</h3>
                            <p>
                                Build your own collection of memories
                                to revisit anytime.
                            </p>
                        </div>

                    </div>

                </div>


                {/* =========================
                    EXPLORE JOURNAL
                ========================= */}

                <div className="explore-now">

                    <button
                        type="button"
                        className="explore-btn"
                        onClick={() => onNavigate("journal")}
                    >
                        Explore Now
                        <span>→</span>
                    </button>

                </div>

            </div>
        </section>
    );
};

export default JournalPreview;
