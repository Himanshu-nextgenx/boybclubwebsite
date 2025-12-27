import { useState } from 'react';
import { Calendar, Users, CreditCard, CheckCircle } from 'lucide-react';
import './Booking.css';

const Booking = ({ isSection = false }) => {
    const [step, setStep] = useState(1);
    const [date, setDate] = useState('');
    const [couples, setCouples] = useState(1);
    const [loading, setLoading] = useState(false);

    const PRICE_PER_COUPLE = 3999;
    const tax = (couples * PRICE_PER_COUPLE) * 0.18; // 18% GST assumption
    const total = (couples * PRICE_PER_COUPLE) + tax;

    const handlePayment = () => {
        setLoading(true);
        // Simulate API call using setTimeout
        setTimeout(() => {
            setLoading(false);
            setStep(3); // Success
        }, 2000);
    };

    return (
        <div className={isSection ? "section-mode" : "booking-page"} id="booking">
            <div className="container booking-container">
                <h1 className="section-title">Book Your Experience</h1>

                <div className="booking-card">
                    {/* Progress Steps */}
                    <div className="steps">
                        <div className={`step ${step >= 1 ? 'active' : ''}`}>1. Details</div>
                        <div className={`step-line ${step >= 2 ? 'active' : ''}`}></div>
                        <div className={`step ${step >= 2 ? 'active' : ''}`}>2. Payment</div>
                        <div className={`step-line ${step >= 3 ? 'active' : ''}`}></div>
                        <div className={`step ${step >= 3 ? 'active' : ''}`}>3. Confirmation</div>
                    </div>

                    {step === 1 && (
                        <div className="step-content animate-fade-in">
                            <div className="form-group">
                                <label><Calendar size={18} /> Select Date</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>

                            <div className="form-group">
                                <label><Users size={18} /> Number of Couples</label>
                                <div className="counter-input">
                                    <button onClick={() => setCouples(Math.max(1, couples - 1))}>-</button>
                                    <span>{couples}</span>
                                    <button onClick={() => setCouples(couples + 1)}>+</button>
                                </div>
                            </div>

                            <div className="price-summary">
                                <div className="row">
                                    <span>Package ({couples} Couples)</span>
                                    <span>₹{couples * PRICE_PER_COUPLE}</span>
                                </div>
                                <div className="row">
                                    <span>Service Charge & Tax (18%)</span>
                                    <span>₹{tax.toFixed(2)}</span>
                                </div>
                                <div className="row total">
                                    <span>Total</span>
                                    <span>₹{total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary full-width"
                                onClick={() => setStep(2)}
                                disabled={!date}
                            >
                                Proceed to Payment
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="step-content animate-fade-in">
                            <h3>Select Payment Method</h3>
                            <div className="payment-options">
                                <div className="payment-option selected">
                                    <CreditCard /> UPI / Card / NetBanking
                                </div>
                            </div>

                            <div className="price-summary">
                                <div className="row total">
                                    <span>Payable Amount</span>
                                    <span>₹{total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary full-width"
                                onClick={handlePayment}
                                disabled={loading}
                            >
                                {loading ? 'Processing...' : `Pay ₹${total.toFixed(2)}`}
                            </button>
                            <button className="btn-link" onClick={() => setStep(1)} disabled={loading}>Back</button>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="step-content animate-fade-in success-view">
                            <CheckCircle size={60} color="var(--primary)" />
                            <h2>Booking Confirmed!</h2>
                            <p>Your party is on! A confirmation email and WhatsApp message has been sent to you.</p>
                            <div className="ticket-id">
                                Ticket ID: <span className="highlight">REP-{Math.floor(Math.random() * 10000)}</span>
                            </div>
                            <p className="note">Please show this ID at the entry.</p>
                            <button className="btn btn-outline" onClick={() => window.location.href = '/'}>Back to Home</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Booking;
