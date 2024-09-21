import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PhoneNumber from './pages/PhoneNumber';
import Otp from './pages/Otp';
import Dashboard from './pages/SearchBus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/phoneNumber" element={<PhoneNumber />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
