import React from 'react';
import { Link } from 'react-router-dom';

const RecentActivity = () => {
  const events = [
    {
      title: 'Annual Science & Art Exhibition 2024',
      date: 'Nov 14, 2024',
      status: 'Completed',
      desc: 'Students across all grades presented innovative working science models, robotics projects, and artistic masterworks.',
      icon: 'fa-microscope text-info',
      bgColor: 'rgba(0, 239, 255, 0.08)'
    },
    {
      title: 'Independence Day & Cultural Meet 2024',
      date: 'Aug 15, 2024',
      status: 'Completed',
      desc: 'A grand celebration featuring patriotic songs, traditional dances, and standard march past from houses.',
      icon: 'fa-flag text-danger',
      bgColor: 'rgba(253, 6, 72, 0.08)'
    },
    {
      title: 'Inter-School Sports Championship 2024',
      date: 'Oct 22, 2024',
      status: 'Completed',
      desc: 'Our students bagged 12 Gold, 8 Silver, and 5 Bronze medals in the track, field, and indoor sports matches.',
      icon: 'fa-trophy text-warning',
      bgColor: 'rgba(255, 193, 7, 0.08)'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Recent Activities</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Activities</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="about-sub-header">School Chronicles</span>
            <h2 className="about-title">Recent Events & Highlights</h2>
            <p className="text-muted mt-2 mx-auto" style={{ maxWidth: '600px' }}>
              Stay updated with the latest events, sports matches, academic exhibitions, and co-curricular achievements at Gayatri Gurukul.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="position-relative pl-md-4" style={{ borderLeft: '3px solid rgba(0,0,0,0.06)' }}>
                {events.map((event, idx) => (
                  <div className="position-relative mb-5" key={idx}>
                    {/* Timeline bullet dot */}
                    <div 
                      className="position-absolute d-none d-md-flex align-items-center justify-content-center rounded-circle"
                      style={{ 
                        left: '-47px', 
                        top: '0', 
                        width: '32px', 
                        height: '32px', 
                        backgroundColor: '#fff',
                        border: '3px solid #fd0648',
                        zIndex: 2
                      }}
                    >
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fd0648' }}></span>
                    </div>

                    <div className="premium-content-card p-4 text-left">
                      <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <div 
                            className="feature-icon-wrapper mr-3" 
                            style={{ 
                              width: '45px', 
                              height: '45px', 
                              fontSize: '1.2rem', 
                              backgroundColor: event.bgColor
                            }}
                          >
                            <i className={`fa ${event.icon}`}></i>
                          </div>
                          <div>
                            <h5 className="font-weight-bold text-dark m-0">{event.title}</h5>
                            <span className="text-muted small font-weight-bold"><i className="far fa-calendar-alt mr-1"></i> {event.date}</span>
                          </div>
                        </div>
                        <span className="badge badge-success px-3 py-2 mt-2 mt-md-0 align-self-start align-self-md-center" style={{ borderRadius: '20px', fontSize: '0.8rem' }}>
                          {event.status}
                        </span>
                      </div>
                      <p className="text-muted mb-0 small leading-relaxed">
                        {event.desc}
                      </p>
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

export default RecentActivity;
