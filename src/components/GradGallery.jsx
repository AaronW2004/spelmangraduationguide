import React, { useEffect, useState } from 'react';
import '../styles/findyourgrad.css';
import GraduateModal from './GraduateModal';
import AddGraduateForm from './AddGraduateForm';
import EditGraduate from './EditGraduate';
import DeleteGraduate from './DeleteGraduate';

const GradGallery = () => {
  const [graduates, setGraduates] = useState([]);
  const [selectedGrad, setSelectedGrad] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  useEffect(() => {
    fetch(`http:localhost:3000/api/graduates`)
      .then(res => res.json())
      .then(setGraduates)
      .catch(console.error);
  }, []);

  const handleNew = newGrad => {
    setGraduates(prev => [...prev, newGrad]);
    setSelectedGrad(newGrad);
  };

  const handleUpdate = updated => {
    setGraduates(prev => prev.map(g => g._id === updated._id ? updated : g));
    setShowEdit(false);
    setSelectedGrad(updated);
  };

  const handleDelete = id => {
    setGraduates(prev => prev.filter(g => g._id !== id));
    setShowDelete(false);
    setSelectedGrad(null);
  };

  return (
    <>
      <AddGraduateForm onNewGraduate={handleNew} />

      <div className="graduate-container">
        {graduates.map(grad => (
          <div
            key={grad._id}
            className="graduate-card"
            onClick={() => {
              setSelectedGrad(grad);
              setShowEdit(false);
              setShowDelete(false);
            }}
          >
            <img
              src={`http://localhost:3000${grad.img_name}`}
              alt={grad.name}
              className="graduate-thumb"
            />
            <p className="graduate-name">{grad.name}</p>
          </div>
        ))}
      </div>

      {selectedGrad && !showEdit && !showDelete && (
        <GraduateModal
          graduate={selectedGrad}
          onClose={() => setSelectedGrad(null)}
          onEdit={() => setShowEdit(true)}
          onDelete={() => setShowDelete(true)}
        />
      )}

      {showEdit && selectedGrad && (
        <EditGraduate
          graduate={selectedGrad}
          onClose={() => setShowEdit(false)}
          onSave={handleUpdate}
        />
      )}

      {showDelete && selectedGrad && (
        <DeleteGraduate
          graduate={selectedGrad}
          onCancel={() => setShowDelete(false)}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default GradGallery;
