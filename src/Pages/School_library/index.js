import React from 'react';

const SchoolLibrary = () => {
  return (
    <div>
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
            {/* You can add content here for the header */}
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mas_h">Library</div>
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
                    src="img/1-2.jpg"
                    alt="School Library"
                    style={{
                      border: '1px groove #CC6600',
                      width: '100%',
                    }}
                  />
                </span>
                <p>
                  The school is proud to possess a well-furnished library complete with the best titles. The library
                  supports an open-shelf system that provides easy access to books. The school library supports a state
                  of the art computerized issue/return system and subscribes to various periodicals.
                </p>
                <br />
                <p>
                  The school library is open to all the bonafide students of the school, and all the classes are provided
                  with one Library period per week. Moreover, the school provides the facility of class libraries at the
                  junior level to inculcate reading habits in children at an early stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolLibrary;
