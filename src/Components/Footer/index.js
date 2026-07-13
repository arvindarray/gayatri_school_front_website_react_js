import React from 'react';
import { Link } from 'react-router-dom';
import { 
    FaBookOpen, 
    FaGraduationCap, 
    FaUsers, 
    FaShieldAlt, 
    FaAward, 
    FaChevronRight, 
    FaMapMarkerAlt, 
    FaPhoneAlt, 
    FaEnvelope, 
    FaClock, 
    FaTwitter, 
    FaFacebookF, 
    FaInstagram, 
    FaYoutube
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="premium-footer">
            <div className="container py-4">
                <div className="row">
                    {/* Column 1: School Logo, About & Quality Badges */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="footer-logo-row">
                            <FaBookOpen className="footer-logo-icon" />
                            <h4 className="footer-logo-text">School</h4>
                        </div>
                        <div className="footer-logo-line"></div>
                        
                        <h5 className="footer-sec-title">About School</h5>
                        <p className="footer-about-desc">
                            At Gayatri Gurukul Public School, we believe that education is the foundation of a bright future. 
                            Our mission is to nurture young minds to become responsible, confident, and compassionate global citizens. 
                            We provide a safe, inclusive, and inspiring learning environment.
                        </p>
                        
                        <div className="footer-badges-row">
                            <div className="footer-badge-box">
                                <FaGraduationCap className="footer-badge-icon" />
                                <p className="footer-badge-text">Quality Education</p>
                            </div>
                            <div className="footer-badge-box">
                                <FaUsers className="footer-badge-icon" />
                                <p className="footer-badge-text">Expert Teachers</p>
                            </div>

                            <div className="footer-badge-box">
                                <FaAward className="footer-badge-icon" />
                                <p className="footer-badge-text">Holistic Dev</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Important Links */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-sec-title">Important Links</h5>
                        <div className="footer-sec-line"></div>
                        <div className="footer-links-list">
                            <Link className="footer-link-row" to="/procedure">
                                <FaChevronRight /> Admission Procedure
                            </Link>
                            <Link className="footer-link-row" to="/curriculum">
                                <FaChevronRight /> Curriculum
                            </Link>
                            <Link className="footer-link-row" to="/building">
                                <FaChevronRight /> School Campus
                            </Link>
                            <Link className="footer-link-row" to="/photo_album">
                                <FaChevronRight /> Gallery
                            </Link>
                            <Link className="footer-link-row" to="/activity">
                                <FaChevronRight /> Events
                            </Link>
                            <Link className="footer-link-row" to="/down">
                                <FaChevronRight /> News & Updates
                            </Link>
                            <Link className="footer-link-row" to="/contact">
                                <FaChevronRight /> Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Column 3: Get In Touch & Socials */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-sec-title">Get In Touch</h5>
                        <div className="footer-sec-line"></div>
                        <div className="footer-contact-info-list">
                            <div className="contact-info-row">
                                <FaMapMarkerAlt className="contact-info-icon" />
                                <p className="contact-info-detail">Saraikalidas, Mariahu, Jaunpur (U.P)</p>
                            </div>
                            <div className="contact-info-row">
                                <FaPhoneAlt className="contact-info-icon" />
                                <p className="contact-info-detail">+91 9125603155</p>
                            </div>
                            <div className="contact-info-row">
                                <FaEnvelope className="contact-info-icon" />
                                <p className="contact-info-detail">gayatriyoga666@gmail.com</p>
                            </div>
                            <div className="contact-info-row">
                                <FaClock className="contact-info-icon" />
                                <p className="contact-info-detail">Mon - Sat: 8:00 AM - 4:00 PM</p>
                            </div>
                        </div>

                        <div className="footer-follow-us-sec">
                            <h5 className="footer-sec-title">Follow Us</h5>
                            <div className="footer-social-grid">
                                <a className="social-grid-btn" href="#" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a className="social-grid-btn" href="#" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a className="social-grid-btn" href="#" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a className="social-grid-btn" href="#" aria-label="YouTube">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="col-lg-3 col-md-6 mb-4">
                        <h5 className="footer-sec-title">Newsletter</h5>
                        <div className="footer-sec-line"></div>
                        <p className="footer-newsletter-text">
                            Subscribe to our newsletter to get latest updates and news.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input 
                                type="email" 
                                className="newsletter-input-box" 
                                placeholder="Enter your email" 
                                required
                            />
                            <button type="submit" className="newsletter-submit-btn">
                                Subscribe
                            </button>
                        </form>
                        
                        <div className="newsletter-graphic-container">
                            <svg width="150" height="90" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg" className="newsletter-graphic">
                                <rect x="20" y="40" width="80" height="50" rx="6" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
                                <path d="M20 45L60 68L100 45" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M70 65 C 100 65, 120 70, 140 50 C 155 35, 165 40, 180 25" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                                <g transform="translate(170, 10) rotate(-15)">
                                    <path d="M0 15L25 0L18 28L12 18L0 15Z" fill="#fd0648" />
                                    <path d="M12 18L25 0L10 14L12 18Z" fill="#d9043d" />
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Red Bottom Bar Segment */}
            <div className="footer-red-bar py-3">
                <div className="container text-center">
                    <p className="footer-copyright-para mb-0">
                        &copy; 2026 Gayatri Gurukul Public School. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
