import React from 'react';
import '../css/footer.css';
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h4>Navigation</h4>
                <a href="/home">Home</a>
                <a href="/blogs">Blogs</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="footer-section">
                <h4>Contact Information</h4>
                <p>Email: <span>krishnaingalgi10@gmail.com</span></p>
                <p>Phone: <span>8767465446</span></p>
            </div>
            <div className="footer-section">
                <h4>Follow Us</h4>
                <a href="https://twitter.com">Twitter</a>
                <a href="https://facebook.com">Facebook</a>
                <a href="https://instagram.com">Instagram</a>
            </div>
            <div className="footer-section">
                <h4>More Information</h4>
                <a href="/terms">Terms & Conditions</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
        </div>
        <div className="footer-bottom">
            <p>© 2024 <span>inkSpire<span class="hub">Hub.</span> </span>All rights reserved.</p>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                Back to Top
            </button>
        </div>
    </footer>
);
};

export default Footer;
