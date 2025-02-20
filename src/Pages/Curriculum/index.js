import React from 'react';

const Curriculum = () => {
  return (
    <div>
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
            {/* You can add content here */}
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mas_h">Curriculum</div>

              <div>
                <span className="col-lg-6" style={{ float: 'left', marginRight: '20px', marginBottom: '20px', marginTop: '10px' }}>
                  <img src="img/2-2.jpg" alt="Curriculum Image" style={{ border: '1px groove #CC6600', width: '100%' }} />
                </span>
                <p>
                  The curriculum is based on CBSE’s latest guidelines. Apart from planned and time-bound course knowledge, we inculcate in our standard curriculum motor and communication skills, etiquette mannerism, truth, honesty, bravery, and compassion through various means. The promotion of a student to the next Senior class is based on performance. The progress report includes other achievements too.
                </p>

                <p>
                  Subjects Offered:
                  <br />
                  English, Hindi, Urdu, Mathematics, Science, Social Science, General Knowledge, Computer Science (Information Technology), Arts & Craft, Physical Training
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
