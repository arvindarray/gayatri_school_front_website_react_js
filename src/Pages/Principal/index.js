import React from 'react';
import { Link } from 'react-router-dom';

const Principal = () => {
    return (
        <div className="animate-fade-in">
            {/* Page Header Banner */}
            <div className="container-fluid page-header py-5 mb-5">
                <div className="container py-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
                        <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Principal's Desk</h1>
                        <div className="d-inline-flex text-white">
                            <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
                            <p className="m-0 px-2">/</p>
                            <p className="m-0 text-uppercase text-cyan-accent">Principal's Desk</p>
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
                                    <img src="img/m2-2.jpg" className="img-fluid" alt="Principal" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="profile-text-content">
                                    <div className="text-left mb-4">
                                        <span className="about-sub-header">From the Principal</span>
                                        <h2 className="about-title">Principal's Message</h2>
                                    </div>
                                    <p className="mb-3 text-justify">
                                        Gayatri Gurukul Public School, throughout its glorious history, has played a pivotal role in the field of education in India. It provides technology-based integrated and inclusive education in a disciplined, dynamic, vibrant, and hygienic environment. We try to nurture students with adequate emphasis on all the three aspects of integrated education, e.g. physical, intellectual, and value education. Gayatri Gurukul Public School is equipped with smart lecture rooms, computer laboratories, enriched libraries, and sports grounds.
                                    </p>
                                    <p className="mb-3 text-justify">
                                        Besides infrastructure, the school is valued for its academic rigor, in particular, the delivery of student-centric content.
                                    </p>
                                    <p className="mb-4 text-justify">
                                        Gayatri Gurukul Public school fraternity has successfully conducted themselves over the years for achieving excellence. The faculty members continue to discharge their duties with dedication, commitment, passion, and courage. Non-faculty members of the Gayatri Gurukul Public School fraternity, with different but complementary services such as hostels, library, accounts, administration, etc., are valued colleagues. A lot has been done, and much more is desired to take it to a higher trajectory of growth. For this, we believe that all the stakeholders are equally significant, but the most important stakeholder and the strength of Gayatri Gurukul Public School is the input of the system, i.e. the STUDENTS, who pass through the various processes designed by the faculty and non-faculty members.
                                    </p>
                                    <p className="mb-4 text-justify">
                                        I convey my good wishes to all those who are aspiring to get admitted to Gayatri Gurukul Public School.
                                    </p>
                                    
                                    <div className="profile-signature text-right">
                                        <h5 className="font-weight-bold mb-1" style={{ color: '#fd0648' }}>Dr. Vishwakarma Neeta (M.A.,B.ED.,DNYS)</h5>
                                        <small className="text-uppercase font-weight-bold text-muted">Principal</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Principal;
