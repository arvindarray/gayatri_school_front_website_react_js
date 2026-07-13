import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ session }) => {
    const baseUrl = process.env.REACT_APP_BASE_URL || '/';

    //   console.log("a++++",config);

    return (

        <div className="header">
            <div className="header-left">
                <Link to={`${baseUrl}admin/dashboard`} className="logo">
                    <img src={`${baseUrl}AdminPortal/assets/img/logo.png`} alt="Logo" />
                </Link>
                <Link to={`${baseUrl}admin/dashboard`} className="logo">
                    <span className="admin-in-logo">GAYATRI GURUKUL PUBLIC SCHOOL</span>
                </Link>
                <Link to="index.html" className="logo logo-small">
                    <img src={`${baseUrl}AdminPortal/assets/img/logo.png`} alt="Logo" width="60" height="60" />
                </Link>
            </div>
            <a href="" id="toggle_btn">
                <i className="fas fa-align-left"></i>
            </a>
            <div className="top-nav-search">
                <form>
                    <input type="text" className="form-control" placeholder="Search here"/>
                    <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
            <a className="mobile_btn" id="mobile_btn">
                <i className="fas fa-bars"></i>
            </a>
            <ul className="nav user-menu">
                <li className="nav-item dropdown has-arrow">
                    <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <span className="user-img">
                            <img className="rounded-circle" src={`${baseUrl}AdminPortal/assets/img/profiles/avatar-01.jpg`} width="31" alt={session} />
                        </span>
                    </a>
                    <div className="dropdown-menu">
                        <div className="user-header">
                            <div className="avatar avatar-sm">
                                <img src={`${baseUrl}AdminPortal/assets/img/profiles/avatar-01.jpg`} alt="User Image" className="avatar-img rounded-circle" />
                            </div>
                            <div className="user-text">
                                {/* <h6>{`${session.admin.firstName} ${session.admin.lastName}`}</h6>
                                    <p className="text-muted mb-0">Admin</p> */}
                            </div>
                        </div>
                        <Link className="dropdown-item" to={`${baseUrl}admin/profile`}>My Profile</Link>
                        <Link className="dropdown-item" to={`${baseUrl}admin/logout`}>Logout</Link>
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Header;
