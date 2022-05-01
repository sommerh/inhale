import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ThreeSixNine from './ThreeSixNine';
import Tired from './Tired';
import Disconnected from './Disconnected';
import Box from './Box';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/strategies/three-six-nine" element={<ThreeSixNine />} />
        <Route path="/strategies/tired" element={<Tired />} />
        <Route path="/strategies/frustrated" element={<Box />} />
        <Route path="/strategies/disconnected" element={<Disconnected />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
