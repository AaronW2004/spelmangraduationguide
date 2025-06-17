import React from 'react';
import '../styles/findyourgrad.css';

const GraduateModal = ({ graduate, onClose }) => {
  return (
    <div className="modal" style={{ display: 'flex' }}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <img
          src={`https://summer-backend-x31p.onrender.com${graduate.img_name}`}
          alt={graduate.name}
          className="modal-img"
        />
        <h3>{graduate.name}</h3>
        <p><strong>Classification:</strong> {graduate.classification}</p>
        <p><strong>Major:</strong> {graduate.major}</p>
        <p><strong>Awards:</strong> {graduate.awards}</p>
        <p><strong>Honors:</strong> {graduate.latinHonors}</p>
      </div>
    </div>
  );
};

export default GraduateModal;
