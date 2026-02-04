import { Link } from 'react-router'

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid bg-foot text-white py-5 px-sm-3 px-lg-5" style={{ marginTop: '50px' }}>
                <div className="row pt-5">
                    <div className="col-lg-4 col-md-12 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: '5px' }}>About School</h5>
                        <p>
                            At Gayatri Gurukul Public School, we value each child as an individual.We expect and enable every child to
                            achieve their best success, and effort is rewarded at Gayatri Gurukul Public School. Our aim is to ensure that
                            every child develops excellent basic skills in reading, writing, and mathematics together with a good general
                            knowledge of the world around them.
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-12 offset-1 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Important Links</h5>
                        <div className="d-flex flex-column justify-content-start">
                            <Link className="text-white mb-2" to="/procedure">
                                <i className="fa fa-angle-right mr-2"></i>Admission Procedure
                            </Link>
                            <Link className="text-white mb-2" to="/Down">
                                <i className="fa fa-angle-right mr-2"></i>Downloads
                            </Link>
                            <Link className="text-white" to="/adminlogin">
                                <i className="fa fa-angle-right mr-2"></i>Admin Login
                            </Link>
                            <Link className="text-white mb-2" to="http://cbse.nic.in/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-angle-right mr-2"></i>CBSE
                            </Link>
                            <Link className="text-white mb-2" to="http://www.ncert.nic.in/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-angle-right mr-2"></i>NCERT
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12 mb-5">
                        <h5 className="text-primary text-uppercase mb-4" style={{ letterSpacing: '5px' }}>Get In Touch</h5>
                        <p><i className="fa fa-map-marker-alt mr-2"></i>Saraikalidas, Mariahu, Jaunpur (U.P)</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+91 9125603155</p>
                        <p><i className="fa fa-envelope mr-2"></i>gayatriyoga666@gmail.com</p>
                        <div className="d-flex justify-content-start mt-4">
                            <Link className="btn btn-outline-light btn-square mr-2" to="#" aria-label="Twitter">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link className="btn btn-outline-light btn-square mr-2" to="#" aria-label="Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="btn btn-outline-light btn-square mr-2" to="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                <i className="fab fa-youtube"></i>
                            </Link>
                            <Link className="btn btn-outline-light btn-square" to="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-red text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: 'rgba(256, 256, 256, .1) !important' }}>
                <div className="row">
                    <div className="col-lg-12 text-center mb-3 mb-md-0">
                        <p className="m-0 text-white">
                            Managed by <a href="#">Arvind +91 6387056457</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
