import React from 'react';
import { Link } from 'react-router-dom';

const PlayGround = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Play Ground</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Playground</p>
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
                  <img src="img/3-2.jpg" alt="School Playground" className="img-fluid" />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="profile-text-content">
                  <div className="text-left mb-4">
                    <span className="about-sub-header">Sports &amp; Fitness</span>
                    <h2 className="about-title">Playground &amp; Games</h2>
                  </div>
                  <p className="mb-3 text-justify">
                    Development of a child’s physical health is an essential part of education in the school. To accomplish this, the school has a huge playground. There are also proper arrangements for indoor games.
                  </p>
                  <p className="mb-3 text-justify">
                    The school offers all modern outdoor games like cricket, football, hockey, volleyball, badminton, table tennis, judo karate, carom, and chess to children for their physical growth and mental relaxation.
                  </p>
                  <p className="text-justify">
                    Yoga, Pranayama, and morning exercise are regular features that play a great role in giving tranquility to the mind.
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

export default PlayGround;
