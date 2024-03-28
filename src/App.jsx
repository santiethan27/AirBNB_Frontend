import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import HomPage from './page/home/Home/HomPage';
import ErrorPage from './page/Error/ErrorPage';

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
