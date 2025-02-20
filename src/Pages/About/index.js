import React from "react";

const Abouts = () => {
    return (
        <div>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: "400px" }}>
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="mas_h">Gayatri Gurukul Public School</div>

                            <div>
                                <span
                                    className="col-lg-6"
                                    style={{ float: "left", marginRight: "20px", marginBottom: "20px", marginTop: "10px" }}
                                >
                                    <img
                                        src="/img/1-2.jpg"  // Ensure this path is correct
                                        style={{ width: "100%", maxWidth: "500px", border: "1px solid #CC6600" }}  // Adjust styling as needed
                                        alt="Gayatri Gurukul Public School"
                                    />
                                </span>
                                Gayatri Gurukul Public School’s School, Mariahu was established and is administered by Gayatri Gurukul Educational Society registered under the societies Registration Act XXI of 1860 No. 16 of 1988-89 and is also a bona fide member of the Catholic Educational Association of UP+UK and affiliated with C.B.S.E. of New Delhi.
                                <br /><br />
                                This institution was started with the object of imparting an integral formation to students that they may face life fearlessly, grow up to the full stature of their personality, and contribute their share for the progress and well-being of our country as well as the world at large. Towards this integral formation of the students, their spiritual, intellectual, moral, physical, cultural, and social aspects are taken into account. It is not a service-oriented formation but insists on the formation of a noble personality with a healthy relationship with God and the entire creation, who will hold their heads high without bowing before insolent might.
                                <br />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abouts;
