// Gallery.js
import React, { useState } from "react";
import galleryData from "./data";
import "./Gallery.css";

function Gallery() {
  const [visibleDescriptions, setVisibleDescriptions] = useState(
    Array(galleryData.length).fill(false)
  );

  const toggleDescription = (index) => {
    const updatedVisibility = [...visibleDescriptions];
    updatedVisibility[index] = !updatedVisibility[index];
    setVisibleDescriptions(updatedVisibility);
  };

  return (
    <div className="gallery">
      <h2 className="gallery-title">Our Event Highlights</h2>
      <div className="gallery-container">
        {galleryData.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.image} alt={item.title} className="gallery-image" />
            <h3 className="gallery-item-title">{item.title}</h3>
            <button
              className="toggle-btn"
              onClick={() => toggleDescription(index)}
            >
              {visibleDescriptions[index]
                ? "Hide Description"
                : "Show Description"}
            </button>
            {visibleDescriptions[index] && (
              <p className="gallery-item-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
