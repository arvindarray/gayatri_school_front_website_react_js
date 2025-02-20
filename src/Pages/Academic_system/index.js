import React from 'react';
import '../../academicsystem.css'; // Assuming you move styles to a CSS file

const AcademicSystem = () => {
  return (
    <div>
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
            {/* Optional: Add title or image here */}
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mas_h">Academic System</div>

              <div>
                <span className="col-lg-6 img-container">
                  <img src="img/1-2.jpg" alt="Computer Education" className="img-fluid" />
                </span>

                <div className="content-section">
                  <strong>COMPUTER EDUCATION:</strong>
                  <p>
                    The school offers computer education to the students from class 1st onwards. The computer lab is well
                    equipped with all modern facilities and smart classes.
                  </p>

                  <strong>SCHOOL CABINET:</strong>
                  <p>
                    Apart from the house system, the school has a board of prefects led by the Head Boy, Head Girl, and
                    Cabinet Members.
                  </p>

                  <strong>MONITORS:</strong>
                  <p>
                    During the absence of teachers from the class, the monitor along with the sub-monitor assumes
                    responsibility for order and discipline in the class.
                  </p>

                  <strong>CLUBS:</strong>
                  <p>
                    To promote all-round development, participation in clubs is compulsory for every child. These clubs
                    include: English Literary Club, Hindi Literary Club, Science Club, Music Club, Art Club, Nature Club,
                    Dance Club, and Environmental Club.
                  </p>

                  <strong>ASSESSMENT:</strong>
                  <p>
                    The progress of students is evaluated continuously through "Parent Teacher Meetings," during which the
                    progress of each student is discussed. Suggestions from guardians are welcomed, and necessary actions
                    are taken by the school and concerned teachers.
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

export default AcademicSystem;
