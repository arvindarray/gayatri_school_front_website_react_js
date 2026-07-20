import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FaGraduationCap,
    FaBuilding,
    FaBookOpen,
    FaFlask,
    FaChild,
    FaCamera,
    FaFilePdf,
    FaAward,
    FaUsers,
    FaCalendarAlt,
    FaListAlt,
    FaArrowRight,
    FaShieldAlt
} from 'react-icons/fa';

const Slider = () => {
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [activeTab, setActiveTab] = useState('about');
    const [activeStage, setActiveStage] = useState(0);

    const academicStages = [
        {
            title: "Pre-Primary School",
            subtitle: "Nursery & KG",
            description: "Focusing on sensory coordination, play-based learning, and building speech and socialization skills in a caring and loving environment.",
            colorClass: "red-accent",
            icon: <FaChild />,
            image: "img/1.jpg",
            highlights: [
                "Play-way & sensory pedagogy",
                "Basic motor skill coordination",
                "Language & vocabulary building",
                "Color, shape, and pattern detection"
            ],
            subjects: ["English", "Hindi", "Urdu", "Arithmetic", "Arts & Craft", "Etiquette"]
        },
        {
            title: "Primary School",
            subtitle: "Classes I - V",
            description: "Fostering basic mathematical skills, scientific inquiry, environmental studies, and core languages based on CBSE curriculum.",
            colorClass: "cyan-accent",
            icon: <FaBookOpen />,
            image: "img/2.jpg",
            highlights: [
                "EVS & Social Science fundamentals",
                "Primary computer education introduced",
                "Etiquette and moral formation",
                "Regular assessments & feedback"
            ],
            subjects: ["English", "Hindi", "Urdu", "Mathematics", "Science", "Social Science", "Computers", "Arts & Craft"]
        },
        {
            title: "Middle School",
            subtitle: "Classes VI - VIII",
            description: "Strengthening advanced concepts in science, social studies, computational skills, and art integrations for comprehensive growth.",
            colorClass: "amber-accent",
            icon: <FaFlask />,
            image: "img/3.jpg",
            highlights: [
                "Compulsory club activities participation",
                "Hands-on Science & Computer Lab experiments",
                "Leadership via Prefect Board & School Cabinet",
                "Creative expressions & talent development"
            ],
            subjects: ["English", "Hindi", "Mathematics", "Physics", "Chemistry", "Biology", "Social Studies", "Computer Science", "Arts"]
        },
        {
            title: "Secondary School",
            subtitle: "Classes IX - X",
            description: "Aligned with CBSE board guidelines to build critical assessment capabilities, ethics, and career planning for board examinations.",
            colorClass: "purple-accent",
            icon: <FaGraduationCap />,
            image: "img/1-2.jpg",
            highlights: [
                "Rigorous board examination preparation",
                "Critical thinking & analytic mindset development",
                "Career guidance and mental health counseling",
                "Active continuous evaluation panels"
            ],
            subjects: ["English", "Hindi", "Mathematics", "Science (Phy/Chem/Bio)", "Social Science", "Information Technology"]
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTransitionEnabled(true);
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 7000); // Auto slide every 7 seconds

        return () => clearInterval(interval);
    }, []);

    const handleTransitionEnd = () => {
        if (currentIndex >= slides.length) {
            setTransitionEnabled(false);
            setCurrentIndex(0);
        }
    };

    // Clone the first slide at the end for infinite right-to-left loop
    const extendedSlides = [...slides, slides[0]];
    const activeIndex = currentIndex >= slides.length ? 0 : currentIndex;

    return (
        <div>
            {/* Hero Banner Carousel */}
            <div className="container-fluid p-0 hero-carousel-container">
                <div id="header-carousel" className="carousel slide">
                    <div
                        className="hero-carousel-slides-wrapper"
                        onTransitionEnd={handleTransitionEnd}
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: transitionEnabled ? 'transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
                        }}
                    >
                        {extendedSlides.map((slide, index) => (
                            <div
                                key={index}
                                className={`hero-carousel-slide ${index === activeIndex ? "active" : ""}`}
                            >
                                <img
                                    className="hero-carousel-img"
                                    src={slide.image}
                                    alt={slide.title}
                                />
                                <div className="hero-carousel-overlay"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="container-fluid about-section py-5">
                <div className="container">
                    <div className="row align-items-start">
                        {/* Left Column: Image */}
                        <div className="col-lg-5 mb-5 mb-lg-0">
                            <div className="about-image-wrapper">
                                <img src="img/about.jpg" alt="About Gayatri Gurukul" className="img-fluid about-main-img" />
                            </div>
                        </div>

                        {/* Right Column: Title, Tabs, and Content */}
                        <div className="col-lg-7">
                            <div className="about-content-header mb-4">
                                <h1 className="about-main-title">Gayatri Gurukul Public School</h1>
                                <div className="about-title-line"></div>
                            </div>

                            {/* Custom Tab Switcher */}
                            <div className="about-tab-buttons mb-4">
                                <button
                                    className={`about-tab-btn-custom ${activeTab === 'about' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('about')}
                                >
                                    <FaBookOpen className="mr-2" />About School
                                </button>
                                <button
                                    className={`about-tab-btn-custom ${activeTab === 'mission' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('mission')}
                                >
                                    <FaAward className="mr-2" />Our Mission
                                </button>
                                <button
                                    className={`about-tab-btn-custom ${activeTab === 'vision' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('vision')}
                                >
                                    <FaGraduationCap className="mr-2" />Our Vision
                                </button>
                            </div>

                            {/* Tab Content Box */}
                            <div className="about-tab-content-window mb-4">
                                {activeTab === 'about' && (
                                    <p className="about-para-custom animate-fade-in-quick">
                                        Gayatri Gurukul Public School, Mariahu was established and is administered
                                        by Gayatri Gurukul Public School Educational Society. Registered under the societies Registration Act XXI of 1860, is a bonafide member of Catholic Educational Association of UP & UK, and is affiliated with C.B.S.E. of New Delhi.
                                    </p>
                                )}
                                {activeTab === 'mission' && (
                                    <p className="about-para-custom animate-fade-in-quick">
                                        Our mission is imparting an integral formation to students so that they may face life fearlessly, grow up to the full stature of their personality, and contribute their share for the progress and well-being of our country as well as the world at large.
                                    </p>
                                )}
                                {activeTab === 'vision' && (
                                    <p className="about-para-custom animate-fade-in-quick">
                                        We envision nurturing students' spiritual, intellectual, moral, physical, cultural, and social aspects, forming noble personalities with a healthy relationship with God and the entire creation, who will hold their heads high.
                                    </p>
                                )}
                            </div>

                            {/* Interactive Feature Cards */}
                            <div className="about-feature-grid-premium">
                                <div className="feature-card-premium">
                                    <div className="feature-card-icon-box">
                                        <FaGraduationCap />
                                    </div>
                                    <div className="feature-card-text">
                                        <h5>CBSE Affiliated</h5>
                                        <p>Standard National Curriculum</p>
                                    </div>
                                </div>
                                <div className="feature-card-premium cyan-accent">
                                    <div className="feature-card-icon-box">
                                        <FaChild />
                                    </div>
                                    <div className="feature-card-text">
                                        <h5>Holistic Growth</h5>
                                        <p>Spiritual & physical nurture</p>
                                    </div>
                                </div>
                                <div className="feature-card-premium amber-accent">
                                    <div className="feature-card-icon-box">
                                        <FaUsers />
                                    </div>
                                    <div className="feature-card-text">
                                        <h5>Expert Educators</h5>
                                        <p>Experienced & caring staff</p>
                                    </div>
                                </div>
                                <div className="feature-card-premium purple-accent">
                                    <div className="feature-card-icon-box">
                                        <FaBuilding />
                                    </div>
                                    <div className="feature-card-text">
                                        <h5>Modern Facilities</h5>
                                        <p>High-tech learning labs</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 about-learn-more-btn-wrapper">
                                <Link to="/about" className="premium-btn">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Achievement Stats Bar Section */}
            <div className="container-fluid stats-strip-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="stats-strip-card">
                                <div className="stats-strip-icon-box red-accent">
                                    <FaAward />
                                </div>
                                <div className="stats-strip-info">
                                    <h3>35+</h3>
                                    <p>Years Legacy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="stats-strip-card">
                                <div className="stats-strip-icon-box cyan-accent">
                                    <FaGraduationCap />
                                </div>
                                <div className="stats-strip-info">
                                    <h3>100%</h3>
                                    <p>CBSE Success</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <div className="stats-strip-card">
                                <div className="stats-strip-icon-box amber-accent">
                                    <FaUsers />
                                </div>
                                <div className="stats-strip-info">
                                    <h3>19+</h3>
                                    <p>Expert Faculty</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="stats-strip-card">
                                <div className="stats-strip-icon-box purple-accent">
                                    <FaBuilding />
                                </div>
                                <div className="stats-strip-info">
                                    <h3>6100+</h3>
                                    <p>Sq Mtr Campus</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Academics & Learning Stages */}
            <div className="container-fluid academics-overview-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="about-sub-header">Nurturing Minds</span>
                        <h2 className="about-title">Our Academic System</h2>
                        <div className="about-title-line mx-auto"></div>
                    </div>

                    <div className="row align-items-stretch">
                        {/* Left Side Stage Selectors */}
                        <div className="col-lg-5 mb-4 mb-lg-0 d-flex flex-column justify-content-between">
                            <div className="stage-selectors-container">
                                {academicStages.map((stage, idx) => (
                                    <div
                                        key={idx}
                                        className={`stage-selector-bar-modern ${activeStage === idx ? 'active' : ''} ${stage.colorClass}`}
                                        onClick={() => setActiveStage(idx)}
                                        onMouseEnter={() => setActiveStage(idx)}
                                    >
                                        <div className="selector-icon-circle-modern">
                                            {stage.icon}
                                        </div>
                                        <div className="selector-text-box-modern">
                                            <span className="selector-num-lbl">0{idx + 1}</span>
                                            <h4>{stage.title}</h4>
                                            <p>{stage.subtitle}</p>
                                        </div>
                                        <div className="selector-indicator-strip"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side Showcase Content */}
                        <div className="col-lg-7">
                            <div className="stage-showcase-panel-modern">
                                <div className="showcase-image-wrapper-modern">
                                    <img
                                        src={academicStages[activeStage].image}
                                        alt={academicStages[activeStage].title}
                                        className="showcase-bg-img-modern"
                                    />
                                    <div className="showcase-img-overlay-modern"></div>
                                    <div className="showcase-badge-label-modern">
                                        {academicStages[activeStage].subtitle}
                                    </div>
                                </div>

                                <div className="showcase-details-box-modern text-left">
                                    <div className="showcase-header-modern mb-3">
                                        <span className="stage-accent-tag-modern">{academicStages[activeStage].subtitle} Overview</span>
                                        <h3 className="showcase-title-modern">{academicStages[activeStage].title}</h3>
                                    </div>

                                    <p className="showcase-desc-modern mb-4">
                                        {academicStages[activeStage].description}
                                    </p>

                                    <div className="row mb-4">
                                        {/* Highlights Column */}
                                        <div className="col-md-7 mb-4 mb-md-0">
                                            <h5 className="showcase-subtitle-modern">Academic Highlights</h5>
                                            <ul className="showcase-highlights-list-modern">
                                                {academicStages[activeStage].highlights.map((highlight, hIdx) => (
                                                    <li key={hIdx}>
                                                        <FaShieldAlt className="list-check-icon-modern" /> {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Subjects Offered Tags */}
                                        <div className="col-md-5">
                                            <h5 className="showcase-subtitle-modern">Subjects Offered</h5>
                                            <div className="showcase-subjects-grid-modern">
                                                {academicStages[activeStage].subjects.map((sub, sIdx) => (
                                                    <span key={sIdx} className="subject-pill-tag-modern">
                                                        {sub}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="showcase-footer-row-modern pt-3 border-top d-flex justify-content-between align-items-center">
                                        <span className="showcase-footer-note-modern">CBSE Affiliated Standard Path</span>
                                        <Link to="/academicsystem" className="premium-btn d-flex align-items-center gap-2">
                                            <span className="d-none d-md-inline">View Academic Details</span>
                                            <span className="d-inline d-md-none">View</span>
                                            <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mandatory Public Disclosure Spotlight Banner */}
            <div className="container-fluid disclosure-spotlight-section py-5">
                <div className="container">
                    <div className="disclosure-banner-card">
                        <div className="row align-items-center">
                            <div className="col-lg-8 mb-4 mb-lg-0 text-left">
                                <div className="disclosure-badge-wrapper">
                                    <div className="badge badge-warning text-dark py-2 px-3 mb-3 font-weight-bold">CBSE SARAS 6.0 Compliant</div>
                                </div>
                                <h2 className="disclosure-banner-title">Mandatory Public Disclosure</h2>
                                <p className="disclosure-banner-desc text-justify">
                                    In compliance with CBSE guidelines, Gayatri Gurukul Public School maintains full transparency. Check out our certified trust renewals, NOC document, RTE recognition certificate, building stability certificates, and fire safety compliance details.
                                </p>
                                <div className="disclosure-quick-stats row mt-4">
                                    <div className="col-sm-6 mb-3">
                                        <strong>Principal:</strong> Mrs. Neeta Vishwakarma (M.A., B.Ed, DNYS)
                                    </div>
                                    <div className="col-sm-6 mb-3">
                                        <strong>Affiliation Status:</strong> Fully Registered (SARAS 6.0)
                                    </div>
                                </div>
                                <div className="mt-2 disclosure-btn-wrapper">
                                    <Link to="/M_summary" className="premium-btn mr-3 mb-2">View Full Disclosures</Link>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center">
                                <div className="disclosure-download-card">
                                    <FaFilePdf className="pdf-big-icon" />
                                    <h5>SARAS 6.0 Form</h5>
                                    <p className="small">Download the officially submitted mandate summary.</p>
                                    <a
                                        href="/imp_doc_school/Mandatory Disclosure Details _ SARAS 6.0.pdf"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-danger btn-block font-weight-bold"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Campus & Infrastructure Section */}
            <div className="container-fluid campus-preview-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="about-sub-header">Campus Environment</span>
                        <h2 className="about-title">Infrastructure &amp; Facilities</h2>
                        <div className="about-title-line mx-auto"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="campus-grid-card">
                                <div className="campus-img-box">
                                    <img src="img/3-2.jpg" alt="School Campus" />
                                    <div className="campus-card-overlay">
                                        <h5>School Campus</h5>
                                        <p>Lush green 6126 Sq Mtr secure zone.</p>
                                        <Link to="/building" className="btn-details-round">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="campus-grid-card">
                                <div className="campus-img-box">
                                    <img src="img/1.jpg" alt="Smart Classrooms" />
                                    <div className="campus-card-overlay">
                                        <h5>Classrooms</h5>
                                        <p>15 large smart academic halls.</p>
                                        <Link to="/classroom" className="btn-details-round">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="campus-grid-card">
                                <div className="campus-img-box">
                                    <img src="img/2.jpg" alt="Rich Library" />
                                    <div className="campus-card-overlay">
                                        <h5>School Library</h5>
                                        <p>Quiet learning zone packed with books.</p>
                                        <Link to="/library" className="btn-details-round">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4">
                            <div className="campus-grid-card">
                                <div className="campus-img-box">
                                    <img src="img/3.jpg" alt="Science Labs" />
                                    <div className="campus-card-overlay">
                                        <h5>Modern Labs</h5>
                                        <p>Fully equipped computer &amp; science labs.</p>
                                        <Link to="/lab1" className="btn-details-round">View Details</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/play" className="premium-btn">Explore Sports &amp; Playground</Link>
                    </div>
                </div>
            </div>

            {/* Photo Gallery Spotlight */}
            <div className="container-fluid home-gallery-section py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="about-sub-header">Captured Memories</span>
                        <h2 className="about-title">Vibrant Moments at Gurukul</h2>
                        <div className="about-title-line mx-auto"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="home-album-card">
                                <div className="album-img-wrapper">
                                    <img src="pic_gal/download.jpg" alt="Teacher's Day" />
                                    <div className="album-badge">5 Photos</div>
                                </div>
                                <div className="album-details text-left">
                                    <span>05/09/2023</span>
                                    <h5>Teacher's Day Celebration</h5>
                                    <Link to="/photo_album" className="btn-text-link">View Photos <FaArrowRight /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="home-album-card">
                                <div className="album-img-wrapper">
                                    <img src="pic_gal/IMG20230905085410_01.jpg" alt="Science Exhibition" />
                                    <div className="album-badge">2 Photos</div>
                                </div>
                                <div className="album-details text-left">
                                    <span>14/11/2023</span>
                                    <h5>Annual Science Exhibition</h5>
                                    <Link to="/photo_album" className="btn-text-link">View Photos <FaArrowRight /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="home-album-card">
                                <div className="album-img-wrapper">
                                    <img src="pic_gal/IMG20230905083624_01.jpg" alt="Independence Day" />
                                    <div className="album-badge">2 Photos</div>
                                </div>
                                <div className="album-details text-left">
                                    <span>15/08/2023</span>
                                    <h5>Independence Day Meet</h5>
                                    <Link to="/photo_album" className="btn-text-link">View Photos <FaArrowRight /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/photo_album" className="premium-btn-red">Go To Full Photo Gallery</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
