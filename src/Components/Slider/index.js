import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Slider.css';

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slides = [
        {
            image: "img/1.jpg",
            badge: "Gayatri Gurukul Public School",
            title: "Where Learning Begins",
            text: "Imparting integral education to nurture tomorrow's leaders with strong ethical values, modern intellect, and holistic growth.",
            buttonText: "Explore Our School",
            buttonLink: "/about"
        },
        {
            image: "img/2.jpg",
            badge: "Empowering Minds",
            title: "Academic Excellence",
            text: "Fostering an environment of critical thinking, creativity, and innovative pedagogy for top-tier academic standards.",
            buttonText: "Academics Info",
            buttonLink: "/academicsystem"
        },
        {
            image: "img/3.jpg",
            badge: "Vibrant Campus",
            title: "Nurturing Talents",
            text: "State-of-the-art infrastructural highlights, labs, libraries, and wide play fields supporting all-round co-curricular life.",
            buttonText: "Our Infrastructure",
            buttonLink: "/building"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Change every 5 seconds for better reading time

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [slides.length]);

    return (
        <div>
            {/* Hero Banner Carousel */}
            <div className="container-fluid p-0 hero-carousel-container">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators hero-carousel-indicators">
                        {slides.map((_, index) => (
                            <li
                                key={index}
                                data-target="#header-carousel"
                                data-slide-to={index}
                                className={index === activeIndex ? "active" : ""}
                                onClick={() => setActiveIndex(index)}
                            ></li>
                        ))}
                    </ol>
                    <div className="carousel-inner">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`carousel-item hero-carousel-item ${index === activeIndex ? "active" : ""}`}
                            >
                                <img
                                    className="hero-carousel-img"
                                    src={slide.image}
                                    alt={slide.title}
                                />
                                <div className="hero-carousel-overlay"></div>
                                <div className="hero-carousel-caption">
                                    <div className="caption-content">
                                        <span className="caption-badge">{slide.badge}</span>
                                        <h1 className="caption-title">{slide.title}</h1>
                                        <p className="caption-text">{slide.text}</p>
                                        <Link to={slide.buttonLink} className="premium-btn caption-btn">
                                            {slide.buttonText}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="container-fluid about-section">
                <div className="container pb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mb-4 mb-lg-0">
                            <div className="about-image-container">
                                <img src="img/about.jpg" alt="About Us" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="text-left mb-4">
                                <span className="about-sub-header">About Us</span>
                                <h1 className="about-title">Gayatri Gurukul Public School</h1>
                            </div>
                            <p className="about-para">
                                Gayatri Gurukul Public School, Mariahu was established and is administered
                                by Gayatri Gurukul Public School Educational Society. It is registered under the societies Registration Act XXI of 1860 (No. 16 of 1988-89), is a bonafide member of Catholic Educational Association of UP & UK, and is affiliated with C.B.S.E. of New Delhi.
                                <br /><br />
                                This institution was started with the object of imparting an integral formation to students so that they may face life fearlessly, grow up to the full stature of their personality, and contribute their share for the progress and well-being of our country as well as the world at large. Toward this integral formation of the students, their spiritual, intellectual, moral, physical, cultural, and social aspects are fully nurtured.
                            </p>
                            
                            {/* Feature Grid Badges */}
                            <div className="about-features-grid">
                                <div className="feature-badge-card">
                                    <div className="feature-icon-wrapper">
                                        <i className="fa fa-graduation-cap"></i>
                                    </div>
                                    <h5 className="feature-title">Affiliated to CBSE</h5>
                                </div>
                                <div className="feature-badge-card">
                                    <div className="feature-icon-wrapper">
                                        <i className="fa fa-child"></i>
                                    </div>
                                    <h5 className="feature-title">Holistic Growth</h5>
                                </div>
                                <div className="feature-badge-card">
                                    <div className="feature-icon-wrapper">
                                        <i className="fa fa-users"></i>
                                    </div>
                                    <h5 className="feature-title">Expert Educators</h5>
                                </div>
                                <div className="feature-badge-card">
                                    <div className="feature-icon-wrapper">
                                        <i className="fa fa-microscope"></i>
                                    </div>
                                    <h5 className="feature-title">Modern Facilities</h5>
                                </div>
                            </div>

                            <Link to="/about" className="premium-btn">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
