import { Star, Shield, Users, Heart } from 'lucide-react';
import './PageDefaults.css';

const About = ({ isSection = false }) => {
    return (
        <div className={isSection ? "section-mode" : "page-container"} id="about">
            <div className="page-header">
                <h1 className="page-title">About Repose</h1>
                <p className="page-subtitle">Redefining Nightlife in Rewari</p>
            </div>

            <div className="container">
                <div className="content-section">
                    <div className="text-block">
                        <h2>Who We Are</h2>
                        <p className="lead">
                            Repose BYOB Club is not just a club, it’s a premium nightlife experience designed for Rewari’s modern crowd.
                        </p>
                        <p>
                            Located on Bawal Road, near New Sabzi Mandi, we bring a fresh concept to the city:
                            <strong> Where Rewari brings its own bottle, its own people, and its own mood.</strong>
                        </p>
                        <p>
                            We cater exclusively to couples, working professionals, and the young crowd (21+) who appreciate
                            class, safety, and a premium party environment. Whether you are from Rewari, Bawal, Dharuhera, or Gurugram,
                            Repose is your destination for memories.
                        </p>
                    </div>

                    <div className="grid-features">
                        <div className="feature-card">
                            <Star className="icon-gold" size={40} />
                            <h3>Premium Ambience</h3>
                            <p>Warm lighting, neon accents, and Instagrammable corners designed for the elite property lover.</p>
                        </div>
                        <div className="feature-card">
                            <Shield className="icon-gold" size={40} />
                            <h3>Safe & Secure</h3>
                            <p>A couple-friendly environment with 21+ entry restrictions and professional security.</p>
                        </div>
                        <div className="feature-card">
                            <Users className="icon-gold" size={40} />
                            <h3>The Crowd</h3>
                            <p>Curated for working professionals and families. Good vibes only.</p>
                        </div>
                        <div className="feature-card">
                            <Heart className="icon-gold" size={40} />
                            <h3>Comfort First</h3>
                            <p>Premium lounge seating, proper ventilation, and clean classy interiors.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;
