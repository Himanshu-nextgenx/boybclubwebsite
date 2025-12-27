import React, { useEffect } from 'react';
import './PageDefaults.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-container">
            <header className="page-header">
                <h1 className="page-title">Privacy Policy</h1>
                <p className="page-subtitle">Your Data & Security</p>
            </header>

            <div className="container">
                <div className="content-section">
                    <div className="text-block">
                        <p className="lead">
                            At Repose BYOB Club, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
                        </p>

                        <h2>1. Information We Collect</h2>
                        <p>
                            We collect information that you voluntarily provide to us when you use our website, book tickets, or contact us. This may include:
                        </p>
                        <ul className="styled-list">
                            <li><span className="check-icon">➝</span> Personal Identification: Name, email address, phone number.</li>
                            <li><span className="check-icon">➝</span> Booking Details: Date of visit, number of guests, special requests.</li>
                            <li><span className="check-icon">➝</span> Payment Information: Processed securely through our payment partners (we do not store card details).</li>
                        </ul>

                        <h2>2. How We Use Your Information</h2>
                        <p>
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="styled-list">
                            <li><span className="check-icon">➝</span> To process your bookings and provide requested services.</li>
                            <li><span className="check-icon">➝</span> To communicate with you regarding your reservations or inquiries.</li>
                            <li><span className="check-icon">➝</span> To send promotional emails or newsletters (you can opt-out at any time).</li>
                            <li><span className="check-icon">➝</span> To improve our website and customer experience.</li>
                        </ul>

                        <h2>3. Data Security</h2>
                        <p>
                            We implement strict security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet is 100% secure.
                        </p>

                        <h2>4. Cookies</h2>
                        <p>
                            Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us analyze web traffic and remember your preferences. You can choose to accept or decline cookies through your browser settings.
                        </p>

                        <h2>5. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
                        </p>

                        <h2>6. Your Rights</h2>
                        <p>
                            You have the right to access, correct, or delete your personal information held by us. If you wish to exercise these rights, please contact us.
                        </p>

                        <h2>7. Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy, please contact us at support@reposeclub.com.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
