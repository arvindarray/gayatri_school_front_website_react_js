import React from 'react';
import { Link } from 'react-router-dom';

const ClassRoom = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Classrooms</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Classrooms</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            {/* Left Image Sidebar */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="profile-image-wrapper sticky-top" style={{ top: '30px', zIndex: 1 }}>
                <img src="img/2-2.jpg" alt="Classroom" className="img-fluid" />
              </div>
            </div>

            {/* Right Classrooms Content */}
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <span className="about-sub-header">Learning Spaces</span>
                <h2 className="about-title">Modern Classrooms</h2>
              </div>
              
              <div className="premium-content-card mb-4" style={{ padding: '25px' }}>
                <h4 className="font-weight-bold mb-3" style={{ color: '#fd0648' }}>Standard Classrooms</h4>
                <p className="text-muted m-0 text-justify" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                  Our classrooms are spacious and equipped with ceiling fans and modern styled benches & desks. The big windows in each classroom receive natural light. The big and beautiful blackboards make them enticing.
                </p>
              </div>

              <div className="premium-content-card" style={{ padding: '25px' }}>
                <h4 className="font-weight-bold mb-3" style={{ color: '#00efff' }}>Digital Classrooms</h4>
                <p className="text-muted m-0 text-justify" style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                  Digital teaching system transforms from an orthodox, laborious method of verbal explanation to a very interactive and graphical presentation, making teaching more interesting to the teachers and learning easy and enjoyable for the students. It is a good education aid and technology to classroom teaching. It engages the entire class in the learning process, thereby making interaction interesting and exciting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;
