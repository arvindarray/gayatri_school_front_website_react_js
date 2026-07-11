import React from 'react';
import { Link } from 'react-router-dom';

const CoCurriculumActivity = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Co-curricular Activities</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Co-curricular</p>
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
                  <img src="img/1-2.jpg" alt="Co-curricular Activity" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="profile-text-content">
                  <div className="text-left mb-4">
                    <span className="about-sub-header">Beyond Academics</span>
                    <h2 className="about-title">Nurturing Holistic Talents</h2>
                  </div>
                  <p className="mb-3 text-justify">
                    Co-curricular Activities form an integral part of the school as they help to develop self-confidence and self-esteem in students. Co-curricular activities reflect the diverse interests of students and lead to their all-round development.
                  </p>
                  <p className="text-justify">
                    Gayatri Gurukul Public School considers not only the cognitive development of its students but also the other aspects of their personality as equally significant for development and nurturing. To enhance the students' all-round development and cultivate varied interests, a strong academic foundation is complemented by a rich selection of co-curricular activities. These activities form a regular part of the school curriculum, and a spirit of healthy competition is generated through inter-house, interclass, and inter-school competitions.
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

export default CoCurriculumActivity;
