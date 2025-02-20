import React from 'react';

const PlayGround = () => {
  return (
    <div>
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
            {/* Optional content for header */}
          </div>
        </div>
      </div>
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mas_h">Play Ground</div>
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
                    src="img/3-2.jpg"
                    alt="School Playground"
                    style={{
                      border: '1px groove #CC6600',
                      width: '100%',
                    }}
                  />
                </span>
                <p>
                  Development of a child’s physical health is an essential part of education in the school. To accomplish this,
                  the school has a huge playground. There are also proper arrangements for indoor games.
                </p>
                <br />
                <p>
                  The school offers all modern outdoor games like cricket, football, hockey, volleyball, badminton, table tennis,
                  judo karate, carom, and chess to children for their physical growth and mental relaxation.
                </p>
                <br />
                <p>
                  Yoga, Pranayama, and morning exercise are regular features that play a great role in giving tranquility to the
                  mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGround;
