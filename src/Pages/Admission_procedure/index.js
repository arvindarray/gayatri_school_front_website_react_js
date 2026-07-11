import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionProcedure = () => {
  const steps = [
    "Admissions are granted purely on merit.",
    "For Admission, Registration, Test, and personal Interview are essential.",
    "The date and time for Registration, Test, Personal Interview, and Admission will be displayed on the 'Notice Board'.",
    "Admission is possible if there is a vacancy in a particular class.",
    "Parents/Guardians have to abide by the rules and regulations and amendments from time to time. The school management is fully entitled to make any changes regarding instructions and direction.",
    "Prospectus and Application forms for Registration will be available from the school office.",
    "Preference will be given to good players and to those who excel in co-curricular activities like debates, dramatics, music, dance, and other social activities.",
    "Admission to class XI is not automatic for the students of class X of this school. It will depend on the marks obtained in class X as well as the conduct record of the students during their years in the school.",
    "When a student is admitted on a Transfer Certificate, he/she shall not be placed in any class higher than that for which the certificate shows him/her to be qualified, nor will he/she be promoted before the end of a school year.",
    "No student will be admitted without a Transfer Certificate from the school last attended and in no case shall a student be permitted to attend a class pending formal admission.",
    "A student who does not complete the school calendar year is not eligible for promotion; hence admission will be done accordingly.",
    "Generally, no admissions are made to class X & XII.",
    "In case of re-admission after withdrawal, admission fee will be levied again.",
    "The Principal reserves the right to admit or to refuse admission to anybody without assigning any reason for his action."
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Admission Procedure</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Admission</p>
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
                <img src="img/1-2.jpg" alt="Admission Procedure" className="img-fluid" />
              </div>
            </div>

            {/* Right Admission Steps */}
            <div className="col-lg-7">
              <div className="text-left mb-4">
                <span className="about-sub-header">Registration Guidelines</span>
                <h2 className="about-title">Admission Guidelines</h2>
              </div>
              <p className="about-para text-justify mb-4">
                Admissions are granted to all boys and girls irrespective of caste, creed, or social status. The minimum age of admission in Nursery is 4 years at the time of admission. For other classes, admission is on the basis of transfer certificates and entrance tests.
              </p>

              <div className="timeline-container">
                {steps.map((step, index) => (
                  <div key={index} className="timeline-item mb-4">
                    <div className="premium-content-card m-0" style={{ padding: '20px' }}>
                      <span className="badge badge-primary mb-2" style={{ backgroundColor: '#fd0648', fontSize: '0.85rem' }}>Rule {index + 1}</span>
                      <p className="text-muted m-0" style={{ fontSize: '0.94rem', lineHeight: '1.6' }}>{step}</p>
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

export default AdmissionProcedure;
