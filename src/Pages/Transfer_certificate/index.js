import React from 'react';
import { Link } from 'react-router-dom';

const TransferCertificate = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Transfer Certificate</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">TC Search</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="profile-card">
                <div className="text-center mb-5">
                  <span className="about-sub-header">Verification Desk</span>
                  <h2 className="about-title">Search Transfer Certificate</h2>
                  <p className="text-muted mt-2">
                    Enter the student's admission number below to search and download the digital transfer certificate.
                  </p>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="form-group mb-4">
                      <label htmlFor="admission_no" className="font-weight-bold text-dark mb-2">Admission Number :</label>
                      <div className="input-group input-group-lg" style={{ borderRadius: '50px', overflow: 'hidden', border: '1px solid rgba(0, 239, 255, 0.25)', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                        <div className="input-group-prepend">
                          <span className="input-group-text bg-white border-0 px-4" style={{ color: '#00efff' }}>
                            <i className="fa fa-search"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control border-0 pl-1"
                          id="admission_no"
                          name="admission_no"
                          placeholder="e.g. 10452"
                          style={{ fontSize: '1rem', outline: 'none', boxShadow: 'none' }}
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <button type="submit" className="premium-btn border-0 py-3 px-5">
                        Search Certificate
                      </button>
                    </div>
                  </div>
                </form>

                {/* Legacy message placeholder */}
                <div className="text-center mt-4">
                  <span id="ContentPlaceHolder1_lblmsg" className="text-danger italic font-weight-semibold"></span>
                </div>

                {/* Results Preview (Hidden by default or mapped) */}
                <div id="ContentPlaceHolder1_pnlContents" className="text-center mt-5 d-none">
                  <img
                    id="ContentPlaceHolder1_Image1"
                    src="#"
                    className="img-fluid rounded shadow-lg border"
                    style={{ maxHeight: '600px', objectFit: 'contain' }}
                    alt="Transfer Certificate Preview"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferCertificate;
