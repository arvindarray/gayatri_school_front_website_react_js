import React from 'react';

const Special_features = () => {
    return (
        <div>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: "400px" }}>
                        {/* You can add header or banner content here */}
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mas_h">Special Features</div>
                            <div>
                                <span className="col-lg-6" style={{ float: "left", marginRight: "20px", marginBottom: "20px", marginTop: "10px" }}>
                                    <img src="img/1-2.jpg" alt="Special feature image" style={{ border: "1px groove #CC6600", width: "100%" }} />
                                </span>

                                <ul>
                                    <li>1. Environment Friendly Lecture Halls.</li>
                                    <li>2. Well Established Library.</li>
                                    <li>3. Well Equipped Labs.</li>
                                    <li>4. Modern Computer Lab with Internet Facility.</li>
                                    <li>5. Drinking water facility with R.O. System.</li>
                                    <li>6. Huge Playground.</li>
                                    <li>7. Sports items of various Games.</li>
                                    <li>8. Highly Hygienic Canteen Facility.</li>
                                    <li>9. 24 Hours Generator Facility.</li>
                                    <li>10. Conveyance Facility.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Special_features
