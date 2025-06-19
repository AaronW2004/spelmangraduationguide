import React, { useState } from 'react';
import '../styles/findyourgrad.css';

const DeleteGraduate = ({ graduate, onCancel, onDelete }) => {
  const [error, setError] = useState('');

  const confirmDelete = async () => {
    try {
      const res = await fetch(`https://summer-backend-x31p.onrender.com/api/graduates/${graduate._id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error(await res.text());
      onDelete(graduate._id);
    } catch (err) {
      setError(err.message || 'Failed to delete.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onCancel}>×</button>
        <h3>Delete {graduate.name}?</h3>
        {error && <p className="error-text">{error}</p>}
        <div className="form-actions">
          <button className="delete-btn" onClick={confirmDelete}>Yes, Delete</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteGraduate;
