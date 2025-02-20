import React from 'react';

const TransferCertificate = () => {
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
              <div className="mas_h">Transfer Certificate</div>

              <div className="style44">
                <table className="style6">
                  <tbody>
                    <tr>
                      <td className="style10">Search Admission No. :</td>
                      <td className="style7">
                        <input
                          name="ctl00$ContentPlaceHolder1$TextBox1"
                          type="text"
                          id="ContentPlaceHolder1_TextBox1"
                          style={{ width: '177px' }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="style8"></td>
                      <td className="style7">
                        <input
                          type="image"
                          name="ctl00$ContentPlaceHolder1$ImageButton1"
                          id="ContentPlaceHolder1_ImageButton1"
                          src="buttonimages/search-button03.png"
                          style={{ height: '35px', width: '102px' }}
                        />
                        &nbsp;
                        <span
                          id="ContentPlaceHolder1_lblmsg"
                          style={{
                            fontSize: 'x-large',
                            fontFamily: 'Cambria',
                            fontStyle: 'italic',
                          }}
                        ></span>
                      </td>
                    </tr>

                    <tr>
                      <td className="style8" colSpan="2">
                        <div id="ContentPlaceHolder1_pnlContents">
                          <img
                            id="ContentPlaceHolder1_Image1"
                            src="#"
                            style={{ height: '950px', width: '95%' }}
                            alt="Transfer Certificate"
                          />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="style8" colSpan="2">
                        <p style={{ textAlign: 'center' }}></p>
                      </td>
                    </tr>

                    <tr>
                      <td className="style9">&nbsp;</td>
                      <td>&nbsp;</td>
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

export default TransferCertificate;
