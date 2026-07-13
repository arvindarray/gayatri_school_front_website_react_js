import React from 'react';
import { Link } from 'react-router-dom';

const Special_features = () => {
  const features = [
    { text: "Environment Friendly Lecture Halls", icon: "fa-leaf" },
    { text: "Well Established Library", icon: "fa-book" },
    { text: "Well Equipped Labs", icon: "fa-flask" },
    { text: "Modern Computer Lab & Internet", icon: "fa-wifi" },
    { text: "R.O. Purified Drinking Water", icon: "fa-tint" },
    { text: "Huge Sports Playground", icon: "fa-basketball-ball" },
    { text: "Diverse Sports Equipment", icon: "fa-table-tennis" },
    { text: "Hygienic Canteen Facility", icon: "fa-hamburger" },
    { text: "24 Hours Generator Backup", icon: "fa-charging-station" },
    { text: "Conveyance / Bus Facility", icon: "fa-bus" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Special Features</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Special Features</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image Sidebar */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="profile-image-wrapper">
                <img src="img/1-2.jpg" alt="Special features" className="img-fluid" />
              </div>
            </div>

            {/* Right Features Cards Grid */}
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <span className="about-sub-header">Highlights</span>
                <h2 className="about-title">Why Choose Us</h2>
              </div>
              <p className="about-para text-justify mb-5">
                We believe in providing the absolute best environment and learning tools for our students' growth. Here are some of the key features of our campus.
              </p>

              <div className="row">
                {features.map((feature, idx) => (
                  <div key={idx} className="col-sm-6 mb-3">
                    <div className="feature-badge-card m-0" style={{ padding: '15px' }}>
                      <div className="feature-icon-wrapper" style={{ width: '38px', height: '38px', fontSize: '1.1rem', backgroundColor: 'rgba(0, 239, 255, 0.08)', color: '#008fa8' }}>
                        <i className={`fa ${feature.icon}`}></i>
                      </div>
                      <h5 className="feature-title" style={{ fontSize: '0.9rem', fontWeight: '600' }}>{feature.text}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special_features;
