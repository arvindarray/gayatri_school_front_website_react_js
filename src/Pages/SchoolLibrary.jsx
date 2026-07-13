import React from 'react';
import { Link } from 'react-router-dom';

const SchoolLibrary = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">School Library</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Library</p>
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
                  <img src="img/1-2.jpg" alt="School Library" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="profile-text-content">
                  <div className="text-left mb-4">
                    <span className="about-sub-header">Knowledge Hub</span>
                    <h2 className="about-title">The School Library</h2>
                  </div>
                  <p className="mb-3 text-justify">
                    The school is proud to possess a well-furnished library complete with the best titles. The library supports an open-shelf system that provides easy access to books. The school library supports a state of the art computerized issue/return system and subscribes to various periodicals.
                  </p>
                  <p className="text-justify">
                    The school library is open to all the bonafide students of the school, and all the classes are provided with one Library period per week. Moreover, the school provides the facility of class libraries at the junior level to inculcate reading habits in children at an early stage.
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

export default SchoolLibrary;
