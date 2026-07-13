import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            {/* Top Header (Info Bar) */}
            <div className="container-fluid d-none d-lg-block top-header">
                <div className="container">
                    <div className="row align-items-center py-2">
                        <div className="col-lg-6">
                            <Link to="/home" className="top-header-logo-link text-decoration-none">
                                <img src="img/name.png" alt="Logo" className="img-fluid" style={{ maxHeight: '75px' }} />
                            </Link>
                        </div>

                        <div className="col-lg-6 text-right">
                            <div className="contact-items-wrapper">
                                <a href="mailto:gayatriyoga666@gmail.com" className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h6>Email Us</h6>
                                        <small>gayatriyoga666@gmail.com</small>
                                    </div>
                                </a>
                                <a href="tel:+919125603155" className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="contact-text">
                                        <h6>Call Us</h6>
                                        <small>+91 9125603155</small>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="container-fluid main-navbar-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-dark main-navbar py-0 px-0">
                                <Link to="/home" className="text-decoration-none d-block d-lg-none py-2" style={{ maxWidth: '80%' }}>
                                    <img src="img/name.png" alt="Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
                                </Link>
                                <button
                                    type="button"
                                    className="navbar-toggler custom-toggler collapsed"
                                    data-toggle="collapse"
                                    data-target="#navbarCollapse"
                                    aria-controls="navbarCollapse"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="toggler-icon-bar"></span>
                                    <span className="toggler-icon-bar"></span>
                                    <span className="toggler-icon-bar"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div className="navbar-nav py-0">
                                        <NavLink to="/home" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>

                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">About Us</a>
                                            <div className="dropdown-menu rounded-0 m-0">
                                                <Link to="/about" className="dropdown-item">About School</Link>
                                                <Link to="/vision" className="dropdown-item">Vision & Mission</Link>
                                                <Link to="/manager" className="dropdown-item">Manager's Desk</Link>
                                                <Link to="/principal" className="dropdown-item">Principal's Desk</Link>
                                                <Link to="/general-instruction" className="dropdown-item">General Instruction</Link>
                                                <Link to="/facilities" className="dropdown-item">Special Features</Link>
                                            </div>
                                        </div>

                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Academics</a>
                                            <div className="dropdown-menu rounded-0 m-0">
                                                <Link to="/academicsystem" className="dropdown-item">Academic System</Link>
                                                <Link to="/procedure" className="dropdown-item">Admission Procedure</Link>
                                                <Link to="/student-tc" className="dropdown-item">Transfer Certificate</Link>
                                                <Link to="/curriculum" className="dropdown-item">Curriculum</Link>
                                                <Link to="/cocurricular" className="dropdown-item">Co-Curricular Activities</Link>
                                            </div>
                                        </div>

                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">School Campus</a>
                                            <div className="dropdown-menu rounded-0 m-0">
                                                <Link to="/building" className="dropdown-item">Infrastructural Highlights</Link>
                                                <Link to="/classroom" className="dropdown-item">ClassRoom</Link>
                                                <Link to="/library" className="dropdown-item">School Library</Link>
                                                <Link to="/lab1" className="dropdown-item">School Lab</Link>
                                                <Link to="/play" className="dropdown-item">Play Ground</Link>
                                            </div>
                                        </div>

                                        <NavLink to="/photo_album" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Photo Gallery</NavLink>
                                        <NavLink to="/down" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Downloads</NavLink>

                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">SXIC Touch</a>
                                            <div className="dropdown-menu rounded-0 m-0">
                                                <Link to="/down" className="dropdown-item">Downloads</Link>
                                                <Link to="/activity" className="dropdown-item">Recent Activity</Link>
                                                <Link to="/career" className="dropdown-item">Career</Link>
                                                <Link to="/admin" className="dropdown-item">Admin Login</Link>
                                            </div>
                                        </div>

                                        <div className="nav-item dropdown">
                                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Contact</a>
                                            <div className="dropdown-menu rounded-0 m-0">
                                                <Link to="/contact" className="dropdown-item">Contact Info</Link>
                                                <Link to="/inquiry" className="dropdown-item">Enquiry</Link>
                                            </div>
                                        </div>

                                        <NavLink to="/M_summary" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Mandatory Disclosure</NavLink>
                                        <NavLink to="/career" className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>Career @ SXIC</NavLink>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

