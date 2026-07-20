import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null
  });

  const openings = [
    {
      title: 'TGT - English Teacher',
      department: 'Secondary Section',
      experience: '2-4 Years',
      type: 'Full Time',
      qualification: 'B.A / M.A in English, B.Ed'
    },
    {
      title: 'PRT - Science & Mathematics',
      department: 'Primary Section',
      experience: '1-3 Years',
      type: 'Full Time',
      qualification: 'B.Sc / M.Sc, B.Ed / D.El.Ed'
    },
    {
      title: 'School Counselor & Wellness Coach',
      department: 'Student Support',
      experience: '2+ Years',
      type: 'Full Time / Part Time',
      qualification: 'M.A in Psychology / Child Development'
    }
  ];

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
    setFormData(prev => ({ ...prev, position: jobTitle }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Application Submitted:', formData);
    alert(`Thank you for applying for the position of ${selectedJob}. We will review your application and contact you soon.`);
    setSelectedJob(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      resume: null
    });
  };

  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Careers</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Careers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-fluid py-5">
        <div className="container">
          
          {/* Why Join Us */}
          <div className="text-center mb-5">
            <span className="about-sub-header">Join Our Team</span>
            <h2 className="about-title">Why Work At Gayatri Gurukul?</h2>
            <p className="text-muted mt-2 mx-auto" style={{ maxWidth: '600px' }}>
              We believe in nurturing talent and offering a supportive environment where educators can thrive and build successful careers.
            </p>
          </div>

          <div className="row mb-5">
            <div className="col-lg-4 mb-4">
              <div className="premium-content-card text-center h-100" style={{ padding: '30px' }}>
                <div className="feature-icon-wrapper mx-auto mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', backgroundColor: 'rgba(253, 6, 72, 0.08)', color: '#fd0648' }}>
                  <i className="fa fa-users"></i>
                </div>
                <h5 className="font-weight-bold mb-2">Collaborative Culture</h5>
                <p className="text-muted small m-0">
                  Work in a warm, friendly ecosystem alongside experienced educators and staff members dedicated to student success.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="premium-content-card text-center h-100" style={{ padding: '30px' }}>
                <div className="feature-icon-wrapper mx-auto mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', backgroundColor: 'rgba(0, 239, 255, 0.08)', color: '#00efff' }}>
                  <i className="fa fa-graduation-cap"></i>
                </div>
                <h5 className="font-weight-bold mb-2">Professional Growth</h5>
                <p className="text-muted small m-0">
                  Continuous development opportunities, teaching workshops, and seminars to help you refine your pedagogical skills.
                </p>
              </div>
            </div>

            <div className="col-lg-4 mb-4">
              <div className="premium-content-card text-center h-100" style={{ padding: '30px' }}>
                <div className="feature-icon-wrapper mx-auto mb-4" style={{ width: '60px', height: '60px', fontSize: '1.5rem', backgroundColor: 'rgba(255, 193, 7, 0.08)', color: '#ffc107' }}>
                  <i className="fa fa-award"></i>
                </div>
                <h5 className="font-weight-bold mb-2">Competitive Benefits</h5>
                <p className="text-muted small m-0">
                  Attractive salary scales, standard leave structures, performance recognitions, and health safety guidelines.
                </p>
              </div>
            </div>
          </div>

          {/* Current Openings */}
          <div className="text-center mb-5">
            <span className="about-sub-header">Opportunities</span>
            <h2 className="about-title">Current Job Openings</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              {openings.map((job, idx) => (
                <div 
                  className="premium-content-card mb-4 d-flex flex-column flex-md-row align-items-md-center justify-content-between p-4 text-left" 
                  key={idx}
                >
                  <div className="text-left">
                    <span className="badge badge-light text-muted mb-2 px-2 py-1">{job.department}</span>
                    <h5 className="font-weight-bold text-dark mb-1">{job.title}</h5>
                    <p className="text-muted small mb-2 mb-md-0">
                      <strong>Qualifications:</strong> {job.qualification} | <strong>Exp:</strong> {job.experience}
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3 mt-md-0">
                    <span className="badge badge-success mr-3 px-3 py-2" style={{ borderRadius: '20px' }}>{job.type}</span>
                    <button 
                      onClick={() => handleApplyClick(job.title)}
                      className="premium-btn border-0 py-2 px-4"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fallback open form block */}
          <div className="row justify-content-center mt-5">
            <div className="col-lg-8 text-center bg-light p-4" style={{ borderRadius: '15px', border: '1px dashed rgba(0,0,0,0.1)' }}>
              <h5 className="font-weight-bold text-dark">Don't see a matching role?</h5>
              <p className="text-muted small">
                Submit your CV to our general pool and we will contact you as soon as a fitting position opens up.
              </p>
              <button 
                onClick={() => handleApplyClick('General Inquiry / Future Vacancies')}
                className="btn btn-outline-danger py-2 px-4 font-weight-bold mt-2"
                style={{ borderRadius: '8px' }}
              >
                Send General CV
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div 
          className="position-fixed w-100 h-100 top-0 left-0 d-flex align-items-center justify-content-center"
          style={{ 
            backgroundColor: 'rgba(0,0,0,0.6)', 
            zIndex: 9999
          }}
        >
          <div className="bg-white p-4 p-md-5 rounded shadow-lg position-relative" style={{ maxWidth: '500px', width: '90%', borderRadius: '15px' }}>
            <button 
              className="position-absolute top-0 right-0 m-3 btn text-muted font-weight-bold" 
              style={{ fontSize: '1.5rem' }}
              onClick={() => setSelectedJob(null)}
            >
              &times;
            </button>
            <h4 className="font-weight-bold text-dark mb-1">Apply for Position</h4>
            <p className="text-danger small font-weight-bold mb-4">{selectedJob}</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3 text-left">
                <label className="font-weight-bold text-dark small mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="form-group mb-3 text-left">
                <label className="font-weight-bold text-dark small mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="form-control" 
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="form-group mb-3 text-left">
                <label className="font-weight-bold text-dark small mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  required
                  placeholder="Your Mobile"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div className="form-group mb-4 text-left">
                <label className="font-weight-bold text-dark small mb-1">Total Experience</label>
                <input 
                  type="text" 
                  className="form-control" 
                  required
                  placeholder="e.g. 3 years"
                  value={formData.experience}
                  onChange={(e) => setFormData(prev => ({ ...prev, experience: e.target.value }))}
                />
              </div>

              <button 
                type="submit" 
                className="premium-btn border-0 py-3 w-100 text-white font-weight-bold"
                style={{ borderRadius: '8px' }}
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
