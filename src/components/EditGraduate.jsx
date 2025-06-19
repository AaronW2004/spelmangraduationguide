import React, { useState } from 'react';
import '../styles/findyourgrad.css';

const EditGraduate = ({ graduate, onClose, onSave }) => {
  const [inputs, setInputs] = useState({
    name: graduate.name,
    classification: graduate.classification,
    major: graduate.major,
    awards: graduate.awards || '',
    latinHonors: graduate.latinHonors,
  });
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState('');

  const handleChange = e =>
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleImageChange = e => setImageFile(e.target.files[0]);

  const validate = () => {
    if (inputs.name.trim().length < 3) return 'Name must be at least 3 characters.';
    if (!inputs.classification || !inputs.major || !inputs.latinHonors) return 'Classification, Major, and Honors are required.';
    return '';
  };

  const onSubmit = async e => {
    e.preventDefault();
    const validationMsg = validate();
    if (validationMsg) return setError(validationMsg);

    const formData = new FormData();
    Object.entries(inputs).forEach(([k, v]) => formData.append(k, v));
    if (imageFile) formData.append('image', imageFile);



    try {
      const res = await fetch(`
        http://localhost:3000/api/graduates/${graduate._id}`, {
        method: 'PUT',
        body: formData,
      });
      if (!res.ok) throw new Error(await res.text());
      const updated = await res.json();
      onSave(updated);
    } catch (err) {
      setError(err.message || 'Update failed.');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Edit {graduate.name}</h2>
        {error && <p className="error-text">{error}</p>}
        <form onSubmit={onSubmit} className="edit-form">
          {['name', 'classification', 'major', 'awards', 'latinHonors'].map(key => (
            <div key={key} className="form-group">
              <label>{key[0].toUpperCase() + key.slice(1)}</label>
              {key === 'latinHonors' ? (
                <select
                  name={key}
                  value={inputs[key]}
                  onChange={handleChange}
                  required
                >
                  <option value="">--Select Honor--</option>
                  <option value="Cum Laude">Cum Laude</option>
                  <option value="Magna Cum Laude">Magna Cum Laude</option>
                  <option value="Summa Cum Laude">Summa Cum Laude</option>
                </select>
              ) : (
                <input
                  type="text"
                  name={key}
                  value={inputs[key]}
                  onChange={handleChange}
                  required={key !== 'awards'}
                />
              )}
            </div>
          ))}
          <div className="form-group">
            <label>Change Image</label>
            <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
          </div>
          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditGraduate;
