import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import HomePage from './pages/Home/HomePage';
import RegisterPage from './pages/Auth/RegisterPage';
import ErrorPage from './pages/Error/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Property from './pages/Property/Property';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<RegisterPage />} />
        <Route path='/property' element={<Property />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
