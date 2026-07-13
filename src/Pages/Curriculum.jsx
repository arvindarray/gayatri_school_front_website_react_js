import React from 'react';
import { Link } from 'react-router-dom';

const Curriculum = () => {
  const subjects = [
    { name: "English", icon: "fa-book-open" },
    { name: "Hindi", icon: "fa-language" },
    { name: "Urdu", icon: "fa-pen-fancy" },
    { name: "Mathematics", icon: "fa-calculator" },
    { name: "Science", icon: "fa-flask" },
    { name: "Social Science", icon: "fa-globe" },
    { name: "General Knowledge", icon: "fa-brain" },
    { name: "Computer Science", icon: "fa-desktop" },
    { name: "Arts & Craft", icon: "fa-palette" },
    { name: "Physical Training", icon: "fa-running" }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Curriculum</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Curriculum</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image Column */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="profile-image-wrapper">
                <img src="img/2-2.jpg" alt="Curriculum" className="img-fluid" />
              </div>
            </div>

            {/* Right Text Column */}
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <span className="about-sub-header">CBSE Syllabus</span>
                <h2 className="about-title">Academic Curriculum</h2>
              </div>
              <p className="about-para text-justify mb-5">
                The curriculum is based on CBSE’s latest guidelines. Apart from planned and time-bound course knowledge, we inculcate in our standard curriculum motor and communication skills, etiquette mannerism, truth, honesty, bravery, and compassion through various means. The promotion of a student to the next Senior class is based on performance. The progress report includes other achievements too.
              </p>

              <div className="text-left mb-4">
                <h4 className="font-weight-bold" style={{ color: '#fd0648' }}>Subjects Offered</h4>
              </div>
              
              {/* Grid of Subject Badges */}
              <div className="row">
                {subjects.map((subject, idx) => (
                  <div key={idx} className="col-sm-6 mb-3">
                    <div className="feature-badge-card m-0" style={{ padding: '12px 18px' }}>
                      <div className="feature-icon-wrapper" style={{ width: '36px', height: '36px', fontSize: '1rem', backgroundColor: 'rgba(253, 6, 72, 0.08)', color: '#fd0648' }}>
                        <i className={`fa ${subject.icon}`}></i>
                      </div>
                      <h5 className="feature-title" style={{ fontSize: '0.9rem' }}>{subject.name}</h5>
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

export default Curriculum;
