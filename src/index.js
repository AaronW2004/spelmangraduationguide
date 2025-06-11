import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Layout from './Layout';
import ContactUs from './pages/ContactUs';
import Baccalaureate from './pages/Baccalaureate';
import NoPage from './pages/NoPage';
import ClassDay from './pages/ClassDay';
import FindYourGrad from './pages/FindYourGrad';
import History from './pages/History';
import Schedule from './pages/Schedule';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="findyourgrad" element={<FindYourGrad />} />
          <Route path="schedule" element={<Schedule /> } />
          <Route path="history" element={<History /> } />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="baccalaureate" element={<Baccalaureate />} />
          <Route path="*" element={<NoPage />} />
          <Route path="classday" element={<ClassDay />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



