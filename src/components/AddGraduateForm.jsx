import React, { useState } from 'react';
import '../styles/findyourgrad.css';

const AddGraduateForm = ({ onNewGraduate }) => {
  const initialState = {
    name: '',
    classification: '',
    major: '',
    awards: '',
    latinHonors: '',
    image: null
  };

  const [formData, setFormData] = useState(initialState);
  const [success, setSuccess] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }
    if (!formData.classification.trim()) {
      newErrors.classification = "Classification is required.";
    }
    if (!formData.major.trim()) {
      newErrors.major = "Major is required.";
    }
    if (!formData.latinHonors.trim()) {
      newErrors.latinHonors = "Latin honors are required.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });

    try {
      const res = await fetch('http://localhost:3000/api/graduates', {
        method: 'POST',
        body: data
      });

      const newGrad = await res.json();
      if (res.ok) {
        setSuccess(true);
        onNewGraduate(newGrad);
        setFormData(initialState);
      } else {
        setSuccess(false);
      }
    } catch (err) {
      setSuccess(false);
    }
  };

  return (
    <div className="add-grad-form">
      <h3>Add a New Graduate</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        {['name', 'classification', 'major', 'awards', 'latinHonors'].map((field) => (
          <div key={field}>
            <label>{field}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
            {errors[field] && <span className="error-text">{errors[field]}</span>}
          </div>
        ))}
        <div>
          <label>Image</label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
        {success && <p className="success-text">Graduate added successfully!</p>}
        {success === false && <p className="error-text">Something went wrong. Try again.</p>}
      </form>
    </div>
  );
};

export default AddGraduateForm;
