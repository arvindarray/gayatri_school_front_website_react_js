import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PhotoAlbum = () => {
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const albums = [
    {
      id: 2,
      name: "Teacher's Day Celebration",
      date: "05/09/2023",
      cover: "pic_gal/download.jpg",
      photos: [
        "pic_gal/IMG20230905083624_01.jpg",
        "pic_gal/IMG20230905084806_01.jpg",
        "pic_gal/IMG20230905084849_01.jpg",
        "pic_gal/IMG20230905085410_01.jpg",
        "pic_gal/IMG20230905085943_01.jpg"
      ]
    },
    {
      id: 3,
      name: "Annual Science Exhibition",
      date: "14/11/2023",
      cover: "pic_gal/IMG20230905085410_01.jpg",
      photos: [
        "pic_gal/IMG20230905085410_01.jpg",
        "pic_gal/IMG20230905085943_01.jpg"
      ]
    },
    {
      id: 4,
      name: "Independence Day Meet",
      date: "15/08/2023",
      cover: "pic_gal/IMG20230905083624_01.jpg",
      photos: [
        "pic_gal/IMG20230905083624_01.jpg",
        "pic_gal/IMG20230905084806_01.jpg"
      ]
    }
  ];

  const handleNextPhoto = (e) => {
    e.stopPropagation();
    if (activeAlbum !== null) {
      const album = albums.find(a => a.id === activeAlbum);
      setLightboxIndex((lightboxIndex + 1) % album.photos.length);
    }
  };

  const handlePrevPhoto = (e) => {
    e.stopPropagation();
    if (activeAlbum !== null) {
      const album = albums.find(a => a.id === activeAlbum);
      setLightboxIndex((lightboxIndex - 1 + album.photos.length) % album.photos.length);
    }
  };

  const selectedAlbum = albums.find(a => a.id === activeAlbum);

  return (
    <div className="animate-fade-in">
      {/* Page Header Banner */}
      <div className="container-fluid page-header py-5 mb-5">
        <div className="container py-5">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "300px" }}>
            <h1 className="display-4 text-white text-uppercase font-weight-bold text-center page-banner-title">Photo Gallery</h1>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><Link className="text-white" to="/home">Home</Link></p>
              <p className="m-0 px-2">/</p>
              <p className="m-0 text-uppercase text-cyan-accent">Gallery</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container">
          
          {activeAlbum === null ? (
            <>
              <div className="text-center mb-5">
                <span className="about-sub-header">Captured Moments</span>
                <h2 className="about-title">Our School Albums</h2>
                <p className="text-muted mt-2 mx-auto" style={{ maxWidth: '600px' }}>
                  Take a look at the vibrant life at Gayatri Gurukul through photos of celebrations, festivals, events, and co-curricular projects.
                </p>
              </div>

              <div className="row">
                {albums.map((album) => (
                  <div className="col-lg-4 col-md-6 mb-4" key={album.id}>
                    <div 
                      className="profile-card h-100 overflow-hidden cursor-pointer hover-translate"
                      onClick={() => setActiveAlbum(album.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="position-relative overflow-hidden" style={{ height: '220px' }}>
                        <img 
                          src={album.cover} 
                          alt={album.name} 
                          className="w-100 h-100 img-cover transition-all"
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="position-absolute top-0 right-0 m-3 badge badge-danger py-2 px-3 font-weight-bold">
                          {album.photos.length} Photos
                        </div>
                      </div>
                      <div className="p-4 bg-white text-left">
                        <span className="text-muted small font-weight-bold">{album.date}</span>
                        <h5 className="font-weight-bold mt-1 text-dark">{album.name}</h5>
                        <p className="text-cyan-accent small font-weight-bold mb-0 mt-3 d-flex align-items-center">
                          View Album Photos <i className="fa fa-arrow-right ml-2"></i>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="d-flex align-items-center justify-content-between mb-5">
                <div className="text-left">
                  <span className="about-sub-header">{selectedAlbum.date}</span>
                  <h2 className="about-title">{selectedAlbum.name}</h2>
                </div>
                <button 
                  onClick={() => setActiveAlbum(null)}
                  className="premium-btn border-0 py-2 px-4 text-white d-flex align-items-center"
                >
                  <i className="fa fa-arrow-left mr-2"></i> Back to Albums
                </button>
              </div>

              <div className="row">
                {selectedAlbum.photos.map((photo, index) => (
                  <div className="col-lg-4 col-md-6 mb-4" key={index}>
                    <div 
                      className="profile-image-wrapper p-0 overflow-hidden border shadow-sm cursor-pointer hover-scale position-relative"
                      onClick={() => setLightboxIndex(index)}
                      style={{ height: '250px', cursor: 'pointer', borderRadius: '12px' }}
                    >
                      <img 
                        src={photo} 
                        alt={`${selectedAlbum.name} - ${index + 1}`} 
                        className="w-100 h-100 img-cover transition-all"
                        style={{ objectFit: 'cover' }}
                      />
                      <div className="image-hover-overlay d-flex align-items-center justify-content-center position-absolute w-100 h-100 top-0 left-0" style={{ backgroundColor: 'rgba(0,0,0,0.4)', opacity: 0, transition: 'all 0.3s' }}>
                        <span className="feature-icon-wrapper" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#fd0648' }}>
                          <i className="fa fa-search-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && selectedAlbum && (
        <div 
          className="position-fixed w-100 h-100 top-0 left-0 d-flex align-items-center justify-content-center"
          style={{ 
            backgroundColor: 'rgba(0,0,0,0.95)', 
            zIndex: 9999,
            transition: 'opacity 0.3s ease'
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button 
            className="position-absolute top-0 right-0 m-4 btn text-white" 
            style={{ fontSize: '2rem', zIndex: 10000 }}
            onClick={() => setLightboxIndex(null)}
          >
            &times;
          </button>

          {/* Left Arrow */}
          <button 
            className="position-absolute left-0 m-4 btn text-white" 
            style={{ fontSize: '3rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10000 }}
            onClick={handlePrevPhoto}
          >
            &#8249;
          </button>

          {/* Image */}
          <div className="text-center p-3" style={{ maxWidth: '85%', maxHeight: '80%' }}>
            <img 
              src={selectedAlbum.photos[lightboxIndex]} 
              alt="Enlarged gallery view"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: '75vh', objectFit: 'contain' }}
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white-50 mt-3 small">
              Photo {lightboxIndex + 1} of {selectedAlbum.photos.length}
            </p>
          </div>

          {/* Right Arrow */}
          <button 
            className="position-absolute right-0 m-4 btn text-white" 
            style={{ fontSize: '3rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10000 }}
            onClick={handleNextPhoto}
          >
            &#8250;
          </button>
        </div>
      )}
    </div>
  );
};

export default PhotoAlbum;
