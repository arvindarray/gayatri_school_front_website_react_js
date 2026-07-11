import React from "react";
import { Link } from "react-router-dom";

const Abouts = () => {
    return (
        <div className="animate-fade-in">
            {/* Page Header Banner */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                        <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">About Our School</h1>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
                            <p className="m-0 px-2">/</p>
                            <p className="m-0 text-uppercase text-cyan-accent">About School</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Content Section */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="profile-card">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mb-4 mb-lg-0">
                                <div className="profile-image-wrapper">
                                    <img
                                        src="/img/1-2.jpg"
                                        className="img-fluid"
                                        alt="Gayatri Gurukul Public School"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="profile-text-content">
                                    <div className="text-left mb-4">
                                        <span className="about-sub-header">Established 1988</span>
                                        <h2 className="about-title">Gayatri Gurukul Public School</h2>
                                    </div>
                                    <p className="mb-4 text-justify">
                                        Gayatri Gurukul Public School, Mariahu was established and is administered by Gayatri Gurukul Educational Society. It is registered under the societies Registration Act XXI of 1860 (No. 16 of 1988-89), is a bonafide member of the Catholic Educational Association of UP & UK, and is affiliated with C.B.S.E. of New Delhi.
                                    </p>
                                    <p className="text-justify">
                                        This institution was started with the object of imparting an integral formation to students that they may face life fearlessly, grow up to the full stature of their personality, and contribute their share for the progress and well-being of our country as well as the world at large. Toward this integral formation of the students, their spiritual, intellectual, moral, physical, cultural, and social aspects are taken into account. It is not a service-oriented formation but insists on the formation of a noble personality with a healthy relationship with God and the entire creation, who will hold their heads high without bowing before insolent might.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abouts;
