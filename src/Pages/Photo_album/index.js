import React from 'react';

const PhotoAlbum = () => {
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
              <div className="mas_h">Photo Gallery</div>

              <div className="style4">
                <table id="ContentPlaceHolder1_dlalu" cellspacing="0" cellpadding="5" style={{ borderCollapse: 'collapse' }}>
                  <tbody>
                    <tr>
                      <td align="center" valign="bottom">
                        <div className="gals">
                          <br />
                          <a href="photo_gallery1da5.html?alu_id=2">
                            <img
                              id="ContentPlaceHolder1_dlalu_Image1_0"
                              className="g_img"
                              src="pic_gal/download.jpg"
                              alt="Teacher's Day 2023"
                              style={{ height: '130px', width: '170px' }}
                            />
                          </a>
                          <br />
                          &nbsp;
                          <span
                            id="ContentPlaceHolder1_dlalu_alu_idLabel_0"
                            style={{ color: '#ffffff', fontFamily: 'Andalus', fontSize: 'large' }}
                          >
                            Teacher's Day 2023
                          </span>
                          <br />
                          <span
                            id="ContentPlaceHolder1_dlalu_Label1_0"
                            style={{ color: '#FFFFCC', fontWeight: 'bold' }}
                          >
                            Event Date :
                          </span>
                          <span id="ContentPlaceHolder1_dlalu_Label2_0" style={{ color: 'white' }}>
                            05/09/2023
                          </span>
                        </div>
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
  );
};

export default PhotoAlbum;
