import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ThreeSixNine from './ThreeSixNine';
import Tired from './Tired';
import Disconnected from './Disconnected';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/anxious" element={<ThreeSixNine />} />
        <Route path="/tired" element={<Tired />} />
        <Route path="/disconnected" element={<Disconnected />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
