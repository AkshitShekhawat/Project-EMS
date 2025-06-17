import React from 'react';
// import './GalleryComponent.css'; // Optional: custom styles

const GalleryComponent = () => {
  const images = [
    '/images/gallery1.png',
    '/images/gallery2.jpg',
    '/images/gallery3.jpg',
    '/images/gallery4.jpg',
    '/images/gallery5.jpg',
    '/images/gallery6.jpg',
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">📸 EMS Gallery</h2>
      <h4 className='text-center mb-4'>🖼️Demo Images</h4>
      <div className="row g-4">
        {images.map((src, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="gallery-card shadow-sm rounded overflow-hidden">
              <img src={src} alt={`Gallery ${index + 1}`} className="img-fluid w-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponent;
