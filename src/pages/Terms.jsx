import React, { useEffect } from 'react';
import './PageDefaults.css';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="page-title">Terms & Conditions</h1>
                <p className="page-subtitle">Standard Legal Agreement</p>
            </header>

            <div className="container">
                <div className="content-section">
                    <div className="text-block">
                        <p className="lead">
                            Welcome to Repose BYOB Club. Please read these terms and conditions carefully before using our services.
                        </p>

                        <h2>1. Introduction</h2>
                        <p>
                            By accessing or using the Repose BYOB Club website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.
                        </p>

                        <h2>2. Membership & Booking</h2>
                        <p>
                            We adhere to a strict BYOB (Bring Your Own Bottle) policy. Guests must comply with all local laws and regulations regarding alcohol consumption.
                        </p>
                        <ul className="styled-list">
                            <li><span className="check-icon">➝</span> All guests must be of legal drinking age (25+ in Delhi/NCR).</li>
                            <li><span className="check-icon">➝</span> Booking confirmation is subject to availability.</li>
                            <li><span className="check-icon">➝</span> We reserve the right to refuse entry to anyone.</li>
                        </ul>

                        <h2>3. User Responsibilities</h2>
                        <p>
                            You are responsible for your conduct while on our premises. Any damage to property or harassment of staff/guests will not be tolerated and may result in immediate expulsion and legal action.
                        </p>

                        <h2>4. Privacy</h2>
                        <p>
                            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and share information about you.
                        </p>

                        <h2>5. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. We will provide notice of significant changes by posting an announcement on our website.
                        </p>

                        <h2>6. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at support@reposeclub.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
