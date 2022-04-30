import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ThreeSixNine from './ThreeSixNine';
import Home from './Home';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/anxious" element={<ThreeSixNine />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
