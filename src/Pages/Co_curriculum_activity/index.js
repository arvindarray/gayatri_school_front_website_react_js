import React from 'react'
import '../../academicsystem.css'


const CoCurriculumActivity = () => {

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
              <div className="mas_h">Co-curricular Activity</div>

              <div>
                <span className="col-lg-6" style={{ marginRight: '20px', marginBottom: '20px', marginTop: '10px' }}>
                  <img
                    src="img/1-2.jpg"
                    alt="Co-curricular Activity"
                    style={{ border: '1px groove #CC6600', width: '100%' }}
                  />
                </span>
                <p>
                  Co-curricular Activities form an integral part of the school as they help to develop self-confidence and 
                  self-esteem in students. Co-curricular activities reflect the diverse interests of students and lead to their
                   all-round development.
                </p>
                <p>
                   Gayatri Gurukul Public school considers not only the cognitive development of its students but also the other aspects 
                  of their personality as equally significant for development and nurturing. To enhance the students' all-round
                   development and cultivate varied interests, a strong academic foundation is complemented by a rich selection of
                    co-curricular activities. These activities form a regular part of the school curriculum, and a spirit of healthy 
                    competition is generated through inter-house, interclass, and inter-school competitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoCurriculumActivity;
