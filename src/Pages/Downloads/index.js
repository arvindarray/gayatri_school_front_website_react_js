import React from 'react';

const Downloads = () => {
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
              <div className="mas_h">Downloads</div>
              <br />
              {/* Example of downloadable items */}
              <div>
                <ul>
                  <li>
                    <a href="path-to-file1.pdf" download>
                      Download File 1
                    </a>
                  </li>
                  <li>
                    <a href="path-to-file2.pdf" download>
                      Download File 2
                    </a>
                  </li>
                  <li>
                    <a href="path-to-file3.pdf" download>
                      Download File 3
                    </a>
                  </li>
                </ul>
              </div>
              {/* You can add more downloadable items here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
