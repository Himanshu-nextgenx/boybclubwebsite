import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

// Import all pages as sections
import About from './About';
import ByobConcept from './ByobConcept';
import Events from './Events';
import Gallery from './Gallery';
import Pricing from './Pricing';
import Contact from './Contact';
// Booking might be better as a standalone page call-to-action or included at bottom
// For improved flow, we will keep Booking as a CTA but maybe not the full multi-step form on Home?
// User asked for "all pages", so let's include it but maybe simpler or just the button.
// Actually, let's include the form.

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content container">
                    <p className="hero-tagline animate-fade-in">CHEERS TO 2026</p>
                    <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        REPOSE <span className="text-outline">BYOB</span> CLUB
                    </h1>
                    <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.4s' }}>
                        A Premium Nightlife Experience in Rewari
                    </p>
                    <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <Link to="/book-tickets" className="btn btn-primary">Book Your Table</Link>
                        <a href="#gallery" className="btn btn-outline" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
                        }}>Explore Club</a>
                    </div>
                </div>
            </section>

            <div className="quote-block animate-fade-in">
                "Come for the vibe, stay for the music, and leave with memories."
            </div>

            {/* Stacked Pages */}
            <div className="reveal"><Gallery isSection={true} /></div>
            <div className="reveal"><ByobConcept isSection={true} /></div>
            <div className="reveal"><Events isSection={true} /></div>
            <div className="reveal"><Pricing isSection={true} /></div>
            <div className="reveal"><About isSection={true} /></div>
            <div className="reveal"><Contact isSection={true} /></div>

            {/* Stats/Info Section */}
            <section className="info-bar">
                <div className="container flex-center gap-stats reveal">
                    <div className="stat-item">
                        <h4>21+</h4>
                        <p>Entry Policy</p>
                    </div>
                    <div className="divider"></div>
                    <div className="stat-item">
                        <h4>6PM - 1AM</h4>
                        <p>Party Hours</p>
                    </div>
                    <div className="divider"></div>
                    <div className="stat-item">
                        <h4>Rewari</h4>
                        <p>Prime Location</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
