import React from 'react';
import '../styles/historysection.css';

const HistorySection = ({ text, image, alt, reverse }) => {
  return (
    <div className={`history-section ${reverse ? 'reverse' : ''}`}>
      <div className="text-box">{text}</div>
      <div className="image-box">
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};

export default HistorySection;
