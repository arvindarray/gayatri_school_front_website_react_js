import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="container-fluid d-none d-lg-block bg-cyan">
                <div className="row border-bottom align-items-center py-3 px-xl-5">
                    <div className="col-lg-6">
                        <a href="#" className="text-decoration-none">
                            <img src="img/name.png" alt="Logo" />
                        </a>
                    </div>

                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-envelope text-red mr-3"></i>
                            <div className="text-left">
                                <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                                <small>gayatriyoga666@gmail.com</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-phone text-red mr-3"></i>
                            <div className="text-left">
                                <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                                <small>+91 9125603155</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-red">
                <div className="row px-xl-5">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-expand-lg bg-red navbar-light py-3 py-lg-0 px-0">
                            <a href="#" className="text-decoration-none d-block d-lg-none">
                                <img src="img/name.png" alt="Logo" width="100%" />
                            </a>
                            <button type="button" className="navbar-toggler pt-2" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav py-0">
                                    <Link to="/home" className="nav-item nav-link active">Home</Link>
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
                                    <Link to="/photo_album" className="nav-item nav-link">Photo Gallery</Link>
                                    <Link to="/down" className="nav-item nav-link">Downloads</Link>
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

                                    <Link to="/M_summary" className="nav-item nav-link">Mandatory Disclosure</Link>
                                    <Link to="/career" className="nav-item nav-link">Career @ SXIC</Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
