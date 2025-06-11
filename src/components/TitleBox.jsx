import React from 'react';
import '../styles/titlebox.css';

const TitleBox = ({ text }) => (
  <div className="title-box">
    <p><strong>{text}</strong></p>
  </div>
);

export default TitleBox;
