import React from 'react';

const Manager = () => {
    return (
        <div>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: "400px" }}>
                        {/* You can add content here if needed */}
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mas_h">Manager's Desk</div>
                            <div>
                                <span className="col-lg-4" style={{ float: "left", marginRight: "20px", marginBottom: "20px", marginTop: "10px" }}>
                                    <img src="img/m1-2.jpg" alt="Manager" style={{ border: "0px groove #CC6600", width: "100%" }} />
                                </span>
                                <p>Gayatri Gurukul Public School has a history of setting standards, be it in academics, sports, or performing arts.</p>
                                <p>The school has grown in stature over the years and remains the most sought-after institution dedicated to education in the country.</p>
                                <p>The School integrates innovative ways of teaching and learning, extra-curricular activities, and enhanced exposure through collaboration with other state’s schools in the pursuit of its vision of building a strong and prosperous nation.</p>
                                <p>This year too, we welcome the brightest to join the Gayatri Grurkul Public School fraternity to carry forward the legacy of this school.</p>
                                <p>With best wishes</p>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <strong>
                                    <span className="style8">Dr. S.L. Vishwakarma</span><br />
                                    <strong>Manager</strong>
                                </strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manager;
