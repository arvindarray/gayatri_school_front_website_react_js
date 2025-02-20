import React from 'react';

const Mandatory_disclosure = () => {
    return (
        <div>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
                        {/* You can add additional content or styling here */}
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mas_h">Mandatory Public Disclosure</div>
                            <br />
                            <div>
                                <div className="style4" style={{ marginLeft: '15px', fontSize: '14px' }}>
                                    <h3>A. GENERAL INFORMATION</h3>
                                    <table className="table table-bordered" style={{ fontSize: '14px', width: '97%' }}>
                                        <tbody>
                                            <tr>
                                                <td>NAME OF SCHOOL</td>
                                                <td>Gayatri Gurukul Public School</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#CCCCCC' }}>
                                                <td>AFFILIATION NUMBER</td>
                                                <td>2132114</td>
                                            </tr>
                                            <tr>
                                                <td>SCHOOL CODE</td>
                                                <td>09642105002</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#CCCCCC' }}>
                                                <td>COMPLETE ADDRESS WITH PIN CODE</td>
                                                <td>Saray kali das, Mariahu, Jaunpur 222161</td>
                                            </tr>
                                            <tr>
                                                <td>PRINCIPAL NAME & QUALIFICATION</td>
                                                <td>Mrs. Dr. Vishwakarma Neeta (M.A.,B.ED.,DNYS)</td>
                                            </tr>
                                            <tr style={{ backgroundColor: '#CCCCCC' }}>
                                                <td>SCHOOL EMAIL ID</td>
                                                <td>gayatriyoga666@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>CONTACT DETAILS (LANDLINE/MOBILE)</td>
                                                <td>9125603155</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <br />
                                    <h3>B. DOCUMENTS AND INFORMATION</h3>
                                    <br />
                                    <h3>C. RESULT AND ACADEMICS</h3>
                                    <h4>Result Class IX</h4>
                                    <div></div>

                                    <h4>Result Class X</h4>
                                    <div></div>
                                    <br />
                                    <h3>D. STAFF</h3>
                                    <table className="table table-bordered" style={{ fontSize: '14px', width: '97%' }}>
                                        {/* Table content for staff */}
                                    </table>
                                    <br />
                                    <h3>E. SCHOOL INFRASTRUCTURE</h3>
                                    <br />
                                    <table className="table table-bordered" style={{ fontSize: '14px', width: '97%' }}>
                                        {/* Table content for infrastructure */}
                                    </table>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mandatory_disclosure;
