import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer'
import HomPage from './page/home/Home/HomPage';
import ErrorPage from './page/Error/ErrorPage';
import Property from './components/Property/Property';
import RegisterPage from './pages/register/RegisterPage';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomPage />} />
        <Route path='/auth' element={<RegisterPage />} />
        <Route path='/property' element={<Property />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
