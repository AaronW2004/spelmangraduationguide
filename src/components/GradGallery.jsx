import React, { useEffect, useState } from 'react';
import '../styles/findyourgrad.css';

const GradGallery = () => {
  const [graduates, setGraduates] = useState([]);

  useEffect(() => {
    fetch('https://summer-backend-x31p.onrender.com/api/graduates')
      .then((res) => res.json())
      .then((data) => setGraduates(data))
      .catch((error) => console.error('Error fetching graduates:', error));
  }, []);

  return (
    <div className="graduate-container">
      {graduates.map((grad, index) => (
        <div key={index} className="graduate-card">
          <img
            src={`https://summer-backend-x31p.onrender.com/api/graduates/${grad.img_name}`} 
            alt={grad.name}
            className="graduate-thumb"
          />
          <p className="graduate-name">{grad.name}</p>
        </div>
      ))}
    </div>
  );
};

export default GradGallery;
