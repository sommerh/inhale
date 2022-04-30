import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ThreeSixNine from './ThreeSixNine';
import Tired from './Tired';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/anxious" element={<ThreeSixNine />} />
        <Route path="/tired" element={<Tired />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
