import React from 'react';
import './JournalPreview.css';

const JournalPreview = () => {
    return (
        <section className="second-section">
            <div className="journal-preview-container">
                <h2>Journal Preview</h2>
                <p>Here's a glimpse of your latest journal entries.</p>

                <div className="journal-cards">
                    <div className="journal-card">
                        <img src="/delhi_bg_fs.jpg" alt="Delhi memory" />
                    </div>

                    <div className="journal-card">
                        <img src="/delhi_bg_fs.jpg" alt="Delhi memory" />
                    </div>

                    <div className="journal-card">
                        <img src="/delhi_bg_fs.jpg" alt="Delhi memory" />
                    </div>


                    <div className="journal-card">
                        <img src="/delhi_bg_fs.jpg" alt="Delhi memory" />
                    </div>
                </div>


                <div className="journal-guide">

                    <h2>Every month holds a story.</h2>

                    <p className="guide-description">
                        A little space to collect the moments that matter.
                    </p>

                    <div className="guide-grid">

                        <div className="guide-card">
                            <h3>01. Choose a Month 📆</h3>
                            <p>
                                Travel through your memories, one month at a time.
                            </p>
                        </div>

                        <div className="guide-card">
                            <h3>02. Add Photographs 📷</h3>
                            <p>
                                Keep the pictures that hold your favourite moments.
                            </p>
                        </div>

                        <div className="guide-card">
                            <h3>03. Write Your Story 📝</h3>
                            <p>
                                Add captions, feelings and little details behind each picture.
                            </p>
                        </div>

                        <div className="guide-card">
                            <h3>04. Keep It Forever 🕒</h3>
                            <p>
                                Build your own collection of memories to revisit anytime.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="explore-now">
                    <button className="explore-btn">
                        Explore Now
                        <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default JournalPreview;