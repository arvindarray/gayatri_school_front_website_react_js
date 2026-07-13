import React from 'react';
import { Link } from 'react-router-dom';

const GeneralInstruction = () => {
  const instructions = [
    "Parents are required to send their children to school in neat & clean school uniform.",
    "Students along with their class teacher are required to attend school prayer punctually and regularly.",
    "Students must bring their prescribed text-books and stationery to school according to their daily class Time-Table.",
    "Students are expected to be courteous, friendly, loyal, obedient, respectful, tolerant, and upright at all times in and outside the school.",
    "Students are required to attend school and all its functions neatly dressed in the prescribed uniform unless permitted otherwise.",
    "Regular payment of fees as per schedule will help us avoid any unpleasantness at the time of Examination or when the promotion results are declared.",
    "Students must develop the habit of reading to widen their knowledge and to keep pace with the fast-changing world. Good books, magazines, periodicals, etc. are available in the school library for the students to read in school or borrow as per rules.",
    "Students are expected to take good care of their books and personal belongings. It is advisable not to bring money and valuable articles to school.",
    "The school will not be responsible for article or money transactions between students.",
    "Students must take care of the school property. Electric lights, fans, and taps should be turned off when not in use.",
    "Any damage to the building, furniture, equipment, apparatus, books, etc. will have to be made good by the student concerned.",
    "Schedule of depositing tuition/transport and other fees is mentioned in the Fee-card.",
    "A student has to pay the transport charges, tuition fee for the whole year even if he/she leaves the school in the middle of a session."
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">General Instructions</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Instructions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            {/* Left Image Column */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="profile-image-wrapper sticky-top" style={{ top: '30px', zIndex: 1 }}>
                <img src="img/about.jpg" alt="General Instructions" className="img-fluid" />
              </div>
            </div>

            {/* Right Instructions List */}
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <span className="about-sub-header">Rules & Regulations</span>
                <h2 className="about-title">General Code of Conduct</h2>
              </div>
              <p className="about-para text-justify mb-4">
                To maintain standard discipline and academic environment, students and parents are advised to adhere to the school rules listed below.
              </p>

              <div className="timeline-container">
                {instructions.map((item, index) => (
                  <div key={index} className="timeline-item mb-4">
                    <div className="premium-content-card m-0" style={{ padding: '20px' }}>
                      <span className="badge badge-primary mb-2" style={{ backgroundColor: '#fd0648', fontSize: '0.85rem' }}>Item {index + 1}</span>
                      <p className="text-muted m-0" style={{ fontSize: '0.94rem', lineHeight: '1.6' }}>{item}</p>
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

export default GeneralInstruction;
