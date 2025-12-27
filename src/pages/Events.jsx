import { Calendar, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import './PageDefaults.css';

const Events = ({ isSection = false }) => {
    return (
        <div className={isSection ? "section-mode" : "page-container"} id="events">
            <div className="page-header">
                <h1 className="page-title">Events</h1>
                <p className="page-subtitle">Party Like There's No Tomorrow</p>
            </div>

            <div className="container">
                <div className="events-list" style={{ display: 'grid', gap: '40px' }}>

                    <div className="event-card" style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: '20px', borderLeft: '4px solid var(--accent)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                            <div>
                                <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '2rem' }}>New Year's Eve Bash</h2>
                                <div style={{ display: 'flex', gap: '20px', margin: '15px 0', color: '#ccc' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Calendar size={18} /> Dec 31, 2025</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Music size={18} /> DJ Night</span>
                                </div>
                                <p style={{ color: '#aaa', maxWidth: '600px' }}>
                                    Welcome 2026 with the biggest party in Rewari. Unlimited food, drinks, and non-stop music until 4 AM.
                                </p>
                            </div>
                            <div style={{ alignSelf: 'center' }}>
                                <Link to="/book-tickets" className="btn btn-primary">Book Now</Link>
                            </div>
                        </div>
                    </div>

                    <div className="event-card" style={{ background: 'var(--bg-card)', padding: '30px', borderRadius: '20px', borderLeft: '4px solid var(--primary)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
                            <div>
                                <h2 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '2rem' }}>Bollywood Friday</h2>
                                <div style={{ display: 'flex', gap: '20px', margin: '15px 0', color: '#ccc' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Calendar size={18} /> Every Friday</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Music size={18} /> Desi Beats</span>
                                </div>
                                <p style={{ color: '#aaa', maxWidth: '600px' }}>
                                    Kickstart your weekend with the best Bollywood, Punjabi, and Retro mixes.
                                </p>
                            </div>
                            <div style={{ alignSelf: 'center' }}>
                                <Link to="/book-tickets" className="btn btn-primary">Book Now</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Events;
