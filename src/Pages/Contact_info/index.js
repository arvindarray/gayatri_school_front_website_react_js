import React from 'react';

const Contact_info = () => {
    return (
        <div>
            <div className="container-fluid page-header">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center" style={{ minHeight: '400px' }}>
                        {/* Content or image can go here */}
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mas_h">Contact Us</div>
                            <div>
                                <span
                                    className="col-lg-6"
                                    style={{
                                        float: 'left',
                                        marginRight: '20px',
                                        marginBottom: '20px',
                                        marginTop: '10px',
                                    }}
                                >
                                    <iframe
                                        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1679829915465!2d82.
                                        // 62042227498065!3d25.599333715296098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399022437a
                                        // 52ff03%3A0x1e236320cec65644!2sSt%20Xavier%20inter%20college!5e0!3m2!1sen!2sin!4v1697001610659!5m2!1sen!2sin"
                                        src="https://www.google.com/maps/dir//JJG7%2B888,+Mariahu+Bypass+Rd,+Mariahu,+Barahila,+Uttar+Pradesh+222105/@25.6181227,82.5752953,12702m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x39902305b68597f3:0x95c741d5c84d1415!2m2!1d82.6133175!2d25.625785!5m1!1e4?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                                        width="100%"
                                        height="350px"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Gayatri Gurukul Public School"
                                    ></iframe>
                                </span>

                                <span className="style9">
                                    <strong>Gayatri Gurukul Public School</strong>
                                </span>
                                <br />
                                <br />
                                <b>Address:</b> Saraikalidas Mariahu Jaunpur (U.P)
                                <br />
                                <br />
                                <b>Phone:</b> +91 9125603155
                                <br />
                                <br />
                                <b>E-mail:</b> gayatriyoga666@gmail.com
                                <br />
                                <br />
                                <b>Website:</b>{' '}
                                <a href="http://www.gayatrigurukul.in" className="style8">
                                    www.gayatrigurukul.in
                                </a>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact_info;
