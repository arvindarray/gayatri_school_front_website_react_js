import React from 'react';
import { Link } from 'react-router-dom';

const Mandatory_disclosure = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Mandatory Disclosure</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Mandatory Public Disclosure</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              
              {/* SARAS LINK Top Callout */}
              <div className="alert alert-info text-center mb-5 shadow-sm border-0 d-flex flex-column align-items-center justify-content-center p-4" style={{ backgroundColor: 'rgba(0, 239, 255, 0.05)', borderLeft: '5px solid #00efff', borderRadius: '12px' }}>
                <h5 className="font-weight-bold text-dark mb-2">SARAS 6.0 Official Document</h5>
                <a
                  href="/imp_doc_school/Mandatory Disclosure Details _ SARAS 6.0.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="premium-btn text-white py-2 px-4 text-decoration-none mt-2"
                >
                  <i className="fa fa-file-pdf mr-2"></i> Download SARAS 6.0 Mandatory Public Disclosure
                </a>
              </div>

              {/* A - GENERAL INFORMATION */}
              <div className="profile-card mb-5 p-4">
                <h4 className="font-weight-bold mb-4 pb-2 border-bottom text-uppercase" style={{ color: '#fd0648', letterSpacing: '1px' }}>
                  A • General Information
                </h4>
                <div className="table-responsive">
                  <table className="table table-hover table-striped table-bordered m-0" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <thead className="bg-dark text-white">
                      <tr>
                        <th style={{ width: '80px' }}>SL NO.</th>
                        <th>INFORMATION</th>
                        <th>DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>1</strong></td>
                        <td>NAME OF THE SCHOOL</td>
                        <td><strong>GAYATRI GURUKUL PUBLIC SCHOOL</strong></td>
                      </tr>
                      <tr>
                        <td><strong>2</strong></td>
                        <td>AFFILIATION NO.(IF APPLICABLE)</td>
                        <td><strong>-</strong></td>
                      </tr>
                      <tr>
                        <td><strong>3</strong></td>
                        <td>SCHOOL CODE (IF APPLICABLE)</td>
                        <td><strong>-</strong></td>
                      </tr>
                      <tr>
                        <td><strong>4</strong></td>
                        <td>COMPLETE ADDRESS WITH PIN CODE</td>
                        <td><strong>SARAYKALIDAS, MARIAHU, JAUNPUR, UTTARPRADESH - 222161</strong></td>
                      </tr>
                      <tr>
                        <td><strong>5</strong></td>
                        <td>PRINCIPAL NAME</td>
                        <td><strong>MRS. NEETA VISHWAKARMA</strong></td>
                      </tr>
                      <tr>
                        <td><strong>6</strong></td>
                        <td>PRINCIPAL QUALIFICATION</td>
                        <td><strong>M.A., B.ED, DNYS</strong></td>
                      </tr>
                      <tr>
                        <td><strong>7</strong></td>
                        <td>SCHOOL EMAIL ID</td>
                        <td><strong>gayatriyoga666@gmail.com</strong></td>
                      </tr>
                      <tr>
                        <td><strong>8</strong></td>
                        <td>CONTACT DETAILS (LANDLINE/MOBILE)</td>
                        <td><strong>+91 9125603155</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* B - DOCUMENTS AND INFORMATION */}
              <div className="profile-card mb-5 p-4">
                <h4 className="font-weight-bold mb-4 pb-2 border-bottom text-uppercase" style={{ color: '#00efff', letterSpacing: '1px' }}>
                  B • Documents and Information
                </h4>
                <div className="table-responsive">
                  <table className="table table-hover table-striped table-bordered m-0" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <thead className="bg-dark text-white">
                      <tr>
                        <th style={{ width: '80px' }}>SL NO.</th>
                        <th>DOCUMENTS/INFORMATION</th>
                        <th style={{ width: '200px' }}>UPLOAD DOCUMENTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>1</strong></td>
                        <td>COPIES OF AFFILIATION / UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
                        <td>
                          <a href="/" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-external-link-alt mr-1"></i> View File
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>2</strong></td>
                        <td>COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION / RENEWAL CERTIFICATE AS APPLICABLE</td>
                        <td>
                          <a href="/imp_doc_school/B 2 COPIES OF TRUST CERTIFICATE.pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>3</strong></td>
                        <td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE BY THE STATE GOVT / UT</td>
                        <td>
                          <a href="/" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-external-link-alt mr-1"></i> View File
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>4</strong></td>
                        <td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT. 2009. AND ITS RENEWAL IF APPLICABLE</td>
                        <td>
                          <a href="/imp_doc_school/B 4 COPIES OF RECOGNITION CERTIFICATE.pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>5</strong></td>
                        <td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td>
                        <td>
                          <a href="/imp_doc_school/B 5 COPY OF VALID BUILDING SAFETY CERTIFICATE.pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>6</strong></td>
                        <td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
                        <td>
                          <a href="/imp_doc_school/B 6 COPY OF VALID FIRE SAFETY CERTIFICATE.pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>7</strong></td>
                        <td>COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION / UPGRADATION / EXTENSION OF AFFILIATION OR SELF CERTIFICATION BY SCHOOL</td>
                        <td>
                          <a href="/imp_doc_school/B 7 COPY OF THE SELF CERTIFICATION.pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>8</strong></td>
                        <td>COPIES OF VALID WATER HEALTH AND SANITATION CERTIFICATES</td>
                        <td>
                          <a href="/imp_doc_school/B 8 COPIES OF VALID WATER HEALTH AND SANITATION.pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>9</strong></td>
                        <td>COPIES OF LAND CERTIFICATE</td>
                        <td>
                          <a href="/imp_doc_school/Gayatri Land Certificate.pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="alert alert-warning mt-4 mb-0 text-justify border-0 p-3" style={{ backgroundColor: 'rgba(255, 193, 7, 0.07)', borderLeft: '4px solid #ffc107', color: '#664d03', borderRadius: '8px' }}>
                  <strong>Note:-</strong> THE SCHOOL NEEDS TO UPLOAD THE SELF ATTESTED COPIES OF ABOVE LISTED DOCUMENTS BY CHAIRMAN/MANAGER/SECRETARY AND PRINCIPAL. IN CASE IT IS NOTICED AT LATER STAGE THAT UPLOADED DOCUMENTS ARE NOT GENUINE THEN SCHOOL SHALL BE LIABLE FOR ACTION AS PER NORMS.
                </div>
              </div>

              {/* C - RESULT AND ACADEMICS */}
              <div className="profile-card mb-5 p-4">
                <h4 className="font-weight-bold mb-4 pb-2 border-bottom text-uppercase" style={{ color: '#ffc107', letterSpacing: '1px' }}>
                  C • Result and Academics
                </h4>
                <div className="table-responsive">
                  <table className="table table-hover table-striped table-bordered m-0" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <thead className="bg-dark text-white">
                      <tr>
                        <th style={{ width: '80px' }}>SL NO.</th>
                        <th>DOCUMENTS/INFORMATION</th>
                        <th style={{ width: '200px' }}>UPLOAD DOCUMENTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>1</strong></td>
                        <td>FEE STRUCTURE OF THE SCHOOL</td>
                        <td>
                          <a href="/imp_doc_school/C 1 FEE STRUCTURE OF THE SCHOOL.pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>2</strong></td>
                        <td>ANNUAL ACADEMIC CALENDAR</td>
                        <td>
                          <a href="/imp_doc_school/C 2 ANNUAL ACADEMIC CALANDER.pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>3</strong></td>
                        <td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
                        <td>
                          <a href="/imp_doc_school/C 3 LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC).pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>4</strong></td>
                        <td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
                        <td>
                          <a href="/imp_doc_school/C 4 LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS.pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td><strong>5</strong></td>
                        <td>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY</td>
                        <td><strong>Not Applicable</strong></td>
                      </tr>
                      <tr>
                        <td><strong>6</strong></td>
                        <td>ALL HARASSMENT COMMITTEE (POCSO, POSH, SEXUAL HARASSMENT ETC)</td>
                        <td>
                          <a href="/imp_doc_school/C 6 All Harassment Committee (POCSO, POSH, SEXUAL HARASSMENT ETC).pdf" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fa fa-file-pdf mr-1"></i> View PDF
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* D - STAFF (TEACHING) */}
              <div className="profile-card mb-5 p-4">
                <h4 className="font-weight-bold mb-4 pb-2 border-bottom text-uppercase" style={{ color: '#fd0648', letterSpacing: '1px' }}>
                  D • Staff (Teaching)
                </h4>
                <div className="table-responsive">
                  <table className="table table-hover table-striped table-bordered m-0" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <thead className="bg-dark text-white">
                      <tr>
                        <th style={{ width: '80px' }}>SL NO.</th>
                        <th>INFORMATION</th>
                        <th>DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>1</strong></td>
                        <td>PRINCIPAL</td>
                        <td><strong>MRS. NEETA VISHWAKARMA</strong></td>
                      </tr>
                      <tr>
                        <td><strong>2</strong></td>
                        <td>TOTAL NO. OF TEACHERS</td>
                        <td><strong>19</strong></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>• PGT</td>
                        <td><strong>0</strong></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>• TGT</td>
                        <td><strong>6</strong></td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>• PRT</td>
                        <td><strong>8</strong></td>
                      </tr>
                      <tr>
                        <td><strong>3</strong></td>
                        <td>TEACHERS SECTION RATIO</td>
                        <td><strong>1:1.5</strong></td>
                      </tr>
                      <tr>
                        <td><strong>4</strong></td>
                        <td>DETAILS OF SPECIAL EDUCATOR</td>
                        <td><strong>1</strong></td>
                      </tr>
                      <tr>
                        <td><strong>5</strong></td>
                        <td>DETAILS OF COUNSELLOR AND WELNESS TEACHER</td>
                        <td><strong>1</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* E - SCHOOL INFRASTRUCTURE */}
              <div className="profile-card mb-5 p-4">
                <h4 className="font-weight-bold mb-4 pb-2 border-bottom text-uppercase" style={{ color: '#00efff', letterSpacing: '1px' }}>
                  E • School Infrastructure
                </h4>
                <div className="table-responsive">
                  <table className="table table-hover table-striped table-bordered m-0" style={{ borderRadius: '8px', overflow: 'hidden' }}>
                    <thead className="bg-dark text-white">
                      <tr>
                        <th style={{ width: '80px' }}>SL NO.</th>
                        <th>INFORMATION</th>
                        <th>DETAILS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>1</strong></td>
                        <td>TOTAL CAMPUS AREA OF THE SCHOOL (IN SQ MTR)</td>
                        <td><strong>6126</strong></td>
                      </tr>
                      <tr>
                        <td><strong>2</strong></td>
                        <td>NO AND SIZE OF THE CLASS ROOMS (IN SQ MTR)</td>
                        <td><strong>15 &amp; 47</strong></td>
                      </tr>
                      <tr>
                        <td><strong>3</strong></td>
                        <td>NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR)</td>
                        <td><strong>3 &amp; 56</strong></td>
                      </tr>
                      <tr>
                        <td><strong>4</strong></td>
                        <td>INTERNET FACILITY (Y/N)</td>
                        <td><strong>YES</strong></td>
                      </tr>
                      <tr>
                        <td><strong>5</strong></td>
                        <td>NO. OF GIRLS TOILETS</td>
                        <td><strong>4</strong></td>
                      </tr>
                      <tr>
                        <td><strong>6</strong></td>
                        <td>NO. OF BOYS TOILETS</td>
                        <td><strong>4</strong></td>
                      </tr>
                      <tr>
                        <td><strong>7</strong></td>
                        <td>LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL</td>
                        <td>
                          <a href="https://www.youtube.com/watch?v=Z_K7Nk4KXek" className="btn btn-sm btn-outline-danger px-3 font-weight-bold" target="_blank" rel="noreferrer">
                            <i className="fab fa-youtube mr-1"></i> Watch Video
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mandatory_disclosure;
