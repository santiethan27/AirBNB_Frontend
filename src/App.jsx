import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import './App.css'
import React from 'react';
import Property from './components/Property/Property';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <>
    <Navbar/>
       <Routes>
        <Route path='/auth' element={<RegisterPage />}/>
        <Route path='/property' element={<Property />} />
      </Routes> 
    </>
  )
}

export default App
