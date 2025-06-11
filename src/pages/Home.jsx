import React from 'react';
import TitleBox from '../components/TitleBox';
import ButtonGroup from '../components/ButtonGroup';
import '../styles/home.css';

const Home = () => {
  return (
    <main className="background">
      <TitleBox text="Welcome to this year’s graduation celebration!" />
      <ButtonGroup />
    </main>
  );
};

export default Home;
