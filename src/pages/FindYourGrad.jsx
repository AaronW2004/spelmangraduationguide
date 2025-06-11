import React from 'react';
import FindGradTitle from '../components/FindGradTitle';
import GradGallery from '../components/GradGallery';
import '../styles/findyourgrad.css';

const FindYourGrad = () => {
  return (
    <main className="findyourgrad">
      <FindGradTitle />
      <GradGallery />
    </main>
  );
};

export default FindYourGrad;
