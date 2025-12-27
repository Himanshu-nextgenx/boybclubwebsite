import { GlassWater, CheckCircle, AlertTriangle } from 'lucide-react';
import './PageDefaults.css';

const ByobConcept = ({ isSection = false }) => {
    return (
        <div className={isSection ? "section-mode" : "page-container"} id="byob-concept">
            <div className="page-header">
                <h1 className="page-title">The BYOB Concept</h1>
                <p className="page-subtitle">Bring Your Own Bottle. We Do The Rest.</p>
            </div>

            <div className="container">
                <div className="content-section">

                    <div className="text-block">
                        <h2>How It Works</h2>
                        <p className="lead">
                            At Repose, we give you the freedom to drink what you love without the heavy markup of traditional clubs.
                        </p>
                        <p>
                            You bring your preferred alcohol (sealed bottles only, with valid invoice), and we provide the perfect setting,
                            unlimited mixers (soda, soft drinks, water), ice, and glassware. Combined with our unlimited food buffet,
                            it's the most value-for-money premium nightlife experience in Rewari.
                        </p>
                    </div>

                    <div className="grid-features">
                        <div className="feature-card">
                            <GlassWater className="icon-gold" size={40} />
                            <h3>You Bring</h3>
                            <ul className="styled-list">
                                <li><CheckCircle size={16} className="check-icon" /> Your favorite alcohol bottles</li>
                                <li><CheckCircle size={16} className="check-icon" /> Valid Govt ID Proof (21+)</li>
                                <li><CheckCircle size={16} className="check-icon" /> Alcohol purchase invoice (recommended)</li>
                            </ul>
                        </div>
                        <div className="feature-card" style={{ borderColor: 'var(--primary)' }}>
                            <GlassWater className="icon-gold" size={40} />
                            <h3>We Provide</h3>
                            <ul className="styled-list">
                                <li><CheckCircle size={16} className="check-icon" /> Unlimited Mixers (Soda, Water, Soft Drinks)</li>
                                <li><CheckCircle size={16} className="check-icon" /> Ice Buckets & Glassware</li>
                                <li><CheckCircle size={16} className="check-icon" /> Unlimited Multi-Cuisine Food</li>
                                <li><CheckCircle size={16} className="check-icon" /> Waiter Service</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rules-section" style={{ marginTop: '40px' }}>
                        <h2 className="section-title" style={{ fontSize: '2rem' }}>Safety & Rules</h2>
                        <div className="feature-card" style={{ border: '1px solid var(--accent)' }}>
                            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '20px' }}>
                                <AlertTriangle color="var(--accent)" size={32} />
                                <h3 style={{ margin: 0, color: 'var(--accent)' }}>Important Guidelines</h3>
                            </div>
                            <ul className="styled-list">
                                <li><CheckCircle size={16} className="check-icon" /> <strong>21+ Entry Only:</strong> Valid physical ID is mandatory for all guests.</li>
                                <li><CheckCircle size={16} className="check-icon" /> <strong>Sealed Bottles:</strong> Open bottles may not be permitted for safety reasons.</li>
                                <li><CheckCircle size={16} className="check-icon" /> <strong>Behavior:</strong> Management reserves the right to deny entry or remove guests for disrespectful behavior.</li>
                                <li><CheckCircle size={16} className="check-icon" /> <strong>No Illegal Substances:</strong> Zero tolerance policy.</li>
                                <li><CheckCircle size={16} className="check-icon" /> <strong>Dress Code:</strong> Smart casuals recommended.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ByobConcept;
