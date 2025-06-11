import React from 'react';
import '../styles/eventimage.css';

const EventImage = ({ src, caption, alt, size }) => (
  <div className={`event-image-box ${size || ''}`}>
    <img src={src} alt={alt} />
    <div className="event-caption">{caption}</div>
  </div>
);

export default EventImage;
