import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home/HomePage';
import RegisterPage from './pages/Auth/RegisterPage';
import ErrorPage from './pages/Error/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Form_Property from './pages/Form_Property/Form_Property';
import Property from './pages/Property/Property';

function App() {
  return (
    <Routes>
      <Route path='/auth' element={<RegisterPage />} />
      <Route path='/auth/:option*' element={<RegisterPage />} />
      <Route path='/*' element={<MainApp />} />
    </Routes>
  )
}

function MainApp() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/property' element={<Property />} />
        <Route path='/form_property' element={<Form_Property />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

