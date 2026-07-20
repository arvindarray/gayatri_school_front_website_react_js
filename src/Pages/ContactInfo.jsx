import React from 'react';
import { Link } from 'react-router-dom';

const Contact_info = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Contact Us</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Contact</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            {/* Left Contact details */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="text-left mb-4">
                <span className="about-sub-header">Get In Touch</span>
                <h2 className="about-title">Contact Details</h2>
              </div>
              
              <div className="premium-content-card mb-4 d-flex align-items-center" style={{ padding: '20px' }}>
                <div className="feature-icon-wrapper mr-3" style={{ minWidth: '46px', height: '46px', fontSize: '1.2rem', backgroundColor: 'rgba(253, 6, 72, 0.08)', color: '#fd0648' }}>
                  <i className="fa fa-map-marker-alt"></i>
                </div>
                <div>
                  <h6 className="font-weight-bold mb-1">Address</h6>
                  <p className="text-muted m-0 small">Saraikalidas Mariahu Jaunpur (U.P)</p>
                </div>
              </div>

              <div className="premium-content-card mb-4 d-flex align-items-center" style={{ padding: '20px' }}>
                <div className="feature-icon-wrapper mr-3" style={{ minWidth: '46px', height: '46px', fontSize: '1.2rem', backgroundColor: 'rgba(0, 239, 255, 0.08)', color: '#00efff' }}>
                  <i className="fa fa-phone-alt"></i>
                </div>
                <div>
                  <h6 className="font-weight-bold mb-1">Phone Number</h6>
                  <p className="text-muted m-0 small">+91 9125603155</p>
                </div>
              </div>

              <div className="premium-content-card mb-4 d-flex align-items-center" style={{ padding: '20px' }}>
                <div className="feature-icon-wrapper mr-3" style={{ minWidth: '46px', height: '46px', fontSize: '1.2rem', backgroundColor: 'rgba(253, 6, 72, 0.08)', color: '#fd0648' }}>
                  <i className="fa fa-envelope"></i>
                </div>
                <div>
                  <h6 className="font-weight-bold mb-1">Email Address</h6>
                  <p className="text-muted m-0 small">gayatriyoga666@gmail.com</p>
                </div>
              </div>

              <div className="premium-content-card mb-4 d-flex align-items-center" style={{ padding: '20px' }}>
                <div className="feature-icon-wrapper mr-3" style={{ minWidth: '46px', height: '46px', fontSize: '1.2rem', backgroundColor: 'rgba(0, 239, 255, 0.08)', color: '#00efff' }}>
                  <i className="fa fa-globe"></i>
                </div>
                <div>
                  <h6 className="font-weight-bold mb-1">Official Website</h6>
                  <a href="http://www.gayatrigurukul.in" target="_blank" rel="noopener noreferrer" className="small font-weight-bold" style={{ color: '#008fa8' }}>
                    www.gayatrigurukul.in
                  </a>
                </div>
              </div>
            </div>

            {/* Right Map Column */}
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <span className="about-sub-header">Find Us On Map</span>
                <h2 className="about-title">Our Location</h2>
              </div>
              <div className="profile-image-wrapper p-0 overflow-hidden shadow-lg border" style={{ borderRadius: '15px' }}>
                <iframe
                  src="https://www.google.com/maps/dir//JJG7%2B888,+Mariahu+Bypass+Rd,+Mariahu,+Barahila,+Uttar+Pradesh+222105/@25.6181227,82.5752953,12702m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x39902305b68597f3:0x95c741d5c84d1415!2m2!1d82.6133175!2d25.625785!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                  width="100%"
                  height="450px"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gayatri Gurukul Public School"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact_info;
