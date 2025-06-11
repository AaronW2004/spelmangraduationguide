import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/buttons.css';

const ButtonGroup = () => (
  <div className="buttons">
    <Link to="/findyourgrad">
      <button><strong>Find Your<br />Graduate</strong></button>
    </Link>
    <Link to="/schedule">
      <button><strong>Commencement<br />Schedule</strong></button>
    </Link>
  </div>
);

export default ButtonGroup;
