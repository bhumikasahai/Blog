import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './UnsentLetter.css';

const UnsentLetter = ({ onNavigate, onSaveMemory }) => {
    const [month, setMonth] = useState('');
    const [date, setDate] = useState('');
    const [year, setYear] = useState('');
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');
    const [feeling, setFeeling] = useState('');
    const [image, setImage] = useState(null);


    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        if (selectedDate) {
            setYear(selectedDate.split('-')[0]);
        } else {
            setYear('');
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const newMemory = {
            id: Date.now(),
            month,
            date,
            year,
            title,
            story,
            feeling,
            image
        };
        onSaveMemory(newMemory);
    

    };

    return (
        <div className="unsent-page">

            <Header onNavigate={onNavigate} />

            {/* Star Background Video */}

            <video
                className="unsent-video"
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

            <div className="unsent-overlay"></div>


            <div className="unsent-content">


                <div className="unsent-heading">
                    <h1>Unsent Letter</h1>
                    <p className="unsent-subtitle">
                        For the moments I never want to forget.
                    </p>
                </div>

                <hr className="unsent-divider" />

                <div className="letter-intro">
                    <h2>Dear today,</h2>

                    <p>
                        Some moments are too precious to leave unwritten.
                    </p>

                    <p>
                        Let this little space hold ours.
                    </p>
                </div>

                <form className="memory-form" onSubmit={handleSubmit}>
                    <h2>Let's make a memory!</h2>

                    <label>Choose your month</label>

                    <select value={month} onChange={(e) => setMonth(e.target.value)}>
                        <option value="">Select month</option>

                        {[
                            "January", "February", "March", "April",
                            "May", "June", "July", "August",
                            "September", "October", "November", "December"
                        ].map((m) => (
                            <option key={m} value={m}>
                                {m}
                            </option>
                        ))}
                    </select>

                    <label>When did it happen?</label>
                    <input type="date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />

                    <label>Give your memory a title</label>
                    <input type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <label>Your photograph</label>
                    <div className="upload-box">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            required
                        />
                        <p>Choose a photograph from your device</p>
                        {image && (
                            <span>{image.name}</span>
                        )}
                    </div>

                    <label>Write your story</label>
                    <textarea
                        placeholder="Write about what happened, how you felt, and the little details you want to remember..."
                        value={story}
                        onChange={(e) => setStory(e.target.value)}
                        required
                    />


                    <label>How did it feel? (Optional)</label>

                    <input
                        type="text"
                        placeholder="Happy, nostalgic, peaceful..."
                        value={feeling}
                        onChange={(e) => setFeeling(e.target.value)}
                    />

                    <button type="submit" className="save-memory">
                        Keep this letter ♡
                    </button>

                </form>

            </div>

            <Footer />

        </div >
    );
};


export default UnsentLetter;


