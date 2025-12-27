import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ByobConcept from './pages/ByobConcept';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Preloader from './components/Preloader';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Placeholder for pages to be built
const Placeholder = ({ title }) => (
    <div style={{ padding: '150px 20px', textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', color: 'var(--primary)' }}>{title}</h1>
        <p>This page is under construction.</p>
    </div>
);

function App() {
    const location = useLocation();

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Delay slightly to ensure DOM is ready
        setTimeout(() => {
            const elements = document.querySelectorAll('.reveal');
            elements.forEach((el) => observer.observe(el));
        }, 100);

        return () => observer.disconnect();
    }, [location]);

    return (
        <div className="app">
            <ScrollToTop />
            <Preloader />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/byob-concept" element={<ByobConcept />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book-tickets" element={<Booking />} />

                {/* Auth Pages */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                {/* Legal Pages */}
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
