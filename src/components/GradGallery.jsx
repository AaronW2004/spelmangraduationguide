import React, { useEffect, useState } from 'react';
import '../styles/findyourgrad.css';
import GraduateModal from './GraduateModal';
import AddGraduateForm from './AddGraduateForm';
import EditGraduate from './EditGraduate';
import DeleteGraduate from './DeleteGraduate';

const GradGallery = () => {
  const [graduates, setGraduates] = useState([]);
  const [selectedGrad, setSelectedGrad] = useState(null);
  const [showEditGraduate, setShowEditGraduate] = useState(false);
  const [showDeleteGraduate, setShowDeleteGraduate] = useState(false);

  useEffect(() => {
    fetch(`https://summer-backend-x31p.onrender.com/api/graduates`)
      .then(res => res.json())
      .then(data => setGraduates(data))
      .catch(console.error);
  }, []);

  const handleNewGraduate = newGrad => setGraduates(prev => [...prev, newGrad]);

  const handleUpdate = updatedGrad => {
    setGraduates(prev => prev.map(g => g._id === updatedGrad._id ? updatedGrad : g));
    setShowEditGraduate(false);
    setSelectedGrad(updatedGrad);
  };

  const handleDelete = id => {
    setGraduates(prev => prev.filter(g => g._id !== id));
    setShowDeleteGraduate(false);
    setSelectedGrad(null);
  };

  return (
    <>
      <AddGraduateForm onNewGraduate={handleNewGraduate} />

      <div className="graduate-container">
        {graduates.map((grad) => (
          <div
            key={grad._id}
            className="graduate-card"
            onClick={() => setSelectedGrad(grad)}
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

      {selectedGrad && !showEditGraduate && !showDeleteGraduate && (
        <GraduateModal
          graduate={selectedGrad}
          onClose={() => setSelectedGrad(null)}
          onEdit={() => setShowEditGraduate(true)}
          onDelete={() => setShowDeleteGraduate(true)}
        />
      )}

      {showEditGraduate && (
        <EditGraduate
          graduate={selectedGrad}
          onClose={() => setShowEditGraduate(false)}
          onSave={handleUpdate}
        />
      )}

      {showDeleteGraduate && (
        <DeleteGraduate
          graduate={selectedGrad}
          onCancel={() => setShowDeleteGraduate(false)}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default GradGallery;
