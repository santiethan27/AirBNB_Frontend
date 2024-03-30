import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home/HomePage';
import RegisterPage from './pages/Auth/RegisterPage';
import ErrorPage from './pages/Error/ErrorPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Form_Property from './pages/Form_Property/Form_Property';
<<<<<<< HEAD
import You_Reservation from './pages/Reservation/You_Reservation';
import Property from './pages/Property/Property';
=======
import Property from './pages/Property/Property';
import Edit_Profile from './pages/Edit_Profile/Edit_Profile';
>>>>>>> 808572b7b83db6401f75107399f73ebabbf613ab

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
<<<<<<< HEAD
        <Route path='/you_reservation' element={<You_Reservation />} />
=======
        <Route path='edit_profile' element={<Edit_Profile />}/>
>>>>>>> 808572b7b83db6401f75107399f73ebabbf613ab
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;

