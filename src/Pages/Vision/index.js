import React from 'react';

const Vision = () => {
  return (
    <div>
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column justify-content-center" style={{ minHeight: "400px" }}>
            {/* You can add any content here */}
          </div>
        </div>
      </div>
      
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mas_h">Vision &amp; Mission</div>

              <div>
                <span 
                  className="col-lg-6" 
                  style={{ float: "left", marginRight: "20px", marginBottom: "20px", marginTop: "10px" }}
                >
                  <img 
                    src="img/2-2.jpg" 
                    alt="School Vision" 
                    style={{ border: "1px groove #CC6600", width: "100%" }} 
                  />
                </span>
                
                <strong>VISION OF OUR SCHOOL</strong>
                <p>
                  To create the most respected brands that provide highest quality services to students worldwide in a sustainable and scalable way.
                </p>
                <p>
                  To provide each student the education that promotes self-discipline, sense of responsibility, social and global consciousness, and excellence in learning.
                </p>
                
                <strong>MISSION OF OUR SCHOOL</strong>
                <p>
                  To impart knowledge in order to activate the intellect, generate curiosity, form proper attitude, inculcate human values, and fearlessness.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
