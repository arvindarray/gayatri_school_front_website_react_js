import React from 'react';

const SchoolLab = () => {
  return (
    <div>
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
            {/* Optional content for the header */}
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mas_h">School Laboratory</div>
              <div>
                <span
                  className="col-lg-6"
                  style={{
                    float: 'left',
                    marginRight: '20px',
                    marginBottom: '20px',
                    marginTop: '10px',
                  }}
                >
                  <img
                    src="img/2-2.jpg"
                    alt="School Laboratories"
                    style={{
                      border: '1px groove #CC6600',
                      width: '100%',
                    }}
                  />
                </span>
                <p>
                  The school has six separate laboratories for Physics, Chemistry, Biology, Math, Computer, and Composite lab. 
                  All of them are well-equipped with modern technology apparatus to cover all experiments, catering to the requirements
                  for syllabus coverage from standard VI to XII (Science). A well-equipped Computer Laboratory is available to make
                  the students computer-confident. It consists of 40 systems with well-equipped networking facilities, internet access,
                  and all students, including faculty members, can practice using the internet.
                </p>
                <br />
                <p>
                  We believe in providing both theoretical and practical knowledge. Hence, we have adequately equipped laboratories
                  for different streams/subjects. Students are regularly taken to the labs to gain hands-on experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolLab;
