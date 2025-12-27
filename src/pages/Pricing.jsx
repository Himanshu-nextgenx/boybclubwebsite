import { Link } from 'react-router-dom';
import { CheckCircle, Music, Utensils, GlassWater } from 'lucide-react';
import './PageDefaults.css';
import './Pricing.css'; // Specific styles if needed

const Pricing = ({ isSection = false }) => {
    return (
        <div className={isSection ? "section-mode" : "page-container"} id="pricing">
            <div className="page-header">
                <h1 className="page-title">Packages</h1>
                <p className="page-subtitle">Simple. Transparent. Premium.</p>
            </div>

            <div className="container">

                <div className="pricing-card-highlight">
                    <div className="ribbon">BEST SELLER</div>
                    <h2>The Couple's Pass</h2>
                    <div className="price-tag">
                        <span className="currency">₹</span>
                        <span className="amount">3999</span>
                        <span className="unit">/ Couple</span>
                    </div>

                    <p className="package-desc">The ultimate all-inclusive experience for you and your partner.</p>

                    <div className="inclusions-grid">
                        <div className="inclusion-item">
                            <Utensils size={32} className="inc-icon" />
                            <h4>Unlimited Food</h4>
                            <p>Multi-cuisine buffet, Starters, Main Course</p>
                        </div>
                        <div className="inclusion-item">
                            <GlassWater size={32} className="inc-icon" />
                            <h4>Unlimited Mixers</h4>
                            <p>Soda, Soft Drinks, Ice, Water</p>
                        </div>
                        <div className="inclusion-item">
                            <Music size={32} className="inc-icon" />
                            <h4>Full Access</h4>
                            <p>DJ Night, Dance Floor, Lounge Seating</p>
                        </div>
                    </div>

                    <Link to="/book-tickets" className="btn btn-primary btn-large">Book This Package</Link>
                    <p className="terms-note">* Prices may vary on special events like New Year's Eve.</p>
                </div>

                <div className="content-section" style={{ marginTop: '80px' }}>
                    <h2 className="section-title" style={{ fontSize: '2.5rem' }}>What's On The Menu?</h2>

                    <div className="menu-categories">
                        <div className="menu-cat">
                            <h3>Starters</h3>
                            <ul>
                                <li>Paneer Tikka / Chilli Paneer</li>
                                <li>Chicken Tikka / Chilli Chicken</li>
                                <li>Crispy Corn & Veg Platter</li>
                                <li>Fish Orly (Seasonal)</li>
                            </ul>
                        </div>
                        <div className="menu-cat">
                            <h3>Main Course</h3>
                            <ul>
                                <li>Dal Makhani (Chef's Special)</li>
                                <li>Butter Chicken / Kadhai Chicken</li>
                                <li>Paneer Lababdar</li>
                                <li>Assorted Breads & Rice</li>
                            </ul>
                        </div>
                        <div className="menu-cat">
                            <h3>Comforts</h3>
                            <ul>
                                <li>Hakka Noodles</li>
                                <li>Manchurian Gravy</li>
                                <li>Green Salad & Raita</li>
                                <li>Gulab Jamun / Ice Cream</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Pricing;
