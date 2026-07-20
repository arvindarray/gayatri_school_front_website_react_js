import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Enquiry = () => {
  // State hooks for form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [query, setQuery] = useState('');
  const [detail, setDetail] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, mobile, query, detail });
    alert('Thank you for your enquiry. We will get back to you soon.');
    setName('');
    setEmail('');
    setMobile('');
    setQuery('');
    setDetail('');
  };

  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Send Enquiry</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Enquiry</p>
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
                  <span className="about-sub-header">Have Questions?</span>
                  <h2 className="about-title">Quick Enquiry</h2>
                  <p className="text-muted mt-2">
                    Please post your quick enquiry related to any question. We will reply as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="px-md-4">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="name" className="font-weight-bold text-dark small mb-1">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="email" className="font-weight-bold text-dark small mb-1">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="mobile" className="font-weight-bold text-dark small mb-1">Mobile Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="mobile"
                          placeholder="Your Mobile"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="query" className="font-weight-bold text-dark small mb-1">Subject / Question Category</label>
                        <input
                          type="text"
                          className="form-control"
                          id="query"
                          placeholder="e.g. Admissions, Fees"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="detail" className="font-weight-bold text-dark small mb-1">Detailed Message</label>
                    <textarea
                      className="form-control"
                      id="detail"
                      rows="4"
                      placeholder="Write your query details here..."
                      value={detail}
                      onChange={(e) => setDetail(e.target.value)}
                      style={{ borderRadius: '8px', border: '1px solid rgba(0,0,0,0.1)' }}
                      required
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="premium-btn border-0 py-3 px-5">
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
