import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css'
import HomPage from './pages/Home/HomPage';
import RegisterPage from './pages/Auth/RegisterPage';
import ErrorPage from './pages/Error/ErrorPage';
import Property from './components/Property/Property';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Form_Property from './pages/Form_Property/Form_Property';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomPage />} />
        <Route path='/auth' element={<RegisterPage />} />
        <Route path='/property' element={<Property />} />
        <Route path='/form_property' element={<Form_Property />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
