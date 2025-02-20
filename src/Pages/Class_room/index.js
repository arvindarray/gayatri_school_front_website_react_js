import React from 'react';

const ClassRoom = () => {
  return (
    <div>
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
            {/* You can add some content here for the header */}
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mas_h">Class Room</div>
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
                    alt="Classroom"
                    style={{
                      border: '1px groove #CC6600',
                      width: '100%',
                    }}
                  />
                </span>
                <p>
                  Our classrooms are spacious and equipped with ceiling fans and modern styled benches & desks.
                  The big windows in each classroom receive natural light. The big and beautiful blackboards make
                  them enticing.
                </p>
                <br />
                <strong>
                  <span className="style8">Digital Class Room</span>
                </strong>
                <br />
                <p>
                  Digital teaching system transforms from an orthodox, laborious method of verbal explanation to a
                  very interactive and graphical presentation, making teaching more interesting to the teachers and
                  learning easy and enjoyable for the students. It is a good education aid and technology to classroom
                  teaching. It engages the entire class in the learning process, thereby making interaction interesting
                  and exciting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassRoom;
