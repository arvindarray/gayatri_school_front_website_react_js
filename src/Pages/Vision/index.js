import React from 'react';
import { Link } from 'react-router-dom';

const Vision = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Vision &amp; Mission</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Vision &amp; Mission</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid py-5">
        <div className="container">
          <div className="profile-card">
            <div className="row align-items-center">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="profile-image-wrapper">
                  <img 
                    src="img/2-2.jpg" 
                    alt="School Vision" 
                    className="img-fluid"
                  />
                </div>
              </div>
              
              <div className="col-lg-7">
                <div className="profile-text-content">
                  <div className="text-left mb-4">
                    <span className="about-sub-header">Core Foundations</span>
                    <h2 className="about-title">Our Vision</h2>
                  </div>
                  <p className="mb-4 text-justify">
                    To create the most respected brands that provide highest quality services to students worldwide in a sustainable and scalable way.
                  </p>
                  <p className="mb-5 text-justify">
                    To provide each student the education that promotes self-discipline, sense of responsibility, social and global consciousness, and excellence in learning.
                  </p>
                  
                  <div className="text-left mb-4">
                    <span className="about-sub-header">Our Roadmap</span>
                    <h2 className="about-title">Our Mission</h2>
                  </div>
                  <p className="text-justify">
                    To impart knowledge in order to activate the intellect, generate curiosity, form proper attitude, inculcate human values, and fearlessness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
