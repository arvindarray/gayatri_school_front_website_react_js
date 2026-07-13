import React from 'react';
import { Link } from 'react-router-dom';

const AcademicSystem = () => {
  const sections = [
    {
      title: "Computer Education",
      icon: "fa-laptop",
      text: "The school offers computer education to the students from class 1st onwards. The computer lab is well equipped with all modern facilities and smart classes."
    },
    {
      title: "School Cabinet",
      icon: "fa-users-cog",
      text: "Apart from the house system, the school has a board of prefects led by the Head Boy, Head Girl, and Cabinet Members."
    },
    {
      title: "Monitors",
      icon: "fa-user-shield",
      text: "During the absence of teachers from the class, the monitor along with the sub-monitor assumes responsibility for order and discipline in the class."
    },
    {
      title: "Clubs",
      icon: "fa-puzzle-piece",
      text: "To promote all-round development, participation in clubs is compulsory for every child. These clubs include: English Literary Club, Hindi Literary Club, Science Club, Music Club, Art Club, Nature Club, Dance Club, and Environmental Club."
    },
    {
      title: "Assessment",
      icon: "fa-chart-line",
      text: "The progress of students is evaluated continuously through Parent Teacher Meetings, during which the progress of each student is discussed. Suggestions from guardians are welcomed, and necessary actions are taken by the school and concerned teachers."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Academic System</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Academic System</p>
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
                <img src="img/1-2.jpg" alt="Computer Education" className="img-fluid" />
              </div>
            </div>

            {/* Right Content Section */}
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <span className="about-sub-header">Methodology</span>
                <h2 className="about-title">Our Academic System</h2>
              </div>

              <div>
                {sections.map((section, idx) => (
                  <div key={idx} className="premium-content-card d-flex align-items-start mb-4">
                    <div className="feature-icon-wrapper mr-3" style={{ minWidth: '44px', height: '44px', fontSize: '1.25rem' }}>
                      <i className={`fa ${section.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-weight-bold mb-2" style={{ color: '#fd0648', fontSize: '1.15rem' }}>{section.title}</h4>
                      <p className="text-muted m-0" style={{ fontSize: '0.94rem', lineHeight: '1.7' }}>{section.text}</p>
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

export default AcademicSystem;
