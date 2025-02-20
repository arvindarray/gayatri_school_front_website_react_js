import React from 'react';

const Infrastructural = () => {
    return (
        <div>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
                        {/* You can add more content here if needed */}
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mas_h">School Building</div>

                            <div>
                                <span className="col-lg-6" style={{ float: 'left', marginRight: '20px', marginBottom: '20px', marginTop: '10px' }}>
                                    <img src="img/3-2.jpg" alt="School Building" style={{ border: '1px groove #CC6600', width: '100%' }} />
                                </span>

                                <p>
                                    The School has 24*7 electric and water supply. Zero-B Water coolers are installed for safe potable water.
                                    Cleanliness reflects everywhere, keeping in view co-education, energy infrastructure for convenience of students
                                    as well as staff is available. Whether it be regarding safety and security, transportation or health and hygiene,
                                    CCTV cameras, gardens, fire fighting equipment, etc., all are working professionally.
                                </p>
                                <p>
                                    Lush green trees and lovely gardens with colorful flowers adorn the campus and give an aesthetic relief to the residents.
                                    Overall, it is a large, comfortable, loving, and secure campus ideal for educational activities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Infrastructural;
