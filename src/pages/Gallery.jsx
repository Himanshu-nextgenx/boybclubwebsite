import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './PageDefaults.css';
import './Gallery.css';

const Gallery = ({ isSection = false }) => {
    const galleryItems = [
        { id: 1, src: "/gallery-crowd.png", title: "Electric Vibes" },
        { id: 2, src: "/gallery-cocktails.png", title: "Signature Drinks" },
        { id: 3, src: "/gallery-lounge.png", title: "VIP Lounge" },
        { id: 4, src: "/gallery-crowd.png", title: "Weekend Madness" },
        { id: 5, src: "/gallery-cocktails.png", title: "Exquisite Tastes" },
        { id: 6, src: "/gallery-lounge.png", title: "Luxury Comfort" },
        { id: 7, src: "/gallery-crowd.png", title: "Party All Night" },
    ];

    const [activeIndex, setActiveIndex] = useState(1);

    // Auto rotate
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % galleryItems.length);
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [galleryItems.length]);

    const handlePrev = () => {
        setActiveIndex((current) => (current - 1 + galleryItems.length) % galleryItems.length);
    };

    const handleNext = () => {
        setActiveIndex((current) => (current + 1) % galleryItems.length);
    };

    const getCardStyle = (index) => {
        if (index === activeIndex) return 'active';

        // Circular buffer logic to find relative position
        const length = galleryItems.length;
        const diff = (index - activeIndex + length) % length;

        if (diff === length - 1) return 'prev'; // Immediate left
        if (diff === length - 2) return 'prev-2'; // Far left
        if (diff === 1) return 'next'; // Immediate right
        if (diff === 2) return 'next-2'; // Far right

        return 'hidden'; // Hide others
    };

    return (
        <div className={isSection ? "section-mode" : "page-container"} id="gallery">
            <div className="page-header">
                <h1 className="page-title">Gallery</h1>
                <p className="page-subtitle">Glimpses of the Good Times</p>
            </div>

            <div className="gallery-container">
                <div className="gallery-carousel">
                    {galleryItems.map((item, index) => {
                        const positionClass = getCardStyle(index);
                        if (positionClass === 'hidden') return null;

                        return (
                            <div
                                key={item.id}
                                className={`gallery-item-card ${positionClass}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <img src={item.src} alt={item.title} />
                                <div className="gallery-caption">{item.title}</div>
                            </div>
                        );
                    })}
                </div>

                <div className="gallery-controls">
                    <button className="control-btn" onClick={handlePrev} aria-label="Previous">
                        <ArrowLeft size={24} />
                    </button>
                    <button className="control-btn" onClick={handleNext} aria-label="Next">
                        <ArrowRight size={24} />
                    </button>
                </div>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <p style={{ color: '#888', fontSize: '0.9rem' }}>Tap an image or use arrows to navigate</p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
