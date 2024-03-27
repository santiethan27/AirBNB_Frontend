import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import './App.css'
import React from 'react';
import Property from './components/Property/Property';

function App() {
  return (
    <>
    <Navbar/>
       <Routes>
        <Route path='/Property' element={<Property />} />
      </Routes> 
    </>
  )
}

export default App
