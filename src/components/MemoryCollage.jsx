import React from 'react';
import './MemoryCollage.css';

const MemoryCollage = () => {
    return (
        <section className="third-section">
            <div className="collage-container">
                <div className="collage-images">
                    <img src="/delhi_bg_fs.jpg" className="photo photo-1" alt="Memory 1" />
                    <img src="/delhi_bg_fs.jpg" className="photo photo-2" alt="Memory 2" />
                    <img src="/delhi_bg_fs.jpg" className="photo photo-3" alt="Memory 3" />
                    <img src="/delhi_bg_fs.jpg" className="photo photo-4" alt="Memory 4" />
                    <img src="/delhi_bg_fs.jpg" className="photo photo-5" alt="Memory 5" />
                    <img src="/delhi_bg_fs.jpg" className="photo photo-4" alt="Memory 4" />
                    <img src="/delhi_bg_fs.jpg" className="photo photo-5" alt="Memory 5" />
                    <img src="/delhi_bg_fs.jpg" className="photo photo-6" alt="Memory 6" />
                    <img src="/delhi_bg_fs.jpg" className="photo photo-7" alt="Memory 7" />
                </div>

                <div className="collage-text">
                    <h2>Collect moments, <br />not things❤️</h2>

                    <p>
                        Life moves quickly, and sometimes we forget to stop and
                        appreciate the little things. Take the pictures, laugh
                        with the people you love, explore places you've never
                        been, and collect moments that you'll want to remember.
                        <br />
                        Because one day, these little moments will become the
                        stories you cherish the most.
                    </p>
                </div>

                <div className="memory-quote">
                    <p>
                        We didn't realize we were making memories, we just knew we were having fun.
                    </p>
                </div>

            </div>
            
        </section>
    );
};

export default MemoryCollage;