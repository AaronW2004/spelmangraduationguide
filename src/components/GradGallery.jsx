import React, { useEffect, useState } from 'react';
import '../styles/findyourgrad.css';
import GraduateModal from './GraduateModal';
import AddGraduateForm from './AddGraduateForm';

const GradGallery = () => {
  const [graduates, setGraduates] = useState([]);
  const [selectedGrad, setSelectedGrad] = useState(null);

  useEffect(() => {
    fetch('https://summer-backend-x31p.onrender.com/api/graduates')
      .then((res) => res.json())
      .then((data) => setGraduates(data))
      .catch((error) => console.error('Error fetching graduates:', error));
  }, []);

  const handleCardClick = (grad) => {
    setSelectedGrad(grad);
  };

  const closeModal = () => {
    setSelectedGrad(null);
  };

  const handleNewGraduate = (newGrad) => {
    setGraduates(prev => [...prev, newGrad]);
  };

  return (
    <>
      <AddGraduateForm onNewGraduate={handleNewGraduate} />

      <div className="graduate-container">
        {graduates.map((grad, index) => (
          <div
            key={index}
            className="graduate-card"
            onClick={() => handleCardClick(grad)}
          >
            <img
              src={`https://summer-backend-x31p.onrender.com${grad.img_name}`}
              alt={grad.name}
              className="graduate-thumb"
            />
            <p className="graduate-name">{grad.name}</p>
          </div>
        ))}
      </div>

      {selectedGrad && (
        <GraduateModal graduate={selectedGrad} onClose={closeModal} />
      )}
    </>
  );
};

export default GradGallery;
