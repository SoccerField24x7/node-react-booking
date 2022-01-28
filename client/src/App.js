import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './booking/Home';
import Register from './auth/Register';
import Login from './auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
