// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Leaderboard from './components/Leaderboard';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes></>
  );
};

export default App;
