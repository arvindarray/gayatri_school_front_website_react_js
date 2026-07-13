import React from 'react';
import { Link } from 'react-router-dom';

const Infrastructural = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">School Building</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Infrastructure</p>
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
                  <img src="img/3-2.jpg" alt="School Building" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="profile-text-content">
                  <div className="text-left mb-4">
                    <span className="about-sub-header">Our Campus</span>
                    <h2 className="about-title">Modern Infrastructure</h2>
                  </div>
                  <p className="mb-3 text-justify">
                    The School has 24*7 electric and water supply. Zero-B Water coolers are installed for safe potable water. Cleanliness reflects everywhere, keeping in view co-education, energy infrastructure for convenience of students as well as staff is available. Whether it be regarding safety and security, transportation or health and hygiene, CCTV cameras, gardens, fire fighting equipment, etc., all are working professionally.
                  </p>
                  <p className="text-justify">
                    Lush green trees and lovely gardens with colorful flowers adorn the campus and give an aesthetic relief to the residents. Overall, it is a large, comfortable, loving, and secure campus ideal for educational activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructural;
