import { Link } from 'react-router-dom';
import { Facebook, Instagram, Music, MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo-container">
                            <img src="/assets/logo.png" alt="Repose Club" style={{ height: '60px', marginBottom: '15px' }} />
                            <h2 className="footer-logo">REPOSE</h2>
                        </div>
                        <p className="tagline">Cheers to 2026</p>
                        <p className="description">
                            Where Rewari brings its own bottle, its own people, and its own mood.
                            The ultimate premium nightlife experience.
                        </p>
                        <div className="socials">
                            <a href="https://www.instagram.com/reposebyob" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="https://wa.me/917833005300" target="_blank" rel="noreferrer" className="social-icon" aria-label="WhatsApp"><MessageCircle size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/byob-concept">BYOB Concept</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/pricing">Pricing & Packages</Link></li>
                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/book-tickets">Book Tickets</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                <MapPin className="icon" size={18} />
                                <a href="https://maps.app.goo.gl/6m7W67pnvwfqVC9bA" target="_blank" rel="noreferrer">
                                    Bawal Road, near New Sabzi Mandi, Rewari, Haryana
                                </a>
                            </li>
                            <li>
                                <Phone className="icon" size={18} />
                                <a href="tel:+917833005300">78-3300-5300</a> / <a href="tel:+917833007300">78-3300-7300</a>
                            </li>
                            <li>
                                <Clock className="icon" size={18} />
                                <span>6:00 PM – 1:00 AM (Mon–Sun)</span>
                            </li>
                            <li>
                                <Mail className="icon" size={18} />
                                <a href="mailto:hello@reposeclub.com">hello@reposeclub.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Repose BYOB Club. All rights reserved.</p>
                    <div className="legal-links">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
