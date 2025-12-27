import { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate initial loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500); // 2.5 seconds load

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div className="preloader">
            <div className="loader-content">
                <div className="glass-container">
                    <div className="liquid"></div>
                </div>
                <div className="loader-text">
                    <span>R</span>
                    <span>E</span>
                    <span>P</span>
                    <span>O</span>
                    <span>S</span>
                    <span>E</span>
                </div>
                <p className="loading-sub">Pouring Your Experience...</p>
            </div>
        </div>
    );
};

export default Preloader;
