import React from 'react';
import { Link } from 'react-router-dom';

const Manager = () => {
    return (
        <div className="animate-fade-in">
            {/* Page Header Banner */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                        <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Manager's Desk</h1>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
                            <p className="m-0 px-2">/</p>
                            <p className="m-0 text-uppercase text-cyan-accent">Manager's Desk</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="profile-card">
                        <div className="row align-items-center">
                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="profile-image-wrapper">
                                    <img src="img/m1-2.jpg" alt="Manager" className="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="profile-text-content">
                                    <div className="text-left mb-4">
                                        <span className="about-sub-header">Leadership Message</span>
                                        <h2 className="about-title">Manager's Message</h2>
                                    </div>
                                    <p className="mb-3 text-justify">Gayatri Gurukul Public School has a history of setting standards, be it in academics, sports, or performing arts.</p>
                                    <p className="mb-3 text-justify">The school has grown in stature over the years and remains the most sought-after institution dedicated to education in the country.</p>
                                    <p className="mb-3 text-justify">The School integrates innovative ways of teaching and learning, extra-curricular activities, and enhanced exposure through collaboration with other state’s schools in the pursuit of its vision of building a strong and prosperous nation.</p>
                                    <p className="mb-4 text-justify">This year too, we welcome the brightest to join the Gayatri Gurukul Public School fraternity to carry forward the legacy of this school.</p>
                                    
                                    <div className="profile-signature text-right">
                                        <h5 className="font-weight-bold mb-1" style={{ color: '#fd0648' }}>Dr. S.L. Vishwakarma</h5>
                                        <small className="text-uppercase font-weight-bold text-muted">Manager</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manager;
