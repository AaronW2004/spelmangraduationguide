import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import History from './pages/History';
import ClassDay from './pages/ClassDay';
import Baccalaureate from './pages/Baccalaureate';
import ContactUs from './pages/ContactUs';
import FindYourGrad from './pages/FindYourGrad';
import Schedule from './pages/Schedule';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/classday" element={<ClassDay />} />
        <Route path="/baccalaureate" element={<Baccalaureate />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/graduates" element={<FindYourGrad />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;
