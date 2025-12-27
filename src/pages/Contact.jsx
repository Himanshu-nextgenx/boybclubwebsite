import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook, MessageCircle, PhoneCall } from 'lucide-react';
import './PageDefaults.css';
import './Contact.css';

const Contact = ({ isSection = false }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className={`contact-wrapper ${isSection ? "section-mode" : "page-container"}`} id="contact">
            {/* Party Background Elements */}
            <div className="party-bg">
                <div className="floating-orb orb-1"></div>
                <div className="floating-orb orb-2"></div>
                <div className="floating-orb orb-3"></div>
                <div className="floating-orb orb-4"></div>
            </div>

            {/* Custom Cursor Glow */}
            <div
                className="cursor-glow"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`
                }}
            ></div>

            <div className="page-header relative-z">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-subtitle">Get In Touch & Reserve Your Spot</p>
            </div>

            <div className="container relative-z">
                <div className="contact-grid">

                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-card glass-effect">
                            <h2>Visit Us</h2>
                            <div className="info-row">
                                <MapPin className="icon-gold" size={24} />
                                <div>
                                    <h3>Address</h3>
                                    <p>Bawal Road, near New Sabzi Mandi,<br /> Rewari, Haryana</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <Clock className="icon-gold" size={24} />
                                <div>
                                    <h3>Timings</h3>
                                    <p>6:00 PM – 1:00 AM (Mon–Sun)</p>
                                    <p className="sub-text">Extended hours on weekends</p>
                                </div>
                            </div>
                        </div>

                        <div className="info-card glass-effect">
                            <h2>Speak to Us</h2>
                            <div className="info-row">
                                <Phone className="icon-gold" size={24} />
                                <div>
                                    <h3>Booking & Enquiries</h3>
                                    <p className="highlight-text">78-3300-5300</p>
                                    <p className="highlight-text">78-3300-7300</p>
                                </div>
                            </div>
                            <div className="info-row">
                                <Mail className="icon-gold" size={24} />
                                <div>
                                    <h3>Email</h3>
                                    <p>hello@reposeclub.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-connect glass-effect">
                            <h3>Follow the Vibe</h3>
                            <div className="social-links">
                                <a href="https://www.instagram.com/reposebyob" target="_blank" rel="noreferrer" className="social-btn instagram">
                                    <Instagram size={20} /> Instagram
                                </a>
                                <a href="#" className="social-btn facebook">
                                    <Facebook size={20} /> Facebook
                                </a>
                                <a href="https://wa.me/917833005300" target="_blank" rel="noreferrer" className="social-btn whatsapp">
                                    <MessageCircle size={20} /> WhatsApp
                                </a>
                                <a href="tel:+917833005300" className="social-btn call">
                                    <PhoneCall size={20} /> Call Now
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="map-container glass-border" style={{ position: 'relative' }}>
                        {/* Google Map Embed */}
                        <iframe
                            title="Repose BYOB Location"
                            src="https://maps.google.com/maps?q=Repose%20BYOB%20Club%20Rewari&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '20px', filter: 'grayscale(1) contrast(1.2) invert(1)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* Get Directions Button Overlay */}
                        <a
                            href="https://maps.app.goo.gl/6m7W67pnvwfqVC9bA"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-primary"
                            style={{
                                position: 'absolute',
                                bottom: '20px',
                                right: '20px',
                                zIndex: 10,
                                padding: '10px 20px',
                                fontSize: '0.9rem',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.5)'
                            }}
                        >
                            Get Directions
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
