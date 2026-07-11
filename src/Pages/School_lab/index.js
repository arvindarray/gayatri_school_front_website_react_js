import React from 'react';
import { Link } from 'react-router-dom';

const SchoolLab = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">School Laboratories</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Laboratories</p>
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
                  <img src="img/2-2.jpg" alt="School Laboratories" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="profile-text-content">
                  <div className="text-left mb-4">
                    <span className="about-sub-header">Practical Learning</span>
                    <h2 className="about-title">Science &amp; Tech Labs</h2>
                  </div>
                  <p className="mb-3 text-justify">
                    The school has six separate laboratories for Physics, Chemistry, Biology, Math, Computer, and Composite lab. All of them are well-equipped with modern technology apparatus to cover all experiments, catering to the requirements for syllabus coverage from standard VI to XII (Science). A well-equipped Computer Laboratory is available to make the students computer-confident. It consists of 40 systems with well-equipped networking facilities, internet access, and all students, including faculty members, can practice using the internet.
                  </p>
                  <p className="text-justify">
                    We believe in providing both theoretical and practical knowledge. Hence, we have adequately equipped laboratories for different streams/subjects. Students are regularly taken to the labs to gain hands-on experience.
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

export default SchoolLab;
