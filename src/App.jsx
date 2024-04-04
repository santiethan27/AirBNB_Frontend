import React from 'react';

import './App.css'
import HomePage from './pages/Home/HomePage';
import RegisterPage from './pages/Auth/RegisterPage';
import ErrorPage from './pages/Error/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Form_Property from './pages/Form_Property/Form_Property';
import You_Reservation from './pages/Reservation/You_Reservation';
import Property from './pages/Property/Property';
import Edit_Profile from './pages/Edit_Profile/Edit_Profile';
import { Route, Routes } from 'react-router-dom';
import { PropertyProvider } from './context/PropertyContext';
import { AuthProvider } from './context/AuthContext';
import { CountryProvider } from './context/CountryContext';

function App() {
  return (
    <AuthProvider>
      <CountryProvider>
        <PropertyProvider>
          <Routes>
            <Route path="/auth" element={<RegisterPage />} />
            <Route path="/auth/:option" element={<RegisterPage />} />
            <Route path="/*" element={<MainApp />} />
          </Routes>
        </PropertyProvider>
      </CountryProvider>
    </AuthProvider>
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
        <Route path='/you_reservation' element={<You_Reservation />} />
        <Route path='/edit_profile' element={<Edit_Profile />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

