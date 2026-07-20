import React from 'react';
import { Link } from 'react-router-dom';

const Downloads = () => {
  const downloadItems = [
    {
      title: 'School Admission Form',
      description: 'Official registration form for new student admissions.',
      fileType: 'PDF Document',
      fileSize: '1.2 MB',
      icon: 'fa-file-pdf text-danger',
      link: '/downloads/admission_form.pdf'
    },
    {
      title: 'School Prospectus & Guidebook',
      description: 'Comprehensive information about curriculum, infrastructure, and policies.',
      fileType: 'PDF Document',
      fileSize: '4.8 MB',
      icon: 'fa-file-pdf text-danger',
      link: '/downloads/school_prospectus.pdf'
    },
    {
      title: 'Academic Calendar 2026-27',
      description: 'Annual calendar detailing session dates, exams, and holidays.',
      fileType: 'PDF Document',
      fileSize: '850 KB',
      icon: 'fa-calendar-alt text-info',
      link: '/imp_doc_school/C 2 ANNUAL ACADEMIC CALANDER.pdf'
    },
    {
      title: 'Fee Structure Details',
      description: 'Class-wise tuition fee breakdown and payment schedules.',
      fileType: 'PDF Document',
      fileSize: '620 KB',
      icon: 'fa-file-invoice-dollar text-warning',
      link: '/imp_doc_school/C 1 FEE STRUCTURE OF THE SCHOOL.pdf'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Downloads</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Downloads</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-sub-header">Resource Center</span>
            <h2 className="about-title">Important Documents & Forms</h2>
            <p className="text-muted mt-2 mx-auto" style={{ maxWidth: '600px' }}>
              Access and download official school registration forms, academic calendars, curriculum planners, and other resource guides.
            </p>
          </div>

          <div className="row">
            {downloadItems.map((item, idx) => (
              <div className="col-lg-6 mb-4" key={idx}>
                <div className="premium-content-card h-100 d-flex flex-column justify-content-between" style={{ padding: '25px' }}>
                  <div className="d-flex align-items-start">
                    <div className="feature-icon-wrapper mr-4" style={{ minWidth: '55px', height: '55px', fontSize: '1.5rem', backgroundColor: 'rgba(0, 0, 0, 0.03)' }}>
                      <i className={`fa ${item.icon}`}></i>
                    </div>
                    <div>
                      <h5 className="font-weight-bold mb-1">{item.title}</h5>
                      <p className="text-muted small mb-2">{item.description}</p>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-light text-muted mr-2 py-1 px-2">{item.fileType}</span>
                        <span className="badge badge-light text-muted py-1 px-2">{item.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right mt-4 pt-3 border-top">
                    <a
                      href={item.link}
                      download
                      className="premium-btn text-white py-2 px-4 text-decoration-none d-inline-flex align-items-center"
                      style={{ fontSize: '0.85rem' }}
                    >
                      <i className="fa fa-download mr-2"></i> Download File
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
