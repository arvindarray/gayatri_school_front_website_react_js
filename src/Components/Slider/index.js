import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [images.length]);

    return (
        <div>
            <div className="container-fluid p-0 pb-5 mb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {images.map((_, index) => (
                            <li
                                key={index}
                                data-target="#header-carousel"
                                data-slide-to={index}
                                className={index === activeIndex ? "active" : ""}
                            ></li>
                        ))}
                    </ol>
                    <div className="carousel-inner">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                                style={{ minHeight: "300px" }}
                            >
                                <img
                                    className="position-relative w-100"
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    style={{ minHeight: "300px", objectFit: "cover" }}
                                />
                                {index === 0 && (
                                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                                        <div className="p-5" style={{ width: "100%", maxWidth: "900px" }}>
                                            <h5 className="text-white text-uppercase mb-md-3">Gayatri Gurukul Public School</h5>
                                            <h1 className="display-3 text-white mb-md-4">Where Learning Begins</h1>
                                            <Link to="/about" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">
                                                Explore Our School
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container-fluid py-5">
                {/* About Us Section */}
                <div className="container pb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded mb-4 mb-lg-0" src="img/about.jpg" alt="About Us Image" />
                        </div>
                        <div className="col-lg-7">
                            <div className="text-left mb-4">
                                <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>About Us</h5>
                                <h1>Gayatri Gurukul Public School</h1>
                            </div>
                            <p>
                                Gayatri Gurukul Public school, Mariahu was established and is administered
                                by Gayatri Gurukul Public school Educational Society registered under the societies Registration Act XXI of 1860 No. 16 of 1988-89 and also is a bonflde member of Catholic Educational association, of up+uk and affiliated by C.B.S.E. of New Delhi.
                                <br /><br />
                                This institution was started with the object of imparting an integral formation to students that they may race life fearlessly, grow up to the full stature of their personality, and contribute their share for the progress and well-being of our country as well as the world at large. Towards this integral formation of the students, their spiritual, intellectual, moral, physical, cultural and social aspects are taken into account.
                            </p>
                            <Link to="/about" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
