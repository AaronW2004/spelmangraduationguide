import React from 'react';
import graduates from '../data/graduates.json';
import '../styles/findyourgrad.css';

const GradGallery = () => {
  return (
    <div className="graduate-container">
      {graduates.map((grad, index) => (
        <div key={index} className="graduate-card">
          <img src={grad.img_name} alt={grad.name} className="graduate-thumb" />
          <p className="graduate-name">{grad.name}</p>
        </div>
      ))}
    </div>
  );
};

export default GradGallery;
