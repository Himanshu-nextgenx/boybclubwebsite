import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    {/* Use standard img tag since we copied it to public/assets */}
                    <img src="/assets/logo.png" alt="Repose BYOB" className="logo-img" />
                    <span className="logo-text">REPOSE <span className="logo-sub">BYOB CLUB</span></span>
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/byob-concept">BYOB Concept</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <div className="nav-actions">
                    <Link to="/login" className="icon-link"><User size={24} /></Link>
                    <Link to="/book-tickets" className="btn btn-primary nav-btn">
                        <span className="btn-text-desktop">Book Tickets</span>
                        <span className="btn-text-mobile">Book</span>
                    </Link>

                    <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                <ul className="mobile-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/byob-concept">BYOB Concept</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/book-tickets" className="btn btn-primary mobile-btn">Book Now</Link></li>
                    <li><Link to="/login">Login / Sign Up</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
