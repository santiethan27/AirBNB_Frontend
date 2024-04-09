import React from 'react';

import './App.css'
import HomePage from './pages/Home/HomePage';
import RegisterPage from './pages/Auth/RegisterPage';
import ErrorPage from './pages/Error/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Property from './pages/Property/Property';
import { Route, Routes } from 'react-router-dom';
import { PropertyProvider } from './context/PropertyContext';
import { AuthProvider } from './context/AuthContext';
import { CountryProvider } from './context/CountryContext';
import PropertySale from './pages/PropertySale/PropertySale';
import { ServiceProvider } from './context/ServiceContext';
import FormProperty from './pages/FormProperty/FormProperty';
import EditProfile from './pages/EditProfile/EditProfile';
import YouReservation from './pages/Reservation/YouReservation';
import Account from './pages/Account/Account';
import LoginSecurity from './pages/LoginSecurity/LoginSecurity';

function App() {
  return (
    <AuthProvider>
      <CountryProvider>
        <ServiceProvider>
        <PropertyProvider>
          <Routes>
            <Route path="/auth" element={<RegisterPage />} />
            <Route path="/auth/:option" element={<RegisterPage />} />
            <Route path="/*" element={<MainApp />} />
          </Routes>
        </PropertyProvider>
        </ServiceProvider>
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
        <Route path='/property/:id' element={<Property />} />
        <Route path='/form-property' element={<FormProperty />} />
        <Route path='/you-reservation' element={<YouReservation />} />
        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path='/comprar' element={<PropertySale/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/login-security' element={<LoginSecurity/>}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

